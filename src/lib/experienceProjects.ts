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
    id: "erp-odoo",
    image: "/exper/odoo.webp",
    href: "https://www.odoo.com?utm_campaign=partner-c63cf07f&utm_source=partner_ref",
    es: {
      title: "Conoce Odoo",
      description: "Conoce el ERP de código abierto más completo, con módulos para todas las áreas de tu negocio.",
      linkLabel: "Conocer Odoo",
    },
    en: {
      title: "Discover Odoo",
      description: "Discover the most comprehensive open-source ERP, with modules for all areas of your business.",
      linkLabel: "Discover Odoo",
    },
  },
  {
    id: "katze",
    image: "/exper/katze.webp",
    href: "https://katzekingdom.com",
    es: {
      title: "Nuestra empresa Katze",
      description: "Somos partners oficiales de Odoo, si quieres implementar Odoo o necesitas ayuda con tu ERP, contáctanos.",
      linkLabel: "Conocer Katze",
    },
    en: {
      title: "Katze Company",
      description: "We are official Odoo partners. If you want to implement Odoo or need help with your ERP, contact us.",
      linkLabel: "Discover Katze",
    },
  },
  {
    id: "erp-experience",
    image: "/exper/experience.webp",
    href: "https://blog.ecojrsg.dev/mi-experiencia-implementando-un-erp/",
    es: {
      title: "Mi experiencia implementando un ERP",
      description: "En esta historia comparto cómo una empresa de más de 200 empleados falló dos veces antes de lograrlo",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "My experience implementing an ERP",
      description: "In this story, I share how a company with over 200 employees failed twice before succeeding.",
      linkLabel: "View experience",
    },
  },
  {
    id: "docker-impact",
    image: "/exper/docker.webp",
    href: "https://blog.ecojrsg.dev/el-impacto-de-docker-en-cualquier-proyecto-tecnologico/",
    es: {
      title: "El impacto de Docker en cualquier proyecto tecnológico",
      description: "Descubre cómo Docker puede transformar la forma en que desarrollas, pruebas y despliegas tus proyectos tecnológicos.",
      linkLabel: "Ver experiencia",
    },
    en: {
      title: "The impact of Docker on any tech project",
      description: "Discover how Docker can transform the way you develop, test, and deploy your tech projects.",
      linkLabel: "View experience",
    },
  },
];
