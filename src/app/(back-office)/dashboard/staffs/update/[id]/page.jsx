import FormHeader from "components/backoffice/FormHeader/FormHeader";
import StaffForm from "components/backoffice/Forms/StaffForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateStaff = async ({params: {id}}) => {
  const staff = await getData(`staffs/${id}`)
  return (
    <div>
      <FormHeader title={"Update Staff"} />
      <StaffForm updateData={staff}/>
    </div>
  );
};

export default UpdateStaff;
