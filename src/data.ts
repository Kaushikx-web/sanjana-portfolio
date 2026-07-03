import { Book, JournalEntry, Accolade } from "./types";

const dhruvTaraImg = "https://i.postimg.cc/dVWc4vB7/Whats-App-Image-2026-06-25-at-13-44-46.jpg";

export const BOOKS: Book[] = [
  {
    id: "dhruv-tara",
    title: "DHRUV TARA",
    subtitle: "A Celestial Alignment of Memory and the Unmoving Light",
    year: "2026",
    genre: "Atmospheric Drama",
    publisher: "To Be Announced",
    description: "Centering on the mythological and celestial guiding star, Dhruv Tara explores the unbreakable threads of connection that span decades and distances. Under an unchanging northern sky, two lives mirror one another's orbits, waiting for the final, inevitable alignment. A poetic, evocative meditation on finding home when all other lights fade.",
    coverImage: dhruvTaraImg,
    quote: "“The world may spin in restless motion, but some stars are anchored in eternity—waiting for us to look up.”",
    pages: 310,
    isbn: "978-X-XX-XXXXXX-X",
    purchaseUrl: "#",
    accolades: ["Forthcoming Novel", "Coming Soon Release"],
    isComingSoon: true
  }
];

export const JOURNALS: JournalEntry[] = [
  {
    id: "architecture-suspension",
    title: "The Architecture of Suspension: Designing Dread in Prose",
    category: "LITERARY THEORY",
    date: "OCTOBER 14, 2025",
    readTime: "8 MIN READ",
    excerpt: "How the spaces between words, paragraphs, and chapters act as physical rooms of tension. Analyzing structural voids as the primary vehicle for psychological suspense.",
    content: `Suspense is not built by what happens; it is constructed in the negative space of what is anticipated. In architecture, a cantilever defies gravity not by being weightless, but by balancing tension and counterweight. In prose, we achieve this through 'syntactic suspension'—holding back the main verb, the crucial revelation, or the spatial resolution until the reader is leaning entirely over the edge of the sentence.\n\nTo write dread is to design a house with one step missing in the staircase. The reader knows it is there—or rather, knows something is absent—but their momentum forces them forward. In this essay, we explore the mechanics of the slow reveal, the tactical use of punctuation, and why the most terrifying room is the one we refuse to describe.`,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "symmetry-dark-fiction",
    title: "Symmetry in Dark Fiction: The Rorschach Effect",
    category: "CREATIVE PROCESS",
    date: "JUNE 02, 2025",
    readTime: "6 MIN READ",
    excerpt: "Why humans seek geometric balance in chaotic narratives, and how mirroring character flaws creates an unavoidable tragic resonance.",
    content: `A perfect tragedy is always symmetrical. If a character falls from a height of hubris, their descent must trace the exact arc of their ascent, mirrored across a central axis of choice. This is what I call the Rorschach Effect in plotting: when the second half of a novel is the inkblot reflection of the first.\n\nWhen we structure *Anatomy of a Whisper*, the musical notation acted as a physical mirror. The high Alpine landscape mirrored the icy interiority of the mute cellist. By aligning these physical and psychological geometries, the dread becomes satisfying. It feels inevitable, like a mathematical equation resolving to zero. We examine the classic models of symmetric structure and how to implement them without making the plot feel artificial.`,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "memory-liquid-asset",
    title: "Memory as a Liquid Asset: The Fluidity of Truth",
    category: "PSYCHOLOGY",
    date: "MARCH 22, 2025",
    readTime: "11 MIN READ",
    excerpt: "Reflecting on the neurobiology of forgetting and how the constant re-editing of our personal histories informs the modern unreliable narrator.",
    content: `Every time we recall a memory, we do not access a static video file. Instead, we compile a new draft. The neurobiology of memory reconsolidation tells us that memory is incredibly volatile, subject to the atmospheric pressure of our current desires, fears, and biases.\n\nFor an author, this is the ultimate playground. The unreliable narrator is not a literary gimmick; it is a biological reality. In *The Glass Vellum*, the protagonist's notebook is the only solid anchor, yet even ink can bleed, and pages can be carefully excised. In this deep dive, we explore how to write characters whose very memories are shifting under their feet, creating a fluid foundation where the reader must become the ultimate detective.`,
    image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&w=800&q=80"
  }
];

export const ACCOLADES: Accolade[] = [
  {
    award: "Giller Prize for Fiction",
    organization: "Scotiabank",
    year: "2025"
  },
  {
    award: "Edgar Allan Poe Award for Best Novel",
    organization: "Mystery Writers of America",
    year: "2022"
  },
  {
    award: "Arts & Letters Fellowship",
    organization: "The Royal Society of Literature",
    year: "2020"
  },
  {
    award: "Guggenheim Fellowship in Creative Arts",
    organization: "John Simon Guggenheim Memorial Foundation",
    year: "2019"
  }
];

export const REVIEWS = [
  {
    quote: "V Sanjana writes with an old soul and incredible tenderness, capturing the deep, quiet emotions that shape who we are.",
    author: "Indian Literary Review",
    rating: 5
  },
  {
    quote: "Prose that is honest, warm, and profoundly authentic. A beautiful, comforting new voice in contemporary storytelling.",
    author: "The Bookscape",
    rating: 5
  },
  {
    quote: "Sanjana has an extraordinary gift for finding the magic and meaning in ordinary lives. Absolutely unforgettable.",
    author: "Reader's Guild",
    rating: 5
  }
];
