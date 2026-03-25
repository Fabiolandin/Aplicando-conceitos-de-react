import DialogTarefas from "@/components/DialogTarefas";
import Sidebar from "@/components/Sidebar";
const Tarefas = () => {

    return (
        <div className="flex bg-[#FFFFFF]">

            <div className="flex">
                <Sidebar />
            </div>
            <DialogTarefas />
            <div className="bg-white p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] border rounded-lg shadow-lg">
                <div className="flex items-center">
                    <h1 className="font-bold text-slate-900">Tarefas há fazer</h1>

                </div>

            </div>
            {/* Tarefas Concluidas */}
            <div className="bg-white p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] rounded-lg  border rounded-lg shadow-lg">
                <h1 className="font-bold text-slate-900">Tarefas Concluidas</h1>
            </div>

        </div>
    )
}

export default Tarefas;