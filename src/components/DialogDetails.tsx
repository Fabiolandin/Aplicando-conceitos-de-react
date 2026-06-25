import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"


const DialogDetails = ({ open, setOpen, tarefaSelecionada }) => {

    const handleDialogClose = () => {
        setOpen(false)
    }

    const statusColor = {
        'Em aberto': 'text-gray-500',
        'Em andamento': 'text-yellow-500',
        'Finalizado': 'text-green-500'
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{tarefaSelecionada?.nome}</DialogTitle>
                        <DialogDescription>ID: {tarefaSelecionada?.id}</DialogDescription>
                    </DialogHeader>
                    <h1>{tarefaSelecionada?.descricao}</h1>
                    <h1 className={statusColor[tarefaSelecionada?.status]}>{tarefaSelecionada?.status}</h1>
                    <DialogFooter>
                        <Button className="flex-1" variant="outline">Salvar</Button>
                        <Button className="flex-1" onClick={() => handleDialogClose()}>Cancelar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}


export default DialogDetails