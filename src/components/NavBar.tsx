import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "movimentacoes" | "categorias"
}

export function NavBar(props: NavBarProps){
    const active = props.active
    const classActive = "border-b-4 border-pink-600 pb-3"

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 w-full">
            <h1 className="text-4xl font-bold">Fintrack</h1>
            <ul className="flex gap-6">
            <li className={active == "dashboard" ? classActive : ""}>
                <Link href="/">dashboard</Link>
            </li>
            <li className={active == "movimentacoes" ? classActive : ""}>
                <Link href="/movimentacoes">movimentações</Link>
            </li>
            <li className={active == "categorias" ? classActive : ""}>
                <Link href="/categorias">categorias</Link>
            </li>
            </ul>
            <div className="size-14 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/300" alt="avatar do usuário " />
            </div>
        </nav>
    )
}