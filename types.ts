export interface Product {
  id: number;
  title: string;
  img: string;
  fallbackImg?: string;
  category: string;
  price: string;
  desc: string;
}

export type Category = 'men' | 'women' | 'accessories';
export type ViewState = 'home' | 'catalog' | 'about';

export interface ProductData {
  men: Product[];
  women: Product[];
  accessories: Product[];
}