import { NextResponse } from "next/server";

let tasks = [
    {id: 1, title: 'Aprender NexJS'},
    {id: 2, title: 'Criar API REST'}
];


export async function GET(request: Request, context: any) {
    const { params } = context;

    let resultado = null;


    tasks.forEach((item) => {
        if (item.id == params.tarefaID) {
            resultado = item;
        }
    });

    return NextResponse.json(resultado)
}