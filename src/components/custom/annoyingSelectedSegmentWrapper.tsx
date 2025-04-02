"use client"

import React, {Fragment, PropsWithChildren, useEffect} from 'react';
import {useSelectedLayoutSegment, useRouter} from "next/navigation";

type AnnoyingSelectedSegmentWrapperProps = {

} & PropsWithChildren


export default function AnnoyingSelectedSegmentWrapper({children}: AnnoyingSelectedSegmentWrapperProps) {

    const router = useRouter();

    useEffect(() => {
        // router.refresh();
        // console.log("calling useffect in wrapper to refresh data if that even matters")
    }, [])

    const segment = useSelectedLayoutSegment()

    // Check if the segment is a valid number (i.e., a workflow is selected)
    const isWorkflowSelected = segment !== null && !isNaN(Number(segment));

    console.count(`Current segment: ${segment}, isWorkflowSelected: ${isWorkflowSelected}`); //this seems to be called a lot for some reason

    return (
        <Fragment key={isWorkflowSelected ? `workflow-active-${segment}` : "default"}>
            {isWorkflowSelected && children}
        </Fragment>
    );
}
