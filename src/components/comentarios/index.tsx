import styles from './styles.module.css'

interface Props{
    id: number;
}

export default function Comentarios({id}:Props) {
    return (
        <>
            {id}
        </>
    )
}
