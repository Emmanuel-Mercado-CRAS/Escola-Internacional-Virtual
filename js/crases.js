// ==================== 50 PERGUNTAS SOBRE CRASE ====================
// Fácil (1-20), Médio (21-35), Difícil (36-50)

const PERGUNTAS = [
    // ========== NÍVEL FÁCIL (1-20) ==========
    { nivel: "Fácil", enunciado: "1) Complete: 'Vou ___ escola.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Vou a + a escola = Vou à escola (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "2) Complete: 'Entreguei o livro ___ aluna.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Entreguei a + a aluna = Entreguei à aluna (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "3) Complete: 'Refiro-me ___ crianças.'", opcoes: ["a", "à", "há", "as", "às"], correta: 4, explicacao: "Refiro-me a + as crianças = Refiro-me às crianças (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "4) Complete: 'Cheguei ___ repartição.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Cheguei a + a repartição = Cheguei à repartição (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "5) Complete: 'Fui ___ Grécia no passado.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Fui a + a Grécia = Fui à Grécia (crase obrigatória, Grécia aceita artigo)." },
    { nivel: "Fácil", enunciado: "6) Complete: 'Assisti ___ cerimônia.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Assisti a + a cerimônia = Assisti à cerimônia (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "7) Complete: 'Obedeça ___ senhora.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Obedeça a + a senhora = Obedeça à senhora (senhora aceita artigo - exceção dos pronomes de tratamento)." },
    { nivel: "Fácil", enunciado: "8) Complete: 'Estou ___ espera de notícias.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "À espera de é locução prepositiva feminina (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "9) Complete: '___ noite, todos os gatos são pardos.'", opcoes: ["A", "À", "Há", "As", "Às"], correta: 1, explicacao: "À noite é locução adverbial feminina (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "10) Complete: '___ vezes, esqueço as chaves.'", opcoes: ["A", "À", "Há", "As", "Às"], correta: 4, explicacao: "Às vezes é locução adverbial feminina plural (crase obrigatória)." },
    { nivel: "Fácil", enunciado: "11) Complete: 'Fui ___ pé para casa.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "A pé é locução adverbial masculina - crase PROIBIDA (não se usa antes de palavra masculina)." },
    { nivel: "Fácil", enunciado: "12) Complete: 'Comecei ___ estudar cedo.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Antes de verbo (estudar), a crase é PROIBIDA." },
    { nivel: "Fácil", enunciado: "13) Complete: 'Refiro-me ___ Vossa Excelência.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Pronomes de tratamento como 'Vossa Excelência' NÃO aceitam artigo - crase PROIBIDA." },
    { nivel: "Fácil", enunciado: "14) Complete: 'Fui ___ Brasília nas férias.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Brasília não aceita artigo - crase PROIBIDA." },
    { nivel: "Fácil", enunciado: "15) Complete: 'Refiro-me ___ esta moça.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Antes de 'esta', a crase é PROIBIDA (pronome demonstrativo 'esta' não aceita artigo 'a')." },
    { nivel: "Fácil", enunciado: "16) Complete: 'Refiro-me ___ alguém.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Antes de pronome indefinido 'alguém', a crase é PROIBIDA." },
    { nivel: "Fácil", enunciado: "17) Complete: 'Fui ___ uma festa.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Antes de artigo indefinido 'uma', a crase é PROIBIDA." },
    { nivel: "Fácil", enunciado: "18) Complete: 'Ficaram cara ___ cara.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Entre palavras repetidas, a crase é PROIBIDA." },
    { nivel: "Fácil", enunciado: "19) Complete: 'Entreguei o presente ___ Maria.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Antes de nome próprio feminino, a crase é FACULTATIVA. Usar 'à' é correto." },
    { nivel: "Fácil", enunciado: "20) Complete: 'Refiro-me ___ minha amiga.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Antes de pronome possessivo feminino, a crase é FACULTATIVA. Usar 'à' é correto." },

    // ========== NÍVEL MÉDIO (21-35) ==========
    { nivel: "Médio", enunciado: "21) Qual frase tem crase OBRIGATÓRIA?", opcoes: ["Vou à escola", "Vou a pé", "Comecei a estudar", "Refiro-me a ela", "Fui a Brasília"], correta: 0, explicacao: "Vou a + a escola = Vou à escola (preposição + artigo)." },
    { nivel: "Médio", enunciado: "22) Qual frase tem crase PROIBIDA?", opcoes: ["Vou à escola", "Refiro-me à moça", "Vou a pé", "Assisti à peça", "Cheguei à cidade"], correta: 2, explicacao: "A pé é locução masculina - crase proibida." },
    { nivel: "Médio", enunciado: "23) Qual frase tem crase FACULTATIVA?", opcoes: ["Vou à escola", "Refiro-me a Maria", "Vou a pé", "Assisti à peça", "Cheguei à cidade"], correta: 1, explicacao: "Antes de nome próprio feminino (Maria), a crase é facultativa." },
    { nivel: "Médio", enunciado: "24) Qual é a regra da crase em 'Vou à escola'?", opcoes: ["Locução feminina", "Preposição a + artigo a", "Crase facultativa", "Crase proibida", "Pronome demonstrativo"], correta: 1, explicacao: "Crase = preposição 'a' + artigo 'a'." },
    { nivel: "Médio", enunciado: "25) Qual é a regra da crase em 'à noite'?", opcoes: ["Preposição a + artigo a", "Locução adverbial feminina", "Crase facultativa", "Crase proibida", "Pronome demonstrativo"], correta: 1, explicacao: "À noite é locução adverbial feminina." },
    { nivel: "Médio", enunciado: "26) Qual é a regra da crase em 'à espera de'?", opcoes: ["Preposição a + artigo a", "Locução prepositiva feminina", "Crase facultativa", "Crase proibida", "Pronome demonstrativo"], correta: 1, explicacao: "À espera de é locução prepositiva feminina." },
    { nivel: "Médio", enunciado: "27) Complete: 'Referi-me ___ aquela moça.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Referi-me a + aquela moça = Referi-me àquela moça (crase com pronome demonstrativo)." },
    { nivel: "Médio", enunciado: "28) Complete: 'Não dei importância ___ aquilo.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Não dei a + aquilo = Não dei àquilo (crase com pronome demonstrativo)." },
    { nivel: "Médio", enunciado: "29) Complete: 'A moça ___ qual me referi chegou.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "A moça a + a qual me referi = A moça à qual me referi (crase com pronome relativo)." },
    { nivel: "Médio", enunciado: "30) Complete: 'Fiz alusão ___ que gesticulava.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Fiz alusão a + a que gesticulava = Fiz alusão à que gesticulava ('a' é pronome demonstrativo = aquela)." },
    { nivel: "Médio", enunciado: "31) Complete: 'Emprestei o livro ___ aquela amiga.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Emprestei a + aquela amiga = Emprestei àquela amiga." },
    { nivel: "Médio", enunciado: "32) Complete: 'Fui ___ Bahia.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Bahia aceita artigo (A Bahia é bonita) - crase obrigatória." },
    { nivel: "Médio", enunciado: "33) Complete: 'Fui ___ São Paulo.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "São Paulo (masculino) não aceita artigo feminino 'a' - crase PROIBIDA." },
    { nivel: "Médio", enunciado: "34) Complete: 'Fui ___ Roma.'", opcoes: ["a", "à", "há", "as", "às"], correta: 0, explicacao: "Roma sozinha não aceita artigo (Voltei de Roma) - crase PROIBIDA." },
    { nivel: "Médio", enunciado: "35) Complete: 'Fui ___ Roma do Coliseu.'", opcoes: ["a", "à", "há", "as", "às"], correta: 1, explicacao: "Roma determinada (Roma do Coliseu) aceita artigo - crase OBRIGATÓRIA." },

    // ========== NÍVEL DIFÍCIL (36-50) ==========
    { nivel: "Difícil", enunciado: "36) Em 'Fui à Bahia', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 0, explicacao: "Bahia aceita artigo - crase obrigatória." },
    { nivel: "Difícil", enunciado: "37) Em 'Fui a Brasília', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 2, explicacao: "Brasília não aceita artigo - crase proibida." },
    { nivel: "Difícil", enunciado: "38) Em 'Refiro-me à Maria', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 1, explicacao: "Antes de nome próprio feminino, a crase é facultativa." },
    { nivel: "Difícil", enunciado: "39) Em 'Refiro-me à minha amiga', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 1, explicacao: "Antes de pronome possessivo feminino, a crase é facultativa." },
    { nivel: "Difícil", enunciado: "40) Em 'Fui até à praia', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 1, explicacao: "Depois da preposição 'até', a crase é facultativa." },
    { nivel: "Difícil", enunciado: "41) Em 'Comecei a estudar', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 2, explicacao: "Antes de verbo, a crase é proibida." },
    { nivel: "Difícil", enunciado: "42) Em 'Fui a pé', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 2, explicacao: "Palavra masculina (pé) - crase proibida." },
    { nivel: "Difícil", enunciado: "43) Em 'Refiro-me a Vossa Excelência', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 2, explicacao: "Pronomes de tratamento (exceto senhora/senhorita/madame) não aceitam artigo - crase proibida." },
    { nivel: "Difícil", enunciado: "44) Em 'Ficaram cara a cara', a crase é:", opcoes: ["Obrigatória", "Facultativa", "Proibida", "Errada", "Desnecessária"], correta: 2, explicacao: "Entre palavras repetidas, a crase é proibida." },
    { nivel: "Difícil", enunciado: "45) Qual frase está CORRETA?", opcoes: ["Vou à escola", "Vou a escola", "Vou há escola", "Vou às escola", "Vou as escola"], correta: 0, explicacao: "Crase obrigatória: Vou a + a escola = Vou à escola." },
    { nivel: "Difícil", enunciado: "46) Qual frase está CORRETA?", opcoes: ["Vou a pé", "Vou à pé", "Vou há pé", "Vou às pé", "Vou as pé"], correta: 0, explicacao: "Palavra masculina - crase proibida." },
    { nivel: "Difícil", enunciado: "47) Qual frase está CORRETA?", opcoes: ["Comecei a estudar", "Comecei à estudar", "Comecei há estudar", "Comecei às estudar", "Comecei as estudar"], correta: 0, explicacao: "Antes de verbo - crase proibida." },
    { nivel: "Difícil", enunciado: "48) Qual frase está CORRETA?", opcoes: ["Fui a Brasília", "Fui à Brasília", "Fui há Brasília", "Fui às Brasília", "Fui as Brasília"], correta: 0, explicacao: "Brasília não aceita artigo - crase proibida." },
    { nivel: "Difícil", enunciado: "49) Qual frase está CORRETA?", opcoes: ["Referi-me àquela moça", "Referi-me aquela moça", "Referi-me há aquela moça", "Referi-me as aquela moça", "Referi-me às aquela moça"], correta: 0, explicacao: "Crase obrigatória: Referi-me a + aquela moça = Referi-me àquela moça." },
    { nivel: "Difícil", enunciado: "50) Qual frase está CORRETA?", opcoes: ["Estou à espera de notícias", "Estou a espera de notícias", "Estou há espera de notícias", "Estou as espera de notícias", "Estou às espera de notícias"], correta: 0, explicacao: "À espera de é locução prepositiva feminina - crase obrigatória." }
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
        feedbackDiv.innerHTML = `❌ ERROU! O Inimigo das Crases contra-atacou! -20 HP em você!<br>📘 ${perguntaAtual.explicacao}`;
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
        ? '🏆 Parabéns! Você derrotou o Inimigo das Crases! 🏆'
        : '😈 O Inimigo das Crases venceu! Estude mais e tente novamente!';
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