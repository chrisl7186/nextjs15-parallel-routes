export const testTableData = [
    {
        id: "1",
        name: "John",
        email: "john@example.com",
        description: "update records"
    },
    {
        id: "2",
        name: "Jack",
        email: "jack@example.com",
        description: "update users"
    },
    {
        id: "3",
        name: "Jane",
        email: "jane@example.com",
        description: "update data"
    }
]


export type TableData = typeof testTableData


export const testCommentsData = [
    { id: "1", author: "John Doe", content: "This needs to be reviewed carefully.", createdAt: "2023-04-01T10:30:00Z" },
    {
        id: "2",
        author: "Jane Smith",
        content: "I found some issues with the implementation.",
        createdAt: "2023-04-01T11:45:00Z",
    },
    {
        id: "3",
        author: "Mike Johnson",
        content: "Looks good to me, ready for approval.",
        createdAt: "2023-04-02T09:15:00Z",
    },
]

export type Comments = typeof testCommentsData


export const testDetailsData = {
    id: 1,
    title: `Task update records`,
    description: "This is a detailed description of the task that needs to be completed.",
    status: "pending",
    assignee: "John Doe",
    createdAt: "2023-04-01",
    priority: "High",
    dueDate: "2023-04-15",
}

export type Details = typeof testDetailsData