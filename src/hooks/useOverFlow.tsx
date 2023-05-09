import { Ejes } from "@/types";
import React, { useEffect, useState } from "react";

export default function useOverFlow():Ejes[] {
    const [ejes, setEjes] = useState<Ejes>({
        x: 0,
        y: 0,
    })
    
    useEffect(() => {
        const handleScroll = () => {
            setEjes({ x: window.scrollX, y: window.scrollY });
        };
        

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return [ejes]
}