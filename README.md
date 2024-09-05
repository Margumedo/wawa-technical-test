# Aplicación de Rutas 🚌

¡Bienvenido a la aplicación de gestión de rutas de autobuses! Este proyecto te permite crear, editar, eliminar y visualizar información detallada sobre rutas de autobuses, incluyendo su origen, destino, precio, horarios y capacidad.

## Características 🚀
Frontend (Next.js):

Interfaz de usuario moderna e intuitiva.
Listado de rutas de autobuses con información esencial.
Página de detalles de ruta con información completa y mapa interactivo (gracias a la API de Google Maps).
Formulario para crear y editar rutas, con validación de datos y manejo de errores para una experiencia fluida.

Backend (Nest.js):

API RESTful robusta para gestionar las rutas de autobuses.
Endpoints CRUD completos para crear, leer, actualizar y eliminar rutas.
Validación de datos en el backend para garantizar la integridad de la información.
Integración con una base de datos (SQLite en este caso) a través de Prisma ORM para un manejo eficiente de los datos.
Documentación clara y completa de la API utilizando Swagger, facilitando su uso y comprensión.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecutando la Aplicación](#ejecutando-la-aplicación)
- [Documentación](#documentación)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Requisitos Previos 🛠️

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** (versión 18 o superior)
- **npm**  (gestor de paquetes de Node.js)
- **Git** (para clonar el repositorio)

## Instalación

Sigue estos pasos para clonar el repositorio y configurar el proyecto en tu máquina local:

1. **Clonar el Repositorio**

   Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/Margumedo/wawa-technical-test.git
   cd tu-repo

2. **Instalar Dependencias**

    Navega a las carpetas `frontend` y `backend` para instalar las dependencias necesarias:

3. **Frontend (Next.js):**

    ```bash
    cd frontend
    npm install
    # o si usas yarn
    yarn install
    ```

4. **Backend (Nest.js):**

    ```bash
    cd ../backend
    npm install
    # o si usas yarn
    yarn install
    ```

## Configuración 🔧

Antes de ejecutar la aplicación, debes configurar las variables de entorno necesarias tanto para el frontend como para el backend.

1. **Backend Frontend (NextJS)**

   Crea un archivo .env en la carpeta backend con el siguiente contenido:

   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
    

2. **Backend (Nest.js)**

    Crea un archivo .env en la carpeta backend con el siguiente contenido:

    ```bash
    DATABASE_URL=tu_url_de_base_de_datos
    JWT_SECRET=tu_clave_secreta_jwt
    ```

## Ejecutando la Aplicación

Una vez que hayas configurado las variables de entorno, puedes ejecutar el proyecto tanto en el frontend como en el backend.
1. Ejecutar el Backend (NestJS):

    ```bash
    cd frontend
    npm run dev
    # o si usas yarn
    yarn dev
    ```

2. Ejecutar el Backend (NestJS):

    ```bash
    cd backend
    npm run start:dev
    # o si usas yarn
    yarn dev
    ```

## Documentación

La API del backend está documentada con Swagger. Una vez que el backend esté en ejecución, puedes acceder a la documentación de Swagger visitando el siguente enlace:

[Api Routes Documentation](http://localhost:4000/api)
