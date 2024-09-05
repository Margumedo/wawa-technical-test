# Aplica de Rutas

Este repositorio contiene una aplicación de rutas construida con **Next.js** para el frontend y **NestJS** para el backend. La aplicación permite a los usuarios crear rutas mediante un formulario, editarlas, eliminar y actualizarlas.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecutando la Aplicación](#ejecutando-la-aplicación)
- [Documentación](#documentación)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Requisitos Previos

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

## Frontend (Next.js):

```bash
cd frontend
npm install
# o si usas yarn
yarn install
```

## Backend (Nest.js):

```bash
cd ../backend
npm install
# o si usas yarn
yarn install
```

## Configuración

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

## Documentación

La API del backend está documentada con Swagger. Una vez que el backend esté en ejecución, puedes acceder a la documentación de Swagger visitando el siguente enlace:

[Api Routes Documentation](http://localhost:4000/api)
