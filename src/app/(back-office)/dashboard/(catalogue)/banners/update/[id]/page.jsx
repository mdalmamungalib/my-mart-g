import FormHeader from "components/backoffice/FormHeader/FormHeader";
import BannerForm from "components/backoffice/Forms/BannerForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateBanner = async ({ params: { id } }) => {
  const banner = await getData(`banners/${id}`);
  return (
    <div>
      <FormHeader title={"Update Banner"} />
      <BannerForm updateData={banner}/>
    </div>
  );
};

export default UpdateBanner;
