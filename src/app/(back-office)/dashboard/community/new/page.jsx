import NewTrainingForm from "components/backoffice/NewTrainingForm/NewTrainingForm";
import { getData } from "lib/getData";
import React from "react";
export const dynamic = "force-dynamic";

const NewTraining = async () => {
  // Categories and Sellers
  const categoriesData = await getData("categories");

  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <NewTrainingForm  categories={categories} />
  );
};

export default NewTraining;
