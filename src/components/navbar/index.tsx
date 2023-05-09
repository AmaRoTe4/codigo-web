import React, { useRef } from "react";
import styles from "./styles.module.css"
import SvgError from "../../static/svgs/error-white.svg"
import SvgHome from "../../static/svgs/house-white.svg"
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    title: string,
    location?: string
}

export default function NavBar({ title , location }: Props) {
    return (
        <header className={styles.bodyNavBar}>
            <span />
            <h2>
                {title}
            </h2>
            <span>
                {/*<Link href={location === "errores" ? '/' : '/errores'}>
                    <Image
                        priority={true}
                        width={30}
                        src={location === "errores" ? SvgHome : SvgError}
                        alt="Solucion De Errores"
                    />
                </Link>*/}
            </span>
        </header>
    )
}