import FormHeader from "components/backoffice/FormHeader/FormHeader";
import CouponForm from "components/backoffice/Forms/CouponForm";

const NewCoupons = () => {
  return (
    <div>
      <FormHeader title={"New Coupon"} />
      <CouponForm />
    </div>
  );
};

export default NewCoupons;
