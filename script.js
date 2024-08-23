const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPrincipal = document.querySelector (".caixa-perguntas");
const caixaPrincipal = document.querySelector (".caixa-alternativas");
const caixaPrincipal = document.querySelector (".caixa-resultado");
const caixaPrincipal = document.querySelector (".texto-resultado");

const perguntas = [
    {
     enunciado:"na sua opiniao, como a agricultura sustentavel pode influenciar a disponibilidade e o custo de alimentos no mercado de trabalho atual?"
     alternativas:[
    
    {
    texto:"reduzindo os custos de produção, tornando os alimentos mais asseciveis",
    afirmacao:"reduzir os custos de produção é uma estrategia eficaz para tomar os alimentos mais asseciveis, promovendo uma alimentyação saudavel e economica para todos"
    },
    {
    texto:"aumentando a dependencia de agrotoxicos e fertilizantes sinteticos para maximizar o rendimento",
    afirmacao:"controle de pragas e doenças. Esses produtos ajudam a proteger as plantas contra pragas e doenças, reduzindo perdas e melhorando  a saude das culturas"
    }
    ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}