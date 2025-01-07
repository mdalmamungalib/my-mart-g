"use client";
import { makePostRequest } from "../../../../../../lib/apiRequest.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import { useRouter } from "next/navigation.js";

const NewBanner = () => {
  const [imageUrl, setImageUrl] = useState("");
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
    router.push("/dashboard/banners")
  }
  async function onSubmit(data) {
    setLoading(true);
    data.imageUrl = imageUrl;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/banners",
      data,
      "Banner",
      reset,
      redirect
    );
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title={"New Banner"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Banner Link"
            name="link"
            register={register}
            errors={errors}
          />
          
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
            label={"Banner Image"}
          />

          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Publish Your Banner"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Banner"}
          LoadingButtonTitle={"Creating Banner Please Wait..."}
        />
      </form>

      {/* -id
           -image
           -description 
           -url */}
    </div>
  );
};

export default NewBanner;
