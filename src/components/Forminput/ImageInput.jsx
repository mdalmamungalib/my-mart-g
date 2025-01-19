import { UploadDropzone } from "../../lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "imageUploader",
}) {
  // Helper to handle image removal
  const handleImageReset = () => {
    setImageUrl("");
  };

  // Helper to handle upload completion
  const handleUploadComplete = (res) => {
    setImageUrl(res[0].url);
    toast.success("Image upload completed!");
    console.log("Files:", res);
  };

  // Helper to handle upload error
  const handleUploadError = (error) => {
    toast.error(`Upload Error: ${error.message}`);
    console.error(`Error uploading image: ${error.message}`, error);
  };

  return (
    <div className={`${className} `}>
      {/* Label and Change Button */}
      <div className="flex items-center justify-between mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={handleImageReset}
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:ring-4 focus:ring-offset-2 focus:ring-slate-500"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>

      {/* Image or Upload Dropzone */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Uploaded item"
          width={1000}
          height={667}
          className="object-contain w-full h-64"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
          className="bg-slate-200 "
        />
      )}
    </div>
  );
}
