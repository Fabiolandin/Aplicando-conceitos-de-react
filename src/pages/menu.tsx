import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Menu = () => {
    return (
        <div className="flex h-screen w-full">
            <Sidebar />

            {/* Card */}
            <div className="w-full flex justify-center items-center">
                <Card className="min-w-[90%] p-2 justify-center shadow">
                    <CardHeader>
                        <CardTitle>Card De dialogs</CardTitle>
                        <CardDescription>Card para Abertura de Dialogs </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                        <h1>Descrição</h1>
                    </CardContent>
                    <CardFooter className="flex">
                        <Button className="flex-1">Button1</Button>
                        <Button className="flex-1">Button2</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
export default Menu