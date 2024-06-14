import styles from "./index.module.css"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <p className={styles.p}>&copy; {new Date().getFullYear()} Restaurante UVV. Todos os direitos reservados.</p>
        </div>
    )
}