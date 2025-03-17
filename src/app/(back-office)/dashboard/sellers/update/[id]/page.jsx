import FormHeader from "components/backoffice/FormHeader/FormHeader";
import SellerForm from "components/backoffice/Forms/SellerForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateSeller = async ({ params: { id } }) => {
  const seller = await getData(`/sellers/${id}`);
  return (
    <div className="">
      <FormHeader title={"Update Seller"} />
      <SellerForm updateData={seller}/>
    </div>
  );
};

export default UpdateSeller;
