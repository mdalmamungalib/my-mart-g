import React from "react";
import Heading from "../Heading/Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

const PageHeader = ({ heading, LinkTitle, href }) => {
  return (
    <div className="flex items-center justify-between py-4 mb-4">
      <Heading title={heading} />
      <Link
        href={href}
        className="inline-flex items-center px-5 py-3 space-x-3 text-xl font-medium text-center text-white rounded-lg bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 dark:focus:ring-lime-600/55 me-2"
      >
        <Plus />
        <span>{LinkTitle}</span>
      </Link>
    </div>
  );
};

export default PageHeader;
