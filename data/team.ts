export interface TeamMember {
  name: string;
  title: string;
  group: "founders" | "team";
}

export const team: TeamMember[] = [
  { name: "Peter Goetz", title: "Director / Creative Director", group: "founders" },
  { name: "Kevin Hoban", title: "Executive Producer / Director", group: "founders" },
  { name: "Rona Padua", title: "EP, Brand Partnerships", group: "team" },
  { name: "Sarah Rowland", title: "Creative Producer / Writer", group: "team" },
  { name: "Alison Schweickert", title: "Head of Marketing", group: "team" },
  { name: "Riccardo Maddalosso", title: "Business Affairs", group: "team" },
  { name: "Leco Moura", title: "Director of Photography", group: "team" },
  { name: "Quendi Lara", title: "Producer", group: "team" },
  { name: "Gina Papabeis", title: "Producer", group: "team" },
  { name: "Lukas Olesinski", title: "Associate Producer", group: "team" },
  { name: "Matty Neikrug", title: "Editor", group: "team" },
  { name: "Nando Cardoso", title: "Editor", group: "team" },
  { name: "Kinga Gatarska", title: "Social Media / Marketing", group: "team" },
  { name: "Shelby Ito", title: "Social Media / Marketing", group: "team" },
];
