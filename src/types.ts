export enum LinkImageSource {
  Android = "/images/logos/android.png",
  iOS = "/images/logos/ios.png",
  Github = "/images/logos/github.png",
  ItchIo = "/images/logos/itch.io.png",
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    linkedIn: string;
  };
}

export interface Game {
  name: string;
  description: string;
  role: string;
  genre: string;
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
}