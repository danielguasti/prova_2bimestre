import styles from "./index.module.css"

export default function Cabecalho() {
    return(
        <div className={styles.header}>
            <h1 className={styles.titulo}>Restaurante UVV</h1>
        </div>
    )
}