

import React from "react";
import CustomDataTable from "components/backoffice/CustomDataTable/CustomDataTable";
import SmallCard from "components/backoffice/SmallCard/SmallCard";
import LargeCard from "components/backoffice/LargeCard/LargeCard";
import Heading from "components/backoffice/Heading/Heading";
import DashboardCharts from "components/backoffice/DashboardCharts/DashboardCharts";

const page = () => {
  return (
    <div className="space-y-10">
      {/* heading */}
      <Heading title={"Dashboard Overview"} />
      {/* large cards */}
      <LargeCard/>
      {/* small cards */}
      <SmallCard/>
      {/* charts */}
      <DashboardCharts/>
      {/* recent orders */}
      <CustomDataTable/>
    </div>
  );
};

export default page;
