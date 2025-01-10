import { useEffect, useState } from "react"
import { WINDOW_HEIGHT_RATIO, WINDOW_WIDTH_RATIO } from "../constants/Windows";

const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        width: dimensions.width * WINDOW_WIDTH_RATIO,
        height: dimensions.height * WINDOW_HEIGHT_RATIO,
    };
};

export default useWindowDimensions;
