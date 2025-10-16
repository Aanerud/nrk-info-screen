# NRK Info Screen Display

A beautiful full-screen display for office TVs showing Norwegian weather and NRK news with dynamic seasonal backgrounds.

## Features

- **Real-time Weather**: Live weather data from Met.no API with Norwegian translations
- **NRK News Feed**: Displays latest news from NRK RSS feeds with images and descriptions
- **Seasonal Backgrounds**: 42 AI-generated weather backgrounds that change based on conditions and seasons
- **Auto-rotating News**: News items rotate every 15 seconds with a subtle progress indicator
- **Fullscreen Mode**: One-click fullscreen button for clean TV display
- **Optional Branding**: Add your own logo (completely optional)
- **Responsive Design**: Beautiful glassmorphism design with backdrop blur effects

## Quick Start

1. **Clone or download** this repository
2. **Configure** your location in `config.js`
3. **(Optional)** Add your `logo.png` file (max 150x80px recommended)
4. **Open** `index.html` in a modern web browser
5. **Click** the fullscreen button (bottom-right corner)

## Configuration

Edit `config.js` to customize your display:

```javascript
const CONFIG = {
    // Your location (for weather)
    city: "Oslo",
    country: "Norway",
    latitude: 59.9139,
    longitude: 10.7522,

    // News RSS feed (NRK feeds recommended)
    newsRssFeed: 'https://www.nrk.no/nyheter/siste.rss',

    // Timing (in milliseconds)
    weatherUpdateInterval: 60 * 60 * 1000, // 60 minutes
    newsUpdateInterval: 5 * 60 * 1000, // 5 minutes
    newsRotationInterval: 15 * 1000 // 15 seconds
};
```

### Finding Your Coordinates

- Use [Google Maps](https://www.google.com/maps) - right-click any location and select the coordinates
- Or use [LatLong.net](https://www.latlong.net/)

### Finding NRK RSS Feeds

Visit [NRK's RSS page](https://www.nrk.no/toppsaker.rss) to find various regional and national feeds:

- **National News**: `https://www.nrk.no/nyheter/siste.rss`
- **Regional Feeds**: Available for all regions (Oslo, Bergen, Trondheim, etc.)
- **Topic-specific**: Sports, culture, weather, and more

**Note**: This app is optimized for NRK RSS feeds. Other feeds may work but are not guaranteed.

## Logo (Optional)

The app works perfectly without a logo. If you want to add branding:

1. Create or prepare your logo image
2. Save it as `logo.png` in the project root
3. **Recommended size**: Maximum 150px wide × 80px tall
4. **Format**: PNG with transparency works best

The logo will appear in the bottom-left corner. If no logo is provided, nothing breaks - the space simply remains empty.

## Project Structure

```
info_screen/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # Core functionality
├── config.js           # Configuration (edit this!)
├── logo.png            # Your logo (optional, gitignored)
├── weather.md          # Flux prompts for generating backgrounds
└── images/             # 42 weather background images
    ├── clearsky_day.png
    ├── clearsky_night.png
    ├── rain_autumn.png
    └── ... (39 more)
```

## Browser Compatibility

Requires a modern browser with support for:
- CSS Grid and Flexbox
- Fullscreen API
- Fetch API
- ES6+ JavaScript

**Tested on**: Chrome, Firefox, Safari, Edge (latest versions)

## Weather Backgrounds

The project includes 42 AI-generated seasonal backgrounds created with Flux Dev. See `weather.md` for the prompts used to generate each image.

Backgrounds automatically change based on:
- Current weather conditions (from Met.no API)
- Season (spring, summer, autumn, winter)
- Time of day (day, night, polar twilight)

## Technical Details

- **Weather Data**: [Met.no Locationforecast API 2.0](https://api.met.no/)
- **News Data**: NRK RSS feeds via CORS proxy
- **No Backend Required**: Pure client-side application
- **No Dependencies**: Vanilla JavaScript, HTML, CSS

## License

MIT License - Feel free to use, modify, and distribute this project however you like. See the LICENSE file for details.

## Contributing

This is an open-source project. Anyone can do anything with it - fork it, improve it, adapt it for your own use!

## Credits

- Weather data provided by [Met.no](https://www.met.no/)
- News content from [NRK](https://www.nrk.no/)
- Background images generated with Flux Dev

## Support

This is a community project. For issues, suggestions, or questions, please open an issue on the GitHub repository.

---

**Enjoy your new office info screen! 🎉**
