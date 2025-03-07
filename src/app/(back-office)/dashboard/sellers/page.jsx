import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import React from "react";
import { columns } from "./columns";
import { getData } from "lib/getData";

const page = async () => {
  const sellers = await getData("sellers");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Sellers"}
        href={"/dashboard/sellers/new"}
        LinkTitle={"Add Sellers"}
      />
     <div className="">
        <DataTable data={sellers} columns={columns} filterKeys={["name"]} />
      </div>
    </div>
  );
};

export default page;
