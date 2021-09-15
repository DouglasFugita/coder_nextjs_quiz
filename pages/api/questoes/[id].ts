import questoes from  '../bancoDeQuestoes'

export default function questoesPorId (req, res) {
    const id = +req.query.id
    const questao = questoes.find(q => q.id === id).embaralharRespostas()
    const questaoObj = questao.toObject()

    if (!questao){
        res.status(404).json({erro: 'Questão não encontrada'})
    } else {
        res.status(200).json(questaoObj);
    }
}