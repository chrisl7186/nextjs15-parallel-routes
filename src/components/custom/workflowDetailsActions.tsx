import React, {useTransition} from 'react';
import {Button} from "@/components/ui/button";
import {workflowActions} from "@/actions/actions";
import {Loader2} from "lucide-react";


export default function WorkflowDetailsActions({}) {
    const [isPending, startTransition] = useTransition()

    function handleActionClick(type: 'reject' | 'approve') {

        startTransition(async () => {
            await workflowActions(type);
        })


    }


    return (
        <div className={"flex justify-between"}>
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
