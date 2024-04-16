import DropdownActions from "@/components/DropdownActions";
import { Icon } from "@/components/Icon";

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
            
            <DropdownActions />
        </div>
    )
}