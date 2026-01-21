import Caminando from "../Images/originales/centro.jpeg";
import Coyotes from "../Images/originales/coyotes.jpeg";
import Diablito from "../Images/originales/diablito.jpeg";
import Tacuba from "../Images/originales/tacuba.jpeg";
import Tlaloc from "../Images/originales/tlaloc.jpeg";
import Ballena from "../Images/originales/ballena.jpeg";
import Urraca from "../Images/originales/urraca.jpeg";
import BellasArtes from "../Images/prints/bellasartes.jpg";
import Lobos from "../Images/prints/lobos.jpg";
import Xolo from "../Images/prints/xolo.jpg";
import Stickers from "../Images/prints/stickers.jpeg";
import Lennon from "../Images/originales/lennon.jpg";
import IglesiaDesierto from "../Images/originales/iglesiadesierto.jpg";
import { ItemProps } from "../interfaces/ItemProps";
import Doberman from "../Images/originales/doberman.jpg";
import OaxLand from "../Images/originales/oax_land.jpg";
import OaxScult from "../Images/originales/oax_sculpt.jpg";
import Rome from "../Images/originales/rome.jpg";

export const item1: ItemProps = {
  image: Caminando,
  title: "Caminando en Templo Mayor",
  description:
    "Un día, en camino a una reunión de dibujo urbano, me encontré en la zona del centro histórico de la Ciudad de México cerca del Templo Mayor. Era la primera vez que caminaba por esa zona a pesar de ser un citadino que se jacta de conocer su ciudad y, a lo lejos, vi esta cúpula que me llamó la atención. Me acerqué y me encontré con esta vista. Hacía tiempo que no pintaba arquitectura, así que decidí volver a mis raíces.",
  cost: 600,
  material: "Óleo en papel",
  dimensions: "17x27",
  disponible: true,
  category: "Pintura Original",
};

export const item2: ItemProps = {
  image: Coyotes,
  title: "Coyotes en la noche",
  description:
    "Caminando en el centro de Coyoacán, me imaginé la fuente de los coyotes en una escena nocturna con estrellas.",
  cost: 500,
  material: "Acrílico en papel",
  dimensions: "25x20",
  disponible: false,
  category: "Pintura Original",
};

export const item3: ItemProps = {
  image: Tlaloc,
  title: "Tlaloc",
  description:
    "Retratando una escultura de piedra prehispánica. Tláloc es el dios de la lluvia y el agua en la mitología mexica.",
  cost: 400,
  material: "Acuarela y acrílico en papel",
  dimensions: "20x23",
  disponible: true,
  category: "Pintura Original",
};

export const item4: ItemProps = {
  image: Diablito,
  title: "Diablito",
  description:
    "El diablito es una figura tradicional en la cultura mexicana que representa a un ser travieso y juguetón.",
  cost: 400,
  material: "Óleo en papel",
  dimensions: "18x22",
  disponible: false,
  category: "Pintura Original",
};

export const item5: ItemProps = {
  image: Ballena,
  title: "Ballena",
  description:
    "La ballena es un mamífero marino de gran tamaño que habita en los océanos del mundo. Es conocida por su inteligencia, su capacidad para comunicarse y su importancia en los ecosistemas marinos.",
  cost: 500,
  material: "Óleo en papel",
  dimensions: "32x16",
  disponible: true,
  category: "Pintura Original",
};

export const item6: ItemProps = {
  image: Tacuba,
  title: "Tacuba",
  description:
    "En una caminata por la colonia Tacuba en la Ciudad de México, me encontré con esta vista a una catedral.",
  cost: 600,
  material: "Acuarela en papel",
  dimensions: "38x22",
  disponible: true,
  category: "Pintura Original",
};

export const item7: ItemProps = {
  image: Urraca,
  title: "Urraca",
  description:
    "Me gusta mucho el plumaje de las urracas y cómo cambian de color con la luz.",
  cost: 400,
  material: "Acuarela en papel",
  dimensions: "18x27",
  disponible: false,
  category: "Pintura Original",
};

// Prints
export const itemPrint1: ItemProps = {
  image: BellasArtes,
  title: "Palacio de Bellas Artes",
  description:
    "Print del icónico Palacio de Bellas Artes de la Ciudad de México de noche con noche estrellada.",
  cost: 40,
  material: "Print sobre papel mate",
  dimensions: "14x14",
  disponible: true,
  category: "Print",
};

export const itemPrint2: ItemProps = {
  image: Lobos,
  title: "Coyotes en la noche",
  description: "Print de los icónicos coyotes en la noche estrellada.",
  cost: 50,
  material: "Print sobre papel mate",
  dimensions: "12x17",
  disponible: true,
  category: "Print",
};

export const itemPrint3: ItemProps = {
  image: Xolo,
  title: "Xoloitzcuintle",
  description:
    "Print del perro xoloitzcuintle, estilo muralismo mexicano, guardián místico en la cultura mexicana.",
  cost: 40,
  material: "Print sobre papel mate",
  dimensions: "14x14",
  disponible: true,
  category: "Print",
};

export const itemSticker1: ItemProps = {
  image: Stickers,
  title: "3 Sticker Pack Día de Muertos",
  description: "Pack de 3 stickers con temática del Día de Muertos.",
  cost: 40,
  material: "Stickers vinilo mate",
  dimensions: "10x10",
  disponible: true,
  category: "Sticker",
};

export const item8: ItemProps = {
  image: Lennon,
  title: "Lennon",
  description:
    "Retrato de John Lennon, icónico músico y miembro de The Beatles, conocido por su influencia en la música y la cultura pop.",
  cost: 400,
  material: "Oleo en papel",
  dimensions: "20x30",
  disponible: true,
  category: "Pintura Original",
};

export const item9: ItemProps = {
  image: IglesiaDesierto,
  title: "Iglesia en el Desierto",
  description: "Vista de una iglesia en el desierto, capturando la tranquilidad y el aislamiento del lugar.",
  cost: 400,
  material: "Gouache en papel",
  dimensions: "20x30",
  disponible: true,
  category: "Pintura Original",
};

export const item10: ItemProps = {
  image: Doberman,
  title: "El mejor amigo del hombre",
  description: "Retrato de un doberman, una raza de perro conocida por su lealtad y valentía.",
  cost: 450,
  material: "Acrilico y plumon en papel fabriano",
  dimensions: "20x30",
  disponible: true,
  category: "Pintura Original",
};

export const item11: ItemProps = {
  image: OaxLand,
  title: "Paisaje Oaxaqueño",
  description: "Paisaje tomado desde una ventana del museo de las culturas de Oaxaca.",
  cost: 600,
  material: "Oleo en papel con marco colgable/reclinable",
  dimensions: "27x22",
  disponible: true,
  category: "Pintura Original",
};

export const item12: ItemProps = {
  image: OaxScult,
  title: "Escultura en fachada Oaxaqueña",
  description: "Escultura de ornamento en una fachada en el centro histórico de Oaxaca.", 
  cost: 600,
  material: "Oleo en papel con marco colgable/reclinable",
  dimensions: "27x22",
  disponible: true,
  category: "Pintura Original",
};

export const item13: ItemProps = {
  image: Rome,
  title: "Columna Romana",
  description: "Columna grecorromana, inspirada en una columna en el centro de roma.",
  cost: 600,
  material: "Oleo en papel con marco colgable/reclinable",
  dimensions: "27x22",
  disponible: true,
  category: "Pintura Original",
};



// Create an array of all items for easier importing
export const items = [
  item13,
  item12,
  item11,
  item10,
  item9,
  item8,  
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  itemPrint1,
  itemPrint2,
  itemPrint3,
  itemSticker1,
];
