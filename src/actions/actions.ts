"use server";


import {tableData} from "@/app/workflows/@table/page";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {getTableJSONData} from "@/data/testdata";
import path from "path";
import fs from "fs";

// type WorkflowActions = {
//     // type: "reject" | "approve"
// }


export async function workflowActions(id: string, type: 'reject' | 'approve') {

    if (type === "reject") {

    } else if (type === "approve") {

    }

    // const data = await tableData()

    const data = await getTableJSONData();

    data.splice(parseInt(id) - 1, 1);

    const filePath = path.join(
        process.cwd(),
        '/src/data/tableTestData.json',
    )
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8') // Pretty print the JSON

    console.log(data);
    // console.log(newData)

    revalidatePath('/workflows')

    redirect('/workflows')

    // return newData;


}