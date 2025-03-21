"use client";
import React from "react";
import dynamic from "next/dynamic"; 
import "quill/dist/quill.snow.css"; 

export const dynamicConfig = "force-dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = ({ label, className = "sm:col-span-2", value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", { color: [] }, "image"], 
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
      >
        {label}
      </label>

      <ReactQuill
        className="text-gray-900 bg-white"
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default QuillEditor;
