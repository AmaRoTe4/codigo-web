import NavBar from '@/components/navbar'
import Encabezado from '@/components/head'
import styles from '@/styles/Preguntas.module.css'

export default function Create() {
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
                
                

            </div>
        </>
    )
}
