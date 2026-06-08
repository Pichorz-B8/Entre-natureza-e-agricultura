// ============================================
// BOTÃO BIOESTIMULANTES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnBioestimulantes');
    if (btn) {
        btn.addEventListener('click', function() {
            alert(
                "🌱 BIOESTIMULANTES E DEFENSIVOS ALTERNATIVOS\n\n" +
                "De acordo com a cartilha 'Defensivos Alternativos' (Pesagro-Rio/CREA-RJ):\n\n" +
                "✔️ Bioestimulantes aumentam a 'energia vital' das plantas pela aceleração da fotossíntese.\n" +
                "✔️ Caldas caseiras como Bordalesa, Sulfocálcica e Viçosa controlam fungos sem toxicidade.\n" +
                "✔️ Extratos de plantas (alho, nim, fumo, arruda) repelem pragas naturalmente.\n" +
                "✔️ Agentes de biocontrole (Bacillus thuringiensis, fungos) atacam pragas específicas.\n\n" +
                "👉 Pratique a transição agroecológica: saúde do solo, policultivo e defensivos de baixo impacto!"
            );
        });
    }
    
    console.log("🌿 Página carregada | Agrotóxicos no Paraná - 16% do consumo nacional");
});

// ============================================
// HQ INTERATIVA - 8 CENAS EXPANDIDAS
// ============================================
const hqData = [
    {
        title: "🌽 Cena 1: O Cenário no Paraná",
        text: "✅ Vô Bento: 'Sabia que o Paraná é o segundo maior consumidor de agrotóxicos do Brasil? São 16% de todo o veneno usado no país!'",
        cite: "Embrapa - Consumo de agrotóxicos no Brasil",
        bgColor: "#d4edda",
        icon: "🌽"
    },
    {
        title: "📈 Cena 2: O Crescimento Assustador",
        text: "✅ 'O consumo de ingredientes ativos subiu 700% nos últimos 40 anos! Enquanto a área plantada cresceu só 78%... Isso é preocupante!'",
        cite: "Embrapa - Dados históricos",
        bgColor: "#fff3cd",
        icon: "📈"
    },
    {
        title: "💧 Cena 3: O Impacto na Água",
        text: "✅ 'Olha os peixes no riacho... O veneno escorre pela chuva e se acumula na cadeia alimentar. Isso se chama BIOMAGNIFICAÇÃO!'",
        cite: "Belchior et al. - Impactos de agrotóxicos",
        bgColor: "#cce5ff",
        icon: "💧"
    },
    {
        title: "👶 Cena 4: Saúde em Risco",
        text: "✅ 'Estudos já encontraram agrotóxicos no sangue, na urina e até no LEITE MATERNO! Crianças são as mais vulneráveis.'",
        cite: "UFMG - Impactos dos agrotóxicos na saúde humana",
        bgColor: "#f8d7da",
        icon: "👶"
    },
    {
        title: "🐝 Cena 5: Desequilíbrio Ecológico",
        text: "✅ 'As abelhas estão morrendo! Sem polinizadores, perdemos 70% dos alimentos que chegam à nossa mesa.'",
        cite: "Embrapa - Polinizadores e agrotóxicos",
        bgColor: "#ffe5b4",
        icon: "🐝"
    },
    {
        title: "🌿 Cena 6: Bioestimulantes - A Solução",
        text: "✅ 'Podemos usar BIOESTIMULANTES! Eles aumentam a energia vital da planta pela fotossíntese, tornando-as mais fortes naturalmente!'",
        cite: "CiOrgânicos - Bioestimulantes como alternativa",
        bgColor: "#d1ecf1",
        icon: "🌿"
    },
    {
        title: "🧪 Cena 7: Defensivos Alternativos",
        text: "✅ 'Esta é a CALDA BORDALESA! Um fungicida natural de baixa toxicidade. Protege a lavoura e a nossa saúde!'",
        cite: "Cartilha CREA-RJ / Pesagro-Rio",
        bgColor: "#e2e3e5",
        icon: "🧪"
    },
    {
        title: "🌎 Cena 8: O Futuro que Queremos",
        text: "✅ 'A transição agroecológica é possível! Com educação, fiscalização e políticas públicas, podemos produzir alimentos SADIOS sem destruir o planeta!'",
        cite: "Secretaria da Saúde do Paraná - Políticas públicas",
        bgColor: "#d4edda",
        icon: "🌎"
    }
];

let currentComicIndex = 0;
const comicBg = document.getElementById('comic-bg');
const dialogueText = document.getElementById('dialogue-text');
const sourceCite = document.getElementById('source-cite');
const panelCounter = document.getElementById('panel-counter');
const prevComicBtn = document.getElementById('prevComicBtn');
const nextComicBtn = document.getElementById('nextComicBtn');

function updateComic() {
    const data = hqData[currentComicIndex];
    
    // Atualizar o balão de diálogo com o ícone
    dialogueText.innerHTML = data.text;
    sourceCite.innerText = data.cite;
    
    // Atualizar fundo colorido
    const comicScene = document.querySelector('.comic-scene');
    comicScene.style.backgroundColor = data.bgColor;
    comicScene.style.minHeight = "400px";
    comicScene.style.position = "relative";
    
    // Atualizar contador
    panelCounter.innerText = `${currentComicIndex + 1}/${hqData.length}`;
    
    // Gerenciar botões
    if (prevComicBtn) prevComicBtn.disabled = currentComicIndex === 0;
    if (nextComicBtn) nextComicBtn.disabled = currentComicIndex === hqData.length - 1;
}

function changeComicPanel(step) {
    const newIndex = currentComicIndex + step;
    if (newIndex >= 0 && newIndex < hqData.length) {
        currentComicIndex = newIndex;
        updateComic();
    }
}

// Event listeners da HQ
if (prevComicBtn) prevComicBtn.addEventListener('click', () => changeComicPanel(-1));
if (nextComicBtn) nextComicBtn.addEventListener('click', () => changeComicPanel(1));

// Inicializar HQ
updateComic();

// ============================================
// QUIZ EXPANDIDO - 10 PERGUNTAS
// ============================================
const quizQuestions = [
    {
        question: "Qual a porcentagem do consumo nacional de agrotóxicos atribuída ao estado do Paraná?",
        answers: [
            { text: "10%", correct: false },
            { text: "16%", correct: true },
            { text: "25%", correct: false },
            { text: "38%", correct: false }
        ]
    },
    {
        question: "Nos últimos 40 anos, qual foi o aumento no consumo de ingredientes ativos de agrotóxicos no Brasil?",
        answers: [
            { text: "78%", correct: false },
            { text: "300%", correct: false },
            { text: "500%", correct: false },
            { text: "700%", correct: true }
        ]
    },
    {
        question: "O que caracteriza uma 'intoxicação aguda' segundo as autoridades de saúde?",
        answers: [
            { text: "Danos que surgem após meses ou anos", correct: false },
            { text: "Contato único ou múltiplo em um período de 24 horas", correct: true },
            { text: "Sintomas vagos que aparecem após semanas", correct: false },
            { text: "Exposição crônica de baixa dosagem", correct: false }
        ]
    },
    {
        question: "Qual a função dos bioestimulantes na agricultura ecológica?",
        answers: [
            { text: "Matar pragas por contato químico", correct: false },
            { text: "Servir como fertilizante sintético pesado", correct: false },
            { text: "Acelerar a fotossíntese e aumentar a energia vital da planta", correct: true },
            { text: "Substituir a necessidade de irrigação", correct: false }
        ]
    },
    {
        question: "De acordo com a cartilha 'Defensivos Alternativos', qual destes NÃO é um exemplo de defensivo alternativo?",
        answers: [
            { text: "Caldas Bordalesa e Sulfocálcica", correct: false },
            { text: "Extrato de alho e nim", correct: false },
            { text: "Glifosato e 2,4-D", correct: true },
            { text: "Agentes de biocontrole (Bacillus thuringiensis)", correct: false }
        ]
    },
    {
        question: "O que é biomagnificação?",
        answers: [
            { text: "Processo de decomposição de agrotóxicos no solo", correct: false },
            { text: "Acúmulo crescente de toxinas ao longo da cadeia alimentar", correct: true },
            { text: "Técnica de aplicação de defensivos alternativos", correct: false },
            { text: "Método de cultivo orgânico", correct: false }
        ]
    },
    {
        question: "Qual das seguintes alternativas é um exemplo de defensivo alternativo de baixa toxicidade?",
        answers: [
            { text: "Parationa", correct: false },
            { text: "Calda Sulfocálcica", correct: true },
            { text: "Metamidofós", correct: false },
            { text: "Aldicarb", correct: false }
        ]
    },
    {
        question: "Onde já foram encontrados resíduos de agrotóxicos segundo estudos científicos?",
        answers: [
            { text: "Apenas no solo e na água", correct: false },
            { text: "No sangue, urina e leite materno", correct: true },
            { text: "Somente em alimentos industrializados", correct: false },
            { text: "Apenas em regiões urbanas", correct: false }
        ]
    },
    {
        question: "Qual o principal problema do uso de transgênicos em relação aos agrotóxicos?",
        answers: [
            { text: "Eles não precisam de agrotóxicos", correct: false },
            { text: "Criam um 'círculo vicioso' com pragas mais resistentes", correct: true },
            { text: "São totalmente isentos de riscos", correct: false },
            { text: "Aumentam a biodiversidade", correct: false }
        ]
    },
    {
        question: "Qual destas é uma política pública importante para mitigar os danos dos agrotóxicos?",
        answers: [
            { text: "Aumentar a importação de agrotóxicos", correct: false },
            { text: "Notificação de intoxicações e fiscalização rígida", correct: true },
            { text: "Reduzir a área de proteção ambiental", correct: false },
            { text: "Isentar produtores de responsabilidade", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let userScore = 0;
let userAnswers = [];

const questionTextEl = document.getElementById('question-text');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const controlsDiv = document.getElementById('controls');
const scoreTextEl = document.getElementById('score-text');
const restartButton = document.getElementById('restart-quiz');
const questionCounter = document.getElementById('question-counter');
const resultDetails = document.getElementById('result-details');
const resultEmoji = document.getElementById('result-emoji');

function startQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    userAnswers = [];
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    controlsDiv.classList.remove('hide');
    if (nextButton) nextButton.classList.add('hide');
    nextButton.innerText = "Próxima Pergunta →";
    showQuestion();
}

function showQuestion() {
    resetState();
    
    if (!quizQuestions[currentQuestionIndex]) {
        showResults();
        return;
    }
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionTextEl.innerText = currentQuestion.question;