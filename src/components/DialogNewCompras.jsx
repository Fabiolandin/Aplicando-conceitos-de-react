import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

const DialogNewCompras = ({dados, setDados }) => {

    const [nomeItem, setnomeItem] = useState('')
    const [valorItem, setvalorItem] = useState('')

    const handleSubmit = (e) => {
        //PREVINI QUE O FORMULARIO RECARREGUE A PAGINA
        e.preventDefault();

        const novoItem = {
            id: Date.now(),
            nome: nomeItem,
            valor: Number(valorItem),
            status: "comprar"
        }

        setDados([...dados, novoItem])
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Criar novo item</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Criar novo item de compra</DialogTitle>
                        <DialogDescription>Insira os itens abaixo</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="mb-1">
                        <label className="mb-1">Nome:</label>
                        <Input
                            placeholder="digite o nome do item de compra"
                            value={nomeItem}
                            className="mb-1"
                            onChange={(e) => setnomeItem(e.target.value)}
                        />


                        <label className="mb-1">Valor:</label>
                        <Input
                            placeholder="digite o valor do item de compra"
                            value={valorItem}
                            className="mb-1"
                            onChange={(e) => setvalorItem(e.target.value)}
                        />
                    <DialogFooter>
                        <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="flex-1"
                            type="submit"
                            >
                            Salvar
                        </Button>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                        <Button className="flex-1">Cancelar</Button>
                        </DialogTrigger>
                    </DialogFooter>
                            </form>
                </DialogContent>
            </Dialog>
        </div>
    )

}

export default DialogNewCompras