import FormHeader from "components/backoffice/FormHeader/FormHeader";
import CouponForm from "components/backoffice/Forms/CouponForm";
import { getData } from "lib/getData";
import React from "react";

const UpdateCoupon = async ({params: {id}}) => {
  const coupon = await getData(`coupons/${id}`)

  return (
    <div>
      <FormHeader title={"Update Coupon"} />
      <CouponForm updateData={coupon}/>
    </div>
  );
};

export default UpdateCoupon;
