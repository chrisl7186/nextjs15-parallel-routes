import React from 'react';

import WorkflowTable from "@/components/custom/workflowTable";
import {getTableJSONData, testTableData} from "@/data/testdata";


export async function tableData(): Promise<typeof testTableData> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return testTableData;
}


export default async function TablePage({}) {

    const data = await getTableJSONData();


    return (
        <div>
            <WorkflowTable data={data} />
        </div>
    );
}
