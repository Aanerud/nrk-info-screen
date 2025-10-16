// Configuration file for NRK Info Screen Display
// Edit these values to customize for your location and preferences

const CONFIG = {
    // Location settings for weather data
    city: "Oslo",
    country: "Norway",
    latitude: 59.9139,
    longitude: 10.7522,

    // News RSS feed URL (NRK feeds recommended)
    // Find more feeds at: https://www.nrk.no/toppsaker.rss
    newsRssFeed: 'https://www.nrk.no/nyheter/siste.rss',

    // Update intervals (in milliseconds)
    weatherUpdateInterval: 60 * 60 * 1000, // 60 minutes
    newsUpdateInterval: 5 * 60 * 1000, // 5 minutes
    newsRotationInterval: 15 * 1000, // 15 seconds per news item
    clockUpdateInterval: 1000, // 1 second

    // API endpoints
    weatherApiUrl: 'https://api.met.no/weatherapi/locationforecast/2.0/compact',

    // User agent for Met.no API (required by their terms)
    userAgent: 'InfoScreen/1.0 (office-display)',

    // Weather symbol to emoji mapping
    weatherEmojis: {
        'clearsky_day': '☀️',
        'clearsky_night': '🌙',
        'clearsky_polartwilight': '🌅',
        'fair_day': '🌤️',
        'fair_night': '🌙',
        'fair_polartwilight': '🌆',
        'partlycloudy_day': '⛅',
        'partlycloudy_night': '☁️',
        'partlycloudy_polartwilight': '☁️',
        'cloudy': '☁️',
        'fog': '🌫️',
        'lightrain': '🌦️',
        'rain': '🌧️',
        'heavyrain': '🌧️',
        'lightrainshowers_day': '🌦️',
        'lightrainshowers_night': '🌧️',
        'lightrainshowers_polartwilight': '🌧️',
        'rainshowers_day': '🌦️',
        'rainshowers_night': '🌧️',
        'rainshowers_polartwilight': '🌧️',
        'heavyrainshowers_day': '⛈️',
        'heavyrainshowers_night': '⛈️',
        'heavyrainshowers_polartwilight': '⛈️',
        'lightrainandthunder': '⛈️',
        'rainandthunder': '⛈️',
        'heavyrainandthunder': '⛈️',
        'lightrainshowersandthunder_day': '⛈️',
        'lightrainshowersandthunder_night': '⛈️',
        'lightrainshowersandthunder_polartwilight': '⛈️',
        'rainshowersandthunder_day': '⛈️',
        'rainshowersandthunder_night': '⛈️',
        'rainshowersandthunder_polartwilight': '⛈️',
        'heavyrainshowersandthunder_day': '⛈️',
        'heavyrainshowersandthunder_night': '⛈️',
        'heavyrainshowersandthunder_polartwilight': '⛈️',
        'lightsleet': '🌨️',
        'sleet': '🌨️',
        'heavysleet': '🌨️',
        'lightsleetshowers_day': '🌨️',
        'lightsleetshowers_night': '🌨️',
        'lightsleetshowers_polartwilight': '🌨️',
        'sleetshowers_day': '🌨️',
        'sleetshowers_night': '🌨️',
        'sleetshowers_polartwilight': '🌨️',
        'heavysleetshowers_day': '🌨️',
        'heavysleetshowers_night': '🌨️',
        'heavysleetshowers_polartwilight': '🌨️',
        'lightsleetandthunder': '⛈️',
        'sleetandthunder': '⛈️',
        'heavysleetandthunder': '⛈️',
        'lightsleetshowersandthunder_day': '⛈️',
        'lightsleetshowersandthunder_night': '⛈️',
        'lightsleetshowersandthunder_polartwilight': '⛈️',
        'lightssleetshowersandthunder_day': '⛈️',
        'lightssleetshowersandthunder_night': '⛈️',
        'lightssleetshowersandthunder_polartwilight': '⛈️',
        'sleetshowersandthunder_day': '⛈️',
        'sleetshowersandthunder_night': '⛈️',
        'sleetshowersandthunder_polartwilight': '⛈️',
        'heavysleetshowersandthunder_day': '⛈️',
        'heavysleetshowersandthunder_night': '⛈️',
        'heavysleetshowersandthunder_polartwilight': '⛈️',
        'lightsnow': '🌨️',
        'snow': '❄️',
        'heavysnow': '❄️',
        'lightsnowshowers_day': '🌨️',
        'lightsnowshowers_night': '🌨️',
        'lightsnowshowers_polartwilight': '🌨️',
        'snowshowers_day': '🌨️',
        'snowshowers_night': '🌨️',
        'snowshowers_polartwilight': '🌨️',
        'heavysnowshowers_day': '❄️',
        'heavysnowshowers_night': '❄️',
        'heavysnowshowers_polartwilight': '❄️',
        'lightsnowandthunder': '⛈️',
        'snowandthunder': '⛈️',
        'heavysnowandthunder': '⛈️',
        'lightsnowshowersandthunder_day': '⛈️',
        'lightsnowshowersandthunder_night': '⛈️',
        'lightsnowshowersandthunder_polartwilight': '⛈️',
        'lightssnowshowersandthunder_day': '⛈️',
        'lightssnowshowersandthunder_night': '⛈️',
        'lightssnowshowersandthunder_polartwilight': '⛈️',
        'snowshowersandthunder_day': '⛈️',
        'snowshowersandthunder_night': '⛈️',
        'snowshowersandthunder_polartwilight': '⛈️',
        'heavysnowshowersandthunder_day': '⛈️',
        'heavysnowshowersandthunder_night': '⛈️',
        'heavysnowshowersandthunder_polartwilight': '⛈️',
    }
};
