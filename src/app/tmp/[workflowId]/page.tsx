import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default async function Page({}) {

    //promise all for both details and comments

    return (
        <>
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
                        details
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
                        comments
                    </CardContent>
                </Card>
            </div>
        </>)

}
