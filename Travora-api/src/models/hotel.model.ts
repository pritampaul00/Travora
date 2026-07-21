export interface Hotel {
  name: string;
  address: string;
  description: string;
  website: string;

  price?: string;
  rating?: number;
  reviews?: number;
  thumbnail?: string;
}