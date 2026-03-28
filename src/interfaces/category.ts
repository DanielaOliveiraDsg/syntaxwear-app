export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string; // Optional in DB
  active: boolean;
  createdAt: string; // Dates become strings when serialized to JSON
  updatedAt: string;
}