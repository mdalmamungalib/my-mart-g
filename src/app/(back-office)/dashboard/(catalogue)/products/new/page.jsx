import FormHeader from "components/backoffice/FormHeader/FormHeader";
import ProductForm from "components/backoffice/Forms/ProductForm";
import NewProductForm from "components/backoffice/NewProductForm/NewProductForm";
import { getData } from "lib/getData";
import React from "react";
export const dynamic = "force-dynamic";

const NewProduct = async () => {
  // Categories and Sellers
  const categoriesData = await getData("categories");
  const usersData = await getData("users");

  const sellersData = usersData.filter(
    (user) => user.role === "SELLER"
  );
  const sellers = sellersData.map((seller) => {
    return {
      id: seller.id,
      title: seller.name,
    };
  });

  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return (
    <div>
      <FormHeader title={"New Product"} />
      <ProductForm sellers={sellers} categories={categories} />
    </div>
  );
};

export default NewProduct;
