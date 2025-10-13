export interface Trip {
  _id?: string;
  name: string;
  location: string;
  price: number;
  description?: string;
  duration?: number;
  imageUrl?: string;
}
