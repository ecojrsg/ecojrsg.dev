export type ExperienceProject = {
  id: string;
  image: string;
  href: string;
  es: {
    title: string;
    description: string;
    linkLabel?: string;
  };
  en: {
    title: string;
    description: string;
    linkLabel?: string;
  };
};

export const experienceProjects: ExperienceProject[] = [
  {
    id: "erp-automation",
    image: "/img/dev/preview.png",
    href: "https://example.com/erp-automation",
    es: {
      title: "Automatizacion ERP",
      description: "Procesos conectados para reducir tareas manuales y mejorar la trazabilidad operativa.",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "ERP Automation",
      description: "Connected processes to reduce manual tasks and improve operational traceability.",
      linkLabel: "View experience",
    },
  },
  {
    id: "erp-automation",
    image: "/img/dev/preview.png",
    href: "https://example.com/erp-automation",
    es: {
      title: "Automatizacion ERP",
      description: "Procesos conectados para reducir tareas manuales y mejorar la trazabilidad operativa.",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "ERP Automation",
      description: "Connected processes to reduce manual tasks and improve operational traceability.",
      linkLabel: "View experience",
    },
  },
  {
    id: "erp-automation",
    image: "/img/dev/preview.png",
    href: "https://example.com/erp-automation",
    es: {
      title: "Automatizacion ERP",
      description: "Procesos conectados para reducir tareas manuales y mejorar la trazabilidad operativa.",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "ERP Automation",
      description: "Connected processes to reduce manual tasks and improve operational traceability.",
      linkLabel: "View experience",
    },
  },
  {
    id: "cloud-infrastructure",
    image: "/img/dev/og-image.png",
    href: "https://example.com/cloud-infrastructure",
    es: {
      title: "Infraestructura escalable",
      description: "Entornos preparados para crecer con despliegues claros, monitoreo y bases solidas.",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "Scalable Infrastructure",
      description: "Environments ready to grow with clear deployments, monitoring, and solid foundations.",
      linkLabel: "View experience",
    },
  },
  {
    id: "software-solutions",
    image: "/img/dev/textura.png",
    href: "https://example.com/software-solutions",
    es: {
      title: "Soluciones a medida",
      description: "Desarrollo orientado a resolver necesidades reales con integraciones y flujos practicos.",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "Custom Solutions",
      description: "Development focused on real needs with practical integrations and workflows.",
      linkLabel: "View experience",
    },
  },
];
