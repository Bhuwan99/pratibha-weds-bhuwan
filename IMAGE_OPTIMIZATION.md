# Image Optimization Guide

## Current Issue
Your images are very large (12-14MB each), which causes slow loading times. Here's how to optimize them:

## Recommended Image Sizes

### Background Images (hero, section backgrounds)
- **Target size**: 200-500KB
- **Dimensions**: 1920x1080px (Full HD) is sufficient
- **Format**: JPEG with 80-85% quality

### Gallery Images
- **Target size**: 100-300KB each
- **Dimensions**: 1200x1600px (for 3:4 aspect ratio)
- **Format**: JPEG with 80-85% quality

### Profile Photos (Meet the Couple)
- **Target size**: 50-150KB each
- **Dimensions**: 800x1067px (for 3:4 aspect ratio)
- **Format**: JPEG with 85% quality

## Tools to Compress Images

### Online Tools (Free)
1. **TinyPNG / TinyJPG**: https://tinypng.com
   - Drag and drop images
   - Compresses up to 20 images at once
   - Usually reduces size by 60-80%

2. **Squoosh**: https://squoosh.app
   - Google's image compression tool
   - More control over quality settings
   - Can compare before/after

3. **ImageOptim** (Mac): https://imageoptim.com
   - Desktop app for batch processing
   - Drag and drop folder

### Command Line (if you have ImageMagick)
```bash
# Compress a single image
convert input.jpg -quality 85 -resize 1920x1080> output.jpg

# Batch compress all JPG files
for file in *.jpg; do
  convert "$file" -quality 85 -resize 1920x1080> "optimized_$file"
done
```

## Steps to Optimize

1. **Backup your original images** (keep them safe!)

2. **Compress each image**:
   - `hero.jpg` → Target: ~300KB
   - `background-1.jpg` through `background-4.jpg` → Target: ~300KB each
   - `gallery-*.jpg` → Target: ~150KB each
   - `meet-the-bride.jpg` and `meet-the-groom.jpg` → Target: ~100KB each

3. **Replace the files** in `src/assets/` with optimized versions

4. **Test locally**: Run `npm run dev` to ensure images still look good

5. **Commit and push**: The optimized images will deploy automatically

## Expected Results
- **Before**: 12-14MB per image = ~50-60MB total
- **After**: 200-500KB per image = ~2-3MB total
- **Load time improvement**: 10-20x faster!

## Current Optimizations Applied
✅ Lazy loading for gallery images
✅ Async decoding
✅ Fetch priority hints
✅ CSS image rendering optimizations
✅ Background image loading improvements

The code optimizations help, but **compressing the actual image files** will have the biggest impact on load times.

