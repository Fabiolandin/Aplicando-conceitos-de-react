import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Chamado, StatusChamado } from "@/types/chamado";

interface DialogNewChamadoProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    dados: Chamado[];
    setDados: React.Dispatch<React.SetStateAction<Chamado[]>>
    qtdChamados: number;
}

const DialogNewChamado = ({ open, setOpen, dados, setDados, qtdChamados }: DialogNewChamadoProps) => {

    //consts para pegar do form e salvar
    const [tituloChamado, setTituloChamado] = useState('')
    const [descricaoChamado, setDescricaoChamado] = useState('')
    const [statusChamado] = useState<StatusChamado>('Em aberto')

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoChamado = {
            //esquema para sempre contar os tickets +1
            id: qtdChamados + 1,
            titulo: tituloChamado,
            descricao: descricaoChamado,
            status: statusChamado
        }
        setDados([...dados, novoChamado])
        setOpen(false)

        //limpando form
        setTituloChamado('')
        setDescricaoChamado('')
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Criar novo chamado</DialogTitle>
                    </DialogHeader>
                    <label className="">Titulo Chamado:</label>
                    <Input
                        placeholder="Digite o titulo do chamado"
                        value={tituloChamado}
                        className=""
                        onChange={(e) => setTituloChamado(e.target.value)}
                    />

                    <label className="">Descrição do Chamado:</label>
                    <Input
                        placeholder="Digite o titulo do chamado"
                        value={descricaoChamado}
                        className=""
                        onChange={(e) => setDescricaoChamado(e.target.value)}
                    />
                    <DialogFooter>
                    <Button
                        className="flex-1"
                        onClick={() => setOpen(false)}
                        >Calcelar</Button>
                        <Button
                        className="flex-1"
                        onClick={(e) => handleSubmit(e)}
                        >Salvar</Button>
                    </DialogFooter>

                </DialogContent>
            </Dialog>
        </div>
    )
}
export default DialogNewChamado