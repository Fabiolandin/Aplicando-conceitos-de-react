import DialogTarefas from "@/components/DialogTarefas";
import Sidebar from "@/components/Sidebar";
import { listadeTarefas } from "@/tarefas";
import { Check, CheckLineIcon, StopCircleIcon } from "lucide-react";
const Tarefas = () => {

    const dados = listadeTarefas

    const tarefasEmAberto = dados.filter((tarefas) => tarefas.status === "Em aberto")
    const tarefasFinalizadas = dados.filter((tarefas) => tarefas.status === "Finalizado")

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
                            <li className="flex p-1 mt-1 text-gray-900" key={tarefa.id}>
                                <StopCircleIcon size={22} className="text-slate-900"/>
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
                            <li className="flex p-1 mt-1 text-green-800" key={tarefa.id}>
                                <Check size={22} className="text-green-800"/>
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