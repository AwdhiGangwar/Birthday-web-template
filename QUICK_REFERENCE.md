# 🎁 Quick Reference Card

## 🚀 Start Now (Copy & Paste)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser to http://localhost:3000
```

---

## 📝 Edit Content (in `src/data.js`)

### Change Profiles
```javascript
export const PROFILES = [
  { id: 1, name: 'Name', avatar: '💝', description: 'Desc' },
  // ... more profiles
];
```

### Add Photo
```javascript
{
  id: 'photo-1',
  title: 'Beach Day',
  type: 'photo',
  image: 'https://images.unsplash.com/...',
  caption: 'Our best day 🌅',
  content: 'Description here'
}
```

### Add Message
```javascript
{
  id: 'msg-1',
  title: 'Love Letter',
  type: 'message',
  image: 'https://...',
  caption: 'From my heart',
  message: 'Your message here...'
}
```

### Add Video
```javascript
{
  id: 'vid-1',
  title: 'Memories',
  type: 'video',
  image: 'https://...',
  caption: 'Our video 🎥',
  videoUrl: 'https://example.com/video.mp4',
  description: 'Description'
}
```

---

## 🎨 Change Colors (in `tailwind.config.js`)

```javascript
colors: {
  netflix: {
    red: '#ff1654',        // Change this
    redHover: '#ff4477',   // And this
  }
}
```

---

## 📚 Documentation Files

| File | Purpose |
|---|---|
| [START_HERE.md](./START_HERE.md) | Visual summary (this) |
| [README.md](./README.md) | Complete guide |
| [QUICKSTART.md](./QUICKSTART.md) | 5-min setup |
| [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) | Detailed examples |
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | Architecture |
| [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md) | Step-by-step checklist |

---

## 📂 Where to Edit

```
src/
└── data.js ⭐ EDIT EVERYTHING HERE!
    ├── PROFILES (profiles)
    ├── HERO_CONTENT (hero message)
    ├── CONTENT_SECTIONS (photos, videos, messages)
    └── FINAL_SURPRISE (final message)

tailwind.config.js ⭐ Edit colors here
postcss.config.js
vite.config.js
```

---

## 🖼️ Add Images

```javascript
// Option 1: Unsplash URL
image: 'https://images.unsplash.com/photo-...'

// Option 2: Local file (put in public/images/)
image: '/images/my-photo.jpg'

// Option 3: Any public URL
image: 'https://imgur.com/...'
```

---

## 🎬 App Screens

1. **Intro** - 6 sec animated intro (skip available)
2. **Profiles** - Choose a profile
3. **Home** - Content carousels
4. **Modal** - Click card to view details
5. **Surprise** - Click gift box at bottom

---

## ✅ Before Deploying

- [ ] Edit profiles
- [ ] Add photos (8-12)
- [ ] Add messages (2-4)
- [ ] Update hero message
- [ ] Update final surprise message
- [ ] Test on mobile
- [ ] Test on desktop
- [ ] Check image URLs work

---

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy dist/ folder to:
# - Netlify (free, easiest)
# - Vercel (free)
# - GitHub Pages (free)
# - Any hosting
```

---

## 💡 Pro Tips

✨ Use emojis everywhere!  
📸 High-quality photos work best  
💬 Write from your heart  
🎨 Keep design personal  
📱 Test on mobile  
🔄 Auto-reload on save  

---

## 🆘 Quick Fixes

| Issue | Fix |
|---|---|
| Port 3000 taken | `npm run dev -- --port 3001` |
| Image not loading | Check URL in browser first |
| Changes not showing | Hard refresh: Ctrl+Shift+R |
| Styling off | Restart dev server |

---

## 📞 Need Help?

1. Read [QUICKSTART.md](./QUICKSTART.md) (5 min)
2. Read [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) (examples)
3. Check [README.md](./README.md) (complete guide)

---

## 🎉 You're All Set!

```bash
npm install
npm run dev
# Edit src/data.js
# Add photos
# Surprise him!
```

**Made with ❤️ for your special day**
