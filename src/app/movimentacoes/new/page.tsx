import { NavBar } from "@/components/NavBar";
import { get } from "@/app/actions/categorias/get";
import { Form } from "./Form";


export default async function CadastrarMovimentacoes() {
    const categorias = await get()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="movimentacoes" />

            <Form categorias={categorias} />
            
        </main>


    )
}