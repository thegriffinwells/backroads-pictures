export interface DeckCrewMember {
  name: string;
  role: string;
  bio: string;
  instagram?: string;
  image?: string;
}

export interface DeckSection {
  type: "hero" | "text" | "images" | "crew" | "cta";
  heading?: string;
  subheading?: string;
  body?: string;
  images?: { src: string; alt: string }[];
  crew?: DeckCrewMember[];
  ctaText?: string;
  ctaLink?: string;
}

export interface Deck {
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  accentColor: string;
  sections: DeckSection[];
}

export const decks: Deck[] = [
  {
    slug: "sage-to-saddle",
    title: "Sage to Saddle",
    subtitle: "A Backroads Pictures Production — Pine Ridge Reservation",
    heroImage: "/images/decks/sage-to-saddle-hero.jpg",
    accentColor: "#C8A96E",
    sections: [
      {
        type: "hero",
      },
      {
        type: "text",
        heading: "The Story",
        body: "An intimate look at an after-school equine program on Pine Ridge Reservation, where young Lakota students discover healing, purpose, and identity through their bond with horses. Set against the vast landscapes of South Dakota, this film explores how tradition and horsemanship can transform lives in one of America's most underserved communities.",
      },
      {
        type: "images",
        images: [
          { src: "/images/decks/sage-placeholder-1.jpg", alt: "Pine Ridge landscape" },
          { src: "/images/decks/sage-placeholder-2.jpg", alt: "Students with horses" },
          { src: "/images/decks/sage-placeholder-3.jpg", alt: "Equine program" },
        ],
      },
      {
        type: "text",
        heading: "Why This Story Matters",
        body: "Pine Ridge Reservation faces some of the highest rates of poverty and youth unemployment in the nation. The equine program offers more than recreation — it offers a lifeline. Through daily care of horses, students learn responsibility, patience, and self-worth. This film amplifies their voices and shares a story of resilience that the world needs to hear.",
      },
      {
        type: "crew",
        heading: "The Team",
        crew: [
          {
            name: "Peter Goetz",
            role: "Director",
            bio: "Award-winning director and founder of Backroads Pictures with twenty years of experience in documentary filmmaking.",
          },
          {
            name: "Kevin Hoban",
            role: "Executive Producer",
            bio: "EP and director at Backroads Pictures, bringing decades of production expertise to meaningful narratives.",
          },
          {
            name: "Leco Moura",
            role: "Director of Photography",
            bio: "Cinematographer with a keen eye for capturing landscapes and intimate human moments.",
          },
          {
            name: "Sarah Rowland",
            role: "Producer / Writer",
            bio: "Creative producer and writer dedicated to stories that connect communities and inspire change.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Get Involved",
        body: "We're seeking partners and sponsors to help bring this story to life. If you believe in the power of storytelling to create change, we'd love to hear from you.",
        ctaText: "Contact Us",
        ctaLink: "/contact",
      },
    ],
  },
];
