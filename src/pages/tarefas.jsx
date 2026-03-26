import DialogTarefas from "@/components/DialogTarefas";
import Sidebar from "@/components/Sidebar";
import { listadeTarefas } from "@/tarefas";
import { Check, CheckLineIcon, Square, StopCircleIcon } from "lucide-react";
import { useState } from "react";
const Tarefas = () => {

    const [dados, setDados] = useState(listadeTarefas)

    const tarefasEmAberto = dados.filter((tarefas) => tarefas.status === "Em aberto")
    const tarefasFinalizadas = dados.filter((tarefas) => tarefas.status === "Finalizado")

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const concluirTarefa = (tarefa) => {
        statusTarefa(tarefa, "Finalizado")
    }

    //CHAMA A FUNÇÃO STATUSTAREFA E PASSADA A TAREFA QUE QUER EDITAR E O STATUS NOVO, POR ISSO ELA RECEBE STATUS 
    const EmAndamentoTarefa = (tarefa) => {
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

    return (
        <div className="flex bg-[#FFFFFF]">

            <div className="flex">
                <Sidebar />
            </div>
            <div className="bg-white p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] border rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-slate-900">Tarefas há fazer</h1>
                    <DialogTarefas />
                </div>
                <div>

                    <ul>
                        {tarefasEmAberto.map((tarefa) => (
                            <li  className="flex p-1 mt-1 text-gray-900" key={tarefa.id}>
                                <Square size={22} className="text-slate-900" onClick={() => concluirTarefa(tarefa)}/>
                                {tarefa.nome} - {tarefa.descricao}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            {/* Tarefas Concluidas */}
            <div className="bg-white p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] rounded-lg  border rounded-lg shadow-lg">
                <h1 className="font-bold text-green-800">Tarefas Concluidas</h1>
                <div>

                    <ul>
                        {tarefasFinalizadas.map((tarefa) => (
                            <li onClick={() => EmAndamentoTarefa(tarefa)} className="flex p-1 mt-1 text-green-800" key={tarefa.id}>
                                <Check size={22} className="text-green-800" />
                                {tarefa.nome} - {tarefa.descricao}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Tarefas;