import styles from '@/styles/Preguntas.module.css'
import NavBar from '@/components/navbar'
import { useEffect, useRef, useState } from 'react'
import Encabezado from '@/components/head'
import Image from 'next/image'
import Plus from '../../static/svgs/plus-white.svg'

export default function Home() {
    const [textBusqueda, setTextBusqueda] = useState<string>("")
    const inicialState = useRef<boolean>(false);

    useEffect(() => {
        if (textBusqueda !== "" && !inicialState.current) inicialState.current = true;
    }, [textBusqueda])

    return (
        <>
            <Encabezado
                description="Página secundaria de la web, donde podés encontrar un apartado donde podremos ayudarte a solucionar tus problamas dando lugar a tus consultas. Parecido a Stack Overflow."
            />
            <div className={`${styles.containerIndex} `}>
                <NavBar
                    title="Comunidad Web Seven"
                    location='errores'
                />
                <div className={`${styles.containerBody}`}>
                    <main>
                        <h1>Preguntas</h1>
                        <form>
                            <input
                                type="text"
                                placeholder="Pregunta"
                            />
                            <button>
                                <Image
                                    priority={true}
                                    width={100}
                                    src={Plus}
                                    alt="plus"
                                />
                            </button>
                        </form>
                        <ul>
                            <li>
                                <p>Name</p>
                                <article>
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, a cum officia tenetur repudiandae voluptatibus ipsum quam in repellat accusamus quae ducimus praesentium ad esse, eaque animi, accusantium</p>
                                </article>
                            </li>
                        </ul>
                    </main>
                    {/*<span></span>*/}
                </div>
            </div>
        </>
    )
}

