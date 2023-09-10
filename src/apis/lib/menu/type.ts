export interface Ingredient {
  idx: number;
  ingredient: string;
  price: number;
  url: string;
}

export interface Menu {
  menu_idx: number;
  name: string;
  content: string;
  item: Ingredient[];
  img: string;
  total: number;
}
