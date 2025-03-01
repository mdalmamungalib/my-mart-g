import PageHeader from "components/backoffice/PageHeader/PageHeader";
import React from "react";
import { getData } from "lib/getData";
import { columns } from "./columns";
import DataTable from "components/data-table-components/DataTable";

const page = async() => {
  const categories = await getData("categories");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Categories"}
        href={"/dashboard/categories/new"}
        LinkTitle={"Add Category"}
      />
          
      <div className="">
        <DataTable data={categories} columns={columns}/>
      </div>
    </div>
  );
};

export default page;
