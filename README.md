# 🎉 Happy Birthday - Netflix Inspired Surprise App

A beautiful, cinematic, and fully responsive React web app for a romantic birthday surprise experience. This app mimics Netflix's visual language and provides a complete surprise reveal experience with memories, messages, and special moments.

## 🎬 Features

✨ **Netflix-Style Intro** - Animated logo reveal with cinematic feel  
👥 **Profile Selection** - "Who's Watching?" screen with profile cards  
🏠 **Home Page** - Dark Netflix-themed homepage with hero banner  
💝 **Content Sections** - Multiple carousels of memories, moments, and messages  
📷 **Photo Gallery** - Beautiful image cards with captions  
🎥 **Video Player** - Embedded videos for special moments  
💌 **Love Notes** - Heartfelt messages and birthday letters  
🎁 **Final Surprise** - Interactive reveal with confetti animation  
📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop  
⚡ **Smooth Animations** - Polished transitions and hover effects  

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will automatically open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📁 Project Structure

```
bday/
├── src/
│   ├── components/
│   │   ├── IntroScreen.jsx          # Netflix-style intro
│   │   ├── ProfileSelector.jsx      # "Who's Watching?" screen
│   │   ├── Navbar.jsx               # Top navigation bar
│   │   ├── HeroBanner.jsx           # Hero section with birthday message
│   │   ├── ContentRow.jsx           # Scrollable carousel row
│   │   ├── PosterCard.jsx           # Individual card component
│   │   ├── Modal.jsx                # Detail view modal
│   │   ├── SurpriseReveal.jsx       # Final surprise section
│   │   ├── Footer.jsx               # Footer component
│   │   └── index.js                 # Component exports
│   ├── App.jsx                      # Main app component with state
│   ├── App.css                      # Global styles
│   ├── index.css                    # Tailwind imports
│   ├── main.jsx                     # React entry point
│   └── data.js                      # ⭐ ALL CONTENT DATA HERE
├── index.html                       # HTML entry point
├── package.json                     # Dependencies
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.js                   # Vite configuration
└── README.md                        # This file
```

## ✏️ Customization Guide

### 🎯 **Easiest Way: Edit `src/data.js`**

Everything you need to customize is in `src/data.js`. You don't need to touch components!

### 👥 Change Profiles

Edit the `PROFILES` array in `src/data.js`:

```javascript
export const PROFILES = [
  {
    id: 1,
    name: 'Your Custom Name',
    avatar: '👨',  // Use any emoji
    description: 'Your custom description',
  },
  // ... more profiles
];
```

### 🎬 Edit Hero Banner

Customize the main hero section:

```javascript
export const HERO_CONTENT = {
  tagline: 'Your custom tagline',
  title: 'Happy Birthday!',
  subtitle: 'Your custom subtitle',
  ctaText: 'Custom Button Text',
};
```

### 📸 Add/Edit Content Sections

Edit the `CONTENT_SECTIONS` array to add new sections or modify existing ones:

```javascript
export const CONTENT_SECTIONS = [
  {
    id: 'featured',
    title: 'Featured Memories',
    description: 'The best moments we share',
    cards: [
      {
        id: 'mem-1',
        title: 'Coffee Date',
        type: 'photo',  // 'photo', 'video', or 'message'
        image: 'https://your-image-url.jpg',
        caption: 'A special moment ☕',
        content: 'Description of this memory',
      },
      // ... more cards
    ],
  },
  // ... more sections
];
```

### 🎁 Change Final Surprise Message

Edit `FINAL_SURPRISE` in `src/data.js`:

```javascript
export const FINAL_SURPRISE = {
  title: 'Your custom title',
  subtitle: 'Your custom subtitle',
  message: `Your custom message
with multiple lines`,
  actionText: 'Your button text',
};
```

## 🖼️ Image & Video URLs

### Using Online Images (Recommended)

1. **Unsplash** (free): https://unsplash.com
2. **Pexels** (free): https://pexels.com
3. **Pixabay** (free): https://pixabay.com
4. **Your own server**: Upload images to your hosting

Example:
```javascript
image: 'https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop'
```

### Using Local Images

1. Create a `public/images` folder
2. Add your images there
3. Reference them:
```javascript
image: '/images/my-photo.jpg'
```

### Video URLs

Use video hosting services:
- **YouTube**: Embed videos
- **Vimeo**: Embed videos
- **Direct MP4**: Google Drive, Dropbox, or video hosting

Example:
```javascript
videoUrl: 'https://example.com/video.mp4'
```

## 🎨 Styling & Colors

### Change Netflix Red

Edit `tailwind.config.js`:

```javascript
colors: {
  netflix: {
    red: '#YOUR_COLOR_CODE',  // Change this
    redHover: '#YOUR_HOVER_COLOR',
  },
}
```

### Modify Animations

Edit animation timing in `tailwind.config.js` or `src/App.css`

### Custom Fonts

The app uses system fonts by default. To use custom fonts, add to `tailwind.config.js`:

```javascript
fontFamily: {
  netflix: ['Your Font', 'sans-serif'],
}
```

## 🔄 Page Flow

1. **Intro Screen** (6 seconds)
   - Netflix-style animated intro
   - Auto-plays or can skip

2. **Profile Selection**
   - Choose a profile
   - Transition animation

3. **Home Page**
   - Hero banner with birthday message
   - Multiple content carousels
   - Final surprise section
   - Footer

4. **Modal Details**
   - Click any card to view details
   - Photo, video, or message content
   - Close with X button or escape key

## 🎥 Screen States

The app manages 3 main screens:
- `intro` - Initial intro animation
- `profile` - Profile selection
- `home` - Main homepage with content

Navigation happens via state changes in `App.jsx`

## 📱 Responsive Breakpoints

- **Mobile** - Under 640px (sm)
- **Tablet** - 640px to 1024px (md)
- **Desktop** - Over 1024px (lg)

All components automatically adapt to screen size!

## 🚀 Deployment

### Deploy to Netlify (Easiest)

1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Push code to GitHub
2. Import project to Vercel
3. It auto-detects Vite and builds automatically

### Deploy to GitHub Pages

1. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repo-name/',
  ...
})
```

2. Run: `npm run build`
3. Deploy the `dist` folder

## 🛠️ Technical Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PostCSS & Autoprefixer** - CSS processing

## 📝 Component Architecture

### App.jsx (Main)
- State management for screens and modals
- Routes between intro, profile, and home
- Passes props to child components

### IntroScreen
- Animated intro with skip button
- Auto-completes after 6 seconds

### ProfileSelector
- Grid of profile cards
- Selection state and transition

### Navbar
- Sticky navigation
- Scroll detection for dynamic background
- Profile display and logout button

### HeroBanner
- Full-screen hero section
- Animated text and buttons
- Scroll indicator

### ContentRow
- Horizontal scrollable carousel
- Scroll buttons on hover
- Maps cards from data

### PosterCard
- Individual card with hover effects
- Image, title, caption, action button
- Click to open modal

### Modal
- Full-screen overlay
- Supports photos, videos, messages
- Close on escape or click outside

### SurpriseReveal
- Final interactive surprise
- Confetti animation
- Heartfelt message reveal

### Footer
- Credits and links
- Responsive grid layout

## 🎯 Best Practices Used

✅ Functional components with hooks  
✅ Component composition and reusability  
✅ Prop drilling minimization  
✅ Semantic HTML  
✅ Accessibility features (buttons, alt text, focus states)  
✅ Mobile-first responsive design  
✅ Performance optimizations (lazy loading images)  
✅ Clean code with comments  
✅ Data separation from components  

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Images not loading
- Check image URL is correct
- Ensure CORS headers are set if using external images
- Use full URLs instead of relative paths

### Animations not smooth
- Ensure hardware acceleration is enabled
- Reduce number of animations if on low-end device
- Check browser supports CSS animations

### Modal not closing
- Try pressing Escape key
- Click outside the modal
- Check browser console for errors

## 💡 Tips & Tricks

- **Customize easily**: Only edit `src/data.js` for content changes
- **Add more sections**: Duplicate a section in `CONTENT_SECTIONS` array
- **Change colors**: Modify `tailwind.config.js`
- **Add emojis**: Use emoji picker and paste anywhere
- **Smooth scroll**: Click any section title to scroll there
- **Responsive testing**: Use Chrome DevTools device emulation

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Web.dev Performance](https://web.dev)
- [Emoji Picker](https://emojipicker.com)
- [Unsplash Images](https://unsplash.com)

## 🎉 Have Fun!

This app is built with ❤️ for a special surprise. Feel free to customize it completely to match your personality and make it extra special!

---

**Made with 💕 for your special day** 🎂✨
