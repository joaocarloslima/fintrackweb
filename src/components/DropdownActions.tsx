"use client"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropdownActionsProps {
  onEdit: MouseEventHandler,
  onDelete: MouseEventHandler
}

export default function DropdownActions({onEdit, onDelete} : DropdownActionsProps) {

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
        <DropdownItem onClick={onEdit} key="edit" startContent={<Pencil size={16}/>}>
          editar
        </DropdownItem>
        <DropdownItem onClick={onDelete} key="delete" className="text-danger" color="danger" startContent={<Trash size={16}/>}>
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
