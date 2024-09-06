// import React, { useEffect, useRef } from 'react';

// // Define los tipos para las props
// interface LatLng {
//     lat: number;
//     lng: number;
// }

// interface MapProps {
//     origin: LatLng;
//     destination: LatLng;
// }

// const Map: React.FC<MapProps> = ({ origin, destination }) => {
//     const mapRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         if (typeof window !== 'undefined' && window.google && origin && destination) {
//             const map = new window.google.maps.Map(mapRef.current!, {
//                 center: origin,
//                 zoom: 7,
//             });

//             const directionsService = new window.google.maps.DirectionsService();
//             const directionsRenderer = new window.google.maps.DirectionsRenderer();

//             directionsRenderer.setMap(map);

//             const request = {
//                 origin,
//                 destination,
//                 travelMode: window.google.maps.TravelMode.DRIVING,
//             };

//             directionsService.route(request, (result, status) => {
//                 if (status === window.google.maps.DirectionsStatus.OK) {
//                     directionsRenderer.setDirections(result);
//                 } else {
//                     console.error('Error al calcular la ruta: ' + status);
//                 }
//             });
//         }
//     }, [origin, destination]);

//     return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
// };

// export default Map;

"use client"

import React, { useEffect, useRef } from 'react';

interface LatLng {
    lat: number;
    lng: number;
}

interface MapWithRouteProps {
    origin: LatLng;
    destination: LatLng;
}

const MapWithRoute: React.FC<MapWithRouteProps> = ({ origin, destination }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.google && origin && destination) {
            const map = new window.google.maps.Map(mapRef.current!, {
                center: origin,
                zoom: 7,
            });

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();

            directionsRenderer.setMap(map);

            const request = {
                origin,
                destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                } else {
                    console.error('Error al calcular la ruta: ' + status);
                }
            });
        }
    }, [origin, destination]);

    return <div ref={mapRef} style={{ height: '300px', width: '100%', marginTop: '20px' }} />;
};

export default MapWithRoute;
