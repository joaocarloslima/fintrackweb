"use client"

import { NavBar } from "@/components/NavBar";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Categorias() {

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

        {[1, 2, 3].map(() => {
          return (
            <div className="max-w-[300px] w-full flex items-center gap-3">
              <div>
                <Skeleton className="flex rounded-full w-12 h-12" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
              </div>
            </div>
          )
        }
        )}

      </section>

    </main>
  );
}
