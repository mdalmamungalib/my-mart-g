import NewSellerForm from "components/backoffice/NewSellerForm/NewSellerForm";
import { getData } from "lib/getData";
import React from "react";

const page = async ({ params: { id } }) => {
  const user = await getData(`/users/${id}`);
  console.log(user);
  return (
    <div className="gap-8 p-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
         Hello {user?.name} Tell Us More About Yourself
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We’d love to know more about you to get started.
        </p>
      </div>
      <div className="max-w-full mx-auto ">
        <NewSellerForm />
      </div>
    </div>
  );
};

export default page;
