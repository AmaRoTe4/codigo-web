import React from "react";
import styles from "./styles.module.css"

interface Props{
    title: string
}

export default function NavBar({title}:Props){
    return (
        <nav className={styles.bodyNavBar}>
            <h2>
                {title}
            </h2>
        </nav>
    )
}