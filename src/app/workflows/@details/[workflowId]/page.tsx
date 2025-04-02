import React from 'react';

import {CardContent, CardFooter} from "@/components/ui/card";
import WorkflowDetails from "@/components/custom/workflowDetails";
import WorkflowDetailsActions from "@/components/custom/workflowDetailsActions";
import {Details, DynamicRouteParams} from "@/types/types";


export default async function DetailsPage({params}: DynamicRouteParams) {
//     export default async function DetailsPage() {


    const {workflowId} = await params

    console.log("Rendering details for workflowId:", workflowId);
    // if (!workflowId) {
    //     return (
    //         <div>not found</div>
    //     )
    // }

        const response =  await fetch(`http://localhost:3001/details/${workflowId}`, { cache: "no-store" });
        const workflowDetails: Details = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <>
            <CardContent>
                <WorkflowDetails workflowDetails={workflowDetails}/>
            </CardContent>
            <CardFooter>
                {/*<WorkflowDetailsActions workflowId={workflowId}/>*/}
                <WorkflowDetailsActions workflowId={workflowId!}/>
            </CardFooter>
        </>
    );
}
