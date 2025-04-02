"use client"

import React from 'react';

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

import {useRouter} from 'next/navigation'
import Link from "next/link";
import {TableData} from "@/types/types";

type WorkflowTableProps = {
    data: TableData[]
}

export default function WorkflowTable({data}: WorkflowTableProps) {
    const router = useRouter();

    return (
        <>
        {/*<Button asChild>*/}
        {/*    <Link href={"/workflows"}>Home</Link>*/}
        {/*</Button>*/}
        <Table>
            <TableCaption>A list of your recent workflows</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="">Email</TableHead>
                    <TableHead className="">Description</TableHead>
                    <TableHead className="">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => {

                    return (
                        <TableRow key={`${item.id}-${index}`}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="">{item.email}</TableCell>
                            <TableCell className="">{item.description}</TableCell>
                            <TableCell className="flex gap-3">
                                <Button onClick={() => {
                                router.push(`/workflows/${item.id}`);
                            }}>View with router push</Button>
                                <Button asChild>
                                    <Link href={`/workflows/${item.id}`}>View with link comp</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
            </>
    );
}
