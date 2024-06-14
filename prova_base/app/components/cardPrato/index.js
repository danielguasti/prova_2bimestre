import styles from "./index.module.css"
import Link from "next/link"

const CardPrato = ({ imagem, nome, id }) => {
    const path = `/details/${id}` 

    return (
      <div className={styles.card}>
        <Link href={path}>
            <img width={100} height={100} src={imagem} alt={nome} className={styles.image} />
        </Link>
        <h2 className={styles.title}>{nome}</h2>
      </div>
    );
  };
  
  export default CardPrato;