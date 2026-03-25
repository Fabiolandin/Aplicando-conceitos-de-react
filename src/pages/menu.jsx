import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquareIcon, PlusIcon, ShoppingCartIcon } from "lucide-react"

const Menu = () => {
    return (
        <div className="flex">
            {/* Sideber */}
            <div className="bg-gray-900 h-screen w-64 p-4 flex flex-col gap-2">
                <h1 className="text-white">Menu</h1>
                <hr className="border-gray-700" />

                <Button variant="link" className="text-sm text-white justify-start">
                    <PlusIcon size={18} />
                    Contador
                </Button>

                <Button variant="link" className="text-sm text-white justify-start">
                    <PlusIcon size={18} />
                    Contador
                </Button>
                <Button variant="link" className="text-sm text-white justify-start">
                    <CheckSquareIcon size={18} />
                    Tarefas
                </Button>

                <Button variant="link" className="text-sm text-white justify-start">
                    <ShoppingCartIcon size={18} />
                    Compras
                </Button>

            </div>
            <div className="bg-gray-200 w-full">
                {/* Tabela */}
                <Card className="w-[500px] justify-center">
                    <CardHeader>
                        <CardTitle>Titulo de Card</CardTitle>
                        <CardDescription>Descrição do card </CardDescription>
                        <CardContent>
                            <h1>Descrição</h1>
                            <h1>Descrição</h1>
                            <h1>Descrição</h1>
                        </CardContent>
                        <CardFooter className="flex">
                            <Button className="flex-1">Button1</Button>
                            <Button className="flex-1">Button2</Button>
                        </CardFooter>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
export default Menu