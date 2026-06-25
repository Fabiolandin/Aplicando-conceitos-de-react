import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "./ui/dialog"
import type { Chamado } from "@/types/chamado";

interface DialogDetailsProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    chamadoSelecionados: Chamado | null;
}

const DialogDetailsChamado = ({ open, setOpen, chamadoSelecionados }: DialogDetailsProps) => {
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent>
                    <DialogTitle>Detalhes do Chamado</DialogTitle>
                    <h1>Titulo: {chamadoSelecionados?.titulo}</h1>
                    <h1>Descrição: {chamadoSelecionados?.descricao}</h1>
                    <DialogFooter>
                        <Button
                        onClick={() => setOpen(false)}
                        >Cancelar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogDetailsChamado
