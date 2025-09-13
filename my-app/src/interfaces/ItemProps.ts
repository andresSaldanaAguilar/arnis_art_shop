export interface ItemProps {
  image: string;
  imageRef?: string; // made optional
  title: string;
  description: string;
  cost: number;
  material: string;
  dimensions: string;
  disponible: boolean;
  reference?: string;
  category: string;
  purchaseLink?: string; // optional future link
}
