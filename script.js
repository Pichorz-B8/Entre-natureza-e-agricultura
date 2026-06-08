// ============================================
// BOTÃO BIOESTIMULANTES (funcionalidade existente)
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
    
    console.log("🌿 Página carregada | Dados sobre agrotóxicos no Paraná - 16% do consumo nacional");
});

// ============================================
// QUIZ COMPLETO
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
    }
];

// Variáveis do quiz
let currentQuestionIndex = 0;
let userScore = 0;

// Elementos DOM do quiz
const questionTextEl = document.getElementById('question-text');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const controlsDiv = document.getElementById('controls');
const scoreTextEl = document.getElementById('score-text');
const restartButton = document.getElementById('restart-quiz');

// Função para iniciar o quiz
function startQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    controlsDiv.classList.remove('hide');
    if (nextButton) nextButton.classList.add('hide');
    showQuestion();
}

// Função para exibir a pergunta atual
function showQuestion() {
    resetState();
    
    if (!quizQuestions[currentQuestionIndex]) {
        showResults();
        return;
    }
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionTextEl.innerText = currentQuestion.question;
    
    // Embaralhar as respostas para não ficar sempre na mesma ordem
    const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
    
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        if (answer.correct) button.dataset.correct = "true";
        button.addEventListener('click', selectAnswer);
        answerButtonsContainer.appendChild(button);
    });
}

// Função para limpar os botões de resposta
function resetState() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

// Função chamada ao selecionar uma resposta
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        userScore++;
    } else {
        selectedButton.classList.add('wrong');
    }
    
    // Desabilitar todos os botões e mostrar as respostas corretas
    Array.from(answerButtonsContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    
    // Mostrar próximo botão se ainda houver perguntas
    if (currentQuestionIndex + 1 < quizQuestions.length) {
        nextButton.classList.remove('hide');
    } else {
        // Se for a última pergunta, mostrar resultado
        nextButton.classList.remove('hide');
        nextButton.innerText = "Ver Resultado →";
    }
}

// Função para mostrar os resultados finais
function showResults() {
    questionContainer.classList.add('hide');
    controlsDiv.classList.add('hide');
    resultContainer.classList.remove('hide');
    
    const percentage = (userScore / quizQuestions.length) * 100;
    let performanceMessage = "";
    
    if (percentage === 100) {
        performanceMessage = "🎉 Excelente! Você domina o assunto sobre agrotóxicos e sustentabilidade!";
    } else if (percentage >= 60) {
        performanceMessage = "👍 Bom trabalho! Continue se informando sobre práticas agroecológicas.";
    } else {
        performanceMessage = "📚 Que tal revisar o conteúdo da página? O conhecimento é o primeiro passo para a mudança!";
    }
    
    scoreTextEl.innerHTML = `
        <span style="font-size: 2rem; display: block; margin-bottom: 10px;">${userScore}/${quizQuestions.length}</span>
        <span style="font-size: 1rem;">${performanceMessage}</span>
    `;
}

// Evento do botão Próximo
if (nextButton) {
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex + 1 < quizQuestions.length) {
            currentQuestionIndex++;
            showQuestion();
            nextButton.classList.add('hide');
            nextButton.innerText = "Próxima Pergunta →";
        } else {
            showResults();
        }
    });
}

// Evento do botão Reiniciar
if (restartButton) {
    restartButton.addEventListener('click', () => {
        startQuiz();
    });
}

// Iniciar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
});