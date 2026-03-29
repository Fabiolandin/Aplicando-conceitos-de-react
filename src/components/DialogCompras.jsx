import { toast } from "sonner"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

const DialogCompras = ({ open, setOpen, comprasComprar }) => {

    const handleDialogClose = () => {
        setOpen(false)
    }
    
    const comprarItem = (comprasComprar) => {
        comprasComprar.status = "comprado"
        console.log(comprasComprar)
        toast.success('Item Comprado!')
        handleDialogClose()
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Compras</DialogTitle>
                        <DialogDescription>comprinhas</DialogDescription>
                    </DialogHeader>
                    <h1>{comprasComprar?.nome}</h1>
                    <h1>{comprasComprar?.status}</h1>
                    <DialogFooter>

                        <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => comprarItem(comprasComprar)}
                        >
                            Comprar
                        </Button>

                        <Button
                            onClick={handleDialogClose}
                            className="flex-1"
                        >
                            Cancelar
                        </Button>

                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogCompras