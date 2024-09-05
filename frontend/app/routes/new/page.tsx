
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { RouteForm } from './route-form'
import { getRoute } from '../routes.api'

interface Props {
    params: {
        id: string
    }
}

async function RouteNewPage({ params }: Props) {

    let route = null; // Inicializar 'route' como null

    if (params.id) { // Verificar si 'params.id' existe
        route = await getRoute(params.id);
        console.log(route)
    }

    return (
        <div className="h-screen flex justify-center items-center ">
            <Card className="w-[550px] bg-purple-600 text-white p-6 rounded-t-lg ">
                <CardHeader>
                    <CardTitle>{params.id ? "Actualizar Ruta" : "Crear Ruta"}</CardTitle>
                    <CardDescription className='text-yellow-200 font-semibold' >{params.id ? "Actualiza la ruta con un click." : "Crea tu nueva ruta con un click."}</CardDescription>
                </CardHeader>
                <CardContent>
                    <RouteForm route={route} />
                </CardContent>
            </Card>
        </div>

    )
}

export default RouteNewPage





