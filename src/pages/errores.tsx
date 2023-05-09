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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [textBusqueda, setTextBusqueda] = useState<string>("")
  const inicialState = useRef<boolean>(false);

  useEffect(() => {
    if(textBusqueda !== "" && !inicialState.current) inicialState.current = true;
  }, [textBusqueda])

  return (
    <>
      <Encabezado 
        description="Página secundaria de la web, donde podés encontrar un apartado donde podremos ayudarte a solucionar tus problamas dandote lugares donde buscar la solucion a tus problemas y donde tambien hay un foro de la comunidad"
      />
      <div className={`${styles.containerIndex} `}>
        <NavBar 
            title="Codigo Web" 
            location='errores' 
        />
        
      </div>
    </>
  )
}
