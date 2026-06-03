# 📸 Image & Video Setup Guide

## ✅ Folders Created for You

Your app now has two folders ready for media files:

```
bday/
├── public/
│   ├── images/          ← Add your PHOTOS here
│   └── videos/          ← Add your VIDEOS here
└── src/
    └── data.js          ← This file references the images/videos
```

---

## 📸 How to Add Photos

### Step 1: Prepare Your Images
- Make sure they're in `.jpg`, `.png`, or `.webp` format
- Recommended size: 1200px width or larger
- Can be any aspect ratio (square, landscape, portrait)

### Step 2: Copy to the Images Folder
1. Go to: `public/images/`
2. Copy your photo files there
3. Name them like: `photo1.jpg`, `photo2.jpg`, etc.

### Step 3: Update `src/data.js`
The data file already has placeholders. Update them:

**Before:**
```javascript
image: '/images/photo1.jpg',
```

**After (if you named it differently):**
```javascript
image: '/images/my-beach-photo.jpg',
```

---

## 🎥 How to Add Videos

### Step 1: Prepare Your Videos
- Format: `.mp4` (best compatibility)
- Duration: Any length (shorter is faster to load)
- Can also use: `.webm`, `.mov`

### Step 2: Copy to the Videos Folder
1. Go to: `public/videos/`
2. Copy your video files there
3. Name them like: `video1.mp4`, `video2.mp4`, etc.

### Step 3: Update `src/data.js`
**Before:**
```javascript
videoUrl: '/videos/video1.mp4',
```

**After (if you named it differently):**
```javascript
videoUrl: '/videos/our-memories.mp4',
```

---

## 📝 Complete Reference Table

| Card Type | Folder | Example Path | Data Field |
|---|---|---|---|
| Photo | `public/images/` | `/images/photo1.jpg` | `image:` |
| Video Thumbnail | `public/images/` | `/images/video-thumb1.jpg` | `image:` |
| Video File | `public/videos/` | `/videos/video1.mp4` | `videoUrl:` |
| Message Background | `public/images/` | `/images/love-bg1.jpg` | `image:` |

---

## 🎯 Current Placeholders in Data

Your `src/data.js` currently references these placeholder files:

### Photos
- `/images/photo1.jpg` through `/images/photo10.jpg`
- `/images/video-thumb1.jpg` and `/images/video-thumb2.jpg`
- `/images/love-bg1.jpg` through `/images/love-bg4.jpg`
- `/images/message-bg1.jpg` through `/images/message-bg3.jpg`

### Videos
- `/videos/video1.mp4`
- `/videos/video2.mp4`

---

## 🔄 How It Works

### When Image is Missing
- Shows a red-bordered placeholder box with 📷 icon
- Still shows the title and caption
- Can click to view the message/content
- App continues to work perfectly!

### When Image is Added
1. Copy the image file to `public/images/`
2. Restart the dev server (or just refresh browser)
3. Image appears automatically!

---

## 📋 Setup Checklist

### Before You Start
- [ ] Create your photos folder: `public/images/` ✅ Already done!
- [ ] Create your videos folder: `public/videos/` ✅ Already done!

### Adding Your Content
1. **Prepare Photos**
   - [ ] Select 10 photos for "Featured Memories", "Best Moments", "Cute Photos"
   - [ ] Resize to 1200px+ width
   - [ ] Copy to `public/images/`
   - [ ] Rename them as: `photo1.jpg`, `photo2.jpg`, etc.

2. **Prepare Videos**
   - [ ] Select 2 videos for "Best Moments"
   - [ ] Convert to MP4 format
   - [ ] Copy to `public/videos/`
   - [ ] Rename them as: `video1.mp4`, `video2.mp4`, etc.

3. **Prepare Thumbnails**
   - [ ] Create thumbnails for videos (or use first frame)
   - [ ] Copy to `public/images/`
   - [ ] Name them: `video-thumb1.jpg`, `video-thumb2.jpg`

4. **Prepare Background Images**
   - [ ] Select 7 images for message cards/backgrounds
   - [ ] Copy to `public/images/`
   - [ ] Name them: `love-bg1.jpg`, `message-bg1.jpg`, etc.

5. **Update data.js** (only if filenames differ)
   - [ ] Review `src/data.js`
   - [ ] Update paths if you renamed files

---

## 🎨 Image Naming Convention (Optional)

You can keep the default names or rename them for clarity:

**Default (Simple):**
```
photo1.jpg
photo2.jpg
video1.mp4
love-bg1.jpg
```

**Custom (Descriptive):**
```
coffee-date.jpg
mountain-hike.jpg
dancing-in-rain.mp4
romantic-background.jpg
```

Then update in `src/data.js`:
```javascript
image: '/images/coffee-date.jpg'
```

---

## 🚀 Testing

1. Copy images to `public/images/`
2. Copy videos to `public/videos/`
3. Run: `npm run dev`
4. Refresh browser (Ctrl+Shift+R if not auto-refreshing)
5. Click cards to see your content!

---

## ⚠️ Common Issues

### Images Not Showing
- ❌ Image is in wrong folder
- ✅ Check: `public/images/` folder
- ✅ Check: File path in `data.js` matches filename

### Videos Not Playing
- ❌ Video format not supported
- ✅ Use: `.mp4` format (most compatible)
- ✅ Check: File path in `data.js` is correct

### Very Slow Loading
- ❌ Image files are too large
- ✅ Compress images before adding
- ✅ Use tools like TinyJPG.com

### Still Placeholder After Adding File
- ❌ Browser cache issue
- ✅ Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
- ✅ Restart dev server: `npm run dev`

---

## 💡 Pro Tips

📸 **Image Sources**
- Use photos from your relationship
- Organize by folder on your computer first
- Batch resize multiple photos at once

🎥 **Video Tips**
- MP4 is best for web (widely supported)
- Keep videos under 100MB each
- Edit/trim before exporting
- Add simple transitions or effects in iMovie/OpenShot

🎨 **Design Tips**
- Photos don't need to be perfect
- Imperfect photos are more authentic!
- Mix portrait and landscape photos
- Don't over-edit - keep it natural

---

## 📂 File Structure After Adding Content

```
public/
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   ├── photo7.jpg
│   ├── photo8.jpg
│   ├── photo9.jpg
│   ├── photo10.jpg
│   ├── video-thumb1.jpg
│   ├── video-thumb2.jpg
│   ├── love-bg1.jpg
│   ├── love-bg2.jpg
│   ├── love-bg3.jpg
│   ├── love-bg4.jpg
│   ├── message-bg1.jpg
│   ├── message-bg2.jpg
│   └── message-bg3.jpg
│
└── videos/
    ├── video1.mp4
    └── video2.mp4
```

---

## ✅ You're All Set!

The folders are ready. Now just add your photos and videos! 📸🎬

Any questions? Check the main README.md or CUSTOMIZATION_GUIDE.md

**Happy Birthday! 🎉💕**
