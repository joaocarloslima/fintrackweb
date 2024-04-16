import { NavBar } from "@/components/NavBar"
import { ChevronDown, Utensils } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";

export default function Categorias() {

  const categorias = [
    {
      id: 1,
      nome: "alimentação",
      icone: "utensils"
    },
    {
      id: 2,
      nome: "educação",
      icone: "book"
    },
    {
      id: 3,
      nome: "transporte",
      icone: "transport"
    },

  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-4 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>

        {categorias.map(categoria => <CategoriaItem {...categoria} /> )}

      </section>

    </main>
  );
}
