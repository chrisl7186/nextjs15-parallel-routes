import React, {ReactElement, Suspense} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {DynamicRouteParams} from "@/types/types";
import AnnoyingSelectedSegmentWrapper from "@/components/custom/annoyingSelectedSegmentWrapper";


type WorkflowLayoutProps = {
    comments: ReactElement
    table: ReactElement
    details: ReactElement
} & DynamicRouteParams


export default async function Layout({comments, details, table}: WorkflowLayoutProps) {

    // const resolved= await params;
    // console.log(resolved);


    // console.log("table", table)
    // console.log("comments", comments)
    // console.log("details", details)

    // let workflowId = 5;

    // console.log(workflowId);

    return (
        <div className={"flex min-h-screen"}>
            <div className={"container mx-auto justify-center items-center py-36"}>
                <div className={"grid md:grid-cols-3 md:grid-rows-9 gap-6 grid-cols-1 grid-rows-auto max-h-[600px]"}>
                    <div className={"md:col-span-2 md:row-span-9 md:col-start-1 col-span-1"}>
                        <Card className={"h-full"}>
                            <CardHeader>
                                <CardTitle>
                                    Table
                                </CardTitle>
                                <CardDescription>
                                    A table
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Suspense fallback={<div>Loading from suspense</div>}>
                                    {table}
                                </Suspense>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={"md:col-span-1 md:row-span-6 md:col-start-3 md:row-start-1 col-span-1"}>
                        <Card className={"h-full"}>
                            <CardHeader>
                                <CardTitle>
                                    Details
                                </CardTitle>
                                <CardDescription>
                                    Some details
                                </CardDescription>
                            </CardHeader>
                            <Suspense fallback={<CardContent>
                                <div>Loading from suspense</div>
                            </CardContent>}>
                                <AnnoyingSelectedSegmentWrapper selectedSegment={"details"}>
                                    {details}
                                </AnnoyingSelectedSegmentWrapper>
                            </Suspense>

                        </Card>
                    </div>
                    <div className={"md:col-span-1 md:row-span-3 md:col-start-3 col-span-1"}>
                        <Card className={"h-full"}>
                            <CardHeader>
                                <CardTitle>
                                    Comments
                                </CardTitle>
                                <CardDescription>
                                    Some comments
                                </CardDescription>
                            </CardHeader>
                            <CardContent className={"overflow-auto"}>
                                <Suspense fallback={<div>Loading from suspense</div>}>
                                    <AnnoyingSelectedSegmentWrapper selectedSegment={"comments"}>
                                        {comments}
                                    </AnnoyingSelectedSegmentWrapper>
                                </Suspense>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
