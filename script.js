// ============================================
// INICIALIZAÇÃO SEGURA - Aguarda DOM carregar
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🌿 Página carregada | Agrotóxicos no Paraná - 16% do consumo nacional");
    
    // ============================================
    // BOTÃO BIOESTIMULANTES
    // ============================================
    const btnBioestimulantes = document.getElementById('btnBioestimulantes');
    if (btnBioestimulantes) {
        btnBioestimulantes.addEventListener('click', function() {
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
    } else {
        console.warn("⚠️ Botão 'btnBioestimulantes' não encontrado");
    }
    
    // ============================================
    // Inicializar HQ e Quiz (funções definidas abaixo)
    // ============================================
    initHQ();
    initQuiz();
});

// ============================================
// HQ INTERATIVA - 8 CENAS
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

function initHQ() {
    // Verificar se os elementos da HQ existem
    const dialogueText = document.getElementById('dialogue-text');
    const sourceCite = document.getElementById('source-cite');
    const panelCounter = document.getElementById('panel-counter');
    const prevComicBtn = document.getElementById('prevComicBtn');
    const nextComicBtn = document.getElementById('nextComicBtn');
    const comicScene = document.querySelector('.comic-scene');
    
    // Verificar se todos os elementos existem
    if (!comicScene || !dialogueText || !sourceCite || !panelCounter) {
        console.warn("⚠️ Elementos da HQ não encontrados. Verifique se o HTML contém a seção da HQ.");
        return;
    }
    
    function updateComic() {
        const data = hqData[currentComicIndex];
        
        // Atualizar o texto do diálogo e fonte
        dialogueText.innerHTML = data.text;
        sourceCite.innerText = data.cite;
        
        // Atualizar fundo colorido diretamente
        comicScene.style.backgroundColor = data.bgColor;
        comicScene.style.minHeight = "400px";
        comicScene.style.position = "relative";
        
        // Atualizar contador
        panelCounter.innerText = `${currentComicIndex + 1}/${hqData.length}`;
        
        // Gerenciar botões (verificar se existem antes de usar)
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
    
    // Adicionar event listeners (verificar se os botões existem)
    if (prevComicBtn) {
        prevComicBtn.addEventListener('click', () => changeComicPanel(-1));
    }
    if (nextComicBtn) {
        nextComicBtn.addEventListener('click', () => changeComicPanel(1));
    }
    
    // Inicializar primeira cena
    updateComic();
    console.log("✅ HQ inicializada com sucesso!");
}

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

// Variáveis do quiz
let currentQuestionIndex = 0;
let userScore = 0;
let userAnswers = [];
let quizInitialized = false;

function initQuiz() {
    // Verificar se os elementos do quiz existem
    const questionTextEl = document.getElementById('question-text');
    const answerButtonsContainer = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const restartButton = document.getElementById('restart-quiz');
    
    if (!questionTextEl || !answerButtonsContainer) {
        console.warn("⚠️ Elementos do quiz não encontrados. Verifique se o HTML contém a seção do quiz.");
        return;
    }
    
    // Só inicializar uma vez
    if (quizInitialized) return;
    quizInitialized = true;
    
    function resetQuizState() {
        while (answerButtonsContainer.firstChild) {
            answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
        }
    }
    
    function showQuestion() {
        resetQuizState();
        
        if (!quizQuestions[currentQuestionIndex]) {
            showResults();
            return;
        }
        
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionTextEl.innerText = currentQuestion.question;
        
        // Atualizar contador da pergunta
        const questionCounter = document.getElementById('question-counter');
        if (questionCounter) {
            questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
        }
        
        // Embaralhar respostas
        const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
        
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            if (answer.correct) button.dataset.correct = "true";
            button.addEventListener('click', () => selectAnswer(button, answer.correct));
            answerButtonsContainer.appendChild(button);
        });
    }
    
    function selectAnswer(selectedButton, isCorrect) {
        if (isCorrect) {
            selectedButton.classList.add('correct');
            userScore++;
            userAnswers.push({ correct: true });
        } else {
            selectedButton.classList.add('wrong');
            userAnswers.push({ correct: false });
        }
        
        // Desabilitar todos os botões e mostrar resposta correta
        Array.from(answerButtonsContainer.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        
        // Mostrar próximo botão
        if (nextButton) {
            nextButton.classList.remove('hide');
            if (currentQuestionIndex + 1 >= quizQuestions.length) {
                nextButton.innerText = "Ver Resultado →";
            }
        }
    }
    
    function showResults() {
        const questionContainer = document.getElementById('question-container');
        const controlsDiv = document.getElementById('controls');
        const resultContainer = document.getElementById('result-container');
        const scoreTextEl = document.getElementById('score-text');
        const resultDetails = document.getElementById('result-details');
        const resultEmoji = document.getElementById('result-emoji');
        
        if (questionContainer) questionContainer.classList.add('hide');
        if (controlsDiv) controlsDiv.classList.add('hide');
        if (resultContainer) resultContainer.classList.remove('hide');
        
        const percentage = (userScore / quizQuestions.length) * 100;
        let performanceMessage = "";
        let emoji = "";
        
        if (percentage === 100) {
            performanceMessage = "Excelente! Você domina completamente o assunto sobre agrotóxicos e sustentabilidade!";
            emoji = "🏆🌿";
        } else if (percentage >= 70) {
            performanceMessage = "Muito bom! Você tem um ótimo conhecimento. Continue se informando!";
            emoji = "👍📚";
        } else if (percentage >= 50) {
            performanceMessage = "Bom trabalho! Que tal revisar o conteúdo da página para ir além?";
            emoji = "🌱📖";
        } else {
            performanceMessage = "Que tal dar mais uma olhada no conteúdo? O conhecimento é o primeiro passo para a mudança!";
            emoji = "💚🌍";
        }
        
        if (resultEmoji) resultEmoji.innerText = emoji;
        if (scoreTextEl) {
            scoreTextEl.innerHTML = `
                <span style="font-size: 2.5rem; display: block; margin-bottom: 10px;">${userScore}/${quizQuestions.length}</span>
                <span style="font-size: 1rem;">${performanceMessage}</span>
            `;
        }
        if (resultDetails) {
            resultDetails.innerHTML = `
                <p>✅ Você acertou ${userScore} de ${quizQuestions.length} perguntas.</p>
                <p>💡 Cada erro é uma oportunidade de aprender mais sobre práticas sustentáveis!</p>
            `;
        }
    }
    
    function nextQuestion() {
        if (currentQuestionIndex + 1 < quizQuestions.length) {
            currentQuestionIndex++;
            showQuestion();
            if (nextButton) nextButton.classList.add('hide');
            nextButton.innerText = "Próxima Pergunta →";
        } else {
            showResults();
        }
    }
    
    function restartQuiz() {
        currentQuestionIndex = 0;
        userScore = 0;
        userAnswers = [];
        
        const resultContainer = document.getElementById('result-container');
        const questionContainer = document.getElementById('question-container');
        const controlsDiv = document.getElementById('controls');
        
        if (resultContainer) resultContainer.classList.add('hide');
        if (questionContainer) questionContainer.classList.remove('hide');
        if (controlsDiv) controlsDiv.classList.remove('hide');
        if (nextButton) nextButton.classList.add('hide');
        nextButton.innerText = "Próxima Pergunta →";
        
        showQuestion();
    }
    
    // Adicionar event listeners
    if (nextButton) {
        // Remover listener antigo para evitar duplicação
        const newNextButton = nextButton.cloneNode(true);
        nextButton.parentNode.replaceChild(newNextButton, nextButton);
        newNextButton.addEventListener('click', nextQuestion);
        window.nextButtonRef = newNextButton;
    }
    
    if (restartButton) {
        const newRestartButton = restartButton.cloneNode(true);
        restartButton.parentNode.replaceChild(newRestartButton, restartButton);
        newRestartButton.addEventListener('click', restartQuiz);
    }
    
    // Iniciar quiz
    showQuestion();
    console.log("✅ Quiz inicializado com sucesso!");
}

// ============================================
// GARANTIR QUE LINKS EXTERNOS ABRAM EM NOVA ABA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links que apontam para sites externos
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Se o link começar com http:// ou https:// e NÃO for o próprio domínio
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
            // Verifica se NÃO é o mesmo domínio (evitar abrir links internos em nova aba)
            const currentDomain = window.location.hostname;
            const linkDomain = new URL(href).hostname;
            
            if (linkDomain !== currentDomain && linkDomain !== 'localhost' && !linkDomain.includes('127.0.0.1')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        }
    });
    
    console.log("✅ Links externos configurados para abrir em nova aba");
});