import { PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { useState } from "react"

const DialogNewTransacao = ({ dados, setDados }) => {

    //States para puxar o valor do formulario
    const [nomeTransacao, setnomeTransacao] = useState('')
    const [tipoTransacao, settipoTransacao] = useState('')
    const [valorTransacao, setvalorTransacao] = useState('')

    //função chamada pós o salvar do form
    const handleSubmit = (e) => {
        e.preventDefault();

        const novaTransacao = {
            id: Date.now(),
            nome: nomeTransacao,
            tipo: tipoTransacao,
            valor: Number(valorTransacao),
            data: new Date().toLocaleDateString('pt-BR')
        }

        setDados([...dados, novaTransacao])
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="text-green-600">
                        <PlusIcon color="green" />
                        Nova Transação</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Titulo</DialogTitle>
                        <DialogDescription>Descrição</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>

                        <label>Nome da transação:</label>
                        <Input
                            placeholder="Digite o nome da transação"
                            value={nomeTransacao}
                            onChange={(e) => setnomeTransacao(e.target.value)}
                        />

                        <label>Tipo da transação:</label>
                        <Input
                            placeholder="Digite o tipo da transação"
                            value={tipoTransacao}
                            onChange={(e) => settipoTransacao(e.target.value)}
                        />

                        <label>Valor:</label>
                        <Input
                            placeholder="Digite o valor da transação"
                            value={valorTransacao}
                            onChange={(e) => setvalorTransacao(e.target.value)}
                        />
                        
                        <DialogFooter>
                            <DialogTrigger asChild>
                                <Button
                                    className="flex-1"
                                    variant="outline"
                                    type="submit"
                                >
                                    Salvar
                                </Button>
                                </DialogTrigger>

                                <DialogTrigger asChild>
                                <Button
                                    className="flex-1"
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
export default DialogNewTransacao