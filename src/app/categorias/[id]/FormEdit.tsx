"use client"

import { update } from "@/app/actions/categorias/update"
import { icons } from "@/app/utils/icons"
import { SubmitButton } from "@/components/SubmitButton"
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react"
import Link from "next/link"
import { useFormState } from "react-dom"

export default function FormEdit(categoria: Categoria){
    const initialState = {
        messageNome: ""
    }

    const [state, formAction] = useFormState(update, initialState)
    
    return (
            <form action={formAction} className="flex flex-col gap-3 bg-slate-900 min-w-[500px] p-6 mt-4 rounded">
                <h2 className="text-2xl font-bold">Editar Categoria {categoria.id}</h2>
                <input type="hidden" name="id" value={categoria.id} />
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    defaultValue={categoria.nome}
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={state?.messageNome != ""}
                    errorMessage={state?.messageNome}
                />

                <Autocomplete
                    defaultInputValue={categoria.icone}
                    label="Ícone"
                    name="icone"
                    placeholder="procurar ícone"
                    variant="bordered"
                    labelPlacement="outside"
                >
                    {icons.map((item) =>
                        <AutocompleteItem key={item.name} startContent={item.icon}>
                            {item.name}
                        </AutocompleteItem>
                    )}

                </Autocomplete>

                <div className="flex justify-around">
                    <Link href="/categorias">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form> 
    )
}