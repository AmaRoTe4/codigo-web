import { LinkData } from '@/types';
import styles from './styles.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
    links: LinkData[]
    color: string;
    tema: string;
    vista: boolean;
}

export default function CuadroDeLinks({ links, color, tema, vista }: Props) {
    const [vistaLocal, setVistaLocal] = useState<boolean>(vista)

    if (!vistaLocal) {
        return (
            <></>
        )
    }

    return (
        <>
            <span className={styles.backLink} onClick={e => { e.preventDefault(); setVistaLocal(!vistaLocal) }} />
            <div 
                className={`${styles.contentLinks}`} 
                style={{ backgroundColor: color }}
            >
                <h4>Links {tema}</h4>
                {links.length > 0 &&
                    <Link href={links[0].link} target="_blank">
                        Documentación Recomendada
                    </Link>
                }
                {links.length > 1 &&
                    <Link href="http://" target="_blank">
                        Aprender
                    </Link>
                }
            </div>
        </>
    )
}