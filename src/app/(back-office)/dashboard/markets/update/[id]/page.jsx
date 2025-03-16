import FormHeader from "components/backoffice/FormHeader/FormHeader";
import MarketForm from "components/backoffice/Forms/MarketForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateMarket = async ({ params: { id } }) => {
  const market = await getData(`markets/${id}`)
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
      <FormHeader title={"Update Market"} />
      <MarketForm categories={categories} updateData={market}/>
    </div>
  );
};

export default UpdateMarket;
