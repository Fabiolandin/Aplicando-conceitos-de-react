import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { CheckSquare2Icon, LayoutDashboardIcon, PlusIcon, ShoppingCart } from "lucide-react"

const Sidebar = () => {
    return (
        <div className="bg-gray-900 h-screen min-w-50 p-4 flex flex-col gap-2" >
            {/* Sideber */}
            <Link to="/" className="text-white">Menu</Link>
            <hr className="border-gray-700" />
            {/* 
                <Button asChild variant="link" className="text-sm text-white justify-start">
                    <Link to="/contador">
                    <PlusIcon size={18} />
                    Contador
                    </Link>
                </Button>
                    */}
            <Button asChild variant="link" className="text-sm text-white justify-start">
                <Link to="/contador2">
                    <PlusIcon size={18} />
                    Contador Completo
                </Link>
            </Button>

            <Button asChild variant="link" className="text-sm text-white justify-start">
                <Link to="/tarefas">
                    <CheckSquare2Icon size={18} />
                    Lista de Tarefas
                </Link>
            </Button>

            <Button asChild variant="link" className="text-sm text-white justify-start">
                <Link to="/compras">
                    <ShoppingCart size={18} />
                    Lista de Compras
                </Link>
            </Button>

            <Button asChild variant="link" className="text-sm text-white justify-start">
                <Link to="/dash">
                    <LayoutDashboardIcon size={18} />
                    Dash Financeira
                </Link>
            </Button>

        </div >
    )
}
export default Sidebar