import React, {PropsWithChildren, ReactElement, Suspense} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import {Route} from "next";
import WorkflowTableWrapper from "@/components/custom/WorkflowTableWrapper";


type LayoutProps = {
    details: ReactElement
    comments: ReactElement
    params: Promise<{ serviceType: string }>
}

const tabsContentValueTypes = ['requests', 'tasks', 'history'];

export default async function Layout({details, comments, params}: LayoutProps) {

    const {serviceType} = await params;


    return (
        <>
            <div className={"md:col-span-2 md:row-span-9 md:col-start-1 col-span-1"}>
                <Tabs
                    defaultValue={serviceType}
                >
                    <div className={'flex justify-between'}>
                        <TabsList>
                            <TabsTrigger value={'requests'} asChild>
                                <Link href={`/workflows/requests` as Route} passHref>
                                    Requests
                                </Link>
                            </TabsTrigger>
                            <TabsTrigger value={'tasks'} asChild>
                                <Link href={`/workflows/tasks` as Route} passHref>
                                    Tasks
                                </Link>
                            </TabsTrigger>
                            <TabsTrigger value={'history'} asChild>
                                <Link href={`/workflows/history` as Route} passHref>
                                    History
                                </Link>
                            </TabsTrigger>
                        </TabsList>

                    </div>


                    {tabsContentValueTypes.map((tabsContentValueType, index) => {
                        return (
                            <TabsContent
                                key={tabsContentValueType}
                                value={tabsContentValueType}
                                className={'h-full flex flex-col overflow-hidden'}
                            >
                                <Card className="flex flex-col overflow-hidden flex-1">
                                    <CardTitle></CardTitle>
                                    <CardContent>
                                        <Suspense fallback={<div>Loading from suspense...</div>}>
                                            <WorkflowTableWrapper serviceType={serviceType}/>
                                        </Suspense>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        )
                    })}
                </Tabs>
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
                    <CardContent>
                        <Suspense fallback={<div>Loading from suspense...</div>}>
                            {details}
                        </Suspense>
                    </CardContent>
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
                        <Suspense fallback={<div>Loading from suspense...</div>}>
                            {comments}
                        </Suspense>
                    </CardContent>
                </Card>
            </div>
        </>

    );
}