"use client"

import React, {Fragment, PropsWithChildren} from 'react';
import {useSelectedLayoutSegment} from "next/navigation";

type AnnoyingSelectedSegmentWrapperProps = {
    selectedSegment?: string;
} & PropsWithChildren


export default function AnnoyingSelectedSegmentWrapper({children, selectedSegment}: AnnoyingSelectedSegmentWrapperProps) {

    const segment = useSelectedLayoutSegment()

    // Check if the segment is a valid number (i.e., a workflow is selected)
    const isWorkflowSelected = segment !== null && !isNaN(Number(segment));

    console.log(`Current segment: ${segment}, isWorkflowSelected: ${isWorkflowSelected}`);

    return (
        <Fragment key={isWorkflowSelected ? `workflow-active-${segment}` : "default"}>
            {isWorkflowSelected && children}
        </Fragment>
    );
}
