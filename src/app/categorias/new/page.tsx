"use client"

import { create } from "@/app/actions/categorias/create";
import { icons } from "@/app/utils/icons";
import { NavBar } from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default async function CadastrarCategoria() {

    return (
      <main className="flex min-h-screen flex-col items-center">
        <NavBar active="categorias" />

        <form action={create} className="flex flex-col gap-3 bg-slate-900 min-w-[500px] p-6 mt-4 rounded">
            <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>

            <Input
              key="nome"
              label="Nome"
              name="nome"
              variant="bordered"
              labelPlacement="outside"
            />

            <Autocomplete
                label="Ícone"
                name="icone"
                placeholder="procurar ícone"
                variant="bordered"
                labelPlacement="outside"
                defaultItems={icons}
            >
                {(item) => 
                    <AutocompleteItem key={item.name} startContent={item.icon}>
                        {item.name}
                    </AutocompleteItem>}
            </Autocomplete>

            <div className="flex justify-around">
                <Link href="/categorias">
                    <Button variant="bordered">cancelar</Button>
                </Link>

                <SubmitButton />
            </div>

        </form>

        </main>
    )
}