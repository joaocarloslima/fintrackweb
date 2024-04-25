"use client"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface DropdownActionsProps {
  onEdit: MouseEventHandler,
  onDelete: MouseEventHandler
}

export default function DropdownActions({onEdit, onDelete} : DropdownActionsProps) {
  const router = useRouter()
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant= "light"
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => router.push('/categorias/1')} key="edit" startContent={<Pencil size={16}/>}>
          editar
        </DropdownItem>
        <DropdownItem onClick={onDelete} key="delete" className="text-danger" color="danger" startContent={<Trash size={16}/>}>
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
