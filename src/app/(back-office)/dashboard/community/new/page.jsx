"use client";
import { makePostRequest } from "../../../../../lib/apiRequest.js";
import { generateSlug } from "../../../../../lib/generateSlug.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import SelectInput from "components/Forminput/SelectInput.jsx";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import QuillEditor from "components/Forminput/QuillEditor.jsx";
export const dynamic = "force-dynamic";


// Dynamically import ReactQuill

const Training = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
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

  const onSubmit = async (data) => {
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/trainings",
      data,
      "Training",
      reset
    );
    setImageUrl("");
    setContent("");
  };

  return (
    <div>
      <FormHeader title={"New Training"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
            label={"Training Thumbnail"}
          />
          <QuillEditor
            label={"Training Content"}
            value={content}
            onChange={setContent}
          />
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Publish Your Training"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Create Training"}
          LoadingButtonTitle={"Creating Training Please Wait..."}
        />
      </form>
    </div>
  );
};

export default Training;
