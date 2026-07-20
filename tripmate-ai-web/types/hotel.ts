export interface Hotel {
  name: string;
  address: string;
  description: string;
  website: string;

  rating?: number;
  reviews?: number;
  price?: string;
  thumbnail?: string;
}