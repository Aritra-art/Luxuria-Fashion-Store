import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: 1,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 5999,
    discountPercentage: 12.9,
    rating: 4.33,
    stock: true,
    brand: "Adidas",
    category: "Women",
    type: "Best Seller",
    size: "S",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 2,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 3999,
    discountPercentage: 10.9,
    rating: 4.33,
    stock: false,
    brand: "UCB",
    category: "Men",
    type: "New Arrival",
    size: "M",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 3,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 6999,
    discountPercentage: 14.9,
    rating: 4.33,
    stock: true,
    brand: "Puma",
    category: "Women",
    type: "New Arrival",
    size: "L",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 4,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 2999,
    discountPercentage: 8.9,
    rating: 4.33,
    stock: true,
    brand: "US Polo Assn.",
    category: "Women",
    type: "Best Seller",
    size: "XL",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
  {
    id: 5,
    title: "Logo Tee",
    description: "A VERSATILE TEE MADE WITH NATURE.",
    price: 8999,
    discountPercentage: 12.9,
    rating: 4.33,
    stock: false,
    brand: "Wrogn",
    category: "Men",
    type: "New Arrival",
    size: "XXL",
    thumbnail:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdda7140256f4a589533add7007a1c30_9366/adidas-by-stella-mccartney-logo-tee.jpg",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7653828fd4c24776b35badd7007a3044_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c79cc6d3399f4b358fa7add7007a4414_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_22_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/baf50920cbaf4c7c85c9add7007a54b8_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_23_hover_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1db2024f2863494b8ef9add7007acd29_9366/adidas_by_Stella_McCartney_Logo_Tee_Black_HB7402_01_laydown.jpg",
    ],
  },
];
