"use client";
import { makePostRequest, makePutRequest } from "lib/apiRequest.js";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import { generateSlug } from "lib/generateSlug.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";

import SelectInput from "components/Forminput/SelectInput.jsx";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

const MarketForm = ({ categories, updateData = {} }) => {
  const initialImageUrl = updateData.logoUrl ?? "";
  const id = updateData.id ?? "";
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isMultiple: (updateData.categoryIds?.length ?? 0) > 1,
      categoryIds: updateData.categoryIds ?? [],
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  const isMultiple = watch("isMultiple");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/markets");
  }
  async function onSubmit(data) {
    const categoryIds = [].concat(data.categoryIds || []);
  
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = imageUrl;
    data.categoryIds = categoryIds; 
  
    console.log(data);
  
    if (id) {
      data.id = id;
      makePutRequest(
        setLoading,
        `/api/markets/${id}`,
        data,
        "Markets",
        reset,
        redirect()
      );
      setImageUrl("");
    } else {
      makePostRequest(
        setLoading,
        "/api/markets",
        data,
        "Markets",
        reset,
        redirect()
      );
      setImageUrl("");
    }
  }
  
  return (
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
          <div>
            <SelectInput
              label="Select Category"
              name="categoryIds"
              register={register}
              errors={errors}
              className="w-full"
              options={categories}
              multiple={isMultiple}
              defaultValues={updateData.categoryIds ?? []}
            />

            <ToggleInput
              label={"Multiple Category & Single Category"}
              name={"isMultiple"}
              trueTitle={"Multiple"}
              falseTitle={"Single"}
              register={register}
              defaultChecked={isMultiple}
            />
          </div>
        </div>
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
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
        buttonTitle={id ? "Update Market" : "Create Market"}
        LoadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Market Please Wait...`}
      />
    </form>
  );
};

export default MarketForm;
