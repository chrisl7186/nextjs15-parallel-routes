import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

export default function Default({}) {

    console.log("Rendering default comments")

    return (
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
    );
    // return null;
}
