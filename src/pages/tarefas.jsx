import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

const Tarefas = () => {

    const formSubmit = () => {
        console.log('Tarefa Salva')
        toast.success('Tarefa Criada com sucesso!')
    }
    return (
        <div className="flex bg-[#FFFFFF]">

            <div className="flex">
                <Sidebar />
            </div>

            <div className="bg-white p-4 ml-10 mr-5 mt-10 mb-10 min-w-[500px] min-h-[500px] border rounded-lg shadow-lg">
                <div className="flex items-center">
                    <h1 className="font-bold text-slate-900">Tarefas há fazer</h1>
                    <Dialog>
                        <DialogTrigger  asChild className="flex ml-auto">
                            <Button variant="outline" className="text-green-600">
                                <PlusIcon color="green"/>
                                Criar Nova Tarefa</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-slate-900">Criar nova tarefa</DialogTitle>
                                <DialogDescription className="text-slate-700">Digite todos os campos abaixo</DialogDescription>
                            </DialogHeader>
                            <div>
                            <h1 className="text-slate-900">Nome da Tarefa:</h1>
                            <Input placeholder="Digite o nome da tarefa"></Input>
                            </div>

                            <div>
                            <h1 className="text-slate-900">Descrição da Tarefa:</h1>
                            <Input placeholder="Digite a descrição da tarefa"></Input>
                            </div>
                            <DialogFooter>
                                <DialogTrigger asChild>
                                <Button 
                                className="w-full bg-slate-900"
                                onClick={formSubmit}
                                >
                                    Criar Tarefa
                                    </Button>
                                    </DialogTrigger>
                            </DialogFooter>

                        </DialogContent>
                    </Dialog>
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