// ==================== 50 PERGUNTAS SOBRE ACENTUAÇÃO GRÁFICA ====================
// Fácil (1-20), Médio (21-35), Difícil (36-50)

const PERGUNTAS = [
    // ========== NÍVEL FÁCIL (1-20) ==========
    { nivel: "Fácil", enunciado: "1) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Café", "Cafe", "Cáfe", "Cafè", "Cafê"], correta: 0, explicacao: "Café é oxítona terminada em 'e' (ca-FÉ)." },
    { nivel: "Fácil", enunciado: "2) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Sofá", "Sófa", "Sofa", "Sofà", "Sofâ"], correta: 0, explicacao: "Sofá é oxítona terminada em 'a' (so-FÁ)." },
    { nivel: "Fácil", enunciado: "3) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Lâmpada", "Lampada", "Lámpada", "Lampáda", "Lampadá"], correta: 0, explicacao: "Lâmpada é proparoxítona (LÂM-pa-da). Todas as proparoxítonas são acentuadas." },
    { nivel: "Fácil", enunciado: "4) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Médico", "Medico", "Medicó", "Médicô", "Medicô"], correta: 0, explicacao: "Médico é proparoxítona (MÉ-di-co)." },
    { nivel: "Fácil", enunciado: "5) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Pá", "Pa", "Pà", "Pâ", "Pã"], correta: 0, explicacao: "Pá é monossílabo tônico terminado em 'a'." },
    { nivel: "Fácil", enunciado: "6) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Fé", "Fe", "Fè", "Fê", "Fẽ"], correta: 0, explicacao: "Fé é monossílabo tônico terminado em 'e'." },
    { nivel: "Fácil", enunciado: "7) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Dó", "Do", "Dò", "Dô", "Dõ"], correta: 0, explicacao: "Dó é monossílabo tônico terminado em 'o'." },
    { nivel: "Fácil", enunciado: "8) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Alguém", "Alguem", "Álguem", "Alguèm", "Alguêm"], correta: 0, explicacao: "Alguém é oxítona terminada em 'em'." },
    { nivel: "Fácil", enunciado: "9) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Também", "Tambem", "Támbem", "Tambèm", "Tambêm"], correta: 0, explicacao: "Também é oxítona terminada em 'em'." },
    { nivel: "Fácil", enunciado: "10) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Túnel", "Tunel", "Tunél", "Túnèl", "Tunêl"], correta: 0, explicacao: "Túnel é paroxítona terminada em 'l'." },
    { nivel: "Fácil", enunciado: "11) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Açúcar", "Acucar", "Açucár", "Açúcàr", "Acúcar"], correta: 0, explicacao: "Açúcar é paroxítona terminada em 'r'." },
    { nivel: "Fácil", enunciado: "12) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Hífen", "Hifen", "Hifén", "Hífèn", "Hifên"], correta: 0, explicacao: "Hífen é paroxítona terminada em 'n'." },
    { nivel: "Fácil", enunciado: "13) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Tórax", "Torax", "Toráx", "Tóráx", "Toràx"], correta: 0, explicacao: "Tórax é paroxítona terminada em 'x'." },
    { nivel: "Fácil", enunciado: "14) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Lápis", "Lapis", "Lapís", "Lápís", "Lapìs"], correta: 0, explicacao: "Lápis é paroxítona terminada em 'i' seguido de 's'." },
    { nivel: "Fácil", enunciado: "15) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Vírus", "Virus", "Virús", "Vìrus", "Virûs"], correta: 0, explicacao: "Vírus é paroxítona terminada em 'u' seguido de 's'." },
    { nivel: "Fácil", enunciado: "16) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Bênção", "Bencao", "Bêncão", "Bencão", "Bênçaõ"], correta: 0, explicacao: "Bênção é paroxítona terminada em ditongo 'ão'." },
    { nivel: "Fácil", enunciado: "17) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Órfão", "Orfao", "Órfão", "Orfão", "Órfãos"], correta: 0, explicacao: "Órfão é paroxítona terminada em ditongo 'ão'." },
    { nivel: "Fácil", enunciado: "18) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["História", "Historia", "História", "Historía", "Historìa"], correta: 0, explicacao: "História é paroxítona terminada em ditongo crescente 'ia'." },
    { nivel: "Fácil", enunciado: "19) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Série", "Serie", "Sèrie", "Seríe", "Seriè"], correta: 0, explicacao: "Série é paroxítona terminada em ditongo crescente 'ie'." },
    { nivel: "Fácil", enunciado: "20) Qual palavra está acentuada CORRETAMENTE?", opcoes: ["Área", "Area", "Aréa", "Arèa", "Arêa"], correta: 0, explicacao: "Área é paroxítona terminada em ditongo crescente 'ea'." },

    // ========== NÍVEL MÉDIO (21-35) ==========
    { nivel: "Médio", enunciado: "21) Qual regra justifica o acento em 'café'?", opcoes: ["Oxítona terminada em 'e'", "Paroxítona terminada em 'e'", "Proparoxítona", "Monossílabo tônico", "Hiato"], correta: 0, explicacao: "Café é oxítona terminada em 'e'." },
    { nivel: "Médio", enunciado: "22) Qual regra justifica o acento em 'túnel'?", opcoes: ["Oxítona terminada em 'l'", "Paroxítona terminada em 'l'", "Proparoxítona", "Monossílabo tônico", "Hiato"], correta: 1, explicacao: "Túnel é paroxítona terminada em 'l'." },
    { nivel: "Médio", enunciado: "23) Qual regra justifica o acento em 'lâmpada'?", opcoes: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílabo tônico", "Hiato"], correta: 2, explicacao: "Lâmpada é proparoxítona. Todas as proparoxítonas são acentuadas." },
    { nivel: "Médio", enunciado: "24) Qual regra justifica o acento em 'pá'?", opcoes: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílabo tônico", "Hiato"], correta: 3, explicacao: "Pá é monossílabo tônico terminado em 'a'." },
    { nivel: "Médio", enunciado: "25) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Ideia", "Herói", "Céu", "Anéis", "Troféu"], correta: 0, explicacao: "Ideia é paroxítona com ditongo 'ei' e não é mais acentuada." },
    { nivel: "Médio", enunciado: "26) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Jiboia", "Herói", "Céu", "Anéis", "Troféu"], correta: 0, explicacao: "Jiboia é paroxítona com ditongo 'oi' e não é mais acentuada." },
    { nivel: "Médio", enunciado: "27) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Voo", "Herói", "Céu", "Anéis", "Troféu"], correta: 0, explicacao: "Voo (vogais repetidas 'oo') não é mais acentuada." },
    { nivel: "Médio", enunciado: "28) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Saída", "Saida", "Saìda", "Saidá", "Saídà"], correta: 0, explicacao: "Saída tem hiato com 'i' tônico (2ª vogal) - acentuada." },
    { nivel: "Médio", enunciado: "29) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Baú", "Bau", "Baù", "Baû", "Baũ"], correta: 0, explicacao: "Baú tem hiato com 'u' tônico (2ª vogal) - acentuada." },
    { nivel: "Médio", enunciado: "30) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Juíza", "Juiza", "Juìza", "Juizá", "Juízà"], correta: 0, explicacao: "Juíza tem hiato com 'i' tônico (2ª vogal) - acentuada." },
    { nivel: "Médio", enunciado: "31) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Saúde", "Saude", "Saùde", "Saudé", "Saúdè"], correta: 0, explicacao: "Saúde tem hiato com 'u' tônico (2ª vogal) - acentuada." },
    { nivel: "Médio", enunciado: "32) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Grajaú", "Grajaù", "Grajaû", "Grajaũ", "Grajaù"], correta: 0, explicacao: "Grajaú tem hiato com 'u' tônico (2ª vogal) - acentuada." },
    { nivel: "Médio", enunciado: "33) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Reúno", "Reuno", "Reùno", "Reunó", "Réuno"], correta: 0, explicacao: "Reúno tem hiato com 'u' tônico (2ª vogal) - acentuada." },
    { nivel: "Médio", enunciado: "34) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Anéis", "Aneis", "Aneìs", "Áneis", "Aneís"], correta: 0, explicacao: "Anéis é oxítona com ditongo aberto 'éi' - acentuada." },
    { nivel: "Médio", enunciado: "35) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Troféu", "Trofeu", "Trófeu", "Trofèu", "Trofêu"], correta: 0, explicacao: "Troféu é oxítona com ditongo aberto 'éu' - acentuada." },

    // ========== NÍVEL DIFÍCIL (36-50) ==========
    { nivel: "Difícil", enunciado: "36) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Eles têm", "Eles tem", "Eles tèm", "Eles têm", "Eles tẽm"], correta: 0, explicacao: "Têm (plural) tem acento circunflexo para diferenciar de 'tem' (singular)." },
    { nivel: "Difícil", enunciado: "37) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Eles vêm", "Eles vem", "Eles vèm", "Eles vêm", "Eles vẽm"], correta: 0, explicacao: "Vêm (plural) tem acento circunflexo para diferenciar de 'vem' (singular)." },
    { nivel: "Difícil", enunciado: "38) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Pôr (verbo)", "Por (verbo)", "Pòr (verbo)", "Põr (verbo)", "Pór (verbo)"], correta: 0, explicacao: "Pôr (verbo) tem acento circunflexo para diferenciar de 'por' (preposição)." },
    { nivel: "Difícil", enunciado: "39) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Pôde (passado)", "Pode (passado)", "Pòde (passado)", "Póde (passado)", "Põde (passado)"], correta: 0, explicacao: "Pôde (passado) tem acento circunflexo para diferenciar de 'pode' (presente)." },
    { nivel: "Difícil", enunciado: "40) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Pera (fruta)", "Pôr (verbo)", "Pôde (passado)", "Têm (plural)", "Vêm (plural)"], correta: 0, explicacao: "Pera (fruta) perdeu o acento após o Novo Acordo." },
    { nivel: "Difícil", enunciado: "41) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Polo (substantivo)", "Pôr (verbo)", "Pôde (passado)", "Têm (plural)", "Vêm (plural)"], correta: 0, explicacao: "Polo (substantivo) perdeu o acento após o Novo Acordo." },
    { nivel: "Difícil", enunciado: "42) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Pelo (substantivo)", "Pôr (verbo)", "Pôde (passado)", "Têm (plural)", "Vêm (plural)"], correta: 0, explicacao: "Pelo (substantivo) perdeu o acento após o Novo Acordo." },
    { nivel: "Difícil", enunciado: "43) Qual palavra NÃO é mais acentuada após o Novo Acordo Ortográfico?", opcoes: ["Para (verbo)", "Pôr (verbo)", "Pôde (passado)", "Têm (plural)", "Vêm (plural)"], correta: 0, explicacao: "Para (verbo) perdeu o acento após o Novo Acordo." },
    { nivel: "Difícil", enunciado: "44) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Feiura", "Feiúra", "Feiùra", "Fêiura", "Feiûra"], correta: 0, explicacao: "Feiura não é acentuada porque o 'u' forma hiato com ditongo anterior." },
    { nivel: "Difícil", enunciado: "45) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Baiuca", "Baiúca", "Baiùca", "Báiuça", "Baiûca"], correta: 0, explicacao: "Baiuca não é acentuada porque o 'u' forma hiato com ditongo anterior." },
    { nivel: "Difícil", enunciado: "46) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Rainha", "Raínha", "Raìnha", "Ráinha", "Raînha"], correta: 0, explicacao: "Rainha não é acentuada porque o 'i' é seguido de 'nh'." },
    { nivel: "Difícil", enunciado: "47) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Juiz", "Juíz", "Juìz", "Júiz", "Juîz"], correta: 0, explicacao: "Juiz não é acentuado porque o 'i' é seguido de 'z' (não é a 2ª vogal isolada)." },
    { nivel: "Difícil", enunciado: "48) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Cairdes", "Caírdes", "Caìrdes", "Cáirdes", "Caîrdes"], correta: 0, explicacao: "Cairdes não é acentuada porque o 'i' é seguido de 'r'." },
    { nivel: "Difícil", enunciado: "49) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Abençoo", "Abençôo", "Abençoô", "Abençóo", "Abençoò"], correta: 0, explicacao: "Abençoo (vogais repetidas 'oo') não é mais acentuada." },
    { nivel: "Difícil", enunciado: "50) Qual palavra está CORRETA quanto à acentuação?", opcoes: ["Perdoo", "Perdôo", "Perdoô", "Perdóo", "Perdoò"], correta: 0, explicacao: "Perdoo (vogais repetidas 'oo') não é mais acentuada." }
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
        feedbackDiv.innerHTML = `❌ ERROU! O Inimigo dos Acentos contra-atacou! -20 HP em você!<br>📘 ${perguntaAtual.explicacao}`;
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
        ? '🏆 Parabéns! Você derrotou o Inimigo dos Acentos! 🏆'
        : '😈 O Inimigo dos Acentos venceu! Estude mais e tente novamente!';
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