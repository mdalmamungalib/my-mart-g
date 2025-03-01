import PageHeader from "components/backoffice/PageHeader/PageHeader";
import DataTable from "components/data-table-components/DataTable";
import { getData } from "lib/getData";
import React from "react";
import { columns } from "./columns";

const page = async() => {
  const banners = await getData("banners");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Banners"}
        href={"/dashboard/banners/new"}
        LinkTitle={"Add New Banner"}
      />

      <div className="">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
};

export default page;
