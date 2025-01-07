"use client";

import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import { makePostRequest } from "../../../../../lib/apiRequest.js";
import generateUserCode from "../../../../../lib/generateUserCode.js";

const NewStaff = () => {
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
  async function onSubmit(data) {
    /* 
          -name
           -password
           -email
           -phone
           -physicalAddress
           -NIN Number
           -Dob
           -notes
           -isActive 
           */

    setLoading(true);
    const code = generateUserCode("LFF",data.name);
    data.code = code;
    console.log(data);

    makePostRequest(setLoading, "api/staff", data, "Staffs", reset);
  }
  return (
    <div>
      <FormHeader title={"New Category"} />
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
            label={"Publish Your Category"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Category"}
          LoadingButtonTitle={"Creating Category Please Wait..."}
        />
      </form>
    </div>
  );
};

export default NewStaff;
