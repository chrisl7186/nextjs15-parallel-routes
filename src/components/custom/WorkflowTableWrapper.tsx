import React from 'react';
import {TableData} from "@/types/types";
import WorkflowTable from "@/components/custom/WorkflowTable";

type WorkflowTableWrapperProps = {
    serviceType: string;
}

export default async function WorkflowTableWrapper({serviceType}: WorkflowTableWrapperProps) {

    // const response =  await fetch("http://localhost:3001/workflows", { cache: "no-store" });
    const response =  await fetch(`http://localhost:3001/${serviceType}`);
    const workflows: TableData[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));


    return (
        <WorkflowTable data={workflows} serviceType={serviceType} />
    );
}