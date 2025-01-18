import NewMarketForm from "components/backoffice/NewMarketForm/NewMarketForm";
import { getData } from "lib/getData";
import React from "react";

const NewMarket = async () => {
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

export default NewMarket;
