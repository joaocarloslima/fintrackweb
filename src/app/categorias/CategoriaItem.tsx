"use client"

import DropdownActions from "@/components/DropdownActions";
import { Icon } from "@/components/Icon";
import { destroy } from "../actions/categorias/destroy";
import toast from "react-hot-toast";

interface Categoria {
    id: number,
    nome: string,
    icone: string
}

export function CategoriaItem(categoria: Categoria) {
    function handleDelete() {
        toast.promise(
            destroy(categoria.id),
            {
                loading: "apagando categoria...",
                success: "categoria apagada",
                error: (error) => { 
                    return error.message
                }
            }
        )
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>

            <button onClick={handleDelete}>apagar</button>
            
            <DropdownActions 
                onEdit={() => { console.log("editar ainda não implementado")}}
                onDelete={handleDelete}
            />
        </div>
    )
}