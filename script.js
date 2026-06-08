// ============================================
// AGUARDAR DOM CARREGAR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🌿 EcoFuture - Site carregado com sucesso!");
    
    // Inicializar animações e funcionalidades
    animateNumbers();
    initConceptButtons();
    initHQ();
    initQuiz();
    initScrollButtons();
    initModal();
});

// ============================================
// ANIMAÇÃO DOS NÚMEROS
// ============================================
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.innerText = target;
                clearInterval(timer);
            } else {
                el.innerText = Math.floor(current);
            }
        }, 30);
    });
}

// ============================================
// BASE DE DADOS DE CONCEITOS PARA OS BOTÕES
// ============================================
const conceptData = {
    // Causas
    modelo: {
        title: "🌾 Modelo de Produção da Revolução Verde",
        text: "A consolidação do agronegócio e a 'Revolução Verde' criaram uma dependência tecnológica de agroquímicos para manter altos índices de produtividade. Esse modelo prioriza o rendimento em detrimento da sustentabilidade ambiental.",
        source: "Embrapa - Agrotóxicos no Brasil"
    },
    monocultura: {
        title: "🌽 Monoculturas Extensivas",
        text: "Culturas como soja e milho, que ocupam vastas áreas no Paraná, são as que mais demandam agrotóxicos em termos de quantidade total de ingredientes ativos. A falta de rotação de culturas aumenta a vulnerabilidade a pragas.",
        source: "Portal da Agricultura do Paraná"
    },
    transgenicos: {
        title: "🧬 Transgênicos e o Círculo Vicioso",
        text: "O advento de organismos geneticamente modificados gerou um 'círculo vicioso', onde o surgimento de pragas mais resistentes exige a aplicação de venenos ainda mais impactantes, aumentando a dependência química.",
        source: "Fundação Heinrich Böll"
    },
    economicos: {
        title: "💰 Fatores Culturais e Econômicos",
        text: "Muitas vezes, a preocupação com o lucro imediato da safra sobrepõe-se à análise da classificação toxicológica dos produtos. Isso leva ao uso de agrotóxicos mais baratos, porém mais perigosos.",
        source: "UFMG - Impactos dos Agrotóxicos"
    },
    
    // Impactos
    saude: {
        title: "⚠️ Impactos na Saúde Humana",
        text: "As intoxicações por agrotóxicos podem ser agudas (imediatas) ou crônicas (surgindo após meses ou anos). Os principais riscos incluem: câncer, anomalias congênitas, distúrbios neurológicos e mentais. Estudos já detectaram pesticidas em amostras de sangue, urina e até leite materno.",
        source: "Secretaria da Saúde do Paraná / UFMG"
    },
    ambiental: {
        title: "🌍 Impactos Ambientais",
        text: "O uso indiscriminado de agrotóxicos contamina recursos hídricos por lixiviação, causa desequilíbrio ecológico (mortandade de polinizadores como abelhas) e degrada o solo e o ar através da deriva (vento que desvia o agrotóxico do alvo).",
        source: "Belchior et al. - Impactos de agrotóxicos"
    },
    
    // Soluções
    alternativos: {
        title: "🧪 Defensivos Alternativos",
        text: "São produtos preparados a partir de substâncias não prejudiciais à saúde humana e ao meio ambiente. Exemplos: Caldas Bordalesa e Sulfocálcica, extratos de plantas (alho, nim, fumo) e agentes de biocontrole (fungos e bactérias como Bacillus thuringiensis).",
        source: "Cartilha Defensivos Alternativos - Pesagro-Rio/CREA-RJ"
    },
    bioestimulantes: {
        title: "⚡ Bioestimulantes",
        text: "Substâncias que aumentam a 'energia vital' das plantas através da aceleração da fotossíntese, tornando-as naturalmente mais resistentes a pragas sem o uso de venenos químicos. Funcionam como um 'fortalecedor' natural da planta.",
        source: "CiOrgânicos - Bioestimulantes como alternativa"
    },
    educacao: {
        title: "📚 Educação e Fiscalização",
        text: "É fundamental o incentivo à capacitação de quem manipula os produtos, a proibição de princípios ativos já banidos em outros países (como na União Europeia) e uma fiscalização rígida por órgãos ambientais como o Ibama.",
        source: "Ministério do Meio Ambiente / Ibama"
    },
    politicas: {
        title: "🏛️ Políticas Públicas",
        text: "Iniciativas como as da Secretaria da Saúde do Paraná para notificação de intoxicações e promoção da saúde são passos importantes para mitigar os danos. Programas de incentivo à agricultura orgânica também são essenciais.",
        source: "Secretaria da Saúde do Paraná - Intoxicação por Agrotóxicos"
    }
};

// ============================================
// INICIALIZAR BOTÕES DE CONCEITO
// ============================================
function initConceptButtons() {
    // Botões das causas
    const causeCards = document.querySelectorAll('.cause-card');
    causeCards.forEach(card => {
        card.addEventListener('click', () => {
            const concept = card.getAttribute('data-concept');
            if (concept && conceptData[concept]) {
                showModal(conceptData[concept].title, conceptData[concept].text, conceptData[concept].source);
            }
        });
    });
    
    // Botões das soluções
    const solutionBtns = document.querySelectorAll('.solution-btn');
    solutionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const concept = btn.getAttribute('data-concept');
            if (concept && conceptData[concept]) {
                showModal(conceptData[concept].title, conceptData[concept].text, conceptData[concept].source);
            }
        });
    });
    
    // Botões pequenos de explicação
    const smallBtns = document.querySelectorAll('.concept-btn-small');
    smallBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const concept = btn.getAttribute('data-concept');
            if (concept && conceptData[concept]) {
                showModal(conceptData[concept].title, conceptData[concept].text, conceptData[concept].source);
            }
        });
    });
    
    // Botão específico de bioestimulantes
    const bioBtn = document.getElementById('btnBioestimulantes');
    if (bioBtn) {
        bioBtn.addEventListener('click', () => {
            showModal(
                conceptData.bioestimulantes.title,
                conceptData.bioestimulantes.text,
                conceptData.bioestimulantes.source
            );
        });
    }
}

// ============================================
// MODAL PARA EXIBIR EXPLICAÇÕES
// ============================================
function initModal() {
    const modal = document.getElementById('concept-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function showModal(title, text, source) {
    const modal = document.getElementById('concept-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalSource = document.getElementById('modal-source');
    
    if (modalTitle) modalTitle.innerHTML = title;
    if (modalText) modalText.innerHTML = text;
    if (modalSource) modalSource.innerHTML = `📚 Fonte: ${source}`;
    
    if (modal) modal.style.display = 'flex';
}

// ============================================
// BOTÕES DE SCROLL
// ============================================
function initScrollButtons() {
    const scrollToHQ = document.getElementById('scrollToHQ');
    const scrollToQuiz = document.getElementById('scrollToQuiz');
    
    if (scrollToHQ) {
        scrollToHQ.addEventListener('click', () => {
            const hqSection = document.getElementById('hq-section');
            if (hqSection) {
                hqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    if (scrollToQuiz) {
        scrollToQuiz.addEventListener('click', () => {
            const quizSection = document.getElementById('quiz-section');
            if (quizSection) {
                quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// ============================================
// HQ INTERATIVA - 8 CENAS
// ============================================
const hqData = [
    { text: "🌽 'O Paraná é o segundo maior consumidor de agrotóxicos do Brasil! São 16% de todo o veneno usado no país!'", cite: "Embrapa", bgColor: "#1a4a2a", emoji: "🌽" },
    { text: "📈 'O consumo de ingredientes ativos subiu 700% nos últimos 40 anos! Enquanto a área plantada cresceu só 78%...'", cite: "Embrapa", bgColor: "#2a4a1a", emoji: "📈" },
    { text: "💧 'O veneno escorre pela chuva e se acumula na cadeia alimentar. Isso se chama BIOMAGNIFICAÇÃO!'", cite: "Belchior et al.", bgColor: "#1a3a4a", emoji: "💧" },
    { text: "👶 'Estudos encontraram agrotóxicos no sangue, na urina e até no LEITE MATERNO!'", cite: "UFMG", bgColor: "#4a2a2a", emoji: "👶" },
    { text: "🐝 'As abelhas estão morrendo! Sem polinizadores, perdemos 70% dos alimentos!'", cite: "Embrapa", bgColor: "#3a4a1a", emoji: "🐝" },
    { text: "🌿 'Podemos usar BIOESTIMULANTES! Aumentam a energia vital da planta naturalmente!'", cite: "CiOrgânicos", bgColor: "#1a4a3a", emoji: "🌿" },
    { text: "🧪 'CALDA BORDALESA! Um fungicida natural de baixa toxicidade!'", cite: "Pesagro-Rio", bgColor: "#3a3a4a", emoji: "🧪" },
    { text: "🌎 'Transição agroecológica é possível! Alimentos SADIOS sem destruir o planeta!'", cite: "SESA-PR", bgColor: "#1a5a3a", emoji: "🌎" },
];

let currentComicIndex = 0;

function initHQ() {
    const comicScene = document.getElementById('comic-scene');
    const dialogueText = document.getElementById('dialogue-text');
    const sourceCite = document.getElementById('source-cite');
    const panelCounter = document.getElementById('panel-counter');
    const comicEmoji = document.getElementById('comic-emoji');
    const prevBtn = document.getElementById('prevComicBtn');
    const nextBtn = document.getElementById('nextComicBtn');
    
    if (!comicScene) return;
    
    function updateComic() {
        const data = hqData[currentComicIndex];
        dialogueText.innerHTML = data.text;
        sourceCite.innerText = data.cite;
        comicScene.style.backgroundColor = data.bgColor;
        if (comicEmoji) comicEmoji.innerHTML = data.emoji;
        if (panelCounter) panelCounter.innerText = `${currentComicIndex + 1}/${hqData.length}`;
        
        if (prevBtn) prevBtn.disabled = currentComicIndex === 0;
        if (nextBtn) nextBtn.disabled = currentComicIndex === hqData.length - 1;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentComicIndex > 0) {
                currentComicIndex--;
                updateComic();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentComicIndex < hqData.length - 1) {
                currentComicIndex++;
                updateComic();
            }
        });
    }
    
    updateComic();
    console.log("✅ HQ inicializada com sucesso!");
}

// ============================================
// QUIZ - 10 PERGUNTAS
// ============================================
const quizQuestions = [
    { question: "Qual a porcentagem do consumo nacional de agrotóxicos atribuída ao estado do Paraná?", answers: [{ text: "10%", correct: false }, { text: "16%", correct: true }, { text: "25%", correct: false }, { text: "38%", correct: false }] },
    { question: "Nos últimos 40 anos, qual foi o aumento no consumo de ingredientes ativos de agrotóxicos no Brasil?", answers: [{ text: "78%", correct: false }, { text: "300%", correct: false }, { text: "500%", correct: false }, { text: "700%", correct: true }] },
    { question: "O que caracteriza uma 'intoxicação aguda' segundo as autoridades de saúde?", answers: [{ text: "Danos após meses ou anos", correct: false }, { text: "Contato em 24 horas", correct: true }, { text: "Sintomas vagos", correct: false }, { text: "Exposição crônica", correct: false }] },
    { question: "Qual a função dos bioestimulantes na agricultura ecológica?", answers: [{ text: "Matar pragas", correct: false }, { text: "Acelerar a fotossíntese", correct: true }, { text: "Fertilizante sintético", correct: false }, { text: "Irrigar plantas", correct: false }] },
    { question: "Qual destes NÃO é um exemplo de defensivo alternativo?", answers: [{ text: "Calda Bordalesa", correct: false }, { text: "Extrato de alho", correct: false }, { text: "Glifosato", correct: true }, { text: "Bacillus thuringiensis", correct: false }] },
    { question: "O que é biomagnificação?", answers: [{ text: "Decomposição no solo", correct: false }, { text: "Acúmulo de toxinas na cadeia alimentar", correct: true }, { text: "Técnica de cultivo", correct: false }, { text: "Aplicação de defensivos", correct: false }] },
    { question: "Qual animal é severamente afetado pelos agrotóxicos, sendo essencial para a polinização?", answers: [{ text: "Joaninha", correct: false }, { text: "Abelha", correct: true }, { text: "Borboleta", correct: false }, { text: "Formiga", correct: false }] },
    { question: "Onde já foram encontrados resíduos de agrotóxicos segundo estudos científicos?", answers: [{ text: "Só no solo", correct: false }, { text: "No sangue, urina e leite materno", correct: true }, { text: "Só em alimentos", correct: false }, { text: "Só na água", correct: false }] },
    { question: "Qual o principal problema do uso de transgênicos em relação aos agrotóxicos?", answers: [{ text: "Não precisam de veneno", correct: false }, { text: "Criam pragas mais resistentes", correct: true }, { text: "Aumentam biodiversidade", correct: false }, { text: "São isentos de riscos", correct: false }] },
    { question: "Qual destas é uma política pública importante para mitigar os danos dos agrotóxicos?", answers: [{ text: "Aumentar importação", correct: false }, { text: "Fiscalização rígida", correct: true }, { text: "Reduzir áreas protegidas", correct: false }, { text: "Isentar produtores", correct: false }] }
];

let currentQIndex = 0;
let userScore = 0;

function initQuiz() {
    const questionText = document.getElementById('question-text');
    const answerContainer = document.getElementById('answer-buttons');
    const nextBtn = document.getElementById('next-btn');
    const questionCounter = document.getElementById('question-counter');
    const resultContainer = document.getElementById('result-container');
    const quizControls = document.getElementById('quiz-controls');
    const questionContainer = document.getElementById('question-container');
    const scoreTextEl = document.getElementById('score-text');
    const resultEmoji = document.getElementById('result-emoji');
    const restartBtn = document.getElementById('restart-quiz');
    
    if (!questionText || !answerContainer) return;
    
    function resetQuizState() {
        while (answerContainer.firstChild) {
            answerContainer.removeChild(answerContainer.firstChild);
        }
    }
    
    function showQuestion() {
        resetQuizState();
        
        if (currentQIndex >= quizQuestions.length) {
            showResults();
            return;
        }
        
        const currentQuestion = quizQuestions[currentQIndex];
        questionText.innerText = currentQuestion.question;
        if (questionCounter) questionCounter.innerText = `Pergunta ${currentQIndex + 1} de ${quizQuestions.length}`;
        
        const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);
        
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            if (answer.correct) button.dataset.correct = "true";
            button.addEventListener('click', () => selectAnswer(button, answer.correct));
            answerContainer.appendChild(button);
        });
    }
    
    function selectAnswer(selectedButton, isCorrect) {
        if (isCorrect) {
            selectedButton.classList.add('correct');
            userScore++;
        } else {
            selectedButton.classList.add('wrong');
        }
        
        Array.from(answerContainer.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        
        if (nextBtn) {
            nextBtn.classList.remove('hide');
            if (currentQIndex + 1 >= quizQuestions.length) {
                nextBtn.innerHTML = 'Ver Resultado <i class="fas fa-chart-simple"></i>';
            }
        }
    }
    
    function showResults() {
        if (questionContainer) questionContainer.classList.add('hide');
        if (quizControls) quizControls.classList.add('hide');
        if (resultContainer) resultContainer.classList.remove('hide');
        
        const percentage = (userScore / quizQuestions.length) * 100;
        let performanceMessage = "";
        let emoji = "";
        
        if (percentage === 100) {
            performanceMessage = "Excelente! Você domina completamente o assunto!";
            emoji = "🏆🌿";
        } else if (percentage >= 70) {
            performanceMessage = "Muito bom! Continue se informando!";
            emoji = "👍📚";
        } else if (percentage >= 50) {
            performanceMessage = "Bom trabalho! Que tal revisar o conteúdo?";
            emoji = "🌱📖";
        } else {
            performanceMessage = "Que tal dar mais uma olhada no conteúdo?";
            emoji = "💚🌍";
        }
        
        if (resultEmoji) resultEmoji.innerText = emoji;
        if (scoreTextEl) {
            scoreTextEl.innerHTML = `
                <span style="font-size: 2rem; font-weight: 800;">${userScore}/${quizQuestions.length}</span><br>
                <span>${performanceMessage}</span>
            `;
        }
    }
    
    function nextQuestion() {
        if (currentQIndex + 1 < quizQuestions.length) {
            currentQIndex++;
            showQuestion();
            if (nextBtn) nextBtn.classList.add('hide');
            nextBtn.innerHTML = 'Próxima Pergunta <i class="fas fa-arrow-right"></i>';
        } else {
            showResults();
        }
    }
    
    function restartQuiz() {
        currentQIndex = 0;
        userScore = 0;
        
        if (resultContainer) resultContainer.classList.add('hide');
        if (questionContainer) questionContainer.classList.remove('hide');
        if (quizControls) quizControls.classList.remove('hide');
        if (nextBtn) nextBtn.classList.add('hide');
        nextBtn.innerHTML = 'Próxima Pergunta <i class="fas fa-arrow-right"></i>';
        
        showQuestion();
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
    
    showQuestion();
    console.log("✅ Quiz inicializado com sucesso!");
}