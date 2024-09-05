
// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import { getRoutes } from './routes.api';
// import { RouteCard } from '@/components/route-card';

// export const dynamic = 'force-dynamic'

// async function RouteList() {

//     const routes = await getRoutes();
//     console.log(routes);

//     return (
//         <>
//             <div className='flex justify-between items-center py-4 px-6 bg-gradient-to-r from-purple-700 to-purple-900'>
//                 <h1 className='text-4xl font-bold tracking-wide text-purple-400 hover:text-yellow-400'>
//                     <Link href={"/"}>RoutesAPP</Link>
//                 </h1>
//                 <Link className={buttonVariants({ variant: 'outline', className: 'text-purple-500 border-yellow-400 hover:bg-yellow-400 hover:text-purple-900' })} href={"/routes/new"}>
//                     Crear Ruta
//                 </Link>
//             </div>

//             <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 p-6 bg-purple-100'>
//                 {
//                     routes.map((route: any) => (
//                         <RouteCard key={route.id} route={route} />
//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default RouteList;


import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { getRoutes } from './routes.api';
import { RouteCard } from '@/components/route-card';

export const dynamic = 'force-dynamic'

async function RouteList() {
    const routes = await getRoutes();

    return (
        <>
            <div className='flex justify-between items-center py-4 px-6 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg shadow-md'> {/* Sombra y borde redondeado en la parte inferior */}
                <h1 className='text-4xl font-bold tracking-wide text-yellow-400'>
                    <Link href={"/"}>RoutesAPP</Link>
                </h1>
                <Link
                    className={buttonVariants({
                        variant: 'outline',
                        className: 'text-purple-900 border-yellow-400 hover:bg-yellow-400 hover:text-purple-900 rounded-full px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105'
                    })}
                    href={"/routes/new"}
                >
                    Crear Ruta
                </Link> {/* Botón con esquinas redondeadas, efecto hover y transición */}
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 p-6 bg-gradient-to-br from-purple-50 to-purple-100'> {/* Fondo degradado amarillo pálido */}
                {
                    routes.map((route: any) => (
                        <RouteCard key={route.id} route={route} />
                    ))
                }
            </div>
        </>
    );
}

export default RouteList;