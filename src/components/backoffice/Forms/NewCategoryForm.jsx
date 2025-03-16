"use client";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "components/Forminput/SelectInput.jsx";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import { useRouter } from "next/navigation.js";
import { generateSlug } from "lib/generateSlug";
import { makePostRequest, makePutRequest } from "lib/apiRequest";
export const dynamic = "force-dynamic";

const NewCategoryForm = ({ updateData = {} }) => {
  const initialImageUrl = updateData.imageUrl ?? "";
  const id = updateData.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);

  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { isActive: false, ...updateData },
  });

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/categories");
    setTimeout(() => {
      window.location.reload(); 
    }, 1000);
  }
  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data?.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);

    if (id) {
      data.id = id;
      //Make put request (update)
      makePutRequest(
        setLoading,
        `api/categories/${id}`,
        data,
        "Category",
        reset,
        redirect
      );
      console.log("update request: ", data);
    } else {
      //Make post request (create)
      makePostRequest(
        setLoading,
        "api/categories",
        data,
        "Category",
        reset,
        redirect
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
          label="Name"
          name="title"
          register={register}
          errors={errors}
        />

        <TextareaInput
          label="Category Description"
          name="description"
          register={register}
          errors={errors}
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="categoryImageUploader"
          label={"Category Image"}
        />
        {/* toggle input */}
        <ToggleInput
          name={"isActive"}
          register={register}
          label={"Publish Your Category"}
          falseTitle={"Draft"}
          trueTitle={"Active"}
          defaultChecked={isActive}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Category" : "Create Category"}
        LoadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Category Please Wait...`}
      />
    </form>
  );
};

export default NewCategoryForm;
