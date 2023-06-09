import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { Tema } from "../../types"
import TemaIndividual from "./tema"
import { ObtenerTodosTemas } from "@/functions/Temas"

export default function Temas(){
    const [temas , setTemas] = useState<Tema[]>([])

    useEffect(() => {
        ObtenerTemas()
    },[])

    const ObtenerTemas = async () => {
        const Temas:Tema[] = await ObtenerTodosTemas()
        setTemas(Temas)
    }

    return (
        <section className={styles.containerTemas}>
            <h2>Temas</h2>
            <ul>
            {
                temas.map((n , i) => 
                    <TemaIndividual key={i} tema={n} />
                )
            }
            </ul>            
        </section>
    )
}