import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { Tema } from "../../types"
import TemaIndividual from "./tema"

export default function Temas(){
    const [temas , setTemas] = useState<Tema[]>([])

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setTemas(data)
                console.log(data)
            });
    },[])

    return (
        <div className={styles.containerTemas}>
            <h2>Temas</h2>
            
            {
                temas.map((n , i) => 
                    <TemaIndividual key={i} tema={n} />
                )
            }
        </div>
    )
}