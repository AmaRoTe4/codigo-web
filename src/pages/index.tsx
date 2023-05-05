import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import efectos from '@/styles/efectos.module.css'
import NavBar from '@/components/navbar'
import Temas from '@/components/temas'
import imagenDesarollador from '/src/static/images/diseno-de-paginas-web.png'
import FoterMain from '@/components/foterMain'
import { useEffect, useState } from 'react'
import Busquedas from '@/components/busquedas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [textBusqueda, setTextBusqueda] = useState<string>("")
  const [inicio , setInicio] = useState<boolean>(false);

  useEffect(() => {
    if(textBusqueda !== "" && !inicio) setInicio(true);
  }, [textBusqueda])

  return (
    <>
      <Head>
        <title>Codigo Web</title>
        <meta name="description" content="Página principal de la web, donde podés encontrar un buscador con toda la información y los principales temas abordados" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.containerIndex} `}>
        <NavBar title="Codigo Web" />
        <main>
          <h1 className={`${inicio && `${textBusqueda !== '' ? efectos.transitionOcultar : efectos.transitionAparecer}`}`}>
            Encuentra en nuestra página los enlaces que necesitas para guiarte en la programación web.
          </h1>
        </main>
        <form className={`${inicio && `${textBusqueda !== '' ? efectos.transitionTop : efectos.transitionBottom}`}`}>
          <input
            autoComplete="off"
            value={textBusqueda}
            type="search"
            id="search"
            name="search"
            onChange={e => { e.preventDefault(); setTextBusqueda(e.target.value) }}
          />
        </form>
        <Busquedas text={textBusqueda} />
        <span className={`${inicio && `${textBusqueda !== '' ? efectos.transitionOcultar : efectos.transitionAparecer}`}`}>
          <Image
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
