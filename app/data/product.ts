interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  buyBy: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Acne Calming Serum",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quaerat sint, exercitationem saepe illo delectus!.",
    imageUrl: "/product-images/produk_pink_2.jpg",
    buyBy: "1.000.000+",
  },
  {
    id: 2,
    name: "Hydra Boost Serum",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quaerat sint, exercitationem saepe illo delectus!.",
    imageUrl: "/product-images/produk_warm_1.jpg",
    buyBy: "1.000.000+",
  },
  {
    id: 3,
    name: "Glass Skin Serum",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quaerat sint, exercitationem saepe illo delectus!.",
    imageUrl: "/product-images/skincare_1.jpg",
    buyBy: "1.000.000+"
  },
];