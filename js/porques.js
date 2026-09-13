// ==================== 50 PERGUNTAS SOBRE PORQUÊS ====================
// Fácil (1-20), Médio (21-35), Difícil (36-50)

const PERGUNTAS = [
    // ========== NÍVEL FÁCIL (1-20) ==========
    { nivel: "Fácil", enunciado: "1) Qual das alternativas usa corretamente o 'por que' separado?", opcoes: ["Não fui à aula por que estava cansado.", "Por que você não veio ontem?", "Não entendi o porquê da confusão.", "Estude porque o conhecimento é poder!", "Ainda não sei por quê."], correta: 1, explicacao: "Por que separado é usado em perguntas diretas ou indiretas." },
    { nivel: "Fácil", enunciado: "2) 'Porque' junto e sem acento é usado para:", opcoes: ["Iniciar perguntas diretas.", "Indicar causa ou explicação.", "Fechar frases interrogativas.", "Formar substantivos.", "Substituir 'pelo qual'."], correta: 1, explicacao: "Porque é conjunção causal ou explicativa: indica causa ou motivo." },
    { nivel: "Fácil", enunciado: "3) Qual frase está correta?", opcoes: ["Por quê você saiu?", "Não entendi o porquê da bronca.", "Por que não!", "Por que sim!", "Porque você não veio?"], correta: 1, explicacao: "O porquê (junto e com acento) é substantivo e precisa de determinante." },
    { nivel: "Fácil", enunciado: "4) 'Por quê' com acento é usado:", opcoes: ["No meio das frases afirmativas.", "No final de frases interrogativas ou antes de pausa.", "Sempre com artigo.", "Como conjunção explicativa.", "No início de frases."], correta: 1, explicacao: "Por quê é usado no final das perguntas ou antes de pausa." },
    { nivel: "Fácil", enunciado: "5) Qual opção mostra o uso de 'porque' como conjunção explicativa?", opcoes: ["Não sei o porquê.", "Por quê?", "Estude porque conhecimento é poder!", "Por que não?", "Por que sim!"], correta: 2, explicacao: "Porque junto indica causa ou explicação, sendo conjunção." },
    { nivel: "Fácil", enunciado: "6) Qual frase apresenta erro no uso do porquê?", opcoes: ["Por que você não estudou?", "Não sei o porquê da confusão.", "Porquê você não veio?", "Estude porque é importante.", "Faltei porque estava doente."], correta: 2, explicacao: "Porquê (junto e com acento) é substantivo, nunca inicia pergunta." },
    { nivel: "Fácil", enunciado: "7) Em 'Não fui porque estava cansado', o 'porque' indica:", opcoes: ["Conclusão", "Causa", "Dúvida", "Alternativa", "Finalidade"], correta: 1, explicacao: "Porque é conjunção causal: indica a causa da ação." },
    { nivel: "Fácil", enunciado: "8) Complete: '___ você não me ligou?'", opcoes: ["Porque", "Porquê", "Por que", "Por quê", "Por quê?"], correta: 2, explicacao: "Por que separado sem acento inicia perguntas diretas." },
    { nivel: "Fácil", enunciado: "9) Complete: 'Não entendi o ___ da sua decisão.'", opcoes: ["por que", "porquê", "porque", "por quê", "porquês"], correta: 1, explicacao: "Porquê (junto com acento) é substantivo, antecedido de artigo." },
    { nivel: "Fácil", enunciado: "10) Complete: 'Você saiu ___?'", opcoes: ["por que", "porquê", "porque", "por quê", "porquês"], correta: 3, explicacao: "Por quê (separado com acento) fica no final de frase interrogativa." },
    { nivel: "Fácil", enunciado: "11) Em 'Estude porque o conhecimento é poder', o 'porque' é:", opcoes: ["Substantivo", "Advérbio", "Conjunção", "Pronome", "Preposição"], correta: 2, explicacao: "Porque é conjunção coordenativa explicativa." },
    { nivel: "Fácil", enunciado: "12) Qual alternativa está correta?", opcoes: ["Por quê você saiu?", "Ele não disse por que saiu.", "Não sei o porque.", "Porque você não veio?", "Por quê não!"], correta: 1, explicacao: "Por que separado sem acento em interrogativa indireta." },
    { nivel: "Fácil", enunciado: "13) Complete: '___ não me avisou?'", opcoes: ["Porque", "Porquê", "Por que", "Por quê", "Porquês"], correta: 2, explicacao: "Por que separado sem acento inicia perguntas diretas." },
    { nivel: "Fácil", enunciado: "14) Em 'Eu sei por quê', o acento é usado porque:", opcoes: ["É substantivo", "Está no final da frase", "É conjunção", "É pronome", "É advérbio de modo"], correta: 1, explicacao: "Por quê com acento fica no final de frase interrogativa." },
    { nivel: "Fácil", enunciado: "15) Qual palavra significa 'motivo' ou 'razão'?", opcoes: ["Por que", "Porquê", "Porque", "Por quê", "Porquês"], correta: 1, explicacao: "Porquê é substantivo e significa motivo/razão." },
    { nivel: "Fácil", enunciado: "16) Complete: 'Ele não veio ___ estava doente.'", opcoes: ["por que", "porquê", "porque", "por quê", "porquês"], correta: 2, explicacao: "Porque é conjunção causal/explicativa." },
    { nivel: "Fácil", enunciado: "17) Qual frase está INCORRETA?", opcoes: ["Por que você não estuda?", "Não sei o porquê.", "Porquê você não veio?", "Estude porque é bom.", "Faltei porque estava doente."], correta: 2, explicacao: "Porquê nunca inicia pergunta." },
    { nivel: "Fácil", enunciado: "18) Em 'Por que você chorou?', o 'por que' é:", opcoes: ["Substantivo", "Conjunção", "Advérbio interrogativo", "Pronome", "Preposição"], correta: 2, explicacao: "Por que separado é advérbio interrogativo." },
    { nivel: "Fácil", enunciado: "19) Complete: '___ ele saiu tão cedo?'", opcoes: ["Por que", "Porquê", "Porque", "Por quê", "Porquês"], correta: 0, explicacao: "Por que separado em interrogativa direta." },
    { nivel: "Fácil", enunciado: "20) Em 'Não sei por quê', o acento ocorre porque:", opcoes: ["É substantivo", "Está no final da frase", "É conjunção", "É pronome", "É advérbio"], correta: 1, explicacao: "Por quê fica no final da frase interrogativa." },

    // ========== NÍVEL MÉDIO (21-35) ==========
    { nivel: "Médio", enunciado: "21) 'Por que' pode ser substituído por qual expressão?", opcoes: ["pelo motivo", "pois", "o motivo", "por qual razão", "uma vez que"], correta: 3, explicacao: "Por que pode ser trocado por 'por qual razão' ou 'por qual motivo'." },
    { nivel: "Médio", enunciado: "22) Qual frase utiliza INCORRETAMENTE o porquê?", opcoes: ["Ninguém entendeu o porquê da confusão.", "Gostaria de saber o porquê de tanta dúvida.", "Porquê você não estudou?", "Eu tenho meus porquês.", "O porquê da sua atitude não ficou claro."], correta: 2, explicacao: "Porquê é substantivo, não inicia pergunta." },
    { nivel: "Médio", enunciado: "23) Em 'Não fui porque estava cansado', o 'porque' expressa:", opcoes: ["causa", "explicação", "dúvida", "conclusão", "finalidade"], correta: 0, explicacao: "Porque indica causa, logo é conjunção causal." },
    { nivel: "Médio", enunciado: "24) Em qual alternativa o 'por quê' está corretamente acentuado?", opcoes: ["Por quê você não veio?", "Você não veio por quê?", "Por quê não!", "Por que!", "Porquê você veio?"], correta: 1, explicacao: "Por quê fica no final da frase interrogativa." },
    { nivel: "Médio", enunciado: "25) 'Porque' é usado em:", opcoes: ["Respostas explicativas.", "Frases interrogativas.", "Frases com pronome relativo.", "Títulos e substantivos.", "Início de perguntas."], correta: 0, explicacao: "Porque é usado para dar explicação ou causa." },
    { nivel: "Médio", enunciado: "26) Em 'O motivo por que saiu é desconhecido', 'por que' é:", opcoes: ["Advérbio interrogativo", "Pronome relativo", "Conjunção explicativa", "Substantivo", "Preposição"], correta: 1, explicacao: "Neste caso, por que atua como pronome relativo (pelo qual)." },
    { nivel: "Médio", enunciado: "27) Complete: 'As dificuldades ___ passamos são muitas.'", opcoes: ["por que", "porquê", "porque", "por quê", "porquês"], correta: 0, explicacao: "Por que = pelas quais (pronome relativo)." },
    { nivel: "Médio", enunciado: "28) Em 'Não sei o porquê de tanta confusão', o 'porquê' é:", opcoes: ["Conjunção", "Advérbio", "Substantivo", "Pronome", "Preposição"], correta: 2, explicacao: "Porquê é substantivo e significa motivo/razão." },
    { nivel: "Médio", enunciado: "29) Qual alternativa possui 'por que' como pronome relativo?", opcoes: ["Por que você chorou?", "Não sei por que ele agiu assim.", "O livro por que me apaixonei está esgotado.", "Não sei o porquê.", "Por que não?"], correta: 2, explicacao: "Por que = pelo qual → pronome relativo." },
    { nivel: "Médio", enunciado: "30) Em 'Ela sorriu, por quê?', o acento ocorre porque:", opcoes: ["É substantivo", "Está no final da frase", "É conjunção", "É pronome", "É advérbio"], correta: 1, explicacao: "Por quê com acento no final de frase interrogativa." },
    { nivel: "Médio", enunciado: "31) Complete: 'Ele foi embora ___ estava tarde.'", opcoes: ["por que", "porquê", "porque", "por quê", "porquês"], correta: 2, explicacao: "Porque é conjunção causal/explicativa." },
    { nivel: "Médio", enunciado: "32) Em 'Estude, porque a prova é amanhã', o 'porque' é:", opcoes: ["Substantivo", "Conjunção explicativa", "Pronome relativo", "Advérbio", "Preposição"], correta: 1, explicacao: "Porque é conjunção explicativa." },
    { nivel: "Médio", enunciado: "33) Qual alternativa está INCORRETA?", opcoes: ["Por que não me avisou?", "Não sei por que ele saiu.", "Não entendi o porque.", "Estude porque é importante.", "Por quê?"], correta: 2, explicacao: "O correto é 'o porquê' (junto e com acento)." },
    { nivel: "Médio", enunciado: "34) Complete: '___ você não me disse a verdade?'", opcoes: ["Por que", "Porquê", "Porque", "Por quê", "Porquês"], correta: 0, explicacao: "Por que separado sem acento inicia pergunta direta." },
    { nivel: "Médio", enunciado: "35) Em 'Você não foi à aula por quê?', o acento ocorre porque:", opcoes: ["É substantivo", "Está no final da frase", "É conjunção", "É pronome", "É advérbio"], correta: 1, explicacao: "Por quê com acento no final de frase interrogativa." },

    // ========== NÍVEL DIFÍCIL (36-50) ==========
    { nivel: "Difícil", enunciado: "36) O termo 'por que' é composto por:", opcoes: ["Preposição + conjunção", "Preposição + pronome interrogativo/relativo", "Conjunção + artigo", "Pronome + substantivo", "Advérbio + preposição"], correta: 1, explicacao: "Por que = preposição 'por' + pronome interrogativo/relativo 'que'." },
    { nivel: "Difícil", enunciado: "37) Identifique a função de 'por que' em: 'O motivo por que saiu é desconhecido.'", opcoes: ["Advérbio interrogativo", "Pronome relativo", "Conjunção explicativa", "Substantivo", "Preposição"], correta: 1, explicacao: "Por que atua como pronome relativo (= pelo qual)." },
    { nivel: "Difícil", enunciado: "38) Em 'Não entendi o porquê de tanta confusão', o 'porquê' é:", opcoes: ["Conjunção", "Advérbio", "Substantivo", "Pronome", "Preposição"], correta: 2, explicacao: "Porquê é substantivo, significa motivo/razão." },
    { nivel: "Difícil", enunciado: "39) Qual alternativa possui 'por que' como pronome relativo?", opcoes: ["Por que você chorou?", "Não sei por que ele agiu assim.", "O livro por que me apaixonei está esgotado.", "Não sei o porquê.", "Por que não?"], correta: 2, explicacao: "Por que = pelo qual → pronome relativo." },
    { nivel: "Difícil", enunciado: "40) 'Por que' separado é incorreto quando:", opcoes: ["Inicia pergunta direta.", "Aparece com artigo antes.", "Substitui 'pelo qual'.", "Faz parte de interrogativa indireta.", "Aparece no meio da frase."], correta: 1, explicacao: "Com artigo antes (o, um), usa-se porquê." },
    { nivel: "Difícil", enunciado: "41) Em 'Não sei por quê', o acento é usado porque:", opcoes: ["O termo está no meio da frase.", "A palavra termina a oração e o 'que' fica tônico.", "O 'que' é substantivo.", "É pronome relativo.", "É conjunção."], correta: 1, explicacao: "Acento porque o 'que' é tônico no final da frase." },
    { nivel: "Difícil", enunciado: "42) Assinale a opção com uso INCORRETO de 'porque'.", opcoes: ["Estude porque conhecimento é poder!", "Chorei porque estava triste.", "Não entendi o porque da discussão.", "Faltei porque estava com febre.", "Saí porque estava calor."], correta: 2, explicacao: "Com artigo (o), usa-se 'porquê' com acento." },
    { nivel: "Difícil", enunciado: "43) Qual alternativa apresenta 'por quê' seguido de pontuação?", opcoes: ["Por quê você está triste", "Você está triste por quê?", "Por que você está triste", "Não entendi o porquê", "Porquê você veio?"], correta: 1, explicacao: "Por quê antes de pausa (aqui, ponto de interrogação)." },
    { nivel: "Difícil", enunciado: "44) Assinale a opção que contém todos os tipos de porquês.", opcoes: ["Por que, Porque, Por quê, Porquê", "Porque, Porquê, Porquê, Porque", "Por quê, Porquê, Porquê, Porque", "Porquê, Porque, Porquê, Porquê", "Por que, Por quê, Porquê, Porque"], correta: 0, explicacao: "Existem quatro formas: por que, porque, por quê, porquê." },
    { nivel: "Difícil", enunciado: "45) Em 'Não estude por que você precisa', 'por que' pode ser substituído por:", opcoes: ["pois", "por qual razão", "pelo motivo", "uma vez que", "já que"], correta: 2, explicacao: "Por que = pelo motivo (frase explicativa)." },
    { nivel: "Difícil", enunciado: "46) Em 'Eis o motivo por que luto', o 'por que' é:", opcoes: ["Advérbio", "Conjunção", "Pronome relativo", "Substantivo", "Preposição"], correta: 2, explicacao: "Por que = pelo qual → pronome relativo." },
    { nivel: "Difícil", enunciado: "47) Qual frase está CORRETA?", opcoes: ["Porque você não veio?", "Não sei o porque.", "Por que você não veio?", "Porquê você não veio?", "Por quê você não veio?"], correta: 2, explicacao: "Por que separado sem acento em pergunta direta." },
    { nivel: "Difícil", enunciado: "48) Em 'Ele não explicou o porquê', o 'porquê' é:", opcoes: ["Conjunção", "Advérbio", "Substantivo", "Pronome", "Preposição"], correta: 2, explicacao: "Porquê é substantivo, significa motivo/razão." },
    { nivel: "Difícil", enunciado: "49) Assinale a alternativa que NÃO apresenta erro.", opcoes: ["Porquê você saiu?", "Não sei o porque.", "Por que você saiu?", "Por quê você saiu?", "Porque você saiu?"], correta: 2, explicacao: "Por que separado sem acento em pergunta direta." },
    { nivel: "Difícil", enunciado: "50) Em 'O local por que passei é bonito', 'por que' equivale a:", opcoes: ["por qual", "pelo qual", "porque", "porquê", "por quê"], correta: 1, explicacao: "Por que = pelo qual (pronome relativo)." }
];

// ==================== VARIÁVEIS DO JOGO ====================
let perguntasRestantes = [];
let perguntaAtual = null;
let opcaoSelecionada = null;
let playerHP = 100;
let enemyHP = 100;
let playerScore = 0;
let enemyScore = 0;
let jogoAtivo = true;
let aguardandoResposta = false;

// Elementos DOM
const playerHpBar = document.getElementById('player-hp');
const enemyHpBar = document.getElementById('enemy-hp');
const playerHpText = document.getElementById('player-hp-text');
const enemyHpText = document.getElementById('enemy-hp-text');
const playerScoreSpan = document.getElementById('player-score');
const enemyScoreSpan = document.getElementById('enemy-score');
const perguntaDiv = document.getElementById('pergunta');
const nivelBadge = document.getElementById('nivel-badge');
const opcoesDiv = document.getElementById('opcoes');
const btnResponder = document.getElementById('btn-responder');
const btnReiniciar = document.getElementById('btn-reiniciar');
const feedbackDiv = document.getElementById('feedback');
const playerAvatar = document.getElementById('player-avatar');
const enemyAvatar = document.getElementById('enemy-avatar');

// ==================== FUNÇÕES ====================
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function carregarPergunta() {
    if (perguntasRestantes.length === 0) { finalizarJogo(); return; }
    perguntaAtual = perguntasRestantes[0];
    perguntasRestantes.shift();

    perguntaDiv.textContent = perguntaAtual.enunciado;
    nivelBadge.textContent = perguntaAtual.nivel;
    nivelBadge.className = `nivel-badge ${perguntaAtual.nivel}`;

    opcoesDiv.innerHTML = '';
    perguntaAtual.opcoes.forEach((opcao, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opcao-btn';
        btn.textContent = opcao;
        btn.onclick = () => selecionarOpcao(idx, btn);
        opcoesDiv.appendChild(btn);
    });

    opcaoSelecionada = null;
    aguardandoResposta = true;
}

function selecionarOpcao(idx, elemento) {
    if (!aguardandoResposta || !jogoAtivo) return;
    document.querySelectorAll('.opcao-btn').forEach(b => b.classList.remove('selected'));
    elemento.classList.add('selected');
    opcaoSelecionada = idx;
}

function atacar(atacante) {
    if (atacante === 'player') {
        playerAvatar.classList.add('attacking');
        setTimeout(() => playerAvatar.classList.remove('attacking'), 200);
        enemyHP = Math.max(0, enemyHP - 20);
        enemyHpBar.style.width = `${(enemyHP / 100) * 100}%`;
        enemyHpText.textContent = `❤️ ${enemyHP} HP`;
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        feedbackDiv.className = 'feedback correct';
        feedbackDiv.innerHTML = `✅ CORRETO! Você acertou um golpe! -20 HP no inimigo!<br>📘 ${perguntaAtual.explicacao}`;
    } else {
        enemyAvatar.classList.add('attacking');
        setTimeout(() => enemyAvatar.classList.remove('attacking'), 200);
        playerHP = Math.max(0, playerHP - 20);
        playerHpBar.style.width = `${(playerHP / 100) * 100}%`;
        playerHpText.textContent = `❤️ ${playerHP} HP`;
        enemyScore++;
        enemyScoreSpan.textContent = enemyScore;
        feedbackDiv.className = 'feedback wrong';
        feedbackDiv.innerHTML = `❌ ERROU! O Inimigo contra-atacou! -20 HP em você!<br>📘 ${perguntaAtual.explicacao}`;
    }

    if (playerHP <= 0 || enemyHP <= 0 || playerScore >= 10 || enemyScore >= 10) {
        finalizarJogo();
    } else {
        carregarPergunta();
    }
}

function responder() {
    if (!aguardandoResposta || !jogoAtivo) {
        feedbackDiv.className = 'feedback info';
        feedbackDiv.innerHTML = '💡 Responda a pergunta primeiro!';
        return;
    }
    if (opcaoSelecionada === null) {
        feedbackDiv.className = 'feedback info';
        feedbackDiv.innerHTML = '⚠️ Selecione uma alternativa antes de responder!';
        return;
    }
    aguardandoResposta = false;
    if (opcaoSelecionada === perguntaAtual.correta) {
        atacar('player');
    } else {
        atacar('enemy');
    }
}

function finalizarJogo() {
    jogoAtivo = false;
    aguardandoResposta = false;
    let mensagem = playerScore >= 10 || enemyHP <= 0
        ? '🏆 Parabéns! Você derrotou o Inimigo dos Porquês! 🏆'
        : '😈 O Inimigo dos Porquês venceu! Estude mais e tente novamente!';
    btnResponder.disabled = true;

    const modal = document.createElement('div');
    modal.className = 'game-over';
    modal.innerHTML = `
        <div class="game-over-content">
            <h2>🏁 FIM DE JOGO 🏁</h2>
            <p style="font-size:1.3rem;color:#ffc107;margin:1rem 0;">${mensagem}</p>
            <p><strong>VOCÊ:</strong> ${playerScore} pontos | <strong>INIMIGO:</strong> ${enemyScore} pontos</p>
            <button onclick="location.reload()">🔄 Jogar Novamente</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function reiniciarJogo() {
    const modal = document.querySelector('.game-over');
    if (modal) modal.remove();
    perguntasRestantes = embaralharArray([...PERGUNTAS]);
    playerHP = 100; enemyHP = 100;
    playerScore = 0; enemyScore = 0;
    jogoAtivo = true; aguardandoResposta = false; opcaoSelecionada = null;
    playerHpBar.style.width = '100%'; enemyHpBar.style.width = '100%';
    playerHpText.textContent = '❤️ 100 HP'; enemyHpText.textContent = '❤️ 100 HP';
    playerScoreSpan.textContent = '0'; enemyScoreSpan.textContent = '0';
    btnResponder.disabled = false;
    feedbackDiv.className = 'feedback info';
    feedbackDiv.innerHTML = '💡 Responda corretamente para atacar o inimigo!';
    carregarPergunta();
}

btnResponder.addEventListener('click', responder);
btnReiniciar.addEventListener('click', reiniciarJogo);
perguntasRestantes = embaralharArray([...PERGUNTAS]);
carregarPergunta();