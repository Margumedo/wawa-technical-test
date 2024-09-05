
"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { createRoute, updateRoute } from "../routes.api"
import { useParams, useRouter } from "next/navigation"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import { es } from "date-fns/locale"
import axios from "axios"
import { toast } from "@/hooks/use-toast"

export const dynamic = 'force-dynamic'

export function RouteForm({ route }: any) {
    registerLocale('es', es)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            origen: route?.origen,
            destino: route?.destino,
            horaSalida: route?.horaSalida,
            horaLlegada: route?.horaLlegada,
            precio: route?.precio,
            capacidadAutobus: route?.capacidadAutobus,
        }
    });

    const [horaSalida, setHoraSalida] = useState<Date | null>(route?.horaSalida ? new Date(route.horaSalida) : null);
    const [horaLlegada, setHoraLlegada] = useState<Date | null>(route?.horaLlegada ? new Date(route.horaLlegada) : null);

    const router = useRouter();
    const params = useParams<{ id: string }>();


    const onSubmit = handleSubmit(async (data) => {
        const formData = {
            ...data,
            horaSalida: horaSalida ? horaSalida.toISOString().replace(/\.\d{3}Z$/, 'Z') : null,
            horaLlegada: horaLlegada ? horaLlegada.toISOString().replace(/\.\d{3}Z$/, 'Z') : null,
            precio: parseFloat(data.precio),
            capacidadAutobus: parseInt(data.capacidadAutobus),
        };

        try {
            if (params.id) {
                await updateRoute(params.id, { ...formData, url: 'test' });
                toast({
                    title: 'Actualizada con exito',
                    description: `Ruta ${data.origen} - ${data.destino}`,
                    variant: 'default',
                    className: 'border-purple-500 mt-4'
                });
            } else {
                await createRoute({ ...formData, url: 'test' });
                toast({
                    title: 'Creada con exito',
                    description: `Ruta ${data.origen} - ${data.destino} `,
                    variant: 'default',
                    className: 'border-purple-500 mt-4'
                });
            }
            router.push("/routes");
            router.refresh();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message || 'Error desconocido en el servidor'; // Obtener el mensaje de error del backend o mostrar un mensaje genérico

                errorMessage.map((error: any) => {

                    toast({
                        title: 'Error',
                        description: error,
                        variant: 'destructive',
                        className: 'mt-4'
                    });
                }
                )
            } else {
                console.error('Error al enviar el formulario:', error);
                toast({
                    title: 'Error',
                    description: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
                    variant: 'destructive',
                });
            }
        }

    });



    return (
        <form onSubmit={onSubmit} className="bg-purple-50 p-6 rounded-lg shadow-lg">
            <div className="grid w-full items-center gap-4 pb-2">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="origen" className="text-purple-600 font-semibold">Origen</Label>
                    <Input
                        id="origen"
                        placeholder="Ubicación de origen"
                        {...register('origen', { required: true })}
                        className=" text-black  border-purple-600 focus:ring-yellow-500 focus:border-yellow-500 "
                    />
                    {errors.origen && <span className="text-red-600 font-sans text-sm" >El origen es requerido</span>}
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="destino" className="text-purple-600 font-semibold">Destino</Label>
                    <Input
                        id="destino"
                        placeholder="Lugar de destino"
                        {...register('destino', { required: true })}
                        className="  text-black border-purple-600 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    {errors.destino && <span className="text-red-600 font-sans text-sm" >El destino es requerido</span>}
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="horaSalida" className="text-purple-600 font-semibold">Hora de salida</Label>
                    <DatePicker
                        selected={horaSalida}
                        onChange={(date) => {
                            setHoraSalida(date);
                            setValue('horaSalida', date); // Actualiza el valor en react-hook-form
                        }}
                        showTimeSelect
                        timeFormat="hh:mm:aa"
                        timeIntervals={15}
                        dateFormat="PP, hh:mm:aa"
                        timeCaption="Hora"
                        locale='es'
                        className=" flex h-10 w-full rounded-md border border-purple-600 bg-white px-3 py-2 text-sm placeholder:text-gray-500 text-black focus:ring-yellow-500 focus:border-yellow-500 "
                        placeholderText="Selecciona una hora"
                        disabledKeyboardNavigation
                        onKeyDown={(e) => e.preventDefault()}
                        onFocus={(e) => e.target.blur()}
                        minDate={new Date()}
                    />
                    {errors.horaSalida && <span className="text-red-600 font-sans text-sm">La hora de salida es requerida</span>}
                    <input
                        type="hidden"
                        {...register('horaSalida', { required: true })}
                    />

                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="horaLlegada" className="text-purple-600 font-semibold">Hora de llegada</Label>
                    <DatePicker
                        selected={horaLlegada}
                        onChange={(date) => {
                            setHoraLlegada(date);
                            setValue('horaLlegada', date); // Actualiza el valor en react-hook-form
                        }}
                        showTimeSelect
                        timeFormat="hh:mm:aa"
                        timeIntervals={15}
                        dateFormat="PP hh:mm:a"
                        timeCaption="Hora"
                        locale='es'
                        className="flex h-10 w-full rounded-md border border-purple-600 bg-white px-3 py-2 text-sm placeholder:text-gray-500 text-black focus:ring-yellow-500 focus:border-yellow-500"
                        placeholderText="Selecciona una hora"
                        disabledKeyboardNavigation
                        onKeyDown={(e) => e.preventDefault()}
                        onFocus={(e) => e.target.blur()}
                        minDate={new Date()}
                    />
                    {errors.horaSalida && <span className="text-red-600 font-sans text-sm">La hora de llegada es requerida</span>}
                    <input
                        type="hidden"
                        {...register('horaLlegada', { required: true })}
                    />
                </div>

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="precio" className="text-purple-600 font-semibold">Precio</Label>
                    <Input
                        id="precio"
                        placeholder="Costo del viaje"
                        {...register('precio', { required: true })}
                        className="  text-black border-purple-600 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    {errors.precio && <span className="text-red-600 font-sans text-sm" >El precio es requerido</span>}
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="capacidad-autobus" className="text-purple-600 font-semibold">Capacidad del Autobus</Label>
                    <Input
                        id="capacidad-autobus"
                        placeholder="10"
                        {...register('capacidadAutobus', { required: true })}
                        className="  text-black border-purple-600 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    {errors.capacidadAutobus && <span className="text-red-600 font-sans text-sm" >La capacidad es requerida</span>}
                </div>
                <div className="flex justify-between  pt-4">
                    <Button
                        type="button"
                        onClick={() => router.push("/routes")}
                        variant="outline"
                        className="border-purple-600 text-purple-600 hover:border-red-600 hover:bg-red-600 hover:text-white "
                    >
                        Cancelar
                    </Button>
                    <Button className="bg-purple-600 text-white hover:text-yellow-300 hover:bg-purple-700">
                        {params.id ? "Actualizar" : "Crear"}
                    </Button>
                </div>
            </div>
        </form>
    );
}
