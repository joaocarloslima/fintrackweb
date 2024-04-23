import { NavBar } from "@/components/NavBar"
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { get } from "@/app/actions/categorias/get";
import Link from "next/link";

export default async function Categorias() {

  const categorias: Array<Categoria> = await get()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />

      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-4 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>
          <Link href="/categorias/new">
            <Button color="primary" startContent={<Plus size={18} />}>
              nova categoria
            </Button>
          </Link>

        </div>


        {categorias.map(categoria => <CategoriaItem {...categoria} />)}

      </section>

    </main>
  );
}
