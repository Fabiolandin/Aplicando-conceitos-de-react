import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { listadeCompras } from "@/compras"
import { useState } from "react"



const Compras = () => {
    const [dados, setDados] = useState(listadeCompras)

    const comprasComprar = dados.filter((compras) => compras.status === "comprar")
    const comprasComprado = dados.filter((compras) => compras.status === "comprado")

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col h-screen w-screen">

                {/* Div de somas*/}
                <div className="flex p-4 gap-4 bg-amber-200">
                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex items-center flex-col">
                            <h1 className="text-lg font-medium">Valor de itens a serem comprados</h1>
                            <h1 className="text-[70px] font-medium">100</h1>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex items-center flex-col">
                            <h1 className="text-lg font-medium">Valor de itens comprados</h1>
                            <h1 className="text-[70px] font-medium">100</h1>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex items-center flex-col">
                            <h1 className="text-lg font-medium">a definir</h1>
                            <h1 className="text-[70px] font-medium">100</h1>
                        </CardContent>
                    </Card>
                </div>

                {/* Div de tabelas*/}
                <div className="flex-1 flex p-4 gap-8 bg-amber-300">
                    <Card className="flex-1 shadow">
                        <CardHeader className="flex">
                            <CardTitle>Lista de compras</CardTitle>
                            <Button variant="outline" className="items-center ml-auto">Criar novo item</Button>
                        </CardHeader>
                        {comprasComprar.map((compra) => (
                            <Card key={compra.id} className="ml-3 mr-3">
                                <CardContent className="">{compra.nome} - R${compra.valor}</CardContent>
                            </Card>

                        ))}
                    </Card>

                    <Card className="flex-1 shadow">
                        <CardHeader>
                            <CardTitle>Já comprados</CardTitle>
                        </CardHeader>
                        {comprasComprado.map((compra) => (
                            <Card key={compra.id} className="ml-3 mr-3">
                                <CardContent className="">{compra.nome} - R${compra.valor}</CardContent>
                            </Card>
                        ))}
                    </Card>
                </div>

            </div>
        </div>
    )
}
export default Compras