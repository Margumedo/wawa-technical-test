
// import React from 'react'
// import { getRoute } from '../routes.api'

// import { Button, buttonVariants } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import Link from 'next/link'

// import { format, parseISO } from 'date-fns'
// import { es } from 'date-fns/locale' // Para español

// interface Props {
//     params: { id: string }
// }

// export default async function RouteDetail({ params }: Props) {
//     const route = await getRoute(params.id)
//     console.log(route)

//     // Formateo de la hora de llegada con AM/PM
//     const formattedHoraLlegada = format(parseISO(route.horaLlegada), 'PP, h:mm a', { locale: es })

//     // Formateo de la hora de llegada con AM/PM
//     const formattedHoraSalida = format(parseISO(route.horaSalida), 'PP, h:mm a', { locale: es })

//     // Formateo de la fecha de creación con AM/PM
//     const formattedCreatedAt = format(new Date(route.createdAt), 'PP, h:mm a', { locale: es })

//     // Formateo de la fecha de creación con AM/PM
//     const formattedUpdatedAt = format(new Date(route.updatedAt), 'PP, h:mm a', { locale: es })


//     return (
//         <div className='h-screen flex justify-center items-center'>
//             <Card className="w-full max-w-xl mx-4 shadow-lg border border-purple-200">
//                 <CardHeader className="bg-purple-600 text-white p-6 rounded-t-lg">
//                     <CardTitle className="text-2xl font-bold">{`Ruta: ${route.origen.split(',')[0].trim()} - ${route.destino.split(',')[0].trim()}`}</CardTitle>
//                     <CardDescription className="text-sm text-white mt-2">{`ID de la Ruta: ${route.id}`}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-6 space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <p className="text-purple-600 font-semibold">Origen</p>
//                             <p className="text-lg">{route.origen.split(',')[0].trim()}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Destino</p>
//                             <p className="text-lg">{route.destino.split(',')[0].trim()}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Hora de Salida</p>
//                             <p className="text-lg">{formattedHoraSalida}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Hora de Llegada</p>
//                             <p className="text-lg">{formattedHoraLlegada}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Precio</p>
//                             <p className="text-lg">{`$${route.precio}`}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Capacidad del Autobús</p>
//                             <p className="text-lg">{route.capacidadAutobus}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Creada</p>
//                             <p className="text-lg">{formattedCreatedAt}</p>
//                         </div>
//                         <div>
//                             <p className="text-purple-600 font-semibold">Actulizada</p>
//                             <p className="text-lg">{formattedUpdatedAt}</p>
//                         </div>
//                     </div>
//                 </CardContent>
//                 <CardFooter className="bg-purple-50 p-4 rounded-b-lg flex justify-between">
//                     <Link
//                         href={`/routes/${route.id}/edit`}
//                         className={buttonVariants({
//                             variant: 'outline',
//                             className: 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
//                         })}
//                     >
//                         Editar
//                     </Link>
//                     <Link
//                         href='/routes'
//                         className={buttonVariants({
//                             className: 'bg-purple-600 text-white hover:bg-purple-700',
//                         })}
//                     >
//                         Volver
//                     </Link>
//                 </CardFooter>
//             </Card>
//         </div>
//     )
// }


import React from 'react'
import { getRoute } from '../routes.api'

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import MapWithRoute from '../../../components/map-ruote' // Importar el componente del mapa

import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

interface Props {
    params: { id: string }
}

export default async function RouteDetail({ params }: Props) {
    const route = await getRoute(params.id)

    const formattedHoraLlegada = format(parseISO(route.horaLlegada), 'PP, h:mm a', { locale: es })
    const formattedHoraSalida = format(parseISO(route.horaSalida), 'PP, h:mm a', { locale: es })
    const formattedCreatedAt = format(new Date(route.createdAt), 'PP, h:mm a', { locale: es })
    const formattedUpdatedAt = format(new Date(route.updatedAt), 'PP, h:mm a', { locale: es })

    // Definir las coordenadas del origen y destino
    const originCoords = {
        lat: route.origenLatitud,
        lng: route.origenLongitud,
    };

    const destinationCoords = {
        lat: route.destinoLatitud,
        lng: route.destinoLongitud,
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <Card className="w-full max-w-xl mx-4 shadow-lg border border-purple-200">
                <CardHeader className="bg-purple-600 text-white p-6 rounded-t-lg">
                    <CardTitle className="text-2xl font-bold">{`Ruta: ${route.origen.split(',')[0].trim()} - ${route.destino.split(',')[0].trim()}`}</CardTitle>
                    <CardDescription className="text-sm text-white mt-2">{`ID de la Ruta: ${route.id}`}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-purple-600 font-semibold">Origen</p>
                            <p className="text-lg">{route.origen.split(',')[0].trim()}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Destino</p>
                            <p className="text-lg">{route.destino.split(',')[0].trim()}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Hora de Salida</p>
                            <p className="text-lg">{formattedHoraSalida}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Hora de Llegada</p>
                            <p className="text-lg">{formattedHoraLlegada}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Precio</p>
                            <p className="text-lg">{`$${route.precio}`}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Capacidad del Autobús</p>
                            <p className="text-lg">{route.capacidadAutobus}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Creada</p>
                            <p className="text-lg">{formattedCreatedAt}</p>
                        </div>
                        <div>
                            <p className="text-purple-600 font-semibold">Actualizada</p>
                            <p className="text-lg">{formattedUpdatedAt}</p>
                        </div>
                    </div>
                    {/* Agregar el componente de mapa aquí */}
                    <MapWithRoute origin={originCoords} destination={destinationCoords} />
                </CardContent>
                <CardFooter className="bg-purple-50 p-4 rounded-b-lg flex justify-between">
                    <Link
                        href={`/routes/${route.id}/edit`}
                        className={buttonVariants({
                            variant: 'outline',
                            className: 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
                        })}
                    >
                        Editar
                    </Link>
                    <Link
                        href='/routes'
                        className={buttonVariants({
                            className: 'bg-purple-600 text-white hover:bg-purple-700',
                        })}
                    >
                        Volver
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}


