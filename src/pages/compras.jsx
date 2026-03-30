import DialogCompras from "@/components/DialogCompras"
import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { listadeCompras } from "@/compras"
import { EyeIcon, Trash2Icon } from "lucide-react"
import { useState } from "react"



const Compras = () => {

    //states para o dialog
    const [open, setOpen] = useState(false);
    const [tarefasSelecionada, setTarefasSelecionadas] = useState(null);

    const [dados, setDados] = useState(listadeCompras)

    const comprasComprar = dados.filter((compras) => compras.status === "comprar")
    const comprasComprado = dados.filter((compras) => compras.status === "comprado")

    const handleDialogOpen = (tarefa) => {
        setTarefasSelecionadas(tarefa)
        setOpen(true)
    }


    //valor comprar recebe a lista.reduce o reduce percorre a lista recebendo de parametro total e compra
    const valorComprar = comprasComprar.reduce((total, compra) => {
        return total + compra.valor
    }, 0)

    //valor de itens comprados
    const valorComprado = comprasComprado.reduce((total, compra) => {
        return total + compra.valor
    }, 0)


    const handleCompraStatus = (compra, status) => {
        const compraStatus = {
            ...compra,
            status
        }

        //AQUI ESTAMOS OLDTAREFAS ESTA RECEBENDO A LISTA DE TODOS OS DADOS EXCETO OS QUE A GENTE MEXEU
        const oldTarefas = dados.filter((dado) => dado.id !== compra.id)
        //ESTA SETANDO NA LISTA TODOS OS DADOS RECEBIDOS E A NOVA TAREFA EDITADA
        setDados([...oldTarefas, compraStatus])


    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col h-screen w-screen">

                {/* Div de somas*/}
                <div className="flex p-4 gap-4">
                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex items-center flex-col">
                            <h1 className="text-lg font-medium">Valor de itens a serem comprados</h1>
                            <h1 className="text-[70px] font-medium">{valorComprar}</h1>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex items-center flex-col">
                            <h1 className="text-lg font-medium">Valor de itens comprados</h1>
                            <h1 className="text-[70px] font-medium">{valorComprado.toFixed(2)}</h1>
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
                <div className="flex-1 flex p-4 gap-8">

                    {/*Card de compras */}
                    <Card className="flex-1 shadow ">
                        <CardHeader className="flex">
                            <CardTitle>Lista de compras</CardTitle>
                            <Button variant="outline" className="items-center ml-auto">Criar novo item</Button>
                        </CardHeader>
                        {comprasComprar.map((compra) => (
                            <Card key={compra.id} className="ml-3 mr-3 hover:bg-gray-100">
                                <CardContent
                                    className="flex items-center "
                                >
                                    {compra.nome} - R${compra.valor}
                                    <EyeIcon
                                        className="ml-auto mr-2"
                                        onClick={() => handleDialogOpen(compra)}
                                    />
                                    <Trash2Icon
                                        onClick={() => handleCompraStatus(compra, "deletado")}
                                    />
                                </CardContent>
                            </Card>

                        ))}
                    </Card>

                    {/*Card de já comprados */}
                    <Card className="flex-1 shadow">
                        <CardHeader>
                            <CardTitle>Já comprados</CardTitle>
                        </CardHeader>
                        {comprasComprado.map((compra) => (
                            <Card key={compra.id} className="ml-3 mr-3 hover:bg-gray-100">
                                <CardContent
                                    className="flex items-center"
                                >
                                    {compra.nome} - R${compra.valor}
                                    <EyeIcon className="ml-auto mr-2"
                                        onClick={() => handleDialogOpen(compra)}
                                    />
                                    <Trash2Icon
                                        onClick={() => handleCompraStatus(compra, "deletado")}
                                    />
                                </CardContent>
                            </Card>
                        ))}
                    </Card>
                    <DialogCompras open={open} setOpen={setOpen} comprasComprar={tarefasSelecionada} />

                </div>

            </div>

        </div>
    )
}
export default Compras