import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import { getData } from "lib/getData";
import React from "react";
import { columns } from "./columns";

const page = async () => {
  const products = await getData("products");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Products"}
        href={"/dashboard/products/new"}
        LinkTitle={"Add Product"}
      />

      <div className="">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
};

export default page;
