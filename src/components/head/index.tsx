import React from "react";
import styles from "./styles.module.css"
import SvgError from "../../static/svgs/error.svg"
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";


interface Props{
    title?: string
    description?: string
}

export default function Encabezado({title , description}:Props){
    return (
        <Head>
            <title>{title ? title : "Codigo Web"}</title>
            <meta name="description" content={description ? description :  ""} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}