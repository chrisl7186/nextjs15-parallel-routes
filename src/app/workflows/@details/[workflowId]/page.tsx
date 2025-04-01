import React from 'react';

import {Details, testDetailsData} from "@/data/testdata";
import {CardContent, CardFooter} from "@/components/ui/card";
import WorkflowDetails from "@/components/custom/workflowDetails";
import WorkflowDetailsActions from "@/components/custom/workflowDetailsActions";

export type DynamicRouteParams = {
    params: Promise<{
        workflowId?: string
    }>
}

export async function detailData(): Promise<Details> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return testDetailsData;
}

// export default async function DetailsPage({params}: DynamicRouteParams) {
    export default async function DetailsPage() {

    // const {workflowId} = await params
    const workflowDetails = await detailData()

    // if (!workflowId) {
    //     return (
    //         <div>not found</div>
    //     )
    // }


    return (
        <>
            <CardContent>
                <WorkflowDetails workflowDetails={workflowDetails}/>
            </CardContent>
            <CardFooter>
                {/*<WorkflowDetailsActions workflowId={workflowId}/>*/}
                <WorkflowDetailsActions workflowId={undefined}/>
            </CardFooter>
        </>
    );
}
