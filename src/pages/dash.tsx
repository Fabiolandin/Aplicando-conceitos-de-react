import DialogNewTransacao from "@/components/DialogNewTransacao"
import DialogTransacaoDetails from "@/components/DialogTransacaoDetails"
import Sidebar from "@/components/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { listaTransacoes } from "@/transacoes"
import { EyeIcon, Trash2Icon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const Dash = () => {

    //dados recebendo um useState da lista de dados com as transações
    const [dados, setDados] = useState(listaTransacoes)

    //State para setar a abertura de Dialog de Details
    const [open, setOpen] = useState(false);

    //Listas filtradas de dados com tipos de 'entrada' e 'saida'
    const listaEntrada = dados.filter((listas) => listas.tipo === "Entrada")
    const listaSaida = dados.filter((listas) => listas.tipo === "Saida")

    //função para calculos de entrada
    const valorEntrada = listaEntrada.reduce((total, entrada) => {
        return total + entrada.valor
    }, 0)

    //função para calculo de saídas
    const valorSaida = listaSaida.reduce((total, saida) => {
        return total + saida.valor
    }, 0)

    //função para passar a lista de dados selecionados
    const [transacaoSelecionada, settransacaoSelecionada] = useState(null);
    
    //Função para abrir o dialog já passando a tarefa selecionada
    const handleDialogOpen = (listas) => {
        settransacaoSelecionada(listas)
        setOpen(true)
    }

    //Verdadeiro Delete
    const handleDelete = (listas) => {
        const novaLista = dados.filter((dado) => dado.id !== listas.id)
        setDados(novaLista)
        toast.success('Item deletado com sucesso!')
    }

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col h-full flex-1">

                {/* Div dos cards*/}
                <div className="flex p-4 gap-4 shrink-0">
                    {/*Card das Entradas*/}
                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-bold text-2xl">Entradas</h1>
                            <h1 className="text-[50px] font-bold">R$ {valorEntrada.toLocaleString('pt-BR')}</h1>
                        </CardContent>
                    </Card>
                    {/*Card das Saidas*/}
                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-bold text-2xl">Saídas</h1>
                            <h1 className="text-[50px] font-bold">R$ {valorSaida.toLocaleString('pt-BR')}</h1>
                        </CardContent>
                    </Card>
                    {/*Card dos Saidas*/}
                    <Card className="flex-1 h-37.5 shadow items-center">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-bold text-2xl">Saldo</h1>
                            <h1 className="text-[50px] font-bold">
                                {
                                    (valorEntrada - valorSaida).toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })
                                }
                            </h1>
                        </CardContent>
                    </Card>
                </div>

                {/* Div das transações*/}
                <div className="p-4 flex-1 min-h-0">
                    <Card className="h-full flex flex-col shadow">
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle>Card de Transações</CardTitle>
                            <DialogNewTransacao className="flex ml-auto" dados={dados} setDados={setDados}/>
                        </CardHeader>
                        <CardContent className="flex-1 min-h-0">
                            <ScrollArea className="h-full">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nome</TableHead>
                                            <TableHead>Tipo</TableHead>
                                            <TableHead className="">Data da transação</TableHead>
                                            <TableHead className="">Amount</TableHead>
                                            <TableHead className="">Ações</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {dados.map((listas) => (
                                            <TableRow key={listas.id}>
                                                <TableCell className="">{listas.nome}</TableCell>
                                                <TableCell>{listas.tipo}</TableCell>
                                                <TableCell className="">{listas.data}</TableCell>
                                                <TableCell className="">R${listas.valor}</TableCell>
                                                <TableCell className="flex gap-1 text-right">
                                                    <EyeIcon
                                                        className="text-gray-400"
                                                        onClick={() => handleDialogOpen(listas)}
                                                    />
                                                    <Trash2Icon
                                                        className="text-red-400"
                                                        onClick={() => handleDelete(listas)}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                    <DialogTransacaoDetails open={open} setOpen={setOpen} transacaoSelecionada={transacaoSelecionada}/>
                </div>

            </div>
        </div>
    )
}

export default Dash