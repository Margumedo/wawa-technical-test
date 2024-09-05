import { useEffect, useState } from 'react';

const useLoadScript = (src: string) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = () => setLoaded(true);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [src]);

    return loaded;
};

export default useLoadScript;
