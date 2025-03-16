"use client";

import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import { makePostRequest, makePutRequest } from "lib/apiRequest.js";
import generateUserCode from "lib/generateUserCode.js";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";

const StaffForm = ({ updateData = {} }) => {
  const id = updateData.id ?? "";
  const [loading, setLoading] = useState(false);

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
      expiryDate: updateData.dob
        ? new Date(updateData.dob).toISOString().split("T")[0]
        : "",
      ...updateData,
    },
  });

  useEffect(() => {
    if (updateData.dob) {
      setValue(
        "dob",
        new Date(updateData.dob).toISOString().split("T")[0]
      );
    }
  }, [updateData, setValue]);

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/staffs");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  async function onSubmit(data) {
    setLoading(true);
    const code = generateUserCode("LFF", data.name);
    data.code = code;
    console.log(data);

    if (id) {
      data.id = id;
      //Make put request (update)
      makePutRequest(
        setLoading,
        `/api/staffs/${id}`,
        data,
        "Staffs",
        reset,
        redirect
      );
    } else {
      //Make post request (create)

      makePostRequest(
        setLoading,
        "/api/staffs",
        data,
        "Staffs",
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
          label="Staff's  Full Name"
          name="name"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Password"
          name="password"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Staff's Email Address"
          name="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Staff's Phone"
          name="phone"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Staff's Physical Address"
          name="physicalAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="NIN (Id Number)"
          name="nin"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Date of Birth"
          name="dob"
          type="date"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextareaInput
          label="Notes"
          name="description"
          register={register}
          errors={errors}
        />

        {/* toggle input */}
        <ToggleInput
          name={"isActive"}
          register={register}
          label={"Publish Your Staff"}
          falseTitle={"Draft"}
          trueTitle={"Active"}
          defaultChecked={isActive}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Staff" : "Create Staff"}
        LoadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Staff Please Wait...`}
      />
    </form>
  );
};

export default StaffForm;
