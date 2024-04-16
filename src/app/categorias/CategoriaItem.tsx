import { Icon } from "@/components/Icon";
import { ChevronDown, Utensils } from "lucide-react";

interface Categoria {
    id: number,
    nome: string,
    icone: string
}

export function CategoriaItem(categoria: Categoria) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <ChevronDown />
        </div>
    )
}