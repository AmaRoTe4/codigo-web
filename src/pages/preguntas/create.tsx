import NavBar from '@/components/navbar'
import Encabezado from '@/components/head'
import styles from '@/styles/Preguntas.module.css'
import { useState } from 'react'
import TextTarea from '@/components/textTarea'
import FoterMain from '@/components/foterMain'

export default function Create() {
    const [text, setText] = useState<string>("")
    return (
        <>
            <Encabezado
                description=""
            />
            <div className={`${styles.containerIndex} `}>
                <NavBar
                    title="Comunidad Web Seven"
                    location='errores'
                />
                <div className={`${styles.containerCreate}`}>
                    <main>
                        <h1>Nueva Pregunta</h1>
                    </main>
                    <form>
                        <input type="text" placeholder="Nombre de usuario" />
                        <input type="text" placeholder="Titulo" />
                        <span>
                            <TextTarea
                                value={text}
                                setValue={setText}
                                placeholder={"Pregunta"}
                            />
                        </span>
                        <div>
                            <input type="file" id="fileInput" className={`${styles.customFileInput}`} />
                            <label htmlFor="fileInput" className={`${styles.customFileLabel}`}>Seleccionar archivo</label>
                                <button>
                                    Subir
                                </button>
                        </div>
                    </form>
                </div>
                <FoterMain />
            </div>
        </>
    )
}
