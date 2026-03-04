import type { Product, ProductCategory } from "../types/product";

export type BannerMock = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export type CategoryMock = {
  id: ProductCategory;
  label: string;
};

export const bannersMock: BannerMock[] = [
  {
    id: "banner-empadinhas",
    title: "Empadinhas",
    subtitle: "Sabores classicos para qualquer hora",
    image: "/assets/banner1.jpg",
  },
  {
    id: "banner-empadas",
    title: "Empadas",
    subtitle: "Crocantes por fora, cremosas por dentro",
    image: "/assets/banner2.jpg",
  },
  {
    id: "banner-empadoes",
    title: "Empadoes",
    subtitle: "Perfeitos para compartilhar",
    image: "/assets/banner3.jpg",
  },
];

export const categoriesMock: CategoryMock[] = [
  { id: "empadinhas", label: "Empadinhas" },
  { id: "empadas", label: "Empadas" },
  { id: "empadoes", label: "Empadoes" },
];

export const productsMock: Product[] = [
  {
    id: "prod-frango",
    name: "Empada de Frango",
    description: "Recheio cremoso com frango desfiado temperado.",
    category: "empadas",
    priceCents: 1490,
    image: "/assets/banner2.jpg",
    salesCount: 325,
  },
  {
    id: "prod-camarao",
    name: "Empada de Camarao",
    description: "Camarao ao molho suave com toque de ervas.",
    category: "empadas",
    priceCents: 1790,
    image: "/assets/banner2.jpg",
    salesCount: 210,
  },
  {
    id: "prod-palmito",
    name: "Empadinha de Palmito",
    description: "Versao mini com recheio de palmito cremoso.",
    category: "empadinhas",
    priceCents: 790,
    image: "/assets/banner1.jpg",
    salesCount: 198,
  },
  {
    id: "prod-carne-seca",
    name: "Empadinha de Carne Seca",
    description: "Carne seca desfiada com catupiry.",
    category: "empadinhas",
    priceCents: 890,
    image: "/assets/banner1.jpg",
    salesCount: 240,
  },
  {
    id: "prod-empadao-frango",
    name: "Empadao de Frango",
    description: "Tamanho familia com massa leve e dourada.",
    category: "empadoes",
    priceCents: 5890,
    image: "/assets/banner3.jpg",
    salesCount: 145,
  },
  {
    id: "prod-empadao-bacalhau",
    name: "Empadao de Bacalhau",
    description: "Receita especial para ocasioes especiais.",
    category: "empadoes",
    priceCents: 6990,
    image: "/assets/banner3.jpg",
    salesCount: 120,
  },
  {
    id: "prod-queijo",
    name: "Empada de Queijo",
    description: "Queijo derretido com massa amanteigada.",
    category: "empadas",
    priceCents: 1390,
    image: "/assets/banner2.jpg",
    salesCount: 176,
  },
  {
    id: "prod-calabresa",
    name: "Empadinha de Calabresa",
    description: "Calabresa picante com toque de cebola.",
    category: "empadinhas",
    priceCents: 850,
    image: "/assets/banner1.jpg",
    salesCount: 188,
  },
  {
    id: "prod-frango-catupiry",
    name: "Empada de Frango com Catupiry",
    description: "Frango cremoso com catupiry e ervas finas.",
    category: "empadas",
    priceCents: 1690,
    image: "/assets/banner2.jpg",
    salesCount: 264,
  },
  {
    id: "prod-empadao-palmito",
    name: "Empadao de Palmito",
    description: "Opcao vegetariana em tamanho familia.",
    category: "empadoes",
    priceCents: 6290,
    image: "/assets/banner3.jpg",
    salesCount: 132,
  },
  {
    id: "prod-bacon-cheddar",
    name: "Empadinha de Bacon com Cheddar",
    description: "Sabor intenso com recheio bem cremoso.",
    category: "empadinhas",
    priceCents: 950,
    image: "/assets/banner1.jpg",
    salesCount: 219,
  },
  {
    id: "prod-camarao-cremoso",
    name: "Empada de Camarao Cremoso",
    description: "Camarao ao creme suave com toque de limao.",
    category: "empadas",
    priceCents: 1890,
    image: "/assets/banner2.jpg",
    salesCount: 171,
  },
];

export const featuredProductsMock: Product[] = [...productsMock]
  .sort((a, b) => b.salesCount - a.salesCount)
  .slice(0, 4);
