import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useState } from 'react'
import Questionario from '../components/Questionario'
import QuestaoModel from '../models/questao'


const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const [questoesId, setQuestoesId] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  const router = useRouter()

  async function carregarQuestoesId() {
    const response = await fetch(`${BASE_URL}/questionario`)
    const ids = await response.json()
    setQuestoesId(ids)
  }

  async function carregarQuestao(idQuestao: number) {
    const response = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const questao = await response.json()
    setQuestao(QuestaoModel.fromObject(questao))
  }

  useEffect(() => {
    carregarQuestoesId()
  }, [])

  useEffect(() => {
    questoesId.length > 0 && carregarQuestao(questoesId[0])
  }, [questoesId])

  function questaoRespondida(questao: QuestaoModel) {
    setQuestao(questao)
    if (questao.acertou) {
      setRespostasCertas(respostasCertas + 1)
    }
  }

  function obterProximoId() {
    if (questao) {
      const indexAtual = questoesId.indexOf(questao.id)
      if (indexAtual < questoesId.length - 1) {
        return questoesId[indexAtual + 1]
      }
    }
    return undefined
  }

  function irParaProximo() {
    const proximoId = obterProximoId()
    if (proximoId) {
      carregarQuestao(proximoId)
    } else {
      irFinalizar()
    }
  }

  function irFinalizar() {
    router.push({
      pathname: '/resultado',
      query: {
        total: questoesId.length,
        acertos: respostasCertas
      }
    })
  }

  return (
    questao ? (
      <Questionario questao={questao} ultima={obterProximoId() === undefined} questaoRespondida={questaoRespondida} irParaProxima={irParaProximo} />
      ) : (
       false
      )
    

  )
}
