import fs from 'fs';
import path from 'path';



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
    },
    {
        id: "4",
        name: "Jacob",
        email: "jacob@example.com",
        description: "update stuff"
    },
    {
        id: "5",
        name: "Jimbob",
        email: "jimbob@example.com",
        description: "update website"
    }
]


export type TableData = typeof testTableData




export async function getTableJSONData(): Promise<TableData> {
    // Resolve the path to the JSON file
    const filePath = path.join(process.cwd(), '/src/data/tableTestData.json');

    // Read the file synchronously
    const fileData = await fs.promises.readFile(filePath, 'utf8');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Parse the JSON string into an array of objects
    return JSON.parse(fileData);
}


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