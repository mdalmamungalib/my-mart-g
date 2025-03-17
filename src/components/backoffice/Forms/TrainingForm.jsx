"use client";
import { makePostRequest, makePutRequest } from "lib/apiRequest.js";
import { generateSlug } from "lib/generateSlug.js";
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
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

const TrainingForm = ({ categories, updateData = {} }) => {
  const initialImageUrl = updateData.imageUrl ?? "";
  const id = updateData.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [content, setContent] = useState(updateData.content ?? "");
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
    router.push("/dashboard/community");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);

    if (id) {
      data.id = id;
      //Make put request (update)
      makePutRequest(
        setLoading,
        `/api/trainings/${id}`,
        data,
        "Training",
        reset,
        redirect()
      );
      setImageUrl("");
      setContent("");
    } else {
        //Make post request (create)
      makePostRequest(
        setLoading,
        "/api/trainings",
        data,
        "Training",
        reset,
        redirect()
      );
      setImageUrl("");
      setContent("");
    }
  };

  return (
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
          defaultChecked={isActive}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Training" : "Create Training"}
        LoadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Training Please Wait...`}
      />
    </form>
  );
};

export default TrainingForm;
