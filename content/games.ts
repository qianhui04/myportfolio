export type Game = {
  slug: string;
  title: string;
  genre: string;
  engine: string;
  role: string;
  description: string;
  story: string;
  playUrl: string | null;
  webglUrl: string | null;
  github: string | null;
  screenshots: { src: string; alt: string }[];
};

export const games: Game[] = [
  {
    slug: "game-dev",
    title: "Game Development Project",
    genre: "To be specified",
    engine: "Unity",
    role: "Designer & engineer",
    description:
      "A Unity / C# project. Genre, mechanics, and a playable build will be attached here — this card is the dedicated games surface, separate from the software case studies.",
    story:
      "I am treating this as a real product: a playable loop, explicit gameplay state, and a case study that talks about implementation rather than only atmosphere. Drop screenshots into /public/games/game-dev and set playUrl or webglUrl in content/games.ts when a build is ready.",
    playUrl: null,
    webglUrl: null,
    github: null,
    screenshots: [
      { src: "/games/game-dev/shot-1.svg", alt: "Gameplay screenshot placeholder 1" },
      { src: "/games/game-dev/shot-2.svg", alt: "Gameplay screenshot placeholder 2" },
    ],
  },
];

export function getGame(slug: string) {
  return games.find((g) => g.slug === slug);
}
