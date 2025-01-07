"use client";
import { makePostRequest } from "../../../../../../lib/apiRequest.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import generateCouponCode from "../../../../../../lib/generateCouponCode.js";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import { generateisoFormattedDate } from "lib/generateisoFormattedDate.js";
import { useRouter } from "next/navigation.js";

const NewCoupons = () => {
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { isActive: true },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect(){
    router.push("/dashboard/coupons")
  }
  
  async function onSubmit(data) {
    // setLoading(true);

    // data.slug = slug;
    // data.imageUrl = imageUrl;
    const couponCode = generateCouponCode(
      data.title,
      data.expiryDate
    );
    const isoFormattedDate = generateisoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/coupons",
      data,
      "Coupon",
      reset,
      redirect
    );
  }
  return (
    <div>
      <FormHeader title={"New Coupon"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Campaign Name"
            name="title"
            register={register}
            errors={errors}
          />

          <TextInput
            label="Coupon validity time"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
          />
          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Publish Your Cupon "}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Category"}
          LoadingButtonTitle={"Creating Coupon Please Wait..."}
        />
      </form>

      {/* -id
      -Campaign Image
           -Campaign Name
           -Campaign Code
           -Coupon validity time */}
    </div>
  );
};

export default NewCoupons;
