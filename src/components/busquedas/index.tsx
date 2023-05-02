import { LinkData, Tema } from '@/types';
import styles from './styles.module.css';
import efectos from '../../styles/efectos.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ObtenerTodosTemas } from '@/functions/Temas';
import AllLinks from '@/functions/links/todosLosLinks';

interface Props {
    text: string;
}

export default function Busquedas({ text }: Props) {
    const [todosLosLinks, setTodosLosLinks] = useState<LinkData[]>([])
    const [linksVista, setLinksVista] = useState<LinkData[]>([])
    const [inicio, setInicio] = useState<boolean>(false)

    useEffect(() => {
        obtenerLinks()
    }, [])
    
    useEffect(() => {
        if (text !== "" && !inicio) setInicio(true);
        setLinksVista(filtroLinks(text))
    }, [text])
    
    const obtenerLinks = async () => {
        const response:LinkData[] = await AllLinks()
        setTodosLosLinks(response)
    }

    const filtroLinks = (texto:string):LinkData[] => {
        if(todosLosLinks.length === 0) return [] 
        let linksRetorno:LinkData[] = todosLosLinks.filter(n => n.name && n.name.toLowerCase().includes(texto.toLowerCase()))
        
        if(linksRetorno === undefined) return []
        return linksRetorno
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
                        {n?.name}
                    </Link>
                )
            }
        </div>
    )
}