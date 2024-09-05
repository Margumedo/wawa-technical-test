// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import { getRoutes } from './routes/routes.api';
// import { RouteCard } from '@/components/route-card';




// async function HomePage() {

//   const routes = await getRoutes()
//   console.log(routes)

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//         <h1 className="text-4xl font-bold mb-4">¡Bienvenido a la Aplicación de Rutas de Autobuses!</h1>
//         <p className="text-lg mb-8">Encuentra tus rutas de autobús fácilmente.</p>
//         <Link href="/routes" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">

//           Ver rutas de autobuses
//         </Link>
//       </div>

//     </>
//   )
// }

// export default HomePage;





import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { getRoutes } from './routes/routes.api';
import { RouteCard } from '@/components/route-card';

async function HomePage() {
  const routes = await getRoutes()

  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-purple-500">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-md">¡Bienvenido a bordo!</h1>
        <p className="text-xl text-purple-900 mb-10 text-center max-w-md">Encuentra tu próxima aventura en autobús. ¡Explora nuevas rutas y destinos!</p>
        <Link
          href="/routes"
          className={buttonVariants({
            variant: 'default',
            className: 'bg-yellow-300 hover:bg-yellow-500 text-purple-800 font-bold rounded-full px-8 py-4 transition duration-300 ease-in-out transform hover:scale-105'
          })}
        >
          Descubre las rutas
        </Link>
      </div>
    </>
  )
}

export default HomePage;