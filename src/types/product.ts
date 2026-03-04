export type ProductCategory = "empadinhas" | "empadas" | "empadoes";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  priceCents: number;
  image: string;
  salesCount: number;
};
