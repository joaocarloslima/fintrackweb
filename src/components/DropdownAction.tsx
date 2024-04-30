'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropdownActionProps {
  onEdit: MouseEventHandler,
  onDelete: MouseEventHandler
}

export default function DropdownAction({onEdit, onDelete}: DropdownActionProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={onEdit} startContent={<Pencil size={18} />} key="edit">
          editar
        </DropdownItem>
        <DropdownItem onClick={onDelete} startContent={<Trash size={18} />} key="delete" className="text-danger" color="danger">
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
