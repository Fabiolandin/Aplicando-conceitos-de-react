import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"

const DialogCompras = ({ open, setOpen, comprasComprar }) => {

    const handleDialogClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{comprasComprar?.nome}</DialogTitle>
                        <DialogDescription>{comprasComprar?.status}</DialogDescription>
                    </DialogHeader>

                    <DialogFooter>

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