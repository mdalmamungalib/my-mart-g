import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Staffs"}
        href={"/dashboard/staff/new"}
        LinkTitle={"Add Staff"}
      />
      {/* Table */}
      {/* Export || Bulk Delete || Search */}
      <TableActions/>
      <h1>Welcome to Staffs page</h1>
    </div>
  );
};

export default page;
