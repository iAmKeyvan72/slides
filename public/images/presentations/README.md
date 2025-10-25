# Presentation Thumbnails

This directory contains thumbnail images for presentation cards on the home page.

## Image Guidelines

- **Recommended size**: 1200x630px (or 16:9 aspect ratio)
- **Formats**: .jpg, .png, .webp
- **Max file size**: Keep under 500KB for optimal loading
- **Naming**: Match your presentation slug (e.g., `manual-to-velocity.jpg` for `manual-to-velocity-the-spec-driven-way`)

## Adding a Thumbnail

1. Add your image to this directory
2. Update `lib/presentations.ts`:
   ```typescript
   {
     slug: 'my-presentation',
     title: 'My Presentation',
     // ...
     thumbnail: '/images/presentations/my-presentation.jpg',
   }
   ```

## Fallback

If no thumbnail is provided, the card will show a default presentation icon with an orange gradient background.

