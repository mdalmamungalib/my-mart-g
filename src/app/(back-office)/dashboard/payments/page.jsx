import { getData } from "lib/getData"
import {  columns } from "./columns"
import { DataTable } from "./data-table"


export default async function DemoPage() {
  const data = await getData("categories")

  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
