import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./NewArrivalSection.css";
import { ProductCard } from "./ProductCard";

export const NewArrivalSection = () => {
  const { dataState } = useContext(DataContext);
  const newArrivalData = [
    {
      id: 1,
      title: "Boy Tee",
      description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
      price: 3999,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Adidas",
      category: "Men",
      type: "New Arrival",
      thumbnail:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
      ],
    },
    {
      id: 2,
      title: "Boy Tee",
      description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
      price: 3999,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Adidas",
      category: "Men",
      type: "New Arrival",
      thumbnail:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
      ],
    },
    {
      id: 3,
      title: "Boy Tee",
      description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
      price: 3999,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Adidas",
      category: "Men",
      type: "New Arrival",
      thumbnail:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
      ],
    },
    {
      id: 4,
      title: "Boy Tee",
      description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
      price: 3999,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Adidas",
      category: "Men",
      type: "New Arrival",
      thumbnail:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
      ],
    },
    // {
    //   id: 5,
    //   title: "Boy Tee",
    //   description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
    //   price: 3999,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Adidas",
    //   category: "Men",
    //   type: "New Arrival",
    //   thumbnail:
    //     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
    //   images: [
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Boy Tee",
    //   description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
    //   price: 3999,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Adidas",
    //   category: "Men",
    //   type: "New Arrival",
    //   thumbnail:
    //     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
    //   images: [
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
    //   ],
    // },
    // {
    //   id: 7,
    //   title: "Boy Tee",
    //   description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
    //   price: 3999,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Adidas",
    //   category: "Men",
    //   type: "New Arrival",
    //   thumbnail:
    //     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
    //   images: [
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
    //   ],
    // },
    // {
    //   id: 8,
    //   title: "Boy Tee",
    //   description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
    //   price: 3999,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Adidas",
    //   category: "Men",
    //   type: "New Arrival",
    //   thumbnail:
    //     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
    //   images: [
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
    //   ],
    // },
    // {
    //   id: 9,
    //   title: "Boy Tee",
    //   description: "AN ESSENTIAL TEE WITH GRAPHIC ELEMENTS THAT CATCH THE EYE.",
    //   price: 3999,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Adidas",
    //   category: "Men",
    //   type: "New Arrival",
    //   thumbnail:
    //     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/062444bd96ee4ba0a24aaf0400bf3b9e_9366/rifta-city-boy-tee.jpg",
    //   images: [
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb58057e05b44a19aa01af0400bf4675_9366/RIFTA_City_Boy_Tee_Blue_IC8414_21_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/faa2ed54131f47769003af0400bf4e66_9366/RIFTA_City_Boy_Tee_Blue_IC8414_23_hover_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/538c08b3945f495497dbaf0400bf58a4_9366/RIFTA_City_Boy_Tee_Blue_IC8414_25_model.jpg",
    //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e3e066562204383afabaf0400bf8486_9366/RIFTA_City_Boy_Tee_Blue_IC8414_01_laydown.jpg",
    //   ],
    // },
  ];
  return (
    <>
      <h1 className="newarrival-header">
        {dataState?.types && dataState?.types[0]?.type}
      </h1>
      <div className="newarrival-container">
        {<ProductCard data={newArrivalData} />}
      </div>
    </>
  );
};
