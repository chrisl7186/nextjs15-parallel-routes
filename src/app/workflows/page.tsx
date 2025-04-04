import React from 'react';
import {redirect} from "next/navigation";


export default async function Page({}) {

    redirect('/workflows/requests');

    // return (
    //     <>
    //         <div className={"md:col-span-1 md:row-span-6 md:col-start-3 md:row-start-1 col-span-1"}>
    //             <Card className={"h-full"}>
    //                <CardContent>
    //                    placerholder
    //                </CardContent>
    //
    //             </Card>
    //         </div>
    //         <div className={"md:col-span-1 md:row-span-3 md:col-start-3 col-span-1"}>
    //             <Card className={"h-full"}>
    //                 <CardContent className={"overflow-auto"}>
    //                     placeholder
    //                 </CardContent>
    //             </Card>
    //         </div>
    //     </>
    // );
    return (
        <>
        hi gov
        </>
    )
}
