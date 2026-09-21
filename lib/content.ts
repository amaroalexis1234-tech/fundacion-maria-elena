// Contenido centralizado de la Landing Page — Fundación María Elena.
// Todo texto marcado entre corchetes (ej. [EMAIL]) es un placeholder pendiente
// de reemplazo por información institucional real. No se inventan datos.

export type NavLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: number | null;
  suffix: string;
  label: string;
  placeholder: string;
};

export type Program = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  link?: string;
};

export type Story = {
  id: string;
  quote: string;
  name: string;
  image: { src: string; alt: string };
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape" | "square";
};

export const siteInfo = {
  name: "Fundación María Elena Moreno",
  shortName: "María Elena",
  tagline: "Juntos podemos transformar vidas.",
  concept: "Acciones que dejan huella.",
  hashtag: "#AcciónDeCorazón",
  seoDescription: "[DESCRIPCION_SEO]",
  legalNote: "Programa privado de carácter asistencial y sin fines de lucro.",
  url: "https://www.fundacionmariaelena.org",
};

export const navigation: { desktop: NavLink[]; mobile: NavLink[] } = {
  desktop: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Programas", href: "#programas" },
    { label: "Impacto", href: "#impacto" },
    { label: "Historias", href: "#historias" },
  ],
  mobile: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Programas", href: "#programas" },
    { label: "Impacto", href: "#impacto" },
    { label: "Historias", href: "#historias" },
    { label: "Galería", href: "#galeria" },
    { label: "Prensa", href: "#prensa" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export const hero = {
  eyebrow: "Fundación María Elena Moreno",
  title: "Juntos podemos transformar vidas.",
  titleAccent: "transformar vidas.",
  description:
    "Construimos oportunidades y generamos bienestar a través de acciones que transforman nuestra comunidad.",
  primaryCta: "Quiero ayudar",
  secondaryCta: "Conoce nuestra labor",
  image: {
    src: "/images/hero/hero-main.webp",
    alt: "Integrantes de la Fundación entregando una despensa a una familia de Pachuca",
  },
};

export const about = {
  eyebrow: "Nuestra historia",
  title: "Creemos que ayudar también significa transformar.",
  body: "Trabajamos para impulsar el desarrollo de las familias pachuqueñas, a través de proyectos de intervención social y de mejoramiento urbano, bajo un esquema de participación comunitaria.",
  cta: "Conócenos",
  image: {
    src: "/images/about/about-photo.webp",
    alt: "Integrante de la Fundación María Elena Moreno presentando ante la comunidad",
  },
};

export const impact = {
  eyebrow: "Nuestro impacto",
  title: "El impacto se mide en historias.",
  stats: [
    {
      value: null,
      suffix: "+",
      label: "Personas beneficiadas",
      placeholder: "[PERSONAS_BENEFICIADAS]",
    },
    {
      value: null,
      suffix: "+",
      label: "Programas activos",
      placeholder: "[PROGRAMAS_ACTIVOS]",
    },
    {
      value: null,
      suffix: "+",
      label: "Voluntarios",
      placeholder: "[VOLUNTARIOS]",
    },
    {
      value: null,
      suffix: "+",
      label: "Actividades realizadas",
      placeholder: "[ACTIVIDADES_REALIZADAS]",
    },
  ] as StatItem[],
};

export const programs = {
  eyebrow: "Nuestros programas",
  title: "Nuestra labor",
  description: "Trabajamos para generar oportunidades donde más se necesitan.",
  items: [
    {
      id: "programa-01",
      category: "Salud y hogar",
      title: "Medicamentos y apoyo para el hogar",
      description:
        "Medicamentos gratuitos y apoyos para el hogar a bajo costo para las familias de Pachuca.",
      image: {
        src: "/images/programs/program-01.webp",
        alt: "Entrega de despensas a familias de Pachuca",
      },
    },
    {
      id: "programa-02",
      category: "Educación",
      title: "Mochilas y útiles escolares",
      description:
        "Mochilas y útiles escolares a bajo costo para familias de Pachuca, porque la educación siempre será una buena inversión.",
      image: {
        src: "/images/programs/program-02.jpg",
        alt: "Mesa con mochilas y útiles escolares entregados a familias de Pachuca",
      },
      link: "https://www.facebook.com/share/p/19N2QhLEXA/",
    },
    {
      id: "programa-03",
      category: "[CATEGORIA_PROGRAMA_03]",
      title: "[PROGRAMA_03]",
      description: "[DESCRIPCION_PROGRAMA_03]",
      image: {
        src: "/images/programs/program-03.webp",
        alt: "[PROGRAMA_03] Fotografía del programa",
      },
    },
    {
      id: "programa-04",
      category: "[CATEGORIA_PROGRAMA_04]",
      title: "[PROGRAMA_04]",
      description: "[DESCRIPCION_PROGRAMA_04]",
      image: {
        src: "/images/programs/program-04.webp",
        alt: "[PROGRAMA_04] Fotografía del programa",
      },
    },
  ] as Program[],
};

export const stories = {
  eyebrow: "Historias que inspiran",
  title: "Historias que inspiran",
  quoteHighlight: "Una oportunidad puede cambiar el rumbo de una historia.",
  cta: "Conoce su historia",
  items: [
    {
      id: "historia-01",
      quote: "[TESTIMONIO_01]",
      name: "[NOMBRE_01]",
      image: {
        src: "/images/stories/story-01.webp",
        alt: "Entrega de cobijas y artículos para el hogar en las oficinas de la Fundación",
      },
    },
    {
      id: "historia-02",
      quote: "[TESTIMONIO_02]",
      name: "[NOMBRE_02]",
      image: {
        src: "/images/stories/story-02.webp",
        alt: "Entrega de medicamento en las oficinas de la Fundación María Elena Moreno",
      },
    },
    {
      id: "historia-03",
      quote: "[TESTIMONIO_03]",
      name: "[NOMBRE_03]",
      image: {
        src: "/images/stories/story-03.webp",
        alt: "Firma de un convenio de colaboración de la Fundación María Elena Moreno",
      },
    },
  ] as Story[],
};

export const gallery = {
  eyebrow: "Galería",
  title: "Momentos que dejan huella.",
  items: [
    {
      id: "g01",
      src: "/images/gallery/gallery-01.jpg",
      alt: "Entrega de medicamentos y artículos para el hogar a familias de Pachuca — campaña #AcciónDeCorazón",
      orientation: "portrait",
    },
    {
      id: "g02",
      src: "/images/gallery/gallery-02.jpg",
      alt: "Plática comunitaria con familias de Pachuca sobre el programa de mochilas y útiles escolares",
      orientation: "landscape",
    },
    {
      id: "g03",
      src: "/images/gallery/gallery-03.webp",
      alt: "Integrante de la Fundación con niñas y niños durante la entrega de mochilas y útiles escolares",
      orientation: "landscape",
    },
    {
      id: "g04",
      src: "/images/gallery/gallery-04.webp",
      alt: "Comunidad reunida tras una jornada de entrega de la Fundación María Elena Moreno",
      orientation: "square",
    },
    {
      id: "g05",
      src: "/images/gallery/gallery-05.jpg",
      alt: "Integrante de la Fundación conversando con familias durante la entrega de útiles escolares",
      orientation: "landscape",
    },
    {
      id: "g06",
      src: "/images/gallery/gallery-06.webp",
      alt: "Jornada comunitaria de entrega de apoyos en una colonia de Pachuca",
      orientation: "landscape",
    },
    {
      id: "g07",
      src: "/images/gallery/gallery-07.webp",
      alt: "Entrega de despensa a una adulta mayor de Pachuca",
      orientation: "square",
    },
    {
      id: "g08",
      src: "/images/gallery/gallery-08.jpg",
      alt: "Entrega directa de una mochila a una familia de Pachuca",
      orientation: "landscape",
    },
  ] as GalleryImage[],
};

export const actionCta = {
  title: "Tu ayuda puede transformar una historia.",
  description: "Cada acción cuenta. Cada persona importa.",
  primaryCta: "Quiero ayudar",
  hashtag: "#AcciónDeCorazón",
};

export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos",
  description: "¿Quieres conocer más sobre nuestra fundación?",
  info: {
    ubicacion: "Boulevard El Minero km 3.5, Pachuca, Hidalgo, C.P. 42032",
    telefono: null as string | null,
    email: "mariaelenamorenofundacion@gmail.com",
    whatsapp: null as string | null,
    facebook: "https://www.facebook.com/profile.php?id=100081247000296&locale=es_LA",
    instagram: null as string | null,
  },
  form: {
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    submitLabel: "Enviar mensaje",
    loadingLabel: "Enviando…",
    successMessage: "Gracias por tu mensaje. Te responderemos pronto.",
    errorMessage: "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
    notConfiguredMessage:
      "El envío de formularios aún no está configurado. Escríbenos directamente a mariaelenamorenofundacion@gmail.com.",
  },
};

export const press = {
  eyebrow: "Prensa",
  title: "Sala de prensa",
  description:
    "¿Eres periodista o representas un medio de comunicación? Contáctanos para entrevistas, información institucional o material gráfico.",
  contactLabel: "Contacto de prensa",
  email: contact.info.email,
};

const mapQuery = encodeURIComponent(`${contact.info.ubicacion}, México`);

export const map = {
  embedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
  viewUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  title: `Ubicación de ${siteInfo.name} en el mapa`,
};

export const legal = {
  privacyLinkLabel: "Aviso de privacidad",
  privacyTitle: "Aviso de privacidad",
  privacyBody: `Estamos preparando el aviso de privacidad oficial de la Fundación. Mientras tanto, si tienes dudas sobre el uso de tus datos, escríbenos a ${contact.info.email}.`,
};

export const footer = {
  name: siteInfo.name,
  tagline: siteInfo.tagline,
  social: [
    { label: "Facebook", href: contact.info.facebook },
    { label: "Instagram", href: contact.info.instagram },
    { label: "WhatsApp", href: contact.info.whatsapp },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href)),
};
