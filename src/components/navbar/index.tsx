import React from "react";
import styles from "./styles.module.css"

interface Props{
    title: string
}

export default function NavBar({title}:Props){
    return (
        <header className={styles.bodyNavBar}>
            <h2>
                {title}
            </h2>
        </header>
    )
}