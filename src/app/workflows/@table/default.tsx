import React from 'react';
import WorkflowTable from "@/components/custom/workflowTable";
import {tableData} from "@/app/workflows/@table/page";
import {getTableJSONData} from "@/data/testdata";

export default async function Default({}) {
    const data = await getTableJSONData();


    return (
        <div>
            <WorkflowTable data={data} />
        </div>
    );
}
