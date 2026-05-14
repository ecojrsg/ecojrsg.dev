export type TeamMemberIcon = "eco" | "yari" | "emilio" | "sebas";

export type TeamMember = {
  id: string;
  icon: TeamMemberIcon;
  links?: {
    instagram?: string;
    website?: string;
    github?: string;
    labelEs?: string;
    labelEn?: string;
  };
  es: {
    name: string;
    role: string;
    description: string;
    highlights: string[];
  };
  en: {
    name: string;
    role: string;
    description: string;
    highlights: string[];
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: "eco",
    icon: "eco",
    links: {
      instagram: "https://instagram.com/katzekingdom",
      labelEs: "Instagram de Katze",
      labelEn: "Instagram of Katze",
    },
    es: {
      name: "Jonathan Serna",
      role: "Ingeniero de Software",
      description:
        "Asesor tecnologico y desarrollador enfocado en soluciones escalables, infraestructura, automatizacion y sistemas ERP.",
      highlights: ["Odoo", "DevOps", "Desarrollo"],
    },
    en: {
      name: "Jonathan Serna",
      role: "Software Engineer",
      description:
        "Technology consultant and developer focused on scalable solutions, infrastructure, automation, and ERP systems.",
      highlights: ["Odoo", "DevOps", "Development"],
    },
  },
  {
    id: "yari",
    icon: "yari",
    links: {
      instagram: "https://instagram.com/_yariortiz_",
      labelEs: "Instagram",
      labelEn: "Instagram",
    },
    es: {
      name: "Yari Ortiz",
      role: "Editor de video",
      description:
        "Colaborador especializado en edición ágil de video y creación de contenido visual para redes, enfocado en producción rápida, creativa y de alto volumen.",
      highlights: ["Edicion", "Agilidad", "Viralidad"],
    },
    en: {
      name: "Yari",
      role: "Video Editor",
      description:
        "Collaborator specialized in agile video editing and visual content creation for social media, focused on fast, creative, and high-volume production.",
      highlights: ["Editing", "Agility", "Viral"],
    },
  },
  {
    id: "emilio",
    icon: "emilio",
    links: {
      instagram: "https://instagram.com/emiliosotomayor__",
      labelEs: "Instagram",
      labelEn: "Instagram",
    },
    es: {
      name: "Emilio Sotomayor",
      role: "Editor de video",
      description:
        "Perfil creativo especializado en edición audiovisual y storytelling, enfocado en crear contenido digital de alta calidad con impacto visual y narrativo.",
      highlights: ["Edición", "Narrativa", "Impacto"],
    },
    en: {
      name: "Emilio Sotomayor",
      role: "Video Editor",
      description:
        "Creative profile specialized in audiovisual editing and storytelling, focused on creating high-quality digital content with visual and narrative impact.",
      highlights: ["Editing", "Narrative", "Impact"],
    },
  },
  {
    id: "sebas",
    icon: "sebas",
    links: {
      instagram: "https://instagram.com/basstian.fit",
      labelEs: "Instagram",
      labelEn: "Instagram",
    },
    es: {
      name: "Sebas Estrada",
      role: "Diseño sonoro",
      description:
        "Especialista en crear ambientes, efectos y experiencias sonoras que dan identidad y emoción a una producción audiovisual.",
      highlights: ["Inmersión", "Edición", "Creatividad"],
    },
    en: {
      name: "Sebas Estrada",
      role: "Creative Collaborator",
      description:
        "Specialist in creating soundscapes, effects, and sonic experiences that give identity and emotion to an audiovisual production.",
      highlights: ["Creativity", "Visual support", "Collaboration"],
    },
  },
];
