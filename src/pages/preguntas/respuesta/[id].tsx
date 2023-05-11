import styles from '@/styles/Preguntas.module.css'
import NavBar from '@/components/navbar'
import Encabezado from '@/components/head'
import { useRouter } from 'next/router';

export default function Respuestas() {
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
                { id }
            </div>
        </>
    )
}
