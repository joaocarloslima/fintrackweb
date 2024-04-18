import { icons } from "@/app/utils/icons";
import { Apple, Book, Bus, Utensils } from "lucide-react";

interface IconProps {
    name: string
}


export function Icon({ name } : IconProps){
    return icons.find(i => i.name == name)?.icon
}