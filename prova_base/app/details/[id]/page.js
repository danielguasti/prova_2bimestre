import receitas from "../../../recipes.json"
import styles from "./page.module.css"

export default function Details({ params }) {
    const prato = receitas[params.id - 1]
    return(
      <div className={styles.container}>
      <h1>{prato.name}</h1>
      <img className={styles.img} src={prato.image} alt={prato.name} />
      <h2>Ingredientes:</h2>
      <ul className={styles.ul}>
        {prato.ingredients.map((ingrediente, index) => (
          <li className={styles.li} key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Instruções de Preparo:</h2>
      <p>{prato.instructions}</p>
      </div>
    )
  }