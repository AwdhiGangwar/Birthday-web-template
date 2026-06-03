/**
 * DATA CONSTANTS
 * Profile-wise content for Boyfriend / Brother / Son / Friend
 *
 * Folder structure:
 * public/images/cards/boyfriend/  → 1.jpg to 8.jpg, boyfriend-poster.jpg
 * public/images/cards/brother/    → 1.jpg to 8.jpg
 * public/images/cards/son/        → 1.jpg to 8.jpg
 * public/images/cards/friend/     → 1.jpg to 8.jpg
 *
 * Also:
 * public/images/  → profile1.jpg, profile2.jpg, profile3.jpg, profile4.jpg, logo.jpg
 * public/videos/
 */

const makeSection = (id, title, description, cards) => ({
  id,
  title,
  description,
  cards,
});

const makeCard = (id, title, type, image, caption, extra = {}) => ({
  id,
  title,
  type,
  image,
  caption,
  ...extra,
});

export const PROFILES = [
  {
    id: 1,
    key: "boyfriend",
    name: "Boyfriend",
    image: "/images/profile1.jpg",
    heroVideo: "/videos/boyfriend.mp4",
    heroPoster: "/images/cards/boyfriend/boyfriend-poster.jpg",
    heroTitle: "Happy Birthday Ratul ❤️",
    heroTagline: "SPECIAL EDITION",
    heroDescription: "A little surprise made with lots of love.",
    heroSubtitle: "Every memory here is dedicated to you.",
    ctaText: "Play",
  },
  {
    id: 2,
    key: "brother",
    name: "Brother",
    image: "/images/profile2.jpg",
    heroVideo: "/videos/brother.mp4",
    heroPoster: "/images/cards/brother/1.jpg",
    heroTitle: "Best Brother Ever",
    heroTagline: "FAMILY COLLECTION",
    heroDescription: "A collection of unforgettable moments.",
    heroSubtitle: "Some memories deserve their own series.",
    ctaText: "Watch",
  },
  {
    id: 3,
    key: "son",
    name: "Son",
    image: "/images/profile3.jpg",
    heroVideo: "/videos/son.mp4",
    heroPoster: "/images/cards/son/1.jpg",
    heroTitle: "Little Superstar",
    heroTagline: "KIDS SPECIAL",
    heroDescription: "Adventures, laughter and fun.",
    heroSubtitle: "Your journey deserves a spotlight.",
    ctaText: "Play",
  },
  {
    id: 4,
    key: "friend",
    name: "Friend",
    image: "/images/profile4.jpg",
    heroVideo: "/videos/friend.mp4",
    heroPoster: "/images/cards/friend/1.jpg",
    heroTitle: "Partners In Crime",
    heroTagline: "BEST FRIEND COLLECTION",
    heroDescription: "The funniest memories together.",
    heroSubtitle: "Friendship never goes out of style.",
    ctaText: "Watch",
  },
];

export const PROFILE_CONTENT = {
  boyfriend: [
    makeSection(
      "bf-featured",
      "Featured Memories",
      "The best moments we share",
      [
        makeCard("bf-1", "First Coffee Date", "photo", "/images/cards/boyfriend/1.jpg", "Where it all began ☕", {
          content: "That magical morning when we first met.",
        }),
        makeCard("bf-2", "Mountain Adventure", "photo", "/images/cards/boyfriend/2.jpg", "On top of the world with you 🏔️", {
          content: "The hike was tough but worth every step.",
        }),
        makeCard("bf-3", "Beach Sunset", "photo", "/images/cards/boyfriend/3.jpg", "Golden hour magic 🌅", {
          content: "Watching the sunset together felt unreal.",
        }),
        makeCard("bf-4", "Rainy Day At Home", "photo", "/images/cards/boyfriend/4.jpg", "Cozy moments at home 🏡", {
          content: "The simplest days with you are the best.",
        }),
      ]
    ),
    makeSection(
      "bf-best",
      "Best Moments",
      "Highlights we cherish",
      [
        makeCard("bf-5", "Laughter in the Rain", "video", "/images/cards/boyfriend/5.jpg", "Dancing and laughing endlessly 😂", {
          videoUrl: "/videos/video1.mp4",
          description: "The time we danced in the rain and laughed until we cried.",
        }),
        makeCard("bf-6", "Concert Night", "video", "/images/cards/boyfriend/6.jpg", "Our favorite song together 🎵", {
          videoUrl: "/videos/video2.mp4",
          description: "The night we heard our song live.",
        }),
        makeCard("bf-7", "Cooking Together", "photo", "/images/cards/boyfriend/7.jpg", "Messy kitchen, perfect moments 🍳", {
          content: "We burned the pasta but made beautiful memories.",
        }),
        makeCard("bf-8", "Stargazing Night", "photo", "/images/cards/boyfriend/8.jpg", "Under the stars with you ✨", {
          content: "You made every star shine brighter.",
        }),
      ]
    ),
    makeSection(
      "bf-cute",
      "Cute Photos",
      "Smile, laugh, love",
      [
        makeCard("bf-9", "Silly Selfie", "photo", "/images/cards/boyfriend/1.jpg", "Making faces together 😜", {
          content: "You always make me smile like this.",
        }),
        makeCard("bf-10", "Cozy Cuddles", "photo", "/images/cards/boyfriend/2.jpg", "My favorite place is your arms 💕", {
          content: "Warmth and comfort with you.",
        }),
        makeCard("bf-11", "Sweet Kiss", "photo", "/images/cards/boyfriend/3.jpg", "Forever and always 💋", {
          content: "Every kiss with you is special.",
        }),
        makeCard("bf-12", "Hand In Hand", "photo", "/images/cards/boyfriend/4.jpg", "Never let go 🤝", {
          content: "I want to hold your hand through it all.",
        }),
      ]
    ),
    makeSection(
      "bf-notes",
      "Love Notes",
      "Words from the heart",
      [
        makeCard("bf-13", "Why I Love You", "message", "/images/cards/boyfriend/boyfriend-poster.jpg", "A letter to my love", {
          message: "You are the reason I believe in love. Every day feels brighter with you.",
        }),
        makeCard("bf-14", "Forever With You", "message", "/images/cards/boyfriend/boyfriend-poster.jpg", "My promise to you", {
          message: "On your special day, I want you to know that you are my greatest blessing.",
        }),
        makeCard("bf-15", "Best Decision", "message", "/images/cards/boyfriend/boyfriend-poster.jpg", "My proudest choice", {
          message: "Loving you is the best decision I ever made.",
        }),
        makeCard("bf-16", "My Heart's Home", "message", "/images/cards/boyfriend/boyfriend-poster.jpg", "You are my home", {
          message: "Home is not a place, it is a person. You are my home.",
        }),
      ]
    ),
  ],

  brother: [
    makeSection(
      "br-featured",
      "Brother Moments",
      "Fun chaos, inside jokes, and memories",
      [
        makeCard("br-1", "Childhood Mischief", "photo", "/images/cards/brother/1.jpg", "The troublemakers duo 😄", {
          content: "All the silly things we did growing up.",
        }),
        makeCard("br-2", "Family Trip", "photo", "/images/cards/brother/2.jpg", "Road trip memories 🚗", {
          content: "A trip full of laughter, food, and fights over the window seat.",
        }),
        makeCard("br-3", "Festival Time", "photo", "/images/cards/brother/3.jpg", "Lights, sweets, and celebration 🎆", {
          content: "The best part of festivals is doing them together.",
        }),
        makeCard("br-4", "Selfie Chaos", "photo", "/images/cards/brother/4.jpg", "Too many photos, not enough patience 📸", {
          content: "Every selfie becomes a funny memory.",
        }),
      ]
    ),
    makeSection(
      "br-best",
      "Best Times",
      "The moments that always make us laugh",
      [
        makeCard("br-5", "Late Night Talks", "photo", "/images/cards/brother/5.jpg", "Real talk after everyone sleeps 🌙", {
          content: "Those random deep conversations are the best.",
        }),
        makeCard("br-6", "Food Hunt", "photo", "/images/cards/brother/6.jpg", "Hungry team mission 🍕", {
          content: "Searching for snacks like it is a treasure hunt.",
        }),
        makeCard("br-7", "Game Day", "photo", "/images/cards/brother/7.jpg", "Friendly competition 🎮", {
          content: "No matter who wins, the bragging never ends.",
        }),
        makeCard("br-8", "Birthday Bash", "photo", "/images/cards/brother/8.jpg", "Cake, gifts, and drama 🎂", {
          content: "Every celebration becomes a story.",
        }),
      ]
    ),
    makeSection(
      "br-cute",
      "Funny Photos",
      "The pictures that never fail to tease",
      [
        makeCard("br-9", "Serious Pose Fail", "photo", "/images/cards/brother/1.jpg", "Trying to act cool 😎", {
          content: "But the face gives everything away.",
        }),
        makeCard("br-10", "Sleepy Face", "photo", "/images/cards/brother/2.jpg", "No filter needed 😴", {
          content: "Captured at the most natural moment.",
        }),
        makeCard("br-11", "Crazy Hair Day", "photo", "/images/cards/brother/3.jpg", "Wind was not our friend 💨", {
          content: "A photo that lives forever in family teasing.",
        }),
        makeCard("br-12", "Unexpected Laugh", "photo", "/images/cards/brother/4.jpg", "Could not stop laughing 😂", {
          content: "That one joke ruined the whole photo session.",
        }),
      ]
    ),
    makeSection(
      "br-notes",
      "Brother Notes",
      "Small messages, big love",
      [
        makeCard("br-13", "Always My Shield", "message", "/images/cards/brother/5.jpg", "A brother's support matters most", {
          message: "Thank you for always being there, even when you pretend not to care.",
        }),
        makeCard("br-14", "My First Friend", "message", "/images/cards/brother/6.jpg", "Built-in best friend", {
          message: "No one can replace the bond we share.",
        }),
        makeCard("br-15", "The Teasing Expert", "message", "/images/cards/brother/7.jpg", "Annoying but lovable", {
          message: "You have annoyed me all my life, but I would not trade you for anything.",
        }),
        makeCard("br-16", "Forever Family", "message", "/images/cards/brother/8.jpg", "Blood and love", {
          message: "No matter what happens, family always stays family.",
        }),
      ]
    ),
  ],

  son: [
    makeSection(
      "son-featured",
      "Little Superstar",
      "Cute and joyful memories",
      [
        makeCard("son-1", "First Smile", "photo", "/images/cards/son/1.jpg", "Tiny smile, huge happiness 😊", {
          content: "The first smile that melted every heart.",
        }),
        makeCard("son-2", "Play Time", "photo", "/images/cards/son/2.jpg", "Fun never ends 🧸", {
          content: "Every game becomes an adventure.",
        }),
        makeCard("son-3", "Birthday Cake", "photo", "/images/cards/son/3.jpg", "Sweetest moment ever 🎂", {
          content: "Cake, balloons, and endless excitement.",
        }),
        makeCard("son-4", "Favorite Toy", "photo", "/images/cards/son/4.jpg", "Best buddy forever 🚂", {
          content: "The toy that went everywhere.",
        }),
      ]
    ),
    makeSection(
      "son-best",
      "Happy Days",
      "Little things that made big memories",
      [
        makeCard("son-5", "Park Day", "photo", "/images/cards/son/5.jpg", "Running free outside 🌳", {
          content: "The joy of open sky and fresh air.",
        }),
        makeCard("son-6", "Sleepy Time", "photo", "/images/cards/son/6.jpg", "Too tired to stay awake 😴", {
          content: "A peaceful end to a busy day.",
        }),
        makeCard("son-7", "Drawing Time", "photo", "/images/cards/son/7.jpg", "Little artist at work 🎨", {
          content: "Every scribble becomes a masterpiece.",
        }),
        makeCard("son-8", "Family Hug", "photo", "/images/cards/son/8.jpg", "Warmest hug ever 🤗", {
          content: "Nothing feels better than family love.",
        }),
      ]
    ),
    makeSection(
      "son-cute",
      "Sweet Moments",
      "Smiles, laughter and innocence",
      [
        makeCard("son-9", "Cute Expression", "photo", "/images/cards/son/1.jpg", "That adorable face 💖", {
          content: "A moment everyone wanted to capture.",
        }),
        makeCard("son-10", "Mini Hero", "photo", "/images/cards/son/2.jpg", "Saving the day 🦸", {
          content: "Pretending to be the strongest in the room.",
        }),
        makeCard("son-11", "Happy Dance", "photo", "/images/cards/son/3.jpg", "Tiny steps, big joy 💃", {
          content: "A dance only pure happiness can create.",
        }),
        makeCard("son-12", "Snack Time", "photo", "/images/cards/son/4.jpg", "Favorite treat moment 🍪", {
          content: "Nothing beats a happy snack face.",
        }),
      ]
    ),
    makeSection(
      "son-notes",
      "Little Love Notes",
      "For the special little one",
      [
        makeCard("son-13", "You Are Loved", "message", "/images/cards/son/5.jpg", "Always and forever", {
          message: "You are a gift, a joy, and the brightest part of every day.",
        }),
        makeCard("son-14", "Proud of You", "message", "/images/cards/son/6.jpg", "Every small step matters", {
          message: "Watching you grow is the sweetest feeling.",
        }),
        makeCard("son-15", "My Sunshine", "message", "/images/cards/son/7.jpg", "You light up every room", {
          message: "Your smile makes everything better.",
        }),
        makeCard("son-16", "Big Dreams", "message", "/images/cards/son/8.jpg", "Keep shining", {
          message: "Dream big, stay kind, and never stop believing in yourself.",
        }),
      ]
    ),
  ],

  friend: [
    makeSection(
      "fr-featured",
      "Best Friend Collection",
      "All the crazy, cute, unforgettable moments",
      [
        makeCard("fr-1", "First Hangout", "photo", "/images/cards/friend/1.jpg", "Instant vibe check 🤝", {
          content: "The first day we knew this friendship was special.",
        }),
        makeCard("fr-2", "Road Trip", "photo", "/images/cards/friend/2.jpg", "Good music, bad directions 🚙", {
          content: "Every wrong turn became part of the fun.",
        }),
        makeCard("fr-3", "Cafe Talk", "photo", "/images/cards/friend/3.jpg", "Hours of nonstop gossip ☕", {
          content: "We started with coffee and ended with life advice.",
        }),
        makeCard("fr-4", "Festival Fun", "photo", "/images/cards/friend/4.jpg", "Best energy ever 🎉", {
          content: "Friendship hits different during celebrations.",
        }),
      ]
    ),
    makeSection(
      "fr-best",
      "Crazy Times",
      "The stories we will never forget",
      [
        makeCard("fr-5", "Late Night Call", "photo", "/images/cards/friend/5.jpg", "One call became three hours 📱", {
          content: "The kind of conversation that fixes everything.",
        }),
        makeCard("fr-6", "Random Laugh Attack", "photo", "/images/cards/friend/6.jpg", "Laughing for no reason 😂", {
          content: "Those moments are always the best.",
        }),
        makeCard("fr-7", "Shopping Chaos", "photo", "/images/cards/friend/7.jpg", "Too many choices, zero patience 🛍️", {
          content: "Decision making was never our strong point.",
        }),
        makeCard("fr-8", "Snack Break", "photo", "/images/cards/friend/8.jpg", "Priority: food first 🍟", {
          content: "No friendship survives without snacks.",
        }),
      ]
    ),
    makeSection(
      "fr-cute",
      "Cool Photos",
      "The pictures we actually like showing",
      [
        makeCard("fr-9", "Best Pose", "photo", "/images/cards/friend/1.jpg", "Finally a decent photo 😎", {
          content: "One shot out of twenty, but worth it.",
        }),
        makeCard("fr-10", "Mirror Selfie", "photo", "/images/cards/friend/2.jpg", "Trying to look aesthetic ✨", {
          content: "We definitely nailed it this time.",
        }),
        makeCard("fr-11", "Birthday Pic", "photo", "/images/cards/friend/3.jpg", "Cake and chaos 🎂", {
          content: "Every birthday with a friend becomes memorable.",
        }),
        makeCard("fr-12", "Group Photo", "photo", "/images/cards/friend/4.jpg", "The one where everyone blinked 📷", {
          content: "Still somehow our favorite picture.",
        }),
      ]
    ),
    makeSection(
      "fr-notes",
      "Friendship Notes",
      "Words for the one who stays",
      [
        makeCard("fr-13", "Thank You", "message", "/images/cards/friend/5.jpg", "For being there", {
          message: "Thank you for listening, supporting, and making life lighter.",
        }),
        makeCard("fr-14", "Forever Friend", "message", "/images/cards/friend/6.jpg", "No replacement", {
          message: "A real friend is rare, and I am lucky to have you.",
        }),
        makeCard("fr-15", "Safe Space", "message", "/images/cards/friend/7.jpg", "No judgment zone", {
          message: "You make it easy to be myself.",
        }),
        makeCard("fr-16", "Always Us", "message", "/images/cards/friend/8.jpg", "Same vibe forever", {
          message: "No matter where life takes us, the bond stays the same.",
        }),
      ]
    ),
  ],
};

export const getSectionsForProfile = (profileName = "") => {
  const rawKey =
    typeof profileName === "string"
      ? profileName
      : profileName?.key ?? profileName?.name ?? "";

  const key = rawKey.toLowerCase();
  return PROFILE_CONTENT[key] || [];
};

export const NAV_LABELS = {
  home: "Home",
  profile: "Profile",
  logout: "Sign Out",
};

export const FOOTER_CONTENT = {
  year: new Date().getFullYear(),
  credit: "Made with ❤️ for your special day",
};

export const FINAL_SURPRISE = {
  title: 'One More Thing...',
  subtitle: 'The Final Surprise',
  message: `You have unlocked the final surprise! 🎊

I hope this little app has made you smile and reminded you of all the beautiful moments we share. But the real gift is not on this screen - it is waiting for you in real life.

So... close your laptop, grab your shoes, and let us go make more memories together!

Happy Birthday, my love! 🎉💕

P.S. I love you more than Netflix loves a good plot twist. 😘`,
  actionText: '🎊 I am Ready for the Real Surprise!',
};