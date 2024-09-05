"use client";

import { deleteRoute } from "@/app/routes/routes.api";
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"; // Importa el icono de la papelera
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";


export function RouteCard({ route }: any) {

    const router = useRouter();

    const handleRemove = async (id: string) => {
        await deleteRoute(id)
        router.refresh();
    }

    return (
        <Card >
            <CardHeader>
                <CardTitle>{`${route.origen} - ${route.destino}`}</CardTitle>
                <CardDescription>Precio: ${`${route.precio}`}</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={() => router.push(`routes/${route.id}`)} variant="outline" className="bg-purple-500 text-white hover:text-yellow-400 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
                    Ver más</Button>
                <div className="relative">
                    <Button
                        onClick={() => handleRemove(route.id)}
                        variant="ghost"
                        className="p-2 hover:bg-red-600 text-white hover:text-white group transition-all"
                    >
                        <Trash className="w-5 h-5 text-red-600 group-hover:text-white" />
                        <span className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:ml-2 bg-red-600 text-white px-2 py-1 rounded transition-all duration-300">
                            Eliminar
                        </span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
