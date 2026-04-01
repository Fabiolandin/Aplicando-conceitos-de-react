import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

const DialogTransacao = () => {
    return (
        <div>
            <Dialog>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Titulo</DialogTitle>
                    <DialogDescription>Descrição</DialogDescription>
                    </DialogHeader>
                    <div className="flex">
                        <h1>Valor</h1>
                        <h1>Data da transação:</h1>
                    </div>
                    <DialogFooter>
                        <Button>Salvar</Button>
                        <Button>Cancelar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogTransacao