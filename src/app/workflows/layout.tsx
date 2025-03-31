import React, {ReactElement} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";


type WorkflowLayoutProps = {
    comments: ReactElement
    table: ReactElement
    details: ReactElement
}


export default function Layout({comments, details, table}: WorkflowLayoutProps): ReactElement {

    console.log("table", table)
    console.log("comments", comments)
    console.log("details", details)


    return (
        <div className={"grid md:grid-cols-3 md:grid-rows-9 gap-6 grid-cols-1 grid-rows-auto"}>
            <div className={"md:col-span-2 md:row-span-9 md:col-start-1 col-span-1"}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Table
                        </CardTitle>
                        <CardDescription>
                            A table
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {table}
                    </CardContent>
                </Card>
            </div>
            <div className={"md:col-span-1 md:row-span-6 md:col-start-3 md:row-start-1 col-span-1"}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Details
                        </CardTitle>
                        <CardDescription>
                           Some details
                        </CardDescription>
                    </CardHeader>

                        {details}

                </Card>
            </div>
            <div className={"md:col-span-1 md:row-span-3 md:col-start-3 col-span-1"}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Table
                        </CardTitle>
                        <CardDescription>
                            A table
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {comments}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
