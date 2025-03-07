import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import React from "react";
import { columns } from "./columns";
import { getData } from "lib/getData";

const page = async() => {
  const community = await getData("trainings");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"My Mart Community Training"}
        href={"/dashboard/community/new"}
        LinkTitle={"Add Training"}
      />
      <div className="">
        <DataTable data={community} columns={columns} />
      </div>
    </div>
  );
};

export default page;