import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Tema } from '../../types';
import CuadroDeLinks from '../cuadroDeLinks';

interface Props{
    tema: Tema;
}

export default function TemaIndividual({tema}:Props){
    const [vista, setVista] = useState<boolean>(false)

    return (
        <>
            {vista && 
            <CuadroDeLinks 
                tema={tema.name} 
                color={tema.color} 
                links={[tema?.documentacion[0] , tema?.aprender[0]]} 
                vista={vista}
            />}
            <li
                //data-aos="fade-right"
                className={styles.TemaInd} 
                style={{backgroundColor: `${tema.color}`}}
                onClick={e => {e.preventDefault(); setVista(!vista)}}
            >
                <h3>
                    {tema.name}
                </h3>
            </li>
        </>
    )
}