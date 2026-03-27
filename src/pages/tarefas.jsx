import DialogTarefas from "@/components/DialogTarefas";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { listadeTarefas } from "@/tarefas";
import { CheckCircle, EyeIcon, Loader2Icon, Square, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const Tarefas = () => {

    const [dados, setDados] = useState(listadeTarefas)

    const tarefasEmAberto = dados.filter((tarefas) => tarefas.status === "Em aberto")
    const tarefasEmAndamento = dados.filter((tarefas) => tarefas.status === "Em andamento")
    const tarefasFinalizadas = dados.filter((tarefas) => tarefas.status === "Finalizado")

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const concluirTarefa = (tarefa) => {
        statusTarefa(tarefa, "Finalizado")
        toast.success("Tarefa concluida com sucesso!")
    }

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const emAbertoTarefa = (tarefa) => {
        statusTarefa(tarefa, "Em aberto")
    }

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const emAndamentoTarefa = (tarefa) => {
        statusTarefa(tarefa, "Em andamento")
    }

    //FUNÇÃO STATUS TAREFA QUE RECEBE OS PARAMETROS TAREFA E STATUS
    const statusTarefa = (tarefa, status) => {
        //...TAREFA ESTA PUXANDO TODAS AS TAREFAS E STATUS PUXANDO OS STATUS
        const newTarefa = {
            ...tarefa,
            status,
        }

        //AQUI ESTAMOS OLDTAREFAS ESTA RECEBENDO A LISTA DE TODOS OS DADOS EXCETO OS QUE A GENTE MEXEU
        const oldTarefas = dados.filter((dado) => dado.id !== tarefa.id)
        //ESTA SETANDO NA LISTA TODOS OS DADOS RECEBIDOS E A NOVA TAREFA EDITADA
        setDados([...oldTarefas, newTarefa])

        console.log("Olá", tarefa)
        console.log("newTarefa", newTarefa)
    }

    const excluirTarefa = (tarefa) => {
        statusTarefa(tarefa, "Deletada")
    }

    return (
        <div className="flex h-screen w-full">

                <Sidebar />
            
            <div className="flex p-5 gap-4 flex-1 h-screen w-full md:flex-row flex-col">

                {/* Tarefas em aberto */}
                <div className=" p-4 flex-1  border rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-slate-900">Tarefas em aberto</h1>
                        <DialogTarefas dados={dados} setDados={setDados} />
                    </div>
              
                        <ScrollArea className="w-full h-[85vh]">
                            {tarefasEmAberto.map((tarefa) => (
                                <Card
                                    className="
                            flex mt-1 text-gray-900 hover:bg-gray-200 transition rounded-lg "
                                    key={tarefa.id}
                                >
                                    <CardContent className="flex items-center gap-2">
                                        <Square size={22} className="text-slate-900" onClick={() => emAndamentoTarefa(tarefa)} />
                                        {tarefa.nome}
                                        <EyeIcon 
                                        className="ml-auto text-gray-600"
                                        />
                                        <Trash2Icon
                                            onClick={() => excluirTarefa(tarefa)}
                                            size={22}
                                            className="items-center text-red-500" />
                                    </CardContent>
                                </Card>
                            ))}
                        </ScrollArea>

            
                </div>

                {/* Tarefas em andamento */}
                <div className=" p-4 flex-1 border rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-slate-900">Tarefas em andamento</h1>
                    </div>
                    <div>

                        <ScrollArea className="w-full h-[85vh]">
                            {tarefasEmAndamento.map((tarefa) => (
                                <Card
                                    className="
                            flex mt-1 text-amber-500 hover:bg-gray-200 transition rounded-lg "
                                    key={tarefa.id}
                                >
                                    <CardContent className="flex items-center">
                                        <Loader2Icon size={22} className="animate-spin text-amber-500 mr-1" onClick={() => concluirTarefa(tarefa)} />
                                        {tarefa.nome}
                                        <Trash2Icon
                                            onClick={() => excluirTarefa(tarefa)}
                                            size={22}
                                            className="ml-auto items-center text-gray-400" />
                                    </CardContent>
                                </Card>
                            ))}
                        </ScrollArea>

                    </div>

                </div>

                {/* Tarefas Concluidas */}
                <div className=" p-4 flex-1 border rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-slate-900">Tarefas Concluidas</h1>
                    </div>
                    <div>

                        <ScrollArea className="w-full h-[85vh]">
                            {tarefasFinalizadas.map((tarefa) => (
                                <Card
                                    className="
                            flex mt-1 text-green-800 hover:bg-gray-200 transition rounded-lg "
                                    key={tarefa.id}
                                >
                                    <CardContent className="flex items-center">
                                        <CheckCircle size={22} className=" text-green-800 mr-1" onClick={() => emAbertoTarefa(tarefa)} />
                                        {tarefa.nome}
                                        <Trash2Icon
                                            onClick={() => excluirTarefa(tarefa)}
                                            size={22}
                                            className="ml-auto items-center text-gray-400" />
                                    </CardContent>
                                </Card>
                            ))}
                        </ScrollArea>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Tarefas;