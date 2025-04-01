import React from 'react';

import {Details} from "@/data/testdata";


type WorkflowDetailsProps = {
    workflowDetails: Details;
}

export default function WorkflowDetails({workflowDetails}: WorkflowDetailsProps) {

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">{workflowDetails.title}</h3>

            <div className="grid grid-cols-2 gap-2">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className="capitalize">{workflowDetails.status}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Priority</p>
                    <p>{workflowDetails.priority}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        {workflowDetails.assignee ? "Assignee" : "Requester"}
                    </p>
                    <p>{workflowDetails.assignee}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Created</p>
                    <p>{workflowDetails.createdAt}</p>
                </div>
            </div>

            <div>
                <p className="text-sm font-medium text-muted-foreground">Description</p>
                <p>{workflowDetails.description}</p>
            </div>
        </div>
    );
}
