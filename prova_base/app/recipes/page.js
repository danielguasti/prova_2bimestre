import receitas from "../../recipes.json"
import CardPrato from "../components/cardPrato";
import styles from "./page.module.css"



export default function Recipes() {
    
    return(
        <div className={styles.corpoMaior}>
            <h1>Página de Receitas</h1>
            <div className={styles.corpo}>
            {receitas.map(receita => {
                return(
                <CardPrato key={receita.id} imagem={receita.image} nome={receita.name} id={receita.id} />
                );
            })}
            </div>
            
        </div>
    )
}