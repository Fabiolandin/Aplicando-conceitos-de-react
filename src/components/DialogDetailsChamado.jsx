import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "./ui/dialog"

const DialogDetailsChamado = ({open, setOpen, chamadoSelecionados}) => {
    console.log("console do dialog"+chamadoSelecionados)
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent>
                    <DialogTitle>Detalhes do Chamado</DialogTitle>
                    <h1>Titulo: {chamadoSelecionados?.titulo}</h1>
                    <h1>Descrição: {chamadoSelecionados?.descricao}</h1>
                    <DialogFooter>
                        <Button>Cancelar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogDetailsChamado