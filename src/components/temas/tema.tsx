import React from 'react';
import styles from './styles.module.css';
import { Tema } from '../../types';

interface Props{
    tema: Tema;
}

export default function TemaIndividual({tema}:Props){
    return (
        <div className={styles.TemaInd} style={{backgroundColor: `${tema.color}`}}>
            <h3>
                {tema.name}
            </h3>
        </div>
    )
}