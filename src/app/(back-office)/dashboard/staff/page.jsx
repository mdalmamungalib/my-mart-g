import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import { getData } from "lib/getData";
import React from "react";
import { columns } from "./columns";

const page = async () => {
  // const staffs = await getData("staff");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Staffs"}
        href={"/dashboard/staff/new"}
        LinkTitle={"Add Staff"}
      />
      <div className="">
        {/* <DataTable data={staffs} columns={columns} /> */}
      </div>
    </div>
  );
};

export default page;
