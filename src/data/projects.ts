export type ProjectType = {
  title: string;
  date?: string;
  description: string;
  description1?: string;
  bottomDescription?: string;
  coverImg?: string;
  coverVideo?: string;
  images?: string[];
  video?: string;
  tags?: string[];
  type?: string;
  accomplishments?: string;
  missions?: string[];
  bottomImg?: string;
  firstPlace?: string;
  mid_img?: string;
};

export const projects: ProjectType[] = [
  {
    title: "Collaboration IKEA x Marie KONDŌ",
    date: "2023",
    description:
      "Creation of a series of teasers to promote a collaboration between IKEA and Marie Kondo. This co-branding campaign targets 18-25 year olds to help them better organize their daily lives.",
    bottomDescription:
      "The teasers can be adapted across various media, including advertising displays and social networks, and follow the graphic style of IKEA campaigns.",
    coverImg: "/jade_portfolio/images/ikea/VISUEL1_9_16_ikea.jpg",
    images: [
      "/jade_portfolio/images/ikea/VISUEL2_9_16_ikea.jpg",
      "/jade_portfolio/images/ikea/VISUEL3_9_16_ikea.jpg",
    ],
    bottomImg: "/jade_portfolio/images/ikea/VISUEL4_9_16_ikea.jpg",
    tags: ["BRAND STRATEGY"],
    type: "Branding & advertising",
    missions: ["Strategy", "Visual identity"],
  },
  {
    title: "Génér'Actions",
    date: "2025",
    description:
      "Creation of the Génér’Actions association, which offers a 360° service connecting senior residences with partner student residences. The goal is to give small household appliances a second life. The initiative includes collecting appliances, an online booking platform, and redistributing the appliances during maintenance workshops.",
    coverVideo: "/jade_portfolio/videos/generaction/generactions_cover.mp4",
    video: "/jade_portfolio/videos/generaction/VISUEL1_9_16_generactions.mp4",
    images: [
      "/jade_portfolio/images/generaction/VISUEL2_9_16_generactions.jpg",
      "/jade_portfolio/images/generaction/VISUEL3_9_16_generactions.jpg",
    ],
    tags: ["BRAND STRATEGY", "VISUAL IDENTITY"],
    accomplishments: "DZD Design competition 2025",
    missions: [
      "360° strategy",
      "Visual identity",
      "3D modeling",
      "Video editing",
    ],
  },
  {
    title: "Murtagh - In Thorn’s Shadow",
    date: "2024",
    description:
      "Promoting the release of Murtagh, the latest novel by Christopher Paolini, through a floor display and a dedicated bookstore window, with a focus on light and transparency as a creative response to the brief.",
    coverImg: "/jade_portfolio/images/murtagh/VISUEL1_9_16_murtagh.jpg",
    images: [
      "/jade_portfolio/images/murtagh/VISUEL2_9_16_murtagh.jpg",
      "/jade_portfolio/images/murtagh/VISUEL3_9_16_murtagh.jpg",
      "/jade_portfolio/images/murtagh/VISUEL4_9_16_murtagh.jpg",
    ],
    tags: ["BRAND STRATEGY"],
    firstPlace: "Shop! France Design competition",
    missions: ["Retail design", "3D modeling", "Model making"],
    bottomDescription:
      "The concept is rolled out 360° in bookstores, with linear merchandising and displays designed to highlight the novel on the shelves.",
    bottomImg: "/jade_portfolio/images/murtagh/VISUEL5_9_16_murtagh.jpg",
  },
  {
    title: "Pas de côté : Corps dansés, ville en résonance",
    date: "2025",
    description:
      "My Bachelor’s dissertation was an opportunity for me to connect my passion for dance with my studies in event design.",
    description1:
      "How can the development of a dance event, embedded in time and public space, become, beyond an artistic performance, a means of social mediation and a lens for experiencing the city?",
    bottomDescription:
      "The production of the various copies was carried out in partnership with a vocational high school class specializing in print production, which made the printing process particularly enriching.",
    coverImg: "/jade_portfolio/images/bachelor_degree/COUVLONG.jpg",
    images: [
      "/jade_portfolio/images/bachelor_degree/VISUEL2_BLANC_memoire.jpg",
      "/jade_portfolio/images/bachelor_degree/VISUEL3_9_16_memoire.jpg",
    ],
    video: "/jade_portfolio/videos/bachelor_degree/VISUEL1_9_16_memoire.mp4",
    tags: ["EDITION", "FINAL PROJECT"],
    type: "Bachelor’s Degree dissertation",
    missions: ["Research and writing", "Editorial and print design"],
  },
  {
    title: "Fragments croisés",
    date: "2024",
    description:
      "A project highlighting graphic work inspired by the framework of the Austerlitz train station glass roof, presented in a hand-bound booklet using a folding and assembly technique, without glue or staples.",
    coverVideo:
      "/jade_portfolio/videos/fragments/VISUEL1_16_9_fragments-croises.mp4",
    tags: ["EDITION", "GRAPHIC EXPERIMENTATION"],
    images: [
      "/jade_portfolio/images/fragments/VISUEL2_16_9_fragments-croisés.jpg",
    ],
    video:
      "/jade_portfolio/videos/fragments/VISUEL1_16_9_fragments-croises.mp4",
    type: "Graphic edition",
    missions: [
      "Graphic exploration",
      "Editorial and print design",
      "Bookbinding",
    ],
  },
  {
    title: "Pile Poil le bon musée",
    date: "2024",
    description:
      "“Pile Poil le bon musée” is a playful concept around the theme of hair, designed in collaboration with Le Petit Poilu. This educational brochure invites children to explore the Musée de la Chasse, combining storytelling and illustration to spark curiosity and engagement.",
    coverVideo:
      "/jade_portfolio/videos/children_mediation/VISUEL1_16_9_musée-chasse.mp4",
    images: [
      "/jade_portfolio/images/children_mediation/VISUEL2_16_9_musée-chasse.jpg",
      "/jade_portfolio/images/children_mediation/VISUEL3_16_9_musée-chasse.jpg",
    ],
    video:
      "/jade_portfolio/videos/children_mediation/VISUEL1_16_9_musée-chasse.mp4",
    tags: ["EDITION"],
    type: "Children’s educational brochure",
    missions: ["Strategy", "Editorial and print design"],
  },
  {
    title: "Pas Commun(s)",
    date: "2025",
    description: "My final project.",
    coverVideo: "/jade_portfolio/videos/final_project/VISUEL1_9_16_diplome.mp4",
    video: "/jade_portfolio/videos/final_project/VISUEL1_9_16_diplome.mp4",
    tags: ["FINAL PROJECT", "VISUAL IDENTITY"],
  },
  {
    title: "Open House Days – Maximilien Vox High School",
    date: "2024",
    description:
      "Development of a visual identity for the school’s Open House Days, applied to Instagram, including different video formats, interviews, and Konbini-style content.",
    coverImg:
      "/jade_portfolio/images/open_house/VISUEL1_9_16_open-house-days.jpg",
    images: [
      "/jade_portfolio/images/open_house/VISUEL2_9_16_open-house-days.jpg",
    ],
    tags: ["VISUAL IDENTITY"],
    type: "Visual identity for a school event",
    missions: ["Visual identity", "Typography"],
  },
  {
    title: "Collection of Prints",
    date: "2022",
    description:
      "An exploration of engraving and hand printing techniques inspired by the theme of perfume fragrances. Prints were made using Tetra Pak engraving, monotype, and linocut.",
    coverImg:
      "/jade_portfolio/images/collection_print/VISUEL1_9_16_estampes.jpg",
    images: [
      "/jade_portfolio/images/collection_print/VISUEL2_9_16_estampes.jpg",
      "/jade_portfolio/images/collection_print/VISUEL3_9_16_estampes.jpg",
    ],
    tags: ["GRAPHIC EXPERIMENTATION"],
    type: "Graphic experimentation",
    missions: ["Engraving", "Hand printing"],
  },
  {
    title: "Atelier Lumière - Black and White portraits",
    date: "2025",
    description:
      "Exploration of lighting techniques, introduced by Gauthier Haziza and Appoline Couverchel from Studio Élémentaires, creators of kinetic light sculptures.",
    description1:
      "An exploration of light through black and white portraiture. The work seeks to sculpt light itself, freed from the distraction of color.",
    coverImg:
      "/jade_portfolio/images/lumiere/black_and_white/VISUEL1_9_16_lumiere_NB.jpg",
    mid_img:
      "/jade_portfolio/images/lumiere/black_and_white/VISUEL2_lumiere_NB.jpg",
    images: [
      "/jade_portfolio/images/lumiere/black_and_white/VISUEL3_lumiere_NB.jpg",
      "/jade_portfolio/images/lumiere/black_and_white/VISUEL4_lumiere_NB.jpg",
    ],
    tags: ["PHOTOGRAPHY"],
  },
  {
    title: "Atelier Lumière - Color portraits",
    date: "2025",
    description:
      "Exploration of lighting techniques, introduced by Gauthier Haziza and Appoline Couverchel from Studio Élémentaires, creators of kinetic light sculptures.",
    description1:
      "An exploration of light and color through materials such as tulle and mirrors, with experiments on how light can be diffused using smoke.",
    coverImg:
      "/jade_portfolio/images/lumiere/color/VISUEL1_9_16_lumiere_couleurs.jpg",
    mid_img:
      "/jade_portfolio/images/lumiere/color/VISUEL2_lumiere_couleurs.jpg",
    images: [
      "/jade_portfolio/images/lumiere/color/VISUEL3_lumiere_couleurs.jpg",
      "/jade_portfolio/images/lumiere/color/VISUEL4_lumiere_couleurs.jpg",
    ],
    tags: ["PHOTOGRAPHY"],
  },
  {
    title: "Shuriken - Ego or Logo",
    date: "2025",
    description:
      "My logo takes the shape of a shuriken : like a fighter, I move forward, fast and sharp. The outfit and heels embody the confident adult I show the world, while the armbands recall the fragile child I remain, still tied to her gentle landmarks.",
    description1:
      "United in a single silhouette, these two facets form my weapon. Like a blade in the air, I float between strength and vulnerability.",
    coverImg: "/jade_portfolio/images/shuriken/VISUEL1_9_16_selfportrait.jpg",
    tags: ["PHOTOGRAPHY"],
    type: "Selfportrait",
    missions: ["Photography", "Pitch writing"],
  },
  {
    title: "Paper set design",
    date: "2023",
    description:
      "Creation of a paper set design showcasing two randomly selected objects : a hen and a floral-patterned vase. The project explores the encounter between these two universes through the creation of a delicate paper-built environment.",
    coverImg:
      "/jade_portfolio/images/paper_set_design/VISUEL1_9_16_FUSCHIA.jpg",
    images: [
      "/jade_portfolio/images/paper_set_design/VISUEL2_FUSCHIA.jpg",
      "/jade_portfolio/images/paper_set_design/VISUEL3_9_16_FUSCHIA.jpg",
      "/jade_portfolio/images/paper_set_design/VISUEL4_9_16_FUSCHIA.jpg",
    ],
    tags: ["GRAPHIC EXPERIMENTATION"],
    type: "Set design",
    missions: ["Paper exerimentation", "Photography"],
  },
];
