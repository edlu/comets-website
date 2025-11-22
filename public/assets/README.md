# Assets from Figma

This directory contains all graphic assets exported from the Figma design.

## Files

### Images
- **logo.png** (130KB) - Culver City Comets logo (392x392px)
  - Used in hero section overlay

### SVG Graphics
- **comets-logo-mark.svg** (2KB) - Small logo icon for header
  - Used in navigation header
  
- **background-1.svg** (1.5KB) - Decorative background pattern (top)
  - Positioned with rotation in hero section
  
- **background-2.svg** (1.5KB) - Decorative background pattern (bottom)
  - Positioned with rotation in lower section
  
- **caret-down.svg** (938B) - Dropdown arrow icon
  - For select/dropdown inputs

### Video
- **hero-video.mp4** - Hero section video ✅
	- Lacrosse action video playing on homepage
	- MP4 format, H.264 codec
	- Configured with autoplay, loop, and muted for optimal web playback

## Usage in Components

All assets are referenced from the `/assets/` path:

```vue
<!-- Logo -->
<img src="/assets/logo.png" alt="Culver City Comets Logo" />

<!-- Icon -->
<img src="/assets/comets-logo-mark.svg" alt="Logo" />

<!-- Background decorations -->
<img src="/assets/background-1.svg" alt="" />

<!-- Video -->
<video>
  <source src="/assets/hero-video.mp4" type="video/mp4" />
</video>
```

## Video Configuration

The hero video is now active and configured with:
- **Autoplay**: Starts playing automatically on page load
- **Loop**: Plays continuously
- **Muted**: Plays without sound for better UX
- **PlaysInline**: Works on mobile devices
- **Object-cover**: Fills container like `background-size: cover`

Video specifications:
- Format: MP4 (H.264)
- Configured to span full viewport width
- Height: 41.625rem (666px)
- Light teal overlay (20% opacity) for better logo visibility

