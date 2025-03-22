"use client";
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
import ArrayItemsInput from "components/Forminput/ArrayItemsInput";
export const dynamic = "force-dynamic";

const NewSellerForm = ({ user = {} }) => {
  const [profileImageUrl, setProfileImageUrl] = useState("");
  // loading
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { isActive: false, ...user },
  });

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/sellers");
    setTimeout(() => {
      window.location.reload(); 
    }, 1000);
  }

  async function onSubmit(data) {
    setLoading(true);
    const code = generateUserCode("LFF", data.name);
    data.code = code;
    data.userId = user.id;
    data.products = products;
    data.profileImageUrl = profileImageUrl;
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
   
      
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
       
        <TextInput
          label="Seller's Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
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
        {/* Accare */}
        <TextInput
          label="What is the size of your Store in Fits"
          name="storeSize"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="What is your main Product"
          name="mainProduct"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ArrayItemsInput
          setItems={setProducts}
          items={products}
          itemTitle={"Product"}
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
          defaultChecked={isActive}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle={"Create Seller"}
        LoadingButtonTitle={"Creating Seller Please Wait..."}
      />
    </form>
  
    
  );
};

export default NewSellerForm;
