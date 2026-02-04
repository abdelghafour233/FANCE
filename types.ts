export type CategoryId = 'all' | 'glasses' | 'watches' | 'car_accessories' | 'misc';

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
  city: string;
  phone: string;
}