"use client";

import React, {useTransition} from 'react';

import {Button} from "@/components/ui/button";
import {workflowActions} from "@/actions/actions";
import {Loader2} from "lucide-react";
import { useRouter } from "next/navigation";


type WorkflowDetailsActionsProps = {
    workflowId: string;
}

export default function WorkflowDetailsActions({workflowId}: WorkflowDetailsActionsProps) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter();

    function handleActionClick(type: 'reject' | 'approve') {

        startTransition(async () => {

            await workflowActions(workflowId, type);
            // router.refresh();
            // router.push("/workflows");
            // router.replace("/workflows");

        })

    }


    return (
        <div className={"flex justify-between w-full"}>
            <Button disabled={isPending} onClick={() => {
                handleActionClick('reject');
            }}>
                {isPending && <Loader2 className="animate-spin" />}
                Reject
            </Button>
            <Button disabled={isPending} onClick={() => {
                handleActionClick('approve');
            }}>
                {isPending && <Loader2 className="animate-spin" />}
                Approve
            </Button>
        </div>
    );
}
