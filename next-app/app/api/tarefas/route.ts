import { NextResponse } from "next/server";

let tasks = [
    {id: 1, title: 'Aprender NexJS'},
    {id: 2, title: 'Criar API REST'}
];

export async function GET() {
    return NextResponse.json(tasks);
}

export async function POST(request: Request) {
    const data = await request.json()
    tasks.push(data)
    return NextResponse.json(tasks);

    
}