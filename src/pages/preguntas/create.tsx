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
                
                {/*<textarea
                    style={{
                        border: 'none',
                        borderRadius: '0',
                        background: 'white',
                        resize: 'none',
                        width: '100%',
                        height: '200px',
                        padding: '10px',
                        fontSize: '14px',
                        color: 'black',
                    }}
                />*/}

            </div>
        </>
    )
}
