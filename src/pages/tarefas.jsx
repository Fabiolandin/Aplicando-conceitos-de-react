import DialogTarefas from "@/components/DialogTarefas";
import Sidebar from "@/components/Sidebar";
import { listadeTarefas } from "@/tarefas";
import { CheckCircle, Square, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const Tarefas = () => {

    const [dados, setDados] = useState(listadeTarefas)

    const tarefasEmAberto = dados.filter((tarefas) => tarefas.status === "Em aberto")
    const tarefasFinalizadas = dados.filter((tarefas) => tarefas.status === "Finalizado")

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const concluirTarefa = (tarefa) => {
        statusTarefa(tarefa, "Finalizado")
        toast.success("Tarefa concluida com sucesso!")
    }

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const emAndamentoTarefa = (tarefa) => {
        statusTarefa(tarefa, "Em aberto")
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
        <div className="flex">
            <div className="flex">
                <Sidebar />
            </div>
        <div className="flex p-5 gap-12
        
        ">
            
            {/* Tarefas há fazer */}
            <div className=" p-4 flex-1 border rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-slate-900">Tarefas há fazer</h1>
                    <DialogTarefas  dados={dados} setDados={setDados}/>
                </div>
                <div>

                    <ul>
                        {tarefasEmAberto.map((tarefa) => (
                            <li  
                            className="
                            flex p-1 mt-1 text-gray-900 hover:bg-gray-200 transition rounded-lg items-center" 
                            key={tarefa.id}
                            >
                                <Square size={22} className="text-slate-900 mr-1" onClick={() => concluirTarefa(tarefa)}/>
                                {tarefa.nome} - {tarefa.descricao}
                                <Trash2Icon 
                                onClick={() => excluirTarefa(tarefa)}
                                size={22} 
                                className="ml-auto items-center text-gray-400"/>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            {/* Tarefas Concluidas */}
            <div className=" p-4 flex-1 border rounded-lg shadow-lg">
                <h1 className="font-bold text-slate-900">Tarefas Concluidas</h1>
                <div>

                    <ul>
                        {tarefasFinalizadas.map((tarefa) => (
                            <li 
                            className="
                            flex p-1 mt-1 hover:bg-gray-200 transition rounded-lg items-center " 
                            key={tarefa.id}
                            onClick={() => emAndamentoTarefa(tarefa)}
                            >
                                <CheckCircle size={20} className="text-green-800 mr-1"/>
                                {tarefa.nome} - {tarefa.descricao}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
        </div>
    )
}

export default Tarefas;