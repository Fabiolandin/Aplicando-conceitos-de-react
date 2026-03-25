import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";

const Tarefas = () => {
    return (
        <div className="flex bg-white">

            <div className="flex">
                <Sidebar />
            </div>

            <div className="bg-gray-300 p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] rounded-lg shadow">
                <h1>Tarefas há fazer</h1>
                <Input 
                className="bg-white shadow" 
                placeholder="Digite uma tarefa para adicionar"
                >
                </Input>
            </div>
            <div className="bg-gray-300 p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] rounded-lg shadow">
                <h1>Tarefas Concluidas</h1>
            </div>

        </div>
    )
}

export default Tarefas;