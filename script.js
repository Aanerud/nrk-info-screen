// Configuration is loaded from config.js

// State
let newsItems = [];
let currentNewsIndex = 0;
let countdownInterval = null;
let currentWeatherCode = null;

// Season detection
function getCurrentSeason() {
    const month = new Date().getMonth() + 1; // 1-12

    if (month >= 3 && month <= 5) {
        return 'spring';
    } else if (month >= 6 && month <= 8) {
        return 'summer';
    } else if (month >= 9 && month <= 11) {
        return 'autumn';
    } else {
        return 'winter'; // December, January, February
    }
}

// Weather descriptions in Norwegian
const weatherDescriptions = {
    'clearsky': 'Klarvær',
    'fair': 'Lettskyet',
    'partlycloudy': 'Delvis skyet',
    'cloudy': 'Skyet',
    'fog': 'Tåke',
    'lightrain': 'Lett regn',
    'rain': 'Regn',
    'heavyrain': 'Kraftig regn',
    'lightrainshowers': 'Lette regnbyger',
    'rainshowers': 'Regnbyger',
    'heavyrainshowers': 'Kraftige regnbyger',
    'lightrainandthunder': 'Lett regn og torden',
    'rainandthunder': 'Regn og torden',
    'heavyrainandthunder': 'Kraftig regn og torden',
    'lightrainshowersandthunder': 'Lette regnbyger og torden',
    'rainshowersandthunder': 'Regnbyger og torden',
    'heavyrainshowersandthunder': 'Kraftige regnbyger og torden',
    'lightsleet': 'Lett sludd',
    'sleet': 'Sludd',
    'heavysleet': 'Kraftig sludd',
    'lightsleetshowers': 'Lette sluddbyger',
    'sleetshowers': 'Sluddbyger',
    'heavysleetshowers': 'Kraftige sluddbyger',
    'lightsleetandthunder': 'Lett sludd og torden',
    'sleetandthunder': 'Sludd og torden',
    'heavysleetandthunder': 'Kraftig sludd og torden',
    'lightsleetshowersandthunder': 'Lette sluddbyger og torden',
    'lightssleetshowersandthunder': 'Lette sluddbyger og torden',
    'sleetshowersandthunder': 'Sluddbyger og torden',
    'heavysleetshowersandthunder': 'Kraftige sluddbyger og torden',
    'lightsnow': 'Lett snø',
    'snow': 'Snø',
    'heavysnow': 'Kraftig snøfall',
    'lightsnowshowers': 'Lette snøbyger',
    'snowshowers': 'Snøbyger',
    'heavysnowshowers': 'Kraftige snøbyger',
    'lightsnowandthunder': 'Lett snø og torden',
    'snowandthunder': 'Snø og torden',
    'heavysnowandthunder': 'Kraftig snø og torden',
    'lightsnowshowersandthunder': 'Lette snøbyger og torden',
    'lightssnowshowersandthunder': 'Lette snøbyger og torden',
    'snowshowersandthunder': 'Snøbyger og torden',
    'heavysnowshowersandthunder': 'Kraftige snøbyger og torden',
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Update location display from config
    const locationElement = document.getElementById('location');
    if (locationElement && CONFIG) {
        locationElement.textContent = `${CONFIG.city}, ${CONFIG.country}`;
    }

    initClock();
    fetchWeather();
    fetchNews();

    // Set up periodic updates
    setInterval(fetchWeather, CONFIG.weatherUpdateInterval);
    setInterval(fetchNews, CONFIG.newsUpdateInterval);
});

// Clock functionality
function initClock() {
    updateClock();
    setInterval(updateClock, CONFIG.clockUpdateInterval);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Update time
    const clockTime = document.querySelector('.clock-time');
    if (clockTime) {
        clockTime.textContent = `${hours}:${minutes}`;
    }

    // Update date
    const clockDate = document.querySelector('.clock-date');
    if (clockDate) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayName = days[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        clockDate.textContent = `${dayName}, ${day} ${month}`;
    }
}

// Weather functionality
async function fetchWeather() {
    try {
        const url = `${CONFIG.weatherApiUrl}?lat=${CONFIG.latitude}&lon=${CONFIG.longitude}`;

        const response = await fetch(url, {
            headers: {
                'User-Agent': CONFIG.userAgent
            }
        });

        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();
        updateWeatherDisplay(data);
        updateLastUpdated('weather-updated');
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('weather-description').textContent = 'Weather unavailable';
    }
}

function updateWeatherDisplay(data) {
    const current = data.properties.timeseries[0];
    const instant = current.data.instant.details;
    const next1h = current.data.next_1_hours || current.data.next_6_hours;

    // Temperature
    const temp = Math.round(instant.air_temperature);
    document.getElementById('temperature').textContent = `${temp}°`;

    // Weather symbol
    const symbolCode = next1h?.summary?.symbol_code || 'cloudy';
    const emoji = CONFIG.weatherEmojis[symbolCode] || '☁️';
    document.getElementById('weather-icon').textContent = emoji;

    // Weather description
    const baseCode = symbolCode.split('_')[0];
    const description = weatherDescriptions[baseCode] || symbolCode;
    document.getElementById('weather-description').textContent = description;

    // Feels like (using air temperature as approximation)
    document.getElementById('feels-like').textContent = `${temp}°`;

    // Wind speed
    const windSpeed = instant.wind_speed || 0;
    document.getElementById('wind-speed').textContent = `${windSpeed.toFixed(1)} m/s`;

    // Humidity
    const humidity = instant.relative_humidity || 0;
    document.getElementById('humidity').textContent = `${Math.round(humidity)}%`;

    // Update background if weather code changed
    if (symbolCode !== currentWeatherCode) {
        currentWeatherCode = symbolCode;
        updateBackground(symbolCode);
    }
}

function updateBackground(weatherCode) {
    const backgroundContainer = document.getElementById('background-container');

    // Map weather codes to simplified background names
    const weatherCodeMap = {
        // Clear sky variants
        'clearsky_day': 'clearsky',
        'clearsky_night': 'clearsky_night',
        'clearsky_polartwilight': 'polartwilight',
        // Fair weather
        'fair_day': 'fair',
        'fair_night': 'fair',
        'fair_polartwilight': 'polartwilight',
        // Partly cloudy
        'partlycloudy_day': 'partlycloudy',
        'partlycloudy_night': 'partlycloudy',
        'partlycloudy_polartwilight': 'polartwilight',
        // Rain - map all to simplified versions
        'lightrain': 'rain',
        'rain': 'rain',
        'heavyrain': 'heavyrain',
        // Rain showers
        'lightrainshowers_day': 'rainshowers',
        'lightrainshowers_night': 'rainshowers',
        'lightrainshowers_polartwilight': 'rainshowers',
        'rainshowers_day': 'rainshowers',
        'rainshowers_night': 'rainshowers',
        'rainshowers_polartwilight': 'rainshowers',
        'heavyrainshowers_day': 'rainshowers',
        'heavyrainshowers_night': 'rainshowers',
        'heavyrainshowers_polartwilight': 'rainshowers',
        // Thunder - all variants to thunder
        'lightrainandthunder': 'thunder',
        'rainandthunder': 'thunder',
        'heavyrainandthunder': 'thunder',
        'lightrainshowersandthunder_day': 'thunder',
        'lightrainshowersandthunder_night': 'thunder',
        'lightrainshowersandthunder_polartwilight': 'thunder',
        'rainshowersandthunder_day': 'thunder',
        'rainshowersandthunder_night': 'thunder',
        'rainshowersandthunder_polartwilight': 'thunder',
        'heavyrainshowersandthunder_day': 'thunder',
        'heavyrainshowersandthunder_night': 'thunder',
        'heavyrainshowersandthunder_polartwilight': 'thunder',
        // Sleet - all to sleet
        'lightsleet': 'sleet',
        'sleet': 'sleet',
        'heavysleet': 'sleet',
        'lightsleetshowers_day': 'sleet',
        'lightsleetshowers_night': 'sleet',
        'lightsleetshowers_polartwilight': 'sleet',
        'sleetshowers_day': 'sleet',
        'sleetshowers_night': 'sleet',
        'sleetshowers_polartwilight': 'sleet',
        'heavysleetshowers_day': 'sleet',
        'heavysleetshowers_night': 'sleet',
        'heavysleetshowers_polartwilight': 'sleet',
        'lightsleetandthunder': 'sleet',
        'sleetandthunder': 'sleet',
        'heavysleetandthunder': 'sleet',
        'lightsleetshowersandthunder_day': 'sleet',
        'lightsleetshowersandthunder_night': 'sleet',
        'lightsleetshowersandthunder_polartwilight': 'sleet',
        'lightssleetshowersandthunder_day': 'sleet',
        'lightssleetshowersandthunder_night': 'sleet',
        'lightssleetshowersandthunder_polartwilight': 'sleet',
        'sleetshowersandthunder_day': 'sleet',
        'sleetshowersandthunder_night': 'sleet',
        'sleetshowersandthunder_polartwilight': 'sleet',
        'heavysleetshowersandthunder_day': 'sleet',
        'heavysleetshowersandthunder_night': 'sleet',
        'heavysleetshowersandthunder_polartwilight': 'sleet',
        // Snow
        'lightsnow': 'snow',
        'snow': 'snow',
        'heavysnow': 'heavysnow',
        'lightsnowshowers_day': 'snowshowers',
        'lightsnowshowers_night': 'snowshowers',
        'lightsnowshowers_polartwilight': 'snowshowers',
        'snowshowers_day': 'snowshowers',
        'snowshowers_night': 'snowshowers',
        'snowshowers_polartwilight': 'snowshowers',
        'heavysnowshowers_day': 'snowshowers',
        'heavysnowshowers_night': 'snowshowers',
        'heavysnowshowers_polartwilight': 'snowshowers',
        // Thundersnow
        'lightsnowandthunder': 'thundersnow',
        'snowandthunder': 'thundersnow',
        'heavysnowandthunder': 'thundersnow',
        'lightsnowshowersandthunder_day': 'thundersnow',
        'lightsnowshowersandthunder_night': 'thundersnow',
        'lightsnowshowersandthunder_polartwilight': 'thundersnow',
        'lightssnowshowersandthunder_day': 'thundersnow',
        'lightssnowshowersandthunder_night': 'thundersnow',
        'lightssnowshowersandthunder_polartwilight': 'thundersnow',
        'snowshowersandthunder_day': 'thundersnow',
        'snowshowersandthunder_night': 'thundersnow',
        'snowshowersandthunder_polartwilight': 'thundersnow',
        'heavysnowshowersandthunder_day': 'thundersnow',
        'heavysnowshowersandthunder_night': 'thundersnow',
        'heavysnowshowersandthunder_polartwilight': 'thundersnow',
    };

    // Get mapped weather code or fall back to base code
    const mappedCode = weatherCodeMap[weatherCode] || weatherCode.split('_')[0];

    // Get current season
    const season = getCurrentSeason();

    // Try multiple file formats and paths (with season variants first)
    const pathsToTry = [
        // Try seasonal variants first
        `images/${mappedCode}_${season}.png`,
        `images/${mappedCode}_${season}.jpg`,
        // Then try generic versions
        `images/${mappedCode}.png`,
        `images/${mappedCode}.jpg`,
        // Finally try exact weather code match
        `images/${weatherCode}.png`,
        `images/${weatherCode}.jpg`,
    ];

    function tryNextPath(index) {
        if (index >= pathsToTry.length) {
            console.warn(`Background image not found for ${weatherCode}`);
            // Use a default gradient background
            backgroundContainer.style.backgroundImage = 'linear-gradient(to bottom, #1e3c72, #2a5298)';
            return;
        }

        const img = new Image();
        const path = pathsToTry[index];

        img.onload = () => {
            backgroundContainer.style.backgroundImage = `url('${path}')`;
            console.log(`Loaded background: ${path}`);
        };

        img.onerror = () => {
            tryNextPath(index + 1);
        };

        img.src = path;
    }

    tryNextPath(0);
}

// News functionality
async function fetchNews() {
    try {
        // Since we can't directly fetch RSS due to CORS, we'll use a CORS proxy
        // For production, you might want to set up your own proxy server
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const url = proxyUrl + encodeURIComponent(CONFIG.newsRssFeed);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`News fetch error: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');

        const items = xml.querySelectorAll('item');
        newsItems = Array.from(items).slice(0, 5).map(item => {
            // Extract image from multiple sources
            let imageUrl = '';

            // 1. Try media:content (NRK uses this)
            const mediaContent = item.querySelector('content, [medium="image"]');
            if (mediaContent) {
                imageUrl = mediaContent.getAttribute('url') || '';
            }

            // 2. Try media:thumbnail
            if (!imageUrl) {
                const mediaThumbnail = item.querySelector('thumbnail');
                if (mediaThumbnail) {
                    imageUrl = mediaThumbnail.getAttribute('url') || '';
                }
            }

            // 3. Try enclosure tag
            if (!imageUrl) {
                const enclosure = item.querySelector('enclosure[type^="image"]');
                if (enclosure) {
                    imageUrl = enclosure.getAttribute('url') || '';
                }
            }

            // 4. Try image in description
            if (!imageUrl) {
                const description = item.querySelector('description')?.textContent || '';
                const imageMatch = description.match(/<img[^>]+src="([^">]+)"/);
                imageUrl = imageMatch ? imageMatch[1] : '';
            }

            // Clean description from HTML
            const description = item.querySelector('description')?.textContent || '';
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = description;
            const cleanDescription = tempDiv.textContent || tempDiv.innerText || '';

            return {
                title: item.querySelector('title')?.textContent || 'No title',
                description: cleanDescription.substring(0, 300) + (cleanDescription.length > 300 ? '...' : ''),
                link: item.querySelector('link')?.textContent || '#',
                image: imageUrl,
                pubDate: item.querySelector('pubDate')?.textContent || ''
            };
        });

        displayNews();
        startNewsRotation();
        updateLastUpdated('news-updated');
    } catch (error) {
        console.error('Error fetching news:', error);
        // Display error state
        document.getElementById('news-container').innerHTML = `
            <div class="news-item">
                <div class="news-item-title">Unable to load news. Please check your connection.</div>
            </div>
        `;
    }
}

function displayNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    newsItems.forEach((item, index) => {
        const newsElement = document.createElement('div');
        newsElement.className = 'news-item';
        if (index === currentNewsIndex) {
            newsElement.classList.add('active');
        }

        newsElement.innerHTML = `
            <div class="news-item-title">${item.title}</div>
        `;

        container.appendChild(newsElement);
    });

    // Show the current news detail
    showNewsDetail(currentNewsIndex);
}

function showNewsDetail(index) {
    if (newsItems.length === 0) return;

    const item = newsItems[index];
    const detailElement = document.getElementById('news-detail');

    document.getElementById('news-detail-title').textContent = item.title;
    document.getElementById('news-detail-description').textContent = item.description;

    const imageElement = document.getElementById('news-detail-image');
    const imageContainer = document.querySelector('.news-detail-image-container');

    if (item.image) {
        imageElement.src = item.image;
        imageElement.style.display = 'block';
        if (imageContainer) {
            imageContainer.style.display = 'block';
        }
    } else {
        imageElement.style.display = 'none';
        if (imageContainer) {
            imageContainer.style.display = 'none';
        }
    }

    detailElement.classList.add('active');

    // Update active state in news list
    document.querySelectorAll('.news-item').forEach((el, i) => {
        if (i === index) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

function startNewsRotation() {
    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    let timeLeft = 15;
    const progressBar = document.getElementById('progress-bar');

    // Reset and start countdown
    function resetCountdown() {
        timeLeft = 15;
        if (progressBar) {
            progressBar.style.width = '100%';
        }
    }

    resetCountdown();

    countdownInterval = setInterval(() => {
        timeLeft--;

        // Update progress bar - animate from 100% to 0% as time decreases
        if (progressBar) {
            const progress = timeLeft / 15;
            progressBar.style.width = (progress * 100) + '%';
        }

        if (timeLeft <= 0) {
            // Move to next news item
            currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
            showNewsDetail(currentNewsIndex);
            resetCountdown();
        }
    }, 1000);
}

function updateLastUpdated(elementId) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('no-NO', {
        hour: '2-digit',
        minute: '2-digit'
    });
    document.getElementById(elementId).textContent = `Sist oppdatert: ${timeString}`;
}

// Fullscreen functionality
function initFullscreen() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    if (!fullscreenBtn) return;

    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Listen for fullscreen changes (including F11 key)
    document.addEventListener('fullscreenchange', updateFullscreenButton);
    document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
    document.addEventListener('mozfullscreenchange', updateFullscreenButton);
    document.addEventListener('MSFullscreenChange', updateFullscreenButton);
}

function toggleFullscreen() {
    if (!document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.mozFullScreenElement &&
        !document.msFullscreenElement) {
        // Enter fullscreen
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function updateFullscreenButton() {
    const isFullscreen = document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

    if (isFullscreen) {
        document.body.classList.add('fullscreen');
    } else {
        document.body.classList.remove('fullscreen');
    }
}

// Initialize fullscreen on load
document.addEventListener('DOMContentLoaded', () => {
    initFullscreen();
});

// Error handling for image loading
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Hide broken images
        e.target.style.display = 'none';
    }
}, true);
