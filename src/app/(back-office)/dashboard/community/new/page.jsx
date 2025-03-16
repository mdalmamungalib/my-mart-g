import FormHeader from "components/backoffice/FormHeader/FormHeader";
import TrainingForm from "components/backoffice/Forms/TrainingForm";
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
   <div>
    <FormHeader title={"New Training"} />
     <TrainingForm  categories={categories} />
   </div>
  );
};

export default NewTraining;
