import Caminando from "../Images/centro.jpeg";
import Coyotes from "../Images/coyotes.jpeg";
import Diablito from "../Images/diablito.jpeg";
import Tacuba from "../Images/tacuba.jpeg";
import Tlaloc from "../Images/tlaloc.jpeg";
import Ballena from "../Images/ballena.jpeg";
import Urraca from "../Images/urraca.jpeg";
import { ItemProps } from "../interfaces/ItemProps";

export const item1: ItemProps = {
  image: Caminando,
  title: "Caminando en Templo Mayor",
  description:
    "Un día en camino a una reunión de dibujo urbano, me encontré en la zona del centro histórico de la Ciudad de México cerca del Templo Mayor. Era la primera vez que caminaba por esa zona a pesar de ser un citadino que se jacta de conocer su ciudad, y a la lejanía vi esta cúpula que me llamó la atención. Me acerqué y me encontré con esta vista. Tenía tiempo sin pintar arquitectura, entonces decidí volver a mis raíces.",
  cost: 600,
  material: "Óleo en papel",
  dimensions: "20x30cm",
  disponible: true,
  category: "Pintura Original",
};

export const item2: ItemProps = {
  image: Coyotes,
  title: "Coyotes en la noche",
  description:
    "Caminando en el centro de coyoacan, me imagine la fuente de los coyotes en una escena nocturna con estrellas.",
  cost: 500,
  material: "Acrilico en papel",
  dimensions: "18x22cm",
  disponible: true,
  category: "Pintura Original",
};

export const item3: ItemProps = {
  image: Tlaloc,
  title: "Tlaloc",
  description:
    "Retratando una escultura de piedra prehispánica, Tlaloc es el dios de la lluvia y el agua en la mitología mexica..",
  cost: 400,
  material: "Acuarela y acrilico en papel",
  dimensions: "22x30",
  disponible: true,
  category: "Pintura Original",
};

export const item4: ItemProps = {
  image: Diablito,
  title: "Diablito",
  description:
    "El diablito es una figura tradicional en la cultura mexicana, que representa a un ser travieso y juguetón.",
  cost: 400,
  material: "Oleo en papel",
  dimensions: "22x30",
  disponible: false,
  category: "Pintura Original",
};

export const item5: ItemProps = {
  image: Ballena,
  title: "Ballena",
  description:
    "La ballena es un mamífero marino de gran tamaño que habita en los océanos del mundo. Son conocidas por su inteligencia, su capacidad para comunicarse y su importancia en los ecosistemas marinos.",
  cost: 500,
  material: "Óleo en papel",
  dimensions: "22x30",
  disponible: false,
  category: "Pintura Original",
};

export const item6: ItemProps = {
  image: Tacuba,
  title: "Tacuba",
  description:
    "En una caminata por la colonia Tacuba en la Ciudad de México, me encontré con esta vista a una catedral.",
  cost: 700,
  material: "Acuarela en papel",
  dimensions: "22x30",
  disponible: false,
  category: "Pintura Original",
};

export const item7: ItemProps = {
  image: Urraca,
  title: "Urraca",
  description:
    "Me gusta mucho el plumaje de las urracas como cambian de color con la luz.",
  cost: 400,
  material: "Acuarela en papel",
  dimensions: "22x30",
  disponible: false,
  category: "Pintura Original",
};

// Create an array of all items for easier importing
export const items = [item5, item4, item1, item2, item3, item6, item7];
