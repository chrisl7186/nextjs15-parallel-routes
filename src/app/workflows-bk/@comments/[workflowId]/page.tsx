import React from 'react';

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Comments} from "@/types/types";


export default async function CommentsPage({}) {

    console.log("Rendering page comments");

    // const response =  await fetch("http://localhost:3001/comments");
    const response =  await fetch("http://localhost:3001/comments", { cache: "no-store" });
    const comments: Comments[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4 p-4 border rounded-lg">
                    <Avatar>
                        <AvatarImage src={`https://avatar.vercel.sh/${comment.author}`} />
                        <AvatarFallback>
                            {comment.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">{new Date(comment.createdAt).toLocaleString()}</span>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
