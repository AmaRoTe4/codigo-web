import styles from '@/styles/Preguntas.module.css'
import NavBar from '@/components/navbar'
import Encabezado from '@/components/head'
import { useRouter } from 'next/router';
import FoterMain from '@/components/foterMain';
import TextTarea from '@/components/textTarea';
import { useState } from 'react';

export default function Respuestas() {
    const [text, setText] = useState<string>("")
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Encabezado
                description="Página secundaria de la web, donde podés encontrar una pregunta sobre tecnologia web."
            />
            <div className={`${styles.containerIndex} `}>
                <NavBar
                    title="Comunidad Web Seven"
                    location='errores'
                />
                <div className={`${styles.containerResponder}`}>
                    <main>
                        <h1>Respuesta Pregunta N°{id}</h1>
                    </main>
                    <form>
                        <input type="text" placeholder="Nombre de usuario" />
                        <span>
                            <TextTarea
                                value={text}
                                setValue={setText}
                                placeholder={"Respuesta"}
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
