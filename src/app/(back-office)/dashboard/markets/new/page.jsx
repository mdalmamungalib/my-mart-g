import FormHeader from "components/backoffice/FormHeader/FormHeader";
import MarketForm from "components/backoffice/Forms/MarketForm";
import NewMarketForm from "components/backoffice/NewMarketForm/NewMarketForm";
import { getData } from "lib/getData";
import React from "react";
export const dynamic = "force-dynamic";

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
    <div>
      <FormHeader title={"New Market"} />
      <MarketForm categories={categories} />
    </div>
  );
};

export default NewMarket;
