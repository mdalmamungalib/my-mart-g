import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Banners"}
        href={"/dashboard/banners/new"}
        LinkTitle={"Add New Banner"}
      />
      {/* Table */}
      {/* Export || Bulk Delete || Search */}
      <TableActions/>
      <h1>Welcome to Banner page</h1>
    </div>
  );
};

export default page;
