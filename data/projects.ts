export interface Project {
  id: string;
  title: string;
  vimeoId: string;
  category: "featured" | "branded" | "originals" | "film-tv";
  client?: string;
  description?: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "yachapa-paka",
    title: "Yachapa — Paka",
    vimeoId: "2091862953",
    category: "featured",
  },
  {
    id: "patagonia-daughter-of-the-sea",
    title: "Patagonia | Daughter of the Sea",
    vimeoId: "1865345204",
    category: "branded",
    client: "Patagonia",
  },
  {
    id: "spotify-delta-passport-sessions",
    title: "Spotify & Delta | The Passport Sessions: LA",
    vimeoId: "1846631302",
    category: "branded",
    client: "Delta/Spotify",
  },
  {
    id: "dancing-warrior",
    title: "Backroads Original | Dancing Warrior",
    vimeoId: "1863100858",
    category: "originals",
  },
  {
    id: "headspace-supertasters-tea",
    title: "Headspace | Supertasters: Tea",
    vimeoId: "1865356646",
    category: "branded",
    client: "Headspace",
  },
  {
    id: "crusoe-build-something-amazing",
    title: "Crusoe | Build Something Amazing",
    vimeoId: "1995329639",
    category: "branded",
    client: "Crusoe",
  },
  {
    id: "patagonia-hot-pink-dolphins",
    title: "Patagonia | Hot Pink Dolphins",
    vimeoId: "1864323415",
    category: "branded",
    client: "Patagonia",
  },
  {
    id: "watershed-canva",
    title: "Watershed x Canva",
    vimeoId: "1952533735",
    category: "branded",
    client: "Canva",
  },
  {
    id: "ci-mastercard-philippines",
    title: "Conservation International & Mastercard | Priceless Planet | Philippines",
    vimeoId: "1877295965",
    category: "branded",
    client: "Mastercard",
  },
  {
    id: "moving-mountains",
    title: "Backroads Original | Moving Mountains",
    vimeoId: "1910382690",
    category: "originals",
  },
  {
    id: "un-saving-mida-creek",
    title: "United Nations | Saving Mida Creek",
    vimeoId: "1142711082",
    category: "branded",
    client: "United Nations",
  },
  {
    id: "ci-mastercard-colombia",
    title: "Conservation International & Mastercard | Priceless Planet | Colombia",
    vimeoId: "1712435600",
    category: "branded",
    client: "Mastercard",
  },
  {
    id: "airbnb-flamenco-granada",
    title: "Airbnb | Flamenco Experience | Granada",
    vimeoId: "819754104",
    category: "branded",
    client: "Airbnb",
  },
  {
    id: "rivers-gifts-of-the-nile",
    title: "Rivers Are Life | Gifts of the Nile",
    vimeoId: "1877247062",
    category: "branded",
    client: "Rivers Are Life",
  },
  {
    id: "rivers-life-afloat",
    title: "Rivers Are Life | Life Afloat",
    vimeoId: "1865352528",
    category: "branded",
    client: "Rivers Are Life",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "branded", label: "Branded" },
  { id: "originals", label: "Originals" },
  { id: "film-tv", label: "Film/TV" },
] as const;
