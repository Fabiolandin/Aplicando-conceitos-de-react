import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

const DialogTransacaoDetails = ({ open, setOpen, transacaoSelecionada }) => {

    const handleDialogClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{transacaoSelecionada?.nome}</DialogTitle>
                        <DialogDescription>{transacaoSelecionada?.tipo}</DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2">
                        <h1 className="font-bold">Valor:</h1>
                        <h1>R$ {transacaoSelecionada?.valor}</h1>
                    </div>
                    <div className="flex gap-2">
                        <h1 className="font-bold">Data da transação:</h1>
                        <h1>{transacaoSelecionada?.data}</h1>
                    </div>
                    <DialogFooter>
                        <Button
                            className="flex-1"
                            onClick={() => handleDialogClose()}
                        >
                            Cancelar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogTransacaoDetails