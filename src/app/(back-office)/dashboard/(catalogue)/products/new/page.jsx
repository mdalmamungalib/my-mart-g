"use client";
import { makePostRequest } from "../../../../../../lib/apiRequest.js";
import FormHeader from "components/backoffice/FormHeader/FormHeader.jsx";
import ImageInput from "components/Forminput/ImageInput.jsx";
import SubmitButton from "components/Forminput/SubmitButton.jsx";
import TextareaInput from "components/Forminput/TextareaInput.jsx";
import TextInput from "components/Forminput/TextInput.jsx";
import { generateSlug } from "../../../../../../lib/generateSlug.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "components/Forminput/SelectInput.jsx";
import { Plus, X } from "lucide-react";
import ArrayItemsInput from "components/Forminput/ArrayItemsInput.jsx";
import ToggleInput from "components/Forminput/ToggleInput.jsx";
import MultipleToggleInput from "components/Forminput/MultipleToggleInput.jsx";

const NewProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [multiple, stMultiple] = useState(false);

  const handleToggleChange = (state) => {
    stMultiple(state);
  };

  // tags
  const [tags, setTags] = useState([]);

  // tags end
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

  const sellers = [
    {
      id: 1,
      title: "Sellers 1",
    },
    {
      id: 2,
      title: "Sellers 2",
    },
    {
      id: 3,
      title: "Sellers 3",
    },
  ];

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

  async function onSubmit(data) {
    setLoading(true);
    const slug = generateSlug(data?.title);
    data.tags = tags;
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/products",
      data,
      "Product",
      reset
    );
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title={"New Product"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl p-4 mx-auto mt-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Before Discount)"
            type="number"
            name="productPrice"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Discounted)"
            type="number"
            name="salePrice"
            register={register}
            errors={errors}
            className="w-full"
          />
          <div>
          
          <SelectInput
            label="Select Category"
            name="categoryId"
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
          <SelectInput
            label="Select Sellers"
            name="sellerId"
            register={register}
            errors={errors}
            className="w-full"
            options={sellers}
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label={"Product Image"}
          />

          <ArrayItemsInput
            items={tags}
            setItems={setTags}
            itemTitle="Tag"
          />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />

          {/* toggle input */}
          <ToggleInput
            name={"isActive"}
            register={register}
            label={"Publish Your Product"}
            falseTitle={"Draft"}
            trueTitle={"Active"}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle={"Save Product"}
          LoadingButtonTitle={"Creating Product Please Wait..."}
        />
      </form>

      {/* -id
           -title
           -slug
           -description
           -images[]
           -sku
           -barcode
           -productPrice
           -selPrice
           -category
           -farmer
           -tags[]
           */}
    </div>
  );
};

export default NewProduct;
