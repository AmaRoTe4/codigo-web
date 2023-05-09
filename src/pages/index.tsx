import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import efectos from '@/styles/efectos.module.css'
import NavBar from '@/components/navbar'
import Temas from '@/components/temas'
import imagenDesarollador from '/src/static/images/diseno-de-paginas-web.png'
import FoterMain from '@/components/foterMain'
import { useEffect, useRef, useState } from 'react'
import Busquedas from '@/components/busquedas'
import Encabezado from '@/components/head'
import InputBuscador from '@/components/inputBusqueda'
import useScrollTo from '@/hooks/useScrollPosition'

export default function Home() {
  const [textBusqueda, setTextBusqueda] = useState<string>("")
  const inicialState = useRef<boolean>(false);

  useEffect(() => {
    if(!inicialState.current) inicialState.current = true;
  }, [textBusqueda])

  useScrollTo(0 , textBusqueda !== "")

  return (
    <>
      <Encabezado 
        description="Página principal de la web, donde podés encontrar un buscador con toda la información y los principales temas abordados"
      />
      <div className={`${styles.containerIndex} `}>
        <NavBar title="Codigo Web" />
        <main>
          <h1 className={`${inicialState.current && `${textBusqueda !== '' ? efectos.transitionOcultar : efectos.transitionAparecer}`}`}>
            Encuentra en nuestra página los enlaces que necesitas para guiarte en la programación web.
          </h1>
        </main>
        <InputBuscador 
          text={textBusqueda}
          condition={inicialState.current}
        >
          <input
                autoComplete="off"
                value={textBusqueda}
                type="search"
                id="search"
                name="search"
                onChange={e => { e.preventDefault(); setTextBusqueda(e.target.value)}}
            />
        </InputBuscador>
        <Busquedas text={textBusqueda} />
        <span className={`${inicialState.current && `${textBusqueda !== '' ? efectos.transitionOcultar : efectos.transitionAparecer}`}`}>
          <Image
            priority={true}
            width={350}
            src={imagenDesarollador}
            alt="diseno-de-paginas-web"
          />
        </span>
        <Temas />
        <FoterMain />
      </div>
    </>
  )
}
