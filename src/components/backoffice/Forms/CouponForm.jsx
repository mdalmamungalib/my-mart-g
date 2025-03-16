"use client";
import { makePostRequest, makePutRequest } from "lib/apiRequest.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import generateCouponCode from "lib/generateCouponCode.js";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import { generateisoFormattedDate } from "lib/generateisoFormattedDate.js";
import { useRouter } from "next/navigation.js";

export const dynamic = "force-dynamic";

const CouponForm = ({ updateData = {} }) => {
  const id = updateData.id ?? "";
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    setValue, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: false,
      expiryDate: updateData.expiryDate
        ? new Date(updateData.expiryDate)
            .toISOString()
            .split("T")[0]
        : "", 
      ...updateData,
    },
  });

  useEffect(() => {
    if (updateData.expiryDate) {
      setValue(
        "expiryDate",
        new Date(updateData.expiryDate).toISOString().split("T")[0]
      );
    }
  }, [updateData, setValue]);

  const isActive = watch("isActive");

  function redirect() {
    router.push("/dashboard/coupons");
    setTimeout(() => {
      window.location.reload(); 
    }, 1000);
  }

  async function onSubmit(data) {
    setLoading(true);

    const couponCode = generateCouponCode(
      data.title,
      data.expiryDate
    );
    const isoFormattedDate = generateisoFormattedDate(
      data.expiryDate
    );
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode;
    console.log(data);

    if (id) {
      //Make put request (update)
      data.id = id;
      makePutRequest(
        setLoading,
        `/api/coupons/${id}`,
        data,
        "Coupon",
        reset,
        redirect
      );
    } else {
      //Make post request (create)
      makePostRequest(
        setLoading,
        "/api/coupons",
        data,
        "Coupon",
        reset,
        redirect
      );
    }
  }

  return (
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
          label="Coupon Validity Time"
          name="expiryDate"
          type="date"
          register={register}
          errors={errors}
        />

        <ToggleInput
          name="isActive"
          register={register}
          label="Publish Your Coupon"
          falseTitle="Draft"
          trueTitle="Active"
          defaultChecked={isActive}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Coupon" : "Create Coupon"}
        LoadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Coupon Please Wait...`}
      />
    </form>
  );
};

export default CouponForm;
