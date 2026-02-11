export type CategoryId = 'all' | 'streaming' | 'software' | 'design' | 'games';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: CategoryId;
  image: string;
  description: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

export interface OrderFormState {
  fullName: string;
  phone: string;
  // City removed as it's digital delivery
}