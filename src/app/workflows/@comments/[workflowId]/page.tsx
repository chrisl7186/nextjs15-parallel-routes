import React from 'react';

import {Comments, testCommentsData} from "@/data/testdata";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";


export async function commentData(): Promise<Comments> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return testCommentsData;
}


export default async function CommentsPage({}) {
    const comments = await commentData()

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
