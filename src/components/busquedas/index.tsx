import { LinkIndividual } from '@/types';
import styles from './styles.module.css';
import efectos from '../../styles/efectos.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Filtro } from '@/functions/filtroDeBusqueda';
import { todosLosLinksIndividual } from '@/functions/links/todosLosLinks';

interface Props {
    text: string;
}

export default function Busquedas({ text }: Props) {
    const [todosLosLinks, setTodosLosLinks] = useState<LinkIndividual[]>([])
    const [linksVista, setLinksVista] = useState<LinkIndividual[]>([])
    const [inicio, setInicio] = useState<boolean>(false)

    useEffect(() => {
        obtenerLinks()
    }, [])
    
    useEffect(() => {
        if (text !== "" && !inicio) setInicio(true);
        setLinksVista(Filtro(todosLosLinks , text))
    }, [text])
    
    const obtenerLinks = async () => {
        const response:LinkIndividual[] = await todosLosLinksIndividual();
        setTodosLosLinks(response)
    }

    if(text === "") return <></>
    return (
        <div
            className={`
                ${inicio && `${text === ''
                    ? `${efectos.transitionOcultar, styles.desaparecerHeight}`
                    : `${efectos.transitionAparecer, styles.aparecerHeight}`
                }`} 
            ${styles.bodyBusquedas}`
            }>
            {
                linksVista.map((n, i) =>
                    <Link 
                        key={i} 
                        href={n.link}
                        target="_blank"
                    >
                        {n?.descripcion}
                    </Link>
                )
            }
        </div>
    )
}