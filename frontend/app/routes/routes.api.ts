
import axios from 'axios'

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


export async function getRoutes() {
    const data = await fetch(`${BACKEND_URL}/api/routes`,
        {
            cache: 'no-store'
        }
    )
    return await data.json()
}

export async function updateRoute(routeId: string, newRoute: any) {

    const res = await axios.patch(`${BACKEND_URL}/api/routes/${routeId}`, newRoute)
    const data = res.data
    console.log('update')
    console.log(data)
    return data;
}

export async function getRoute(routeId: string) {

    const res = await axios.get(`${BACKEND_URL}/api/routes/${routeId}`)
    const data = res.data
    console.log('getByOne')
    console.log(data)
    return data;
}

export async function deleteRoute(routeId: string) {

    const res = await axios.delete(`${BACKEND_URL}/api/routes/${routeId}`)
    const data = res.data
    console.log('delete')
    console.log(data)
}

export async function createRoute(routeData: any) {
    console.log(routeData, "TEST")
    const res = await axios.post(`${BACKEND_URL}/api/routes/`, routeData)
    const data = res.data
    console.log('create')
    console.log(data)
}