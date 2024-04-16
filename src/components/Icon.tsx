import { Apple, Book, Bus, Utensils } from "lucide-react";

interface IconProps {
    name: string
}

const icons = [
    {name: "apple", icon: <Apple />},
    {name: "utensils", icon: <Utensils />},
    {name: "book", icon: <Book />},
    {name: "transport", icon: <Bus />}
]

export function Icon({ name } : IconProps){
    return icons.find(i => i.name == name)?.icon
}