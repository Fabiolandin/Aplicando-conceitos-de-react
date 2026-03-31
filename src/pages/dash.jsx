import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { listaTransacoes } from "@/transacoes"
import { useState } from "react"

const Dash = () => {

    const [dados, setDados] = useState(listaTransacoes)

    const listaEntrada = dados.filter((listas) => listas.tipo === "Entrada")
    const listaSaida = dados.filter((listas) => listas.tipo === "Saida")

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col h-full flex-1 bg-amber-500">

                {/* Div dos cards*/}
                <div className="flex p-4 gap-4 bg-gray-500 flex-shrink-0">
                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-bold text-2xl">Entradas</h1>
                            <h1 className="text-[50px] font-bold">R$2.500</h1>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-bold text-2xl">Saídas</h1>
                            <h1 className="text-[50px] font-bold">R$1.500</h1>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-bold text-2xl">Saldo</h1>
                            <h1 className="text-[50px] font-bold">R$1.000</h1>
                        </CardContent>
                    </Card>
                </div>

                {/* Div das transações*/}
                <div className="p-4 bg-amber-200 flex-1 min-h-0">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="flex items-center">
                            <h1>Card de Tranções</h1>
                            <Button className="ml-auto"> Criar nova transação</Button>
                        </CardHeader>
                        <CardContent className="flex-1 min-h-0">
                            <ScrollArea className="h-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nome</TableHead>
                                            <TableHead>Tipo</TableHead>
                                            <TableHead className="text-right">Data da transação</TableHead>
                                            <TableHead className="text-right">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {listaTransacoes.map((listas) => (
                                            <TableRow key={listas.id}>
                                                <TableCell className="">{listas.nome}</TableCell>
                                                <TableCell>{listas.tipo}</TableCell>
                                                <TableCell className="text-right">{listas.data}</TableCell>
                                                <TableCell className="text-right">{listas.valor}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Dash