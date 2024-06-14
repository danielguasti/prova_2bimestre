import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
    return(

        <div className={styles.corpo}>
            <h1>Página Principal</h1>
            <Link href="/recipes">Página de receitas</Link>
        </div>
        
        
    )
}