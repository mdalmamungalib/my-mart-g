import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import React from "react";
import { columns } from "./columns";
import { getData } from "lib/getData";

const page = async () => {
  const markets = await getData("markets");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Markets"}
        href={"/dashboard/markets/new"}
        LinkTitle={"Add Market"}
      />
      <div className="">
        <DataTable data={markets} columns={columns} />
      </div>
    </div>
  );
};

export default page;
