import { LinkIndividual } from '@/types';
import styles from './styles.module.css';
import efectos from '../../styles/efectos.module.css';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Filtro } from '@/functions/filtroDeBusqueda';
import { todosLosLinksIndividual } from '@/functions/links/todosLosLinks';
import debounce from 'just-debounce-it';

interface Props {
    text: string;
}

export default function Busquedas({ text }: Props) {
    const [todosLosLinks, setTodosLosLinks] = useState<LinkIndividual[]>([])
    const [linksVista, setLinksVista] = useState<LinkIndividual[]>([])
    const inicialState = useRef<boolean>(false);

    const debouceLinksVista = useCallback(
        debounce((busqueda:string) => {
            setLinksVista(Filtro(todosLosLinks, busqueda)) 
        }, 300)
    , [])

    useEffect(() => {
        obtenerLinks()
    }, [])

    useEffect(() => {
        if (!inicialState.current) inicialState.current = true;
        debouceLinksVista(text);
    }, [text])

    const obtenerLinks = async () => {
        const response: LinkIndividual[] = await todosLosLinksIndividual();
        setTodosLosLinks(response)
    }

    if (text === "") return <></>
    return (
        <div
            className={`
                ${inicialState.current && `${text === ''
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