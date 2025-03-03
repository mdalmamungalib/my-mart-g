import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import { getData } from "lib/getData";
import React from "react";
import { columns } from "./columns";

const page = async () => {
  const coupons = await getData("coupons");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Coupons"}
        href={"/dashboard/coupons/new"}
        LinkTitle={"Add Coupons"}
      />

      <div className="">
        <DataTable data={coupons} columns={columns} />
      </div>
    </div>
  );
};

export default page;
