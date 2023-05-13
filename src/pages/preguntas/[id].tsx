import styles from '@/styles/Preguntas.module.css'
import NavBar from '@/components/navbar'
import Textarea from '@/components/textTarea'
import Encabezado from '@/components/head'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'
import download from '../../static/svgs/arrow-down-white.svg';
import comment from '../../static/svgs/comment-regular-white.svg';
import FoterMain from '@/components/foterMain';
import Comentarios from '@/components/comentarios';

export default function Preguntas() {
    const [pregunta, setPregunta] = useState<string>(``);
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Encabezado
                description="Página secundaria de la web, donde podés encontrar una pregunta sobre tecnologia web."
            />
            <div className={`${styles.containerPreguntas} `}>
                <NavBar
                    title="Comunidad Web Seven"
                    location='errores'
                />
                <main>
                    <h1>{"Titutlo"}</h1>
                </main>
                <article>
                    <form>
                        <label>{"Name"}</label>
                        <Textarea
                            value={pregunta}
                            setValue={setPregunta}
                        />
                    </form>
                    <div>
                        <button>
                            <Image
                                priority={false}
                                width={30}
                                src={download}
                                alt="download file"
                            />
                        </button>
                        <button>
                            <Image
                                priority={false}
                                width={30}
                                src={comment}
                                alt="comentar"
                            />
                        </button>
                    </div>
                </article>
                {/*<Comentarios 
                    id={Number(id)}
                />*/}
                <FoterMain />
            </div>
        </>
    )
}
