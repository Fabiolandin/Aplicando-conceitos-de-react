import { chamados } from "@/chamados";
import DialogDetailsChamado from "@/components/DialogDetailsChamado";
import DialogNewChamado from "@/components/DialogNewChamado";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ViewIcon } from "lucide-react";
import { useState } from "react";
import type { Chamado } from "@/types/chamado"


const Suporte = () => {
    //recebendo a lista de chamados
    const [listadeChamados, setlistadeChamados] = useState<Chamado[]>(chamados);
    
    //state para abrir dialog
    const [openDialogNewChamado, setOpenDialogNewChamado] = useState(false);
    const [openDialogDetailsChamado, setopenDialogDetailsChamado] = useState(false)

    const [chamadoSelecionado, setchamadoSelecionado] = useState<Chamado | null>(null);
    
    //Dados filtrados para os cards
    const chamadosEmAndamento = listadeChamados.filter((chamados) => chamados.status === "Em andamento")
    const chamadosFinalizado = listadeChamados.filter((chamados) => chamados.status === "Finalizado")
    
    //variavel para lógica de id's de chamado
    const qtdChamados = listadeChamados.length

    const dialogNewChamado = () => {
        setOpenDialogNewChamado(true)
    }

    const dialogDetailsChamado = (chamado: Chamado) => {
        setopenDialogDetailsChamado(true)
        setchamadoSelecionado(chamado)
    }

    return (
        <div className="flex">
            <Sidebar />

            <div className="flex flex-col h-screen w-screen">

                {/* div dos cards */}
                <div className="flex p-4 gap-4 ">
                    <Card className="flex-1 shadown h-37.5">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-semibold text-[20px]">Total de chamados</h1>
                            <h1 className="text-[70px] font-semibold">{listadeChamados.length}</h1>
                        </CardContent>
                    </Card>
                    <Card className="flex-1 shadown h-37.5">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-semibold text-[20px]">Chamados em Andamento</h1>
                            <h1 className="text-[70px] font-semibold">{chamadosEmAndamento.length}</h1>
                        </CardContent>
                    </Card>
                    <Card className="flex-1 shadown h-37.5">
                        <CardContent className="flex flex-col items-center">
                            <h1 className="font-semibold text-[20px]">Chamados Atendidos</h1>
                            <h1 className="text-[70px] font-semibold">{chamadosFinalizado.length}</h1>
                        </CardContent>
                    </Card>
                </div>

                {/* div dos chamados */}
                <div className="flex-col">
                    <Card className="p-4 ml-2 mr-2">
                        <CardTitle className="flex">Lista de chamados:
                            <Button
                                variant="secondary"
                                className="ml-auto"
                                onClick={() => dialogNewChamado()}
                            >Criar novo Chamado</Button>
                        </CardTitle>

                        {listadeChamados.map((chamado) => (
                            
                            <Card className="p-2 flex shadow" key={chamado.id}>
                                <CardContent className="flex">
                                    {chamado.id} - {chamado.titulo}
                                    <ViewIcon 
                                    onClick={() => dialogDetailsChamado(chamado)}
                                    className="ml-auto" 
                                    size={22} />
                                </CardContent>
                            </Card>
                        ))}

                    </Card>
                </div>

            </div>
            <DialogNewChamado
                open={openDialogNewChamado}
                setOpen={setOpenDialogNewChamado}
                dados={listadeChamados}
                setDados={setlistadeChamados}
                qtdChamados={qtdChamados}
            />
            <DialogDetailsChamado
            open={openDialogDetailsChamado}
            setOpen={setopenDialogDetailsChamado}
            chamadoSelecionados={chamadoSelecionado}
            />
        </div>
    )

}

export default Suporte;