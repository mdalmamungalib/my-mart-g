import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Coupons"}
        href={"/dashboard/coupons/new"}
        LinkTitle={"Add Coupons"}
      />
      {/* Table */}
      {/* Export || Bulk Delete || Search */}
      <TableActions/>
      <h1>Welcome to categories page</h1>
    </div>
  );
};

export default page;
