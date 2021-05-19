import { Ingredient } from './ingredient.model';

export interface Recipe {
  id?: string;
  name: string;
  description?: string;
  portions: number;
  images: string[];
  steps: [
    {
      text: string;
      image: string;
    }
  ];
  time_for_preparing: number;
  ingredients: Ingredient[];
}
