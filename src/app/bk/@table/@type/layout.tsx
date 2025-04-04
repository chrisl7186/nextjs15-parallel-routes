import React, {PropsWithChildren, Suspense} from 'react';
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";


export default function Layout({children}: PropsWithChildren) {
    return (
        <Card>
            <CardContent>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account" asChild>
                            <Link href="/workflows/requests" passHref>Requests</Link>
                        </TabsTrigger>
                        <TabsTrigger value="account" asChild>
                            <Link href="/workflows/tasks" passHref>Tasks</Link>
                        </TabsTrigger>
                        <TabsTrigger value="account" asChild>
                            <Link href="/workflows/history" passHref>History</Link>
                        </TabsTrigger>
                    </TabsList>

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
                    <div>{children}</div>
                </Tabs>
            </CardContent>
        </Card>
    )
}
