import styles from '../styles/Resultado.module.css'
import { useRouter } from "next/dist/client/router";
import Estatistica from '../components/Estatistica';
import Botao from '../components/Botao';

export default function Resultado() {
    const router = useRouter();
    const total = +router.query.total;
    const acertos = +router.query.acertos;
    const percentual = Math.round(acertos / total * 100);

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{display: 'flex'}}>
                <Estatistica valor={total} texto='Perguntas' />
                <Estatistica valor={acertos} texto='Acertos' corFundo="#9cd2a4"/>
                <Estatistica valor={`${percentual}%`} texto='Percentual' corFundo="#de6a33" />
            </div>
            <Botao href="/" texto="Tentar novamente" />

        </div>
    )
}