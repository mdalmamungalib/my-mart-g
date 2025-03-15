import FormHeader from "components/backoffice/FormHeader/FormHeader";
import ProductForm from "components/backoffice/Forms/ProductForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateProduct = async ({ params: { id } }) => {
  const product = await getData(`products/${id}`);
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
      <FormHeader title={"Update Product"} />
      <ProductForm
        updateData={product}
        sellers={sellers}
        categories={categories}
      />
    </div>
  );
};

export default UpdateProduct;
