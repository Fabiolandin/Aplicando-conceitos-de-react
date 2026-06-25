import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const ContadorUseEffect = () => {
    const [contador, setContador] = useState(Number(localStorage.getItem("valor") || 0))

    useEffect(() => {
        if (contador > 0 && contador % 5 === 0)
            toast.success(`O numero chegou a ${contador}`)
        localStorage.setItem("valor", String(contador))

    }, [contador]);

    const somar = () => {
        setContador(contador + 1)
    }

    const subtrair = () => {
        if (contador <= 0) {
            toast.error("O contador ja chegou em 0")
            return 0
        } else {
            setContador(contador - 1)
        }
    }

    const reset = () => {
        setContador(0)
        toast.success("O contador foi resetado")
    }

    return (
        <div className="flex">
        <Sidebar/>
        <div className="flex flex-col h-screen w-screen items-center justify-center gap-3">
            <Card className="w-150">
                <CardHeader>
                    <CardTitle>Contador</CardTitle>
                    <CardDescription>Contador feito para aplicar conceitos aprendidos sem IA e com pouca ajuda externa</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="flex text-4xl items-center justify-center font-bold">{contador}</p>
                </CardContent>
                <div className="flex gap-4 ml-4 mr-4">
                    <Button
                        className="flex-1 shadow"
                        variant="outline"
                        onClick={somar}
                    >
                        Somar 1
                    </Button>

                    <Button
                        className="flex-1"
                        variant="outline"
                        onClick={subtrair}
                    >
                        Subtrair 1
                    </Button>
                </div>
                <div className="ml-4 mr-4">
                    <Button
                        className="w-full"
                        variant="destructive"
                        onClick={reset}
                    >
                        Reset
                    </Button>
                </div>
            </Card>
        </div>
        </div>
    )
}

export default ContadorUseEffect