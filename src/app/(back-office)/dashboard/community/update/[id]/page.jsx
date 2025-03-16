import FormHeader from "components/backoffice/FormHeader/FormHeader";
import TrainingForm from "components/backoffice/Forms/TrainingForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateTraining = async ({params: {id}}) => {
  const training = await getData(`trainings/${id}`);
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
    <FormHeader title={"Update Training"} />
     <TrainingForm  categories={categories} updateData={training}/>
   </div>
  );
};

export default UpdateTraining;
