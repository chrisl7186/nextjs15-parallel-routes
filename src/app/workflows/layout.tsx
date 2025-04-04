import React, {PropsWithChildren, ReactElement, Suspense} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import AnnoyingSelectedSegmentWrapper from "@/components/custom/AnnoyingSelectedSegmentWrapper";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import {Route} from "next";


type WorkflowLayoutProps = {
    comments: ReactElement
    table: ReactElement
    details: ReactElement
}


export default async function Layout({children}: PropsWithChildren) {

    // console.log("table", table)
    // console.log("comments", comments)
    // console.log("details", details)

    return (
        <div className={"flex min-h-screen"}>
            <div className={"container mx-auto justify-center items-center py-36"}>
                <Card>
                    <CardContent>
                        <div className={"grid md:grid-cols-3 md:grid-rows-9 gap-6 grid-cols-1 grid-rows-auto max-h-[600px]"}>
                            {children}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
