export type DynamicRouteParams = {
    params: Promise<{
        workflowId?: string
    }>
}

export type TableData = {
    id: string;
    name: string;
    email: string;
    description: string;
}

export type Comments = {
    id: string;
    author: string;
    content: string;
    createdAt: string;
}


export type Details = {
    id: string;
    title: string;
    description: string;
    status: string;
    assignee: string;
    createdAt: string;
    priority: string;
    dueDate: string;
}