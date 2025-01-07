"use client";
import { makePostRequest } from "../../../../../lib/apiRequest.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import { generateSlug } from "../../../../../lib/generateSlug.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import MultipleToggleInput from "components/Forminput/MultipleToggleInput.jsx";
import SelectInput from "components/Forminput/SelectInput.jsx";

const NewMarkets = () => {
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [multiple, stMultiple] = useState(false);
  
  const handleToggleChange = (state) => {
    stMultiple(state);
  };
  
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ];

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
  async function onSubmit(data) {
    
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);
    
    makePostRequest(
      setLoading,
      "api/markets",
      data,
      "Markets",
      reset
    );
  }
  return (
    <div>
      <FormHeader title={"New Market"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <div>
          
          <SelectInput
            label="Select Category"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple={multiple}
          />
          <MultipleToggleInput
            onToggle={handleToggleChange}
            name="product"
            register={register}
            errors={errors}
            label={"Multiple Category & Single Category"}
            multiple={"Multiple"}
            single={"Single"}
          />
          </div>
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUpload"
            label={"Market Logo"}
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Market Status"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Market"}
          LoadingButtonTitle={"Creating Market Please Wait..."}
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

export default NewMarkets;
