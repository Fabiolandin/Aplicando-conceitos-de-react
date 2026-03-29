import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const DialogTarefas = ({dados, setDados}) => {
    
    const [tituloTarefa, settituloTarefa] = useState('')
    const [descricaoTarefa, setdescricaoTarefa] = useState('')
    
    const handleSubmit = (e) => {
        //PREVINI QUE O FORMULARIO RECARREGUE A PAGINA
        e.preventDefault();

        //FUNCÃO PARA CRIA NOVA TAREFA
        const novatarefa = {
        id: Date.now(),
        nome: tituloTarefa,
        status: "Em aberto",
        descricao: descricaoTarefa
        }
        
        setDados([...dados, novatarefa])
        //GARANTINDO QUE QUANDO ELE FOR ABERTO NOVAMENTE OS REGISTROS ANTIGOS SUMIRAM
        settituloTarefa(null)
        setdescricaoTarefa(null)


}


return (
    <div>
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="outline" className="text-green-600">
                    <PlusIcon color="green" />
                    Nova Tarefa</Button>
            </DialogTrigger>
            <DialogContent>
                    <DialogHeader >
                        <DialogTitle className="text-slate-900">Criar nova tarefa</DialogTitle>
                        <DialogDescription className="text-slate-700">Digite todos os campos abaixo</DialogDescription>
                    </DialogHeader>
                <form onSubmit={handleSubmit} className="mb-1">
                    <div className="mb-3">
                        <label className="text-slate-900">Nome da Tarefa:</label>
                        <Input
                            placeholder="Digite o nome da tarefa"
                            value={tituloTarefa}
                            onChange={(e) => settituloTarefa(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="text-slate-900">Descrição da Tarefa:</label>
                        <Input
                            placeholder="Digite a descrição da tarefa"
                            value={descricaoTarefa}
                            onChange={(e) => setdescricaoTarefa(e.target.value)}
                        />
                    </div>
                    <DialogFooter className="mt-1">
                        <DialogTrigger asChild>
                        <Button
                            className="bg-slate-900 flex flex-1"
                            type="submit"
                        >
                            Criar Tarefa
                        </Button>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                            <Button
                                className="flex flex-1 shadow border"
                                variant="destructive"
                            >
                                Cancelar
                            </Button>
                        </DialogTrigger>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
)
}

export default DialogTarefas