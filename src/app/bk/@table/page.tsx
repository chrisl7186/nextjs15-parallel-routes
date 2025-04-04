import React from 'react';

import WorkflowTable from "@/components/custom/WorkflowTable";
import {TableData} from "@/types/types";

export default async function TablePage({}) {
    console.log("Rendering page table")

    const response =  await fetch("http://localhost:3001/workflows", { cache: "no-store" });
    // const response =  await fetch("http://localhost:3001/workflows");
    const workflows: TableData[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));



    return (
        <div>
            <WorkflowTable data={workflows} />
        </div>
    );
}
