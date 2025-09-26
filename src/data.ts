import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Arthur Blazhevich",
  role: "Lead/Principal Unity Developer",
  introduction: "Game and Backend Developer with 14 years of experience",
  description: "Product-oriented Backend and Game Developer with 14 years of experience of creating and optimizing mobile games and backend solutions. Proven expertise in elevating technical standards, architecting scalable and performant solutions, and leading development teams through mentorship and hands-on engineering in a startup environment. An expert in performance optimization and full-stack gameplay development, from backend services to client-side Unity programming. Deep understanding of the mobile gaming market and technologies that power it.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpeg`,
  cvUri: `${process.env.PUBLIC_URL}/files/CV_ArthurBlazhevich.pdf`,
  links: {
    github: "https://github.com/arthurbla",
    linkedIn: "https://www.linkedin.com/in/arthur-blazhevich",
  }
};

export const games: Game[] = [
  {
    name: "Wizario: Idle Survival",
    description: "The epic clash has ended in defeat. The Dark Lord prevails, and the once-great wizard is stripped of all his powers. Now, weak and powerless, you must start again from nothing—gathering resources, crafting tools, and rebuilding your strength to face him once more.",
    genre: "RPG",
    role: "Lead/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/wizario/1.webp", type: MediaType.Image },
      { source: "/images/games/wizario/2.webp", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/vYA7nCwlF_g", type: MediaType.YouTube },
    ],
    
  },
  {
    name: "OFC Double",
    description: "Open Face Chinese Poker! Play this interesting poker variation with your friends or find games in the lobby!",
    genre: "Poker",
    role: "Lead/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/ofc/ofc_d_1.jpg", type: MediaType.Image },
      { source: "/images/games/ofc/ofc_d_2.jpg", type: MediaType.Image },
      { source: "/images/games/ofc/ofc_d_3.jpg", type: MediaType.Image },
      { source: "/images/games/ofc/ofc_d_4.jpg", type: MediaType.Image },
      { source: "/images/games/ofc/ofc_d_5.jpg", type: MediaType.Image },
    ],

  },
  {
    name: "Serenity's Spa: Beauty Salon",
    description: "Manage and develop your own beauty salon – Serenity's Spa 🧖‍♀️! Practice your salon development and customer management skills. Working in the beauty salon have never been so much fun and exciting! Upgrade your beauty procedure stations and kitchenware for a better gaming experience!",
    genre: "Simulation",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/serenity/1.webp", type: MediaType.Image },
      { source: "/images/games/serenity/2.webp", type: MediaType.Image },
      { source: "/images/games/serenity/3.webp", type: MediaType.Image },
      { source: "/images/games/serenity/4.webp", type: MediaType.Image },
      { source: "/images/games/serenity/5.webp", type: MediaType.Image },
      { source: "/images/games/serenity/6.webp", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/YswepibFaO0", type: MediaType.YouTube },
    ],

  },
  {
    name: "Blitz Heroes",
    description: "Battle your way to the top! Fun and innovative fighting game! Progress trough the campaign and battle in PvP mode!",
    genre: "RPG",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/blitz/blitz0.webp", type: MediaType.Image },
      { source: "/images/games/blitz/blitz1.webp", type: MediaType.Image },
      { source: "/images/games/blitz/blitz2.webp", type: MediaType.Image },
      { source: "/images/games/blitz/blitz3.webp", type: MediaType.Image },
      { source: "/images/games/blitz/blitz4.webp", type: MediaType.Image },
      { source: "/images/games/blitz/blitz5.webp", type: MediaType.Image },
    ],

  },
  {
    name: "Golf Knockout",
    description: "Fast-paced and fun multiplayer knockout game! Join the challenging multiplayer Golf Knockout game! Compete against 31 other players in fun and fast-paced courses!\n" +
      "Can you avoid the water? Hit the fast forward zone? Avoid the moving obstacles? Become the golf master and conquer top prizes!",
    genre: "Simulation",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/golf/golf1.webp", type: MediaType.Image },
      { source: "/images/games/golf/golf2.webp", type: MediaType.Image },
      { source: "/images/games/golf/golf3.webp", type: MediaType.Image },
      { source: "/images/games/golf/golf4.webp", type: MediaType.Image },
      { source: "/images/games/golf/golf5.webp", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/rQxE2oSdN_M", type: MediaType.YouTube },
    ],

  },
  {
    name: "Hollywood Match",
    description: "Makeover Puzzle Game! Take over the Hollywood! Find new look for actors, set up movie sets and film the next hit movie! Join your friends and other players around the world in this makeover project! Enjoy sweet puzzles and match tiles to advance your journey!",
    genre: "Stacking game/Makeover",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/holywood/holywood1.webp", type: MediaType.Image },
      { source: "/images/games/holywood/holywood2.webp", type: MediaType.Image },
      { source: "/images/games/holywood/holywood3.webp", type: MediaType.Image },
      { source: "/images/games/holywood/holywood4.webp", type: MediaType.Image },
      { source: "/images/games/holywood/holywood5.webp", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/DMyJ4Ek65Hg", type: MediaType.YouTube },
    ],

  },
  {
    name: "Filmmakers",
    description: "Filmmakers is a casual game whose way of working reminds you of popular games like Piggy Go or Coin Master, but with a completely different premise. Here, you have to help a young girl become a famous actress. To do this, you have to improve her image, advise her on her style and decorate the hovel of a home so that she's up to scratch in the circles she's going to move in.",
    genre: "Social Casino/Makeover",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/filmmakers/filmmakers1.jpeg", type: MediaType.Image },
      { source: "/images/games/filmmakers/filmmakers2.jpeg", type: MediaType.Image },
      { source: "/images/games/filmmakers/filmmakers3.jpeg", type: MediaType.Image },
      { source: "/images/games/filmmakers/filmmakers4.jpeg", type: MediaType.Image },
      { source: "/images/games/filmmakers/filmmakers5.jpeg", type: MediaType.Image },
      { source: "/images/games/filmmakers/filmmakers6.jpeg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/2GUc_rhJTuQ", type: MediaType.YouTube },
    ],

  },
  {
    name: "Coin Trip",
    description: "Coin Trip is a fun game of chance where you travel around the world building ancient civilizations and modern cities on an adventure where luck plays a major role. If you like games of chance and want to try your luck against other users from all around the world without betting real money, this fun game offers a great adventure that will keep you hooked for hours.",
    genre: "Social Casino",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/cointrip/cointrip1.jpeg", type: MediaType.Image },
      { source: "/images/games/cointrip/cointrip2.jpeg", type: MediaType.Image },
      { source: "/images/games/cointrip/cointrip3.jpeg", type: MediaType.Image },
      { source: "/images/games/cointrip/cointrip4.jpeg", type: MediaType.Image },
      { source: "/images/games/cointrip/cointrip5.jpeg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/ibkh1jHT4II", type: MediaType.YouTube },
    ],

  },
  {
    name: "Dune Wars",
    description: "Become the most powerful player in the world!\n" +
      "\n" +
      "Grow your base, defend your resources and attack other competitors!",
    genre: "RPG",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/dunewars/dunewars1.webp", type: MediaType.Image },
      { source: "/images/games/dunewars/dunewars2.webp", type: MediaType.Image },
      { source: "/images/games/dunewars/dunewars3.webp", type: MediaType.Image },
      { source: "/images/games/dunewars/dunewars4.webp", type: MediaType.Image },
      { source: "/images/games/dunewars/dunewars5.webp", type: MediaType.Image },
      { source: "/images/games/dunewars/dunewars6.webp", type: MediaType.Image },
      { source: "/images/games/dunewars/dunewars7.webp", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/5eQjqBXQXgM", type: MediaType.YouTube },
    ],

  },
  {
    name: "Bike Up!",
    description: "Bike Up! is the most epic bike trial game ever!\n" +
      "\n" +
      "Master your bike riding skills to overcome obstacles and collect treasures through levels full of danger! Beware of sharp-cut spikes, breaking glass, exploding bombs and stormy wind zones.\n" +
      "\n" +
      "The journey will take you through stunningly beautiful environments; you can select from hundreds of bike customization features and many upgrades, play with friends or join other players to forge the strongest bike team. It's time to BikeUp!",
    genre: "Racing",
    role: "Senior/Principal Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/bikeup/bikeup1.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup2.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup3.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup4.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup5.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup6.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup7.webp", type: MediaType.Image },
      { source: "/images/games/bikeup/bikeup8.webp", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/MKy1NaaZiHA", type: MediaType.YouTube },
    ],

  },
  {
    name: "My Country AR",
    description: "Welcome to the first game that lets you build your own country in augmented reality! Using the latest technologies, you can now bring entire worlds to life right in your living room. Discover miniature worlds full of cute little people; run an airport, manage a train station and see how tall you can build the forest of skyscrapers in your business district. Master an entire new dimension of fun – swoop and pan with your device to get a better perspective look for hidden items around your cities to avert mishaps.\n" +
      "\n" +
      "The game was released on the first day of iOS augmented reality app store and has been stated as first city-builder available in AR mode.",
    genre: "City Builder",
    role: "Unity Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "images/games/my-country-ar/my-country-ar-screen-1.jpeg", type: MediaType.Image },
      { source: "images/games/my-country-ar/my-country-ar-screen-2.jpeg", type: MediaType.Image },
      { source: "images/games/my-country-ar/my-country-ar-screen-3.jpeg", type: MediaType.Image },
      { source: "images/games/my-country-ar/my-country-ar-screen-4.jpeg", type: MediaType.Image },
      { source: "images/games/my-country-ar/my-country-ar-screen-5.jpeg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/271CNRlVX7E", type: MediaType.YouTube },
    ],

  },
  {
    name: "Moana Island Life",
    description: "The ocean has called you to Motunui! Create your own magical paradise inspired by Disney’s animated film Moana. Join Moana, Maui, and more to create and customize your island, complete quests to earn rewards, and discover the islands of Oceania. Your island adventure awaits!",
    genre: "Farming Simulator",
    role: "Unity Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "images/games/moana/moana-screen-1.jpg", type: MediaType.Image },
      { source: "images/games/moana/moana-screen-2.jpg", type: MediaType.Image },
      { source: "images/games/moana/moana-screen-3.jpg", type: MediaType.Image },
      { source: "images/games/moana/moana-screen-4.jpg", type: MediaType.Image },
      { source: "images/games/moana/moana-screen-5.jpg", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/c6TuUwPNwGU", type: MediaType.YouTube },
    ],

  },
  {
    name: "My Country 3D",
    description: "My Country 3D is the full-3D follow-up to the smash-hit series, My Country! Interact with your citizens on the street level as you build your city skyward! Explore new frontiers and customize each building; it's an open world bounded only by your imagination! Coming soon! The full-3D follow-up to the smash-hit series, My Country!",
    genre: "City Builder",
    role: "Unity Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/my-country-3d/my-country-3d-cover.jpg", type: MediaType.Image },
      { source: "/images/games/my-country-3d/my-country-3d-01.jpg", type: MediaType.Image },
      { source: "/images/games/my-country-3d/my-country-3d-02.jpg", type: MediaType.Image },
      { source: "/images/games/my-country-3d/my-country-3d-03.jpg", type: MediaType.Image },
      { source: "/images/games/my-country-3d/my-country-3d-04.jpg", type: MediaType.Image },
    ],

  },
  {
    name: "HunterX Zombie Shooter",
    description: "Planet has gone wrong and portals have been opened to evil creatures willing to conquer the world. Main Hero - HunterX is a stylish guy who has come to save the planet and destroy all the evil creatures. 60th feet tall head demon named \"Red\" is leading the attack on humanity and has challenged all the mankind with clear intents to enslave the souls of mortals.",
    genre: "Zombie Shooter",
    role: "Unity Developer",
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/hunter-x/hunter-x-cover.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-01.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-02.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-03.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-04.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-05.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-06.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-07.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-08.jpg", type: MediaType.Image },
      { source: "/images/games/hunter-x/hunter-x-09.jpg", type: MediaType.Image },
    ],

  },
];