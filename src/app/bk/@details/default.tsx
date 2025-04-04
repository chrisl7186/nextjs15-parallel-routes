import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";
import {CardContent} from "@/components/ui/card";

export default function Default({}) {

    console.log("Rendering default details")

    return (
        <CardContent>
            <Skeleton className="w-[100px] h-[20px] rounded-full"/>
        </CardContent>
    );
    // return null;
}
