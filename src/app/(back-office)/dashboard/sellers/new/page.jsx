"use client";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { makePostRequest } from "lib/apiRequest.js";
import generateUserCode from "lib/generateUserCode.js";
import { useRouter } from "next/navigation.js";
import ImageInput from "components/Forminput/ImageInput.jsx";
import NewSellerForm from "components/backoffice/NewSellerForm/NewSellerForm";



const NewSeller = () => {
  const [profileImageUrl, setProfileImageUrl] = useState("");
  // loading
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
  function redirect() {
    router.push("/dashboard/sellers");
  }

  async function onSubmit(data) {
    setLoading(true);
    const code = generateUserCode("LFF", data.name);
    data.code = code;
    console.log(data);
    makePostRequest(
      setLoading,
      "/api/sellers",
      data,
      "Sellers",
      reset,
      redirect
    );
  }
  return (
    <div>
      <FormHeader title={"New Seller"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Seller's Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Seller's Phone Number"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Seller's Email Address"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Seller's Physical Address"
            name="sellersPhysical"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Seller's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Seller's Contact Person Phone Number"
            name="contactPersonPhone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Date"
            name="date"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <ImageInput
            imageUrl={profileImageUrl}
            setImageUrl={setProfileImageUrl}
            endpoint="sellerProfileUploader"
            label={"Seller's Profile Image"}
          />
          <TextareaInput
            label="Seller's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />

          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Seller Status"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Seller"}
          LoadingButtonTitle={"Creating Seller Please Wait..."}
        />
      </form>

      {/*
        -id,
        -isActive,
        -description,
        -tags,
        -imageUrl,
        -sellersIds,
        -categoryIds,
        -salePrice,
        -productPrice,
        -barcode,
        -sku,
        -title,
        -slug,
           */}
    </div>
  );
};

export default NewSeller;
