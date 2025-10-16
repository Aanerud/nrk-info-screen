# Weather Backgrounds - Flux Dev Prompts (Simplified)

**Norwegian Nature Edition** - Focused on nature, landscapes, and wildlife instead of city landmarks

This simplified list merges similar weather conditions to make generating backgrounds more manageable. The system will automatically match specific weather codes to these base images.

---

## 1. Clear Sky (clearsky)
**File names**: `clearsky.jpg` or `clearsky_day.jpg`, `clearsky_night.jpg`

### Daytime
Photorealistic Norwegian fjord landscape under pristine clear blue sky, bright sunshine illuminating steep mountain cliffs, crystal clear water reflecting the mountains, a red Norwegian barn (hytte) on the shore, wild reindeer grazing in the distance, vibrant summer colors, professional nature photography, ultra sharp, 8k resolution

### Nighttime
Beautiful Norwegian mountain landscape under crystal clear starry night sky, Northern lights aurora borealis dancing across the sky in green and purple, snow-capped peaks silhouetted against the stars, peaceful arctic wilderness, long exposure, professional night photography, ultra detailed, 8k

---

## 2. Fair Weather (fair)
**File names**: `fair.jpg` or `fair_day.jpg`

Pleasant Norwegian summer scene with fair weather, few white fluffy clouds drifting across bright blue sky, rolling green hills with wildflowers, birch trees, grazing sheep on hillside, traditional red wooden farmhouse in distance, peaceful rural Norway, vibrant colors, professional photography, 8k

---

## 3. Partly Cloudy (partlycloudy)
**File names**: `partlycloudy.jpg` or `partlycloudy_day.jpg`

Partly cloudy day over Norwegian coastal landscape, beautiful mix of white clouds and blue sky, dramatic light beams breaking through clouds onto fjord water, rocky shoreline, seabirds flying, fishing boat in the distance, dynamic weather, professional photography, 8k

---

## 4. Cloudy (cloudy)
**File name**: `cloudy.jpg`

Overcast Norwegian mountain valley, thick grey cloud cover creating soft diffused light, evergreen forest covering hillsides, moody atmospheric scene, misty clouds touching mountain peaks, dramatic Nordic landscape, professional atmospheric photography, 8k

---

## 5. Fog (fog)
**File name**: `fog.jpg`

Mysterious dense fog enveloping Norwegian forest, tall pine and spruce trees emerging from white mist, moss-covered rocks and ferns in foreground, elk or moose silhouette barely visible through fog, atmospheric and moody, early morning ambiance, professional atmospheric photography, cinematic, 8k

---

## 6. Light Rain (lightrain, rain)
**File name**: `rain.jpg`

Gentle rain falling over Norwegian lakeside scene, raindrops creating ripples on calm lake surface, grey overcast sky, wet rocks and heather in foreground, pine forest on distant shore, cozy rainy day atmosphere, realistic rain effects, professional nature photography, 8k

---

## 7. Heavy Rain (heavyrain)
**File name**: `heavyrain.jpg`

Heavy rain pouring over Norwegian mountain landscape, intense rainfall creating waterfalls down steep cliffs, dark grey storm clouds, dramatic weather, rain curtains visible across valley, powerful nature, realistic rain simulation, professional storm photography, 8k

---

## 8. Rain Showers (rainshowers, lightrainshowers)
**File name**: `rainshowers.jpg`

Rain shower passing through Norwegian countryside, mixture of rain and sunshine creating vivid rainbow over green valley, dramatic clouds with patches of blue sky, wet grass and wildflowers sparkling, fresh after-rain atmosphere, professional weather photography, 8k

---

## 9. Thunderstorm (thunder, rainandthunder, heavyrainandthunder)
**File name**: `thunder.jpg`

Dramatic thunderstorm over Norwegian fjord, lightning bolt striking mountain peak in distance, heavy rain falling, dark ominous storm clouds, rough water on fjord, powerful weather event, spectacular lightning illuminating landscape, professional extreme weather photography, 8k

---

## 10. Sleet (sleet, lightsleet, heavysleet, sleetshowers)
**File name**: `sleet.jpg`

Sleet falling over Norwegian winter landscape, mixture of rain and ice pellets, grey sky, partially frozen lake with ice and water, bare birch trees, harsh wet winter conditions, cold atmosphere, realistic mixed precipitation, professional winter photography, 8k

---

## 11. Light Snow (lightsnow, snow)
**File name**: `snow.jpg`

Gentle snowfall over peaceful Norwegian winter forest, delicate snowflakes falling softly, snow-covered pine trees, Arctic fox in winter white coat sitting on snowy ground, serene winter wonderland, cozy cold atmosphere, professional winter photography, 8k

---

## 12. Heavy Snow (heavysnow)
**File name**: `heavysnow.jpg`

Heavy snowstorm over Norwegian mountain landscape, intense snowfall with reduced visibility, thick snow accumulation on slopes, blizzard conditions, dramatic winter weather, snow-covered cabin barely visible, harsh arctic conditions, professional storm photography, 8k

---

## 13. Snow Showers (snowshowers, lightsnowshowers, heavysnowshowers)
**File name**: `snowshowers.jpg`

Snow showers moving across Norwegian wilderness, periods of snowfall with breaks of light, dramatic clouds, snow dusting on rocky terrain, mountain peaks in background, snowy owl perched on rock, beautiful winter scene, professional photography, 8k

---

## 14. Thundersnow (snowandthunder, lightsnowandthunder, heavysnowandthunder)
**File name**: `thundersnow.jpg`

Rare thundersnow over Norwegian mountain landscape, lightning illuminating heavy snowfall, dramatic winter storm, snow-covered forest, spectacular rare weather phenomenon, electric sky during blizzard, professional extreme weather photography, 8k

---

## 15. Polar Twilight (for _polartwilight variants)
**File name**: `polartwilight.jpg`

Magical polar twilight over Norwegian Arctic landscape during winter, soft purple pink and blue twilight colors painting the sky, snow-covered tundra, reindeer herd silhouetted against colorful sky, twilight glow reflecting on snow, serene polar atmosphere, professional photography, cinematic lighting, 8k

---

## Weather Code Mapping Guide

The system will automatically match these base images to specific Met.no weather codes:

- **clearsky.jpg** → All clearsky_* variants
- **fair.jpg** → All fair_* variants
- **partlycloudy.jpg** → All partlycloudy_* variants
- **cloudy.jpg** → cloudy
- **fog.jpg** → fog
- **rain.jpg** → lightrain, rain
- **heavyrain.jpg** → heavyrain, all rain with thunder variants
- **rainshowers.jpg** → All lightrainshowers_* and rainshowers_* variants (without thunder)
- **thunder.jpg** → All *andthunder and *showersandthunder variants (rain)
- **sleet.jpg** → All sleet-related codes (lightsleet, sleet, heavysleet, all sleet showers)
- **snow.jpg** → lightsnow, snow
- **heavysnow.jpg** → heavysnow
- **snowshowers.jpg** → All *snowshowers* variants (without thunder)
- **thundersnow.jpg** → All snow with thunder variants
- **polartwilight.jpg** → Optional fallback for _polartwilight variants

---

## Recommended Priority Order

If you want to generate images gradually, do them in this order:

1. **rain.jpg** - Most common
2. **cloudy.jpg** - Very common
3. **partlycloudy.jpg** - Very common
4. **clearsky.jpg** - Common in summer
5. **snow.jpg** - Common in winter
6. **rainshowers.jpg** - Common
7. **fair.jpg** - Common
8. **fog.jpg** - Occasional
9. **heavyrain.jpg** - Less common
10. **thunder.jpg** - Less common
11. **snowshowers.jpg** - Winter
12. **heavysnow.jpg** - Winter
13. **sleet.jpg** - Rare
14. **thundersnow.jpg** - Very rare
15. **polartwilight.jpg** - Winter, optional

---

## Image Generation Tips

- **Format**: JPG or PNG
- **Resolution**: 1920x1080 or higher (16:9 ratio)
- **Style**: Photorealistic, professional nature photography
- **Norwegian wildlife to include**: Reindeer, moose/elk, Arctic fox, snowy owl, seabirds, sheep
- **Norwegian elements**: Fjords, mountains, forests (pine/spruce), birch trees, red wooden buildings (hytte/barn), heather, rocky terrain
- **Avoid**: City scenes, specific recognizable buildings, text, people (except distant/small)
- **Focus**: Bold, clear compositions visible from distance, dramatic lighting

---

## Fallback System

The JavaScript code has a fallback system:
1. Try seasonal variant first (e.g., `clearsky_summer.png`)
2. Try exact match (e.g., `clearsky_day.jpg`)
3. Try base code (e.g., `clearsky.jpg`)
4. Use gradient background if neither exists

This means you can create either:
- **Seasonal images** for maximum variety (e.g., `rain_summer.png`, `rain_autumn.png`)
- **Base images** only (less work, still looks great)
- **Mix of both** (seasonal for common conditions, generic for rare ones)

---

## 🍂 SEASONAL VARIANTS (Optional but Recommended!)

Norwegian seasons are very distinct. Adding seasonal variants makes the display much more dynamic and accurate to what's actually happening outside.

### Season Detection
The system automatically detects the current season:
- **Spring**: March, April, May
- **Summer**: June, July, August
- **Autumn**: September, October, November
- **Winter**: December, January, February

### Naming Convention for Seasonal Images
Add `_spring`, `_summer`, `_autumn`, or `_winter` to the base filename:
- `clearsky_spring.png`
- `rain_summer.png`
- `cloudy_autumn.png`
- `fog_winter.png`

---

## Seasonal Weather Prompts

### CLEARSKY - Seasonal Variants

#### clearsky_spring.png
Photorealistic Norwegian fjord in spring, pristine clear blue sky, melting snow on mountain peaks, early spring wildflowers emerging, fresh green grass starting to grow, birch trees with new leaves budding, flowing meltwater streams, reindeer with calves grazing, crisp spring morning light, renewal and awakening, professional nature photography, 8k

#### clearsky_summer.png
Photorealistic Norwegian fjord in summer, brilliant clear blue sky, midnight sun glow, lush vibrant green vegetation, colorful wildflowers in full bloom, crystal clear blue-green fjord water, sheep grazing on verdant hillsides, red Norwegian hytte, warm golden summer light, peak of life and growth, professional nature photography, 8k

#### clearsky_autumn.png
Photorealistic Norwegian fjord in autumn, clear blue sky, mountains with golden and orange autumn colors, birch and aspen trees with yellow and red foliage, crisp air feel, first dusting of snow on highest peaks, moose grazing in forest edge, dramatic autumn light with long shadows, harvest season feel, professional nature photography, 8k

#### clearsky_winter.png
Photorealistic Norwegian fjord in winter, clear blue sky, completely snow-covered landscape, frozen fjord edges with ice, bare snow-laden trees, Arctic fox in white winter coat, short daylight with low golden sun, pristine winter wilderness, cold and serene atmosphere, professional winter photography, 8k

---

### RAIN - Seasonal Variants

#### rain_spring.png
Spring rain falling over Norwegian landscape, light grey sky, rain on melting snow and emerging green grass, early wildflowers getting watered, birch trees with new leaves in rain, fresh spring atmosphere, flowing streams swelling with rain and snowmelt, cool spring rain, professional photography, 8k

#### rain_summer.png
Summer rain falling over lush Norwegian valley, warm summer rain shower, vibrant green vegetation glistening with raindrops, wildflowers heavy with water, rainbow forming over hills, grey clouds with bright edges, sheep seeking shelter, cozy summer rain atmosphere, professional photography, 8k

#### rain_autumn.png
Autumn rain falling over Norwegian forest, steady rainfall on colorful autumn foliage, wet golden and orange leaves, grey overcast sky, rain creating puddles on forest path, bare branches becoming visible, moody autumn atmosphere, falling leaves mixing with rain, professional photography, 8k

#### rain_winter.png
Cold winter rain over Norwegian landscape, rare winter rainfall, rain falling on snow creating slush, grey slushy conditions, bare wet trees, harsh wet winter weather, uncomfortable cold rain, partially frozen puddles, Nordic winter rain gloom, professional photography, 8k

---

### CLOUDY - Seasonal Variants

#### cloudy_spring.png
Overcast spring day in Norwegian countryside, thick grey clouds, fresh green grass and early wildflowers below, snow patches melting, birch trees budding despite cloudy weather, soft diffused spring light, sheep with lambs, cool spring overcast, professional photography, 8k

#### cloudy_summer.png
Overcast summer day in Norway, grey clouds over lush green landscape, thick vegetation despite lack of sun, wildflowers in full bloom, moody summer atmosphere, dramatic clouds over mountains, green valleys and forests, cool summer overcast, professional photography, 8k

#### cloudy_autumn.png
Overcast autumn day in Norwegian forest, grey clouds over golden and orange autumn foliage, dramatic moody autumn light, birch trees with yellow leaves, fallen leaves on ground, misty mountain peaks, melancholic autumn atmosphere, professional photography, 8k

#### cloudy_winter.png
Overcast winter day in Norway, heavy grey clouds over snow-covered landscape, flat winter light, snow-laden evergreen trees, cold and grey winter atmosphere, minimal daylight, harsh Nordic winter, professional photography, 8k

---

### PARTLYCLOUDY - Seasonal Variants

#### partlycloudy_spring.png
Partly cloudy spring day over Norwegian landscape, mix of clouds and blue sky, dramatic spring light on melting snow and new green growth, flowing meltwater, early wildflowers, fresh atmosphere, spring awakening, professional photography, 8k

#### partlycloudy_summer.png
Partly cloudy summer day over Norwegian fjord, beautiful mix of clouds and blue sky, dramatic light beams on lush green hills and blue water, wildflowers, grazing animals, perfect summer weather, long daylight, professional photography, 8k

#### partlycloudy_autumn.png
Partly cloudy autumn day over Norwegian valley, dramatic clouds and patches of blue sky, golden autumn colors illuminated by sun breaks, colorful foliage, beautiful autumn light, crisp air, professional photography, 8k

#### partlycloudy_winter.png
Partly cloudy winter day over Norwegian mountains, clouds breaking to reveal snow-covered peaks, dramatic winter light on white landscape, cold and bright, Arctic atmosphere, professional photography, 8k

---

### FOG - Seasonal Variants

#### fog_spring.png
Spring morning fog in Norwegian forest, mist enveloping trees with new green leaves, emerging wildflowers visible through fog, melting snow patches, fresh spring moisture creating thick fog, moose silhouette, soft spring light, professional photography, 8k

#### fog_summer.png
Summer morning fog over Norwegian lake, warm fog rising from water, lush green forest barely visible through mist, wildflowers in foreground, peaceful summer morning, dense vegetation creating mystical scene, professional photography, 8k

#### fog_autumn.png
Autumn fog in Norwegian forest, thick mist around trees with golden and orange foliage, wet fallen leaves on ground, dramatic moody autumn atmosphere, elk silhouette through fog, melancholic autumn morning, professional photography, 8k

#### fog_winter.png
Winter fog over Norwegian landscape, ice fog in extreme cold, frost-covered trees emerging from mist, snow-covered ground barely visible, Arctic fox in white coat, harsh frozen fog, eerie winter atmosphere, professional photography, 8k

---

### FAIR - Seasonal Variants

#### fair_spring.png
Fair spring weather in Norwegian countryside, few clouds in blue sky, fresh green grass and early wildflowers, sheep with new lambs grazing, flowing streams from snowmelt, birch trees with new leaves, pleasant spring day, professional photography, 8k

#### fair_summer.png
Fair summer weather in Norway, perfect summer day with few white clouds, lush green hills covered in wildflowers, long daylight, warm sunshine, vibrant colors, grazing animals, idyllic Norwegian summer, professional photography, 8k

#### fair_autumn.png
Fair autumn weather in Norwegian forest, few clouds drifting across sky, spectacular golden and orange foliage, birch and aspen trees in autumn colors, crisp clear air, beautiful autumn day, harvest season, professional photography, 8k

#### fair_winter.png
Fair winter weather in Norway, few clouds in pale blue winter sky, snow-covered landscape, bright winter sun creating long shadows, cold clear day, reindeer in snow, pristine winter scene, professional photography, 8k

---

### RAINSHOWERS - Seasonal Variants

#### rainshowers_summer.png
Summer rain shower passing through Norwegian valley, mixture of sun and rain, vivid rainbow over lush green landscape, dramatic clouds, wet wildflowers sparkling, fresh summer shower, warm light, professional photography, 8k

#### rainshowers_autumn.png
Autumn rain shower over Norwegian forest, rain falling on colorful autumn foliage, dramatic clouds with breaks of light, wet golden leaves, autumn rainbow, moody fall weather, professional photography, 8k

---

## Seasonal Generation Strategy

**Start with these seasonal variants** (most noticeable differences):
1. **clearsky_summer.png** & **clearsky_winter.png** - Dramatic difference
2. **rain_summer.png** & **rain_autumn.png** - Very common, very different look
3. **cloudy_autumn.png** - Beautiful golden colors
4. **fog_autumn.png** - Mystical autumn fog
5. **partlycloudy_summer.png** - Perfect summer day

**Optional but great additions:**
- All four seasons for: clearsky, rain, cloudy, fog
- Summer/autumn variants for: partlycloudy, fair, rainshowers

**Can skip seasonal variants** (less visible difference or rare):
- thunder, sleet, heavyrain, snow (already season-specific)
- thundersnow, polartwiight (winter only)

---

**Total images needed**:
- **Minimum**: 12-15 base images (no seasons)
- **Recommended**: 20-30 images (key seasonal variants)
- **Maximum**: 60+ images (all seasons for all conditions)
