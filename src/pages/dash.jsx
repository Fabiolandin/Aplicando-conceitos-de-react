import Sidebar from "@/components/Sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Dash = () => {
    return (
            <div className="flex">
            <Sidebar />
            <div className=" flex-col h-screen w-screen bg-amber-500">

            {/* Div dos cards*/}
            <div className="flex flex-1 p-4 gap-4 bg-gray-500">

                <Card className="flex-1 h-37.5 shadow items-center">
                    <CardContent>
                        <CardTitle>Olá</CardTitle>
                    </CardContent>
                </Card>

                <Card className="flex-1 h-37.5 shadow items-center">
                    <CardContent>
                        <CardTitle>Olá</CardTitle>
                    </CardContent>
                </Card>

                <Card className="flex-1 h-37.5 shadow items-center">
                    <CardContent>
                        <CardTitle>Olá</CardTitle>
                    </CardContent>
                </Card>

            </div>

            {/* Div das transações*/}
            <div className="bg-amber-200 min-h-0">
            <Card>
                <CardContent>
                    <CardHeader>
                    <CardTitle>Card de transações</CardTitle>
                    <CardDescription>Descrição</CardDescription>
                    </CardHeader>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    <p>Linhas da tabela</p>
                    
                </CardContent>
            </Card>
            </div>

        </div>
        </div>
    )
}

export default Dash