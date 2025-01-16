import NewMarketForm from "components/backoffice/NewMarketForm/NewMarketForm";
import NewProductForm from "components/backoffice/NewProductForm/NewProductForm";
import { getData } from "lib/getData";
import React from "react";

const NewProduct = async () => {
  // Categories and Sellers
  const categoriesData = await getData("categories");

  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <NewMarketForm categories={categories} />
  );
};

export default NewProduct;
