# 🎨 Complete Customization Guide

This guide shows you exactly how to customize every part of the app without touching any component code.

## 📂 File Structure Reference

All content changes should be made in: **`src/data.js`**

This is the ONLY file you need to edit for content changes!

---

## 👥 1. Profiles (Who's Watching)

**Location:** `src/data.js` - `PROFILES` array

Change the 4 profile options that appear on the profile selection screen.

### Example: Add Your Profiles

```javascript
export const PROFILES = [
  {
    id: 1,
    name: 'Boyfriend',        // ← Change this
    avatar: '💝',             // ← Use any emoji
    description: 'The Birthday Boy',  // ← Change this
  },
  {
    id: 2,
    name: 'Brother',
    avatar: '👦',
    description: 'Family',
  },
  // ... etc
];
```

**Emoji Ideas:**
- 💝 Gift / Heart
- 👨 Man
- 👦 Boy
- 👥 Friends
- ❤️ Red Heart
- 🎉 Party
- 🌟 Star

---

## 🏠 2. Hero Banner (Main Message)

**Location:** `src/data.js` - `HERO_CONTENT` object

This is the large welcome message shown at the top of the home page.

### Example: Customize Hero

```javascript
export const HERO_CONTENT = {
  tagline: 'A Special Release Just For You',    // ← Small text at top
  title: 'Happy Birthday!',                      // ← Main title
  subtitle: 'Your memories, moments, and surprises await',  // ← Description
  ctaText: 'Explore Surprises',                 // ← Button text
};
```

---

## 📸 3. Content Sections & Cards

**Location:** `src/data.js` - `CONTENT_SECTIONS` array

This is where all your memories, photos, videos, and messages go!

### Basic Structure

```javascript
export const CONTENT_SECTIONS = [
  {
    id: 'featured',           // Unique ID (use lowercase with hyphens)
    title: 'Featured Memories',  // Section title
    description: 'The best moments we share',  // Section subtitle
    cards: [
      // ↓ Add as many cards as you want
      {
        id: 'mem-1',                    // Unique ID
        title: 'First Coffee Date',      // Card title
        type: 'photo',                  // 'photo', 'video', or 'message'
        image: 'URL_HERE',              // Image URL
        caption: 'Where it all began ☕', // Small text on card
        content: 'Longer description',  // Details shown in modal
      },
      // ... more cards
    ],
  },
  // ... more sections
];
```

### Card Types Explained

#### TYPE: `photo`

Shows an image with a caption and content.

```javascript
{
  id: 'mem-1',
  title: 'Mountain Adventure',
  type: 'photo',
  image: 'https://images.unsplash.com/photo-xyz?w=400&h=300&fit=crop',
  caption: 'On top of the world with you 🏔️',
  content: 'The hike was tough but worth every step with you by my side.',
}
```

#### TYPE: `video`

Plays an embedded video.

```javascript
{
  id: 'best-1',
  title: 'Laughter in the Rain',
  type: 'video',
  image: 'https://example.com/thumbnail.jpg',  // Preview image
  caption: 'When we couldn\'t stop laughing 😂',
  videoUrl: 'https://example.com/video.mp4',   // Video URL
  description: 'The time we danced in the rain and laughed until we cried',
}
```

#### TYPE: `message`

Shows a heartfelt letter or message.

```javascript
{
  id: 'note-1',
  title: 'Why I Love You',
  type: 'message',
  image: 'https://example.com/image.jpg',  // Background image
  caption: 'A letter to my love',
  message: `You are the reason I believe in love...
  
This can be multiple lines!

Love always, 💕`,
}
```

---

## 🎁 4. Final Surprise

**Location:** `src/data.js` - `FINAL_SURPRISE` object

The big reveal at the end of the app!

### Example: Customize Final Surprise

```javascript
export const FINAL_SURPRISE = {
  title: 'One More Thing...',
  subtitle: 'The Final Surprise',
  message: `You've unlocked the final surprise! 🎊

Customize this message to say something special.
You can have multiple lines!

The message is shown when they click the gift box.`,
  actionText: '🎊 I\'m Ready for the Real Surprise!',
};
```

---

## 🖼️ Image & Video URLs

### Option 1: Free Stock Photos (Easy!)

Copy image URLs directly from these sites:

**Unsplash:**
- Go to https://unsplash.com
- Search for "couple", "beach", "mountain", etc.
- Right-click image → Copy image address
- Paste as `image` URL

**Example:**
```javascript
image: 'https://images.unsplash.com/photo-1469571486213-6f3ee318e838?w=400&h=300&fit=crop'
```

**Other Sites:**
- https://pexels.com (free)
- https://pixabay.com (free)

### Option 2: Local Images

1. Create folder: `public/images/`
2. Put your JPG/PNG files there
3. Use path: `'/images/filename.jpg'`

```javascript
image: '/images/my-photo.jpg'
```

### Option 3: Upload Your Own

- Use free hosting: Imgur, Google Drive, Dropbox
- Get shareable link
- Use the link in your cards

### Video URLs

**Video Hosting:**
- YouTube (embed)
- Vimeo (embed)
- Direct MP4 link

```javascript
videoUrl: 'https://example.com/video.mp4'
```

---

## 🎨 5. Colors & Theme

### Change Netflix Red

**File:** `tailwind.config.js`

```javascript
colors: {
  netflix: {
    dark: '#141414',      // Dark background
    darkAlt: '#221f1f',   // Alternate dark
    red: '#e50914',       // ← Netflix red (CHANGE THIS)
    redHover: '#f40612',  // ← Hover red (CHANGE THIS)
    gray: '#564d4d',
    lightGray: '#808080',
  },
}
```

**Color Codes to Try:**
- Red: `#e50914` (Netflix)
- Pink: `#ff1654`
- Purple: `#7c3aed`
- Blue: `#3b82f6`
- Gold: `#fbbf24`

---

## 📝 Quick Reference: Where to Edit

| What to Change | Where to Edit | Field |
|---|---|---|
| Profile names | `PROFILES` | `name` |
| Profile emojis | `PROFILES` | `avatar` |
| Hero title | `HERO_CONTENT` | `title` |
| Hero subtitle | `HERO_CONTENT` | `subtitle` |
| Section titles | `CONTENT_SECTIONS` | `title` |
| Card titles | Card objects | `title` |
| Card images | Card objects | `image` |
| Card captions | Card objects | `caption` |
| Card messages | Card objects | `message` or `content` |
| Video URLs | Card objects | `videoUrl` |
| Final message | `FINAL_SURPRISE` | `message` |
| Colors | `tailwind.config.js` | `colors` |

---

## 💡 Pro Tips

### Add More Sections

1. Copy an existing section in `CONTENT_SECTIONS`
2. Change the `id`, `title`, and `description`
3. Replace the `cards` array with your new cards

### Duplicate Cards

1. Copy a card object
2. Change the `id` to something unique
3. Update image, title, caption, etc.

### Use Emojis Everywhere

- Titles: `'🎬 Movie Night'`
- Captions: `'Together forever 💕'`
- Messages: Use emojis naturally in text

### Multi-line Messages

```javascript
message: `Line 1
Line 2

Line 3 with space above`,
```

### Hide Sections

Delete the section from `CONTENT_SECTIONS` array (it won't show!)

### Reorder Sections

Cut and paste section objects to reorder them in the array

---

## 🎯 Complete Example

Here's a minimal complete example with 1 section and 2 cards:

```javascript
export const CONTENT_SECTIONS = [
  {
    id: 'memories',
    title: 'Our Best Memories',
    description: 'Moments that matter',
    cards: [
      {
        id: 'card-1',
        title: 'Beach Day',
        type: 'photo',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
        caption: 'Sunset on the beach 🌅',
        content: 'That perfect moment when we watched the sunset together.',
      },
      {
        id: 'card-2',
        title: 'Love Letter',
        type: 'message',
        image: 'https://images.unsplash.com/photo-1516737675857-db3b8b0a1e2d?w=400&h=300&fit=crop',
        caption: 'From my heart',
        message: `Happy Birthday, my love!

You make every day special. I can't wait to make more memories with you.

Forever yours, 💕`,
      },
    ],
  },
];
```

---

## ❌ Common Mistakes to Avoid

❌ **Don't:** Delete commas between objects
```javascript
// WRONG:
{ id: 1 }
{ id: 2 }

// RIGHT:
{ id: 1 },
{ id: 2 },
```

❌ **Don't:** Use single quotes inside single quotes
```javascript
// WRONG:
caption: 'It's amazing'

// RIGHT:
caption: 'It\'s amazing'
// OR:
caption: "It's amazing"
```

❌ **Don't:** Leave `image` or `videoUrl` empty
```javascript
// WRONG:
image: '',

// RIGHT:
image: 'https://example.com/image.jpg',
```

❌ **Don't:** Forget the `id` field
```javascript
// WRONG:
{ title: 'Card' }

// RIGHT:
{ id: 'unique-1', title: 'Card' }
```

---

## ✅ Testing Your Changes

1. Edit `src/data.js`
2. Save the file (Ctrl+S)
3. Check browser - it should hot-reload automatically!
4. If not, refresh the page (F5)

---

## 🆘 Need Help?

- **Syntax error?** - Check for missing commas and quotes
- **Image not showing?** - Copy the full image URL (test in browser first)
- **Changes not appearing?** - Hard refresh browser (Ctrl+Shift+R)
- **Styling weird?** - Clear cache and rebuild (`npm run dev`)

---

**Happy Customizing! 💕**
