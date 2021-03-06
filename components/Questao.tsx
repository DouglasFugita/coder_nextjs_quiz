import QuestaoModel from "../models/questao";
import styles from "../styles/Questao.module.css"
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
    {valor: "A", cor:"#F2C866"}, 
    {valor: "B", cor:"#F266BA"},
    {valor: "C", cor:"#85D4F2"},
    {valor: "D", cor:"#BCE596"}
]


interface QuestaoProps {
    valor: QuestaoModel
    tempoResposta: number
    onResponse: (indice: number) => void
    onTimeOut: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    function renderizarRespostas() {
        return questao.respostas.map((resposta, index) => {
            return (
                <Resposta
                    key={`${questao.id}-${index}`}
                    valor={resposta}
                    indice={index}
                    letra={letras[index].valor}
                    corFundoLetra={letras[index].cor}
                    onResponse={props.onResponse}
                />)
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador key={questao.id} duracao={props.tempoResposta ?? 10} tempoEsgotado={props.onTimeOut} />
            {renderizarRespostas()}
        </div>
    )

}