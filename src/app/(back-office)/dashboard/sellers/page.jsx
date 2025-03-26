import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import DataTable from "components/data-table-components/DataTable";
import React from "react";
import { columns } from "./columns";
import { getData } from "lib/getData";
import { getServerSession } from "next-auth";
import { authOptions } from "lib/authOptions";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log("create user", session.user);
  const sellers = await getData("sellers");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Sellers"}
        href={`/dashboard/sellers/new/${session.user.id}`}
        LinkTitle={"Add Sellers"}
      />
      <div className="">
        <DataTable
          data={sellers}
          columns={columns}
          filterKeys={["name"]}
        />
      </div>
    </div>
  );
};

export default page;
