export interface TeamMember {
  name: string;
  title: string;
  group: "founders" | "team";
  image: string;
}

export const team: TeamMember[] = [
  { name: "Peter Goetz", title: "Director / Creative Director", group: "founders", image: "/images/team/peter-goetz.webp" },
  { name: "Kevin Hoban", title: "Executive Producer / Director", group: "founders", image: "/images/team/kevin-hoban.webp" },
  { name: "Rona Padua", title: "EP, Brand Partnerships", group: "team", image: "/images/team/rona-padua.webp" },
  { name: "Sarah Rowland", title: "Creative Producer / Writer", group: "team", image: "/images/team/sarah-rowland.webp" },
  { name: "Alison Schweickert", title: "Head of Marketing", group: "team", image: "/images/team/alison-schweickert.webp" },
  { name: "Riccardo Maddalosso", title: "Business Affairs", group: "team", image: "/images/team/riccardo-maddalosso.webp" },
  { name: "Leco Moura", title: "Director of Photography", group: "team", image: "/images/team/leco-moura.webp" },
  { name: "Quendi Lara", title: "Producer", group: "team", image: "/images/team/quendi-lara.webp" },
  { name: "Gina Papabeis", title: "Producer", group: "team", image: "/images/team/gina-papabeis.webp" },
  { name: "Lukas Olesinski", title: "Associate Producer", group: "team", image: "/images/team/lukas-olesinski.webp" },
  { name: "Matty Neikrug", title: "Editor", group: "team", image: "/images/team/matty-neikrug.webp" },
  { name: "Nando Cardoso", title: "Editor", group: "team", image: "/images/team/nando-cardoso.webp" },
  { name: "Kinga Gatarska", title: "Social Media / Marketing", group: "team", image: "/images/team/kinga-gatarska.webp" },
  { name: "Shelby Ito", title: "Social Media / Marketing", group: "team", image: "/images/team/shelby-ito.webp" },
];
