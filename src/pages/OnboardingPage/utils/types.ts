export interface Ingredient {
  img: string;
  ingredient: string;
  price: number;
}

export interface Menu {
  id: number;
  name: string;
  content: string;
  items: Ingredient[];
  img: string;
  total: number;
}
