"use server";


import {tableData} from "@/app/workflows/@table/page";

// type WorkflowActions = {
//     // type: "reject" | "approve"
// }


export async function workflowActions(type: 'reject' | 'approve') {

    if (type === "reject") {

    } else if (type === "approve") {

    }

    const data = await tableData()


    const newData = data.splice(1, 1);


    return newData;


}