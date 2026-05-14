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
      highlights: ["Odoo", "DevOps", "Infraestructura"],
    },
    en: {
      name: "Jonathan Serna",
      role: "Software Engineer",
      description:
        "Technology consultant and developer focused on scalable solutions, infrastructure, automation, and ERP systems.",
      highlights: ["Odoo", "DevOps", "Infrastructure"],
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
        "Colaborador recomendado para produccion audiovisual, organizacion de flujos de edicion y contenido visual.",
      highlights: ["Edicion", "Produccion", "Gestion creativa"],
    },
    en: {
      name: "Yari",
      role: "Video Editor",
      description:
        "Recommended collaborator for audiovisual production, editing workflows, and visual content.",
      highlights: ["Editing", "Production", "Creative management"],
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
      role: "Creador audiovisual",
      description:
        "Perfil creativo orientado a edicion, contenido digital y apoyo visual para proyectos con identidad propia.",
      highlights: ["Video", "Contenido", "Narrativa visual"],
    },
    en: {
      name: "Emilio Sotomayor",
      role: "Visual Creator",
      description:
        "Creative profile focused on editing, digital content, and visual support for projects with a clear identity.",
      highlights: ["Video", "Content", "Visual storytelling"],
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
      role: "Colaborador creativo",
      description:
        "Apoyo recomendado para proyectos visuales, ideas creativas y colaboraciones digitales.",
      highlights: ["Creatividad", "Apoyo visual", "Colaboracion"],
    },
    en: {
      name: "Sebas Estrada",
      role: "Creative Collaborator",
      description:
        "Recommended support for visual projects, creative ideas, and digital collaborations.",
      highlights: ["Creativity", "Visual support", "Collaboration"],
    },
  },
];
