# Weather Background Images

This folder should contain the weather background images for your info screen.

## How to Generate Images

1. Open the `weather.md` file in the parent directory
2. Use the Flux Dev prompts provided for each weather condition
3. Generate images using Flux Dev or similar AI image generator
4. Save each image with the corresponding weather code as filename

## Naming Convention

Images should be named exactly as the weather codes from Met.no API:

### Required Images (Priority)

**Most Common Weather Conditions:**
- `clearsky_day.jpg` - Clear sunny day
- `clearsky_night.jpg` - Clear night with stars
- `cloudy.jpg` - Overcast/cloudy
- `partlycloudy_day.jpg` - Partly cloudy day
- `partlycloudy_night.jpg` - Partly cloudy night
- `fair_day.jpg` - Fair weather with few clouds
- `rain.jpg` - Regular rain
- `lightrain.jpg` - Light rain
- `heavyrain.jpg` - Heavy rain
- `fog.jpg` - Foggy conditions
- `snow.jpg` - Snow
- `lightsnow.jpg` - Light snow
- `heavysnow.jpg` - Heavy snow

### Additional Images (Optional but Recommended)

**Showers:**
- `rainshowers_day.jpg`
- `rainshowers_night.jpg`
- `lightrainshowers_day.jpg`
- `snowshowers_day.jpg`
- `snowshowers_night.jpg`

**Thunder:**
- `rainandthunder.jpg`
- `rainshowersandthunder_day.jpg`
- `snowandthunder.jpg`

**Sleet:**
- `sleet.jpg`
- `lightsleet.jpg`
- `heavysleet.jpg`
- `sleetshowers_day.jpg`

**Polar Twilight (for winter):**
- `clearsky_polartwilight.jpg`
- `partlycloudy_polartwilight.jpg`
- `fair_polartwilight.jpg`

See `weather.md` for the complete list and detailed Flux Dev prompts for each condition.

## Image Specifications

- **Format**: JPG or PNG
- **Orientation**: Landscape (16:9 ratio recommended)
- **Resolution**: At least 1920x1080 pixels (Full HD)
- **Quality**: High quality for TV display
- **Style**: Photorealistic, featuring Oslo landmarks when possible

## Fallback Behavior

If a specific weather condition image is not found (e.g., `clearsky_night.jpg`), the system will:
1. Try the base condition without suffix (e.g., `clearsky.jpg`)
2. Fall back to a gradient background if no image is found

So you can create fewer images by using base names (without _day/_night/_polartwilight) if you want the same image for all time variants.

## Quick Start - Minimum Images

To get started quickly, create at least these 10 images:
1. `clearsky_day.jpg`
2. `cloudy.jpg`
3. `partlycloudy_day.jpg`
4. `rain.jpg`
5. `snow.jpg`
6. `fog.jpg`
7. `fair_day.jpg`
8. `clearsky_night.jpg`
9. `heavyrain.jpg`
10. `lightrain.jpg`

These cover the most common weather conditions in Oslo.

## Example Flux Dev Workflow

1. Copy a prompt from `weather.md`
2. Go to Flux Dev or your AI image generator
3. Paste the prompt
4. Generate the image
5. Download and save with the correct filename
6. Place in this `images` folder

---

**Note**: The system will work without images (using gradient backgrounds), but images make the display much more visually appealing!
