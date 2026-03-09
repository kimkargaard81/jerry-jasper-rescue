// data/puzzles.ts
export const puzzles = [
  {
    id: "1-wordlock",
    title: "The Strange Substitute",
    scene: "Jerry and Jasper notice that Miss Marit barely blinks and keeps tapping a rhythm on the desk…",
    type: "wordlock",
    prompt: "Hidden in the sentence is the secret word that opens her desk.",
    body: "Mysteriously, Every Student Said Marit Acts Rather Interesting Today.",
    answer: "MESSMARIT",
    normalize: true,
    hint: "Try reading the first letters of each word 😉",
    reward: "key-1"
  },
  {
    id: "2-caesar",
    title: "Message on Locker 7",
    scene: "A scribble on Locker 7 looks like nonsense. Jasper thinks it’s a simple cipher.",
    type: "caesar",
    shift: 3,
    cipherText: "plvv pdulw lv qrw zhduv vkrhv",
    answer: "miss marit is not wears shoes",
    normalize: true,
    hint: "Shift letters backwards by 3 (C→A).",
    reward: "key-2"
  },
  {
    id: "3-hotspot",
    title: "Find the Alien Tell",
    scene: "One object in the classroom proves the imposter is an alien.",
    type: "hotspot",
    image: "/images/classroom.jpg",
    hotspots: [{ x: 62, y: 41, r: 6, id: "slime" }],
    successText: "You found the glowing slime! That’s not normal…",
    reward: "key-3",
    hint: "Look around the teacher’s desk area."
  }
] as const;
