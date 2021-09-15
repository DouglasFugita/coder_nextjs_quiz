import QuestaoModel from "../../models/questao";
import RespostaModel from "../../models/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a Doenca de Chagas?", [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]), 
    new QuestaoModel(202, "Qual fruto eh conhecido no Norte e no Nordeste como 'jerimum'?", [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Mandioca'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abobora'),
    ]),     
    new QuestaoModel(203, "Qual eh o coletivo de caes?", [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),     
    new QuestaoModel(204, "Qual eh o triangulo que tem todos os lados iguais?", [
        RespostaModel.errada('Equilatero'),
        RespostaModel.errada('Isoceles'),
        RespostaModel.errada('Trapezio'),
        RespostaModel.certa('Escaleno'),
    ]),             
]

export default questoes;