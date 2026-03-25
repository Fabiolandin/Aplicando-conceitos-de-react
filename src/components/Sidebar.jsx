import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { CheckSquare2Icon, PlusIcon, ShoppingCart } from "lucide-react"

const Sidebar = () => {
    return (
        < div className = "bg-gray-900 h-screen min-w-60 p-4 flex flex-col gap-2" >
            {/* Sideber */ }
                <h1 className="text-white">Menu</h1>
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
                    Tarefas
                    </Link>
                </Button>

                <Button asChild variant="link" className="text-sm text-white justify-start">
                    <Link to="/compras"> 
                    <ShoppingCart size={18} />
                    Compras
                    </Link>
                </Button>

            </div >
    )
}
export default Sidebar