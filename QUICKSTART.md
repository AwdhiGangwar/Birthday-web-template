# ⚡ Quick Start Guide

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your app opens at `http://localhost:3000` 🎉

### Step 3: Start Customizing!

Edit `src/data.js` to change:
- Profile names and emojis
- Hero message
- All photos, videos, and messages
- Final surprise message

**Save file → Browser auto-reloads** ✨

---

## 📱 Testing the App

The app has 3 screens:

1. **Intro** (auto-plays, or click "Skip Intro")
2. **Who's Watching?** (select a profile)
3. **Home** (explore all surprises!)

Click any card to see the full content in a modal.

---

## 🖼️ How to Add Your Photos

### Easiest Way: Use Unsplash

1. Go to https://unsplash.com
2. Search anything: "couple", "beach", "mountain"
3. Click an image
4. Copy the URL from address bar
5. Paste into `image` field in `src/data.js`

### From Your Computer

1. Create `public/images/` folder
2. Add your JPG/PNG files
3. Use path: `'/images/myfile.jpg'`

---

## 🎨 Quick Color Change

Edit `tailwind.config.js`:

```javascript
red: '#ff1654',        // Change Netflix red to pink
redHover: '#ff4477',   // Hover color
```

---

## 📚 Next Steps

- Read [README.md](./README.md) for full documentation
- Read [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed examples
- Deploy to Netlify/Vercel
- Surprise your boyfriend! 🎉

---

## 🚀 Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready to deploy!

---

**Questions? Check the README or CUSTOMIZATION_GUIDE!** 💕
