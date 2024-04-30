import { get } from "../actions/categorias/get";
import { NavBar } from "@/components/NavBar";
import { getMovimentacoes } from "../actions/movimentacoes/get";
import { MovimentacaoData } from "./MovimentacaoData";

export default async function Movimentacoes() {
  const movimentacoes = await getMovimentacoes()
  const categorias: Array<Categoria> = await get()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="movimentacoes" />

      <MovimentacaoData 
        movimentacoes={movimentacoes} 
        categorias={categorias}
       />

    </main>

  );
}
