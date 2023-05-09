import React, { MutableRefObject, useEffect, useRef } from "react";
import efectos from '@/styles/efectos.module.css'
import styles from './styles.module.css'
import useOverFlow from "@/hooks/useOverFlow";
import { Ejes } from "@/types";
import useScrollTo from "@/hooks/useScrollPosition";

interface Props {
    text: string;
    condition: boolean
    children: React.ReactNode;
}

export default function InputBuscador({ text , condition , children }: Props) {
    const [{x , y}] = useOverFlow()

    return (
        <form 
            className={`
            ${condition ? text !== '' 
                ? efectos.transitionTop 
                : efectos.transitionBottom
            : ""} 
            ${y > 200  
                ? styles.positionFixed
                : ""
            } 
            ${styles.formulario}
            `}
        >
            {children}
        </form>
    )
}