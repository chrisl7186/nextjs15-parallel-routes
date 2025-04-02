"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

// type WorkflowActions = {
//     // type: "reject" | "approve"
// }


export async function workflowActions(id: string, type: 'reject' | 'approve') {

    if (type === "reject") {

    } else if (type === "approve") {

    }

    await new Promise((resolve) => setTimeout(resolve, 5000));


    await fetch(`http://localhost:3001/workflows/${id}`, {method: "DELETE"});

    // revalidatePath('/workflows')
    // revalidatePath('/workflows/2')
    revalidatePath("/workflows");

    redirect('/workflows')
    // redirect('/workflows?reset=true')
    // redirect(`/workflows?reset=${Date.now()}`);
    // redirect(`/workflows?cleared=true`);
    // redirect("/workflows/clear");

}