import React from 'react';

import {Details, testDetailsData} from "@/data/testdata";
import {CardContent, CardFooter} from "@/components/ui/card";
import WorkflowDetails from "@/components/custom/workflowDetails";
import WorkflowDetailsActions from "@/components/custom/workflowDetailsActions";


export async function detailData(): Promise<Details> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return testDetailsData;
}

export default async function DetailsPage({}) {


    const workflowDetails = await detailData()


    return (
        <>
            <CardContent>
                <WorkflowDetails workflowDetails={workflowDetails} />
            </CardContent>
            <CardFooter>
                <WorkflowDetailsActions />
            </CardFooter>
        </>
    );
}
