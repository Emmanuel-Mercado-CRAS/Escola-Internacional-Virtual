// ==================== DADOS DAS SÉRIES ====================
const dadosSeries = {
    "modelo": {
        nome: "📖 Série Modelo - Apresentação do Curso",
        descricao: "Entenda como funciona a Escola Internacional Virtual e nosso método de ensino.",
        materias: [],
        // 👇 VÍDEO LOCAL DA SÉRIE MODELO 👇
        video: "videos/video-modelo.mp4",
        tituloVideo: "Apresentação da Escola Internacional Virtual",
        jogos: [
            { nome: "Duelo dos Porquês", link: "duelo-porques.html" },
            { nome: "Duelo dos Acentos", link: "duelo-acentos.html" },
            { nome: "Duelo das Crases", link: "duelo-crases.html" }
        ]
    },
    "1ano-fundamental": {
        nome: "1º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o primeiro ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Artes", "Educação Física"],
        video: "videos/video-1ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 1º Ano do Ensino Fundamental",
        jogos: []
    },
    "2ano-fundamental": {
        nome: "2º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o segundo ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Artes", "Educação Física"],
        video: "videos/video-2ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 2º Ano do Ensino Fundamental",
        jogos: []
    },
    "3ano-fundamental": {
        nome: "3º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o terceiro ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Artes", "Educação Física"],
        video: "videos/video-3ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 3º Ano do Ensino Fundamental",
        jogos: []
    },
    "4ano-fundamental": {
        nome: "4º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o quarto ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Artes", "Educação Física"],
        video: "videos/video-4ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 4º Ano do Ensino Fundamental",
        jogos: []
    },
    "5ano-fundamental": {
        nome: "5º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o quinto ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Artes", "Educação Física"],
        video: "videos/video-5ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 5º Ano do Ensino Fundamental",
        jogos: []
    },
    "6ano-fundamental": {
        nome: "6º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o sexto ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês", "Artes", "Educação Física"],
        video: "videos/video-6ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 6º Ano do Ensino Fundamental",
        jogos: []
    },
    "7ano-fundamental": {
        nome: "7º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o sétimo ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês", "Artes", "Educação Física"],
        video: "videos/video-7ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 7º Ano do Ensino Fundamental",
        jogos: []
    },
    "8ano-fundamental": {
        nome: "8º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o oitavo ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês", "Artes", "Educação Física"],
        video: "videos/video-8ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 8º Ano do Ensino Fundamental",
        jogos: []
    },
    "9ano-fundamental": {
        nome: "9º Ano - Ensino Fundamental",
        descricao: "Conteúdo para o nono ano do Ensino Fundamental.",
        materias: ["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês", "Artes", "Educação Física"],
        video: "videos/video-9ano-fundamental.mp4",
        tituloVideo: "Boas-vindas ao 9º Ano do Ensino Fundamental",
        jogos: []
    },
    "1ano-medio": {
        nome: "1º Ano - Ensino Médio",
        descricao: "Conteúdo para o primeiro ano do Ensino Médio.",
        materias: ["Português", "Matemática", "Física", "Química", "Biologia", "História", "Geografia", "Filosofia", "Sociologia", "Inglês", "Redação"],
        video: "videos/video-1ano-medio.mp4",
        tituloVideo: "Boas-vindas ao 1º Ano do Ensino Médio",
        jogos: []
    },
    "2ano-medio": {
        nome: "2º Ano - Ensino Médio",
        descricao: "Conteúdo para o segundo ano do Ensino Médio.",
        materias: ["Português", "Matemática", "Física", "Química", "Biologia", "História", "Geografia", "Filosofia", "Sociologia", "Inglês", "Redação"],
        video: "videos/video-2ano-medio.mp4",
        tituloVideo: "Boas-vindas ao 2º Ano do Ensino Médio",
        jogos: []
    },
    "3ano-medio": {
        nome: "3º Ano - Ensino Médio",
        descricao: "Conteúdo para o terceiro ano do Ensino Médio. Prepare-se para o ENEM e vestibulares!",
        materias: ["Português", "Matemática", "Física", "Química", "Biologia", "História", "Geografia", "Filosofia", "Sociologia", "Inglês", "Redação", "Preparatório ENEM"],
        video: "videos/video-3ano-medio.mp4",
        tituloVideo: "Boas-vindas ao 3º Ano do Ensino Médio",
        jogos: [
            { nome: "Duelo dos Porquês", link: "duelo-porques.html" },
            { nome: "Duelo dos Acentos", link: "duelo-acentos.html" },
            { nome: "Duelo das Crases", link: "duelo-crases.html" }
        ]
    }
};

// ==================== FUNÇÃO PARA RENDERIZAR CONTEÚDO ====================
function renderizarConteudo(serieId) {
    const contentDiv = document.getElementById('dynamic-content');
    const serie = dadosSeries[serieId];

    if (!serie) {
        contentDiv.innerHTML = `<div class="loading">⚠️ Série não encontrada.</div>`;
        return;
    }

    // Monta o HTML das matérias
    let materiasHTML = '';
    serie.materias.forEach(materia => {
        materiasHTML += `
            <div class="materia-card">
                <span class="materia-icon">📘</span>
                <h4>${materia}</h4>
            </div>
        `;
    });

    // 👇 MONTA O HTML DO VÍDEO LOCAL 👇
    let videoHTML = '';
    if (serie.video) {
        videoHTML = `
            <h3 style="margin: 1.5rem 0 1rem; color: #1a2a3a;">🎬 Vídeo da Série</h3>
            <div class="video-item">
                <h4>${serie.tituloVideo}</h4>
                <div class="video-container">
                    <video controls preload="metadata" poster="">
                        <source src="${serie.video}" type="video/mp4">
                        Seu navegador não suporta a tag de vídeo.
                        <a href="${serie.video}" download>Clique aqui para baixar o vídeo</a>
                    </video>
                </div>
            </div>
        `;
    }

    // Monta o HTML dos jogos (se houver)
    let jogosHTML = '';
    if (serie.jogos && serie.jogos.length > 0) {
        jogosHTML = `
            <div class="jogos-section">
                <h3>🎮 Jogos Disponíveis</h3>
                <div class="jogos-grid">
                    ${serie.jogos.map(jogo => `
                        <a href="${jogo.link}" class="jogo-card">
                            ⚔️ ${jogo.nome}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // HTML completo
    const html = `
        <div class="serie-header">
            <h2>${serie.nome}</h2>
            <p>${serie.descricao}</p>
        </div>

        ${videoHTML}

        <h3 style="margin: 1.5rem 0 1rem; color: #1a2a3a;">📚 Matérias</h3>
        <div class="materias-grid">
            ${materiasHTML}
        </div>

        ${jogosHTML}
    `;

    contentDiv.innerHTML = html;
}

// ==================== ATIVAR BOTÃO ====================
function ativarBotao(serieId) {
    document.querySelectorAll('.serie-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.serie === serieId);
    });
}

// ==================== EVENTOS ====================
document.querySelectorAll('.serie-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const serieId = this.dataset.serie;
        renderizarConteudo(serieId);
        ativarBotao(serieId);
        document.getElementById('content-area').scrollIntoView({ behavior: 'smooth' });
    });
});

// ==================== CARREGAR SÉRIE MODELO AO ABRIR ====================
window.addEventListener('DOMContentLoaded', () => {
    renderizarConteudo('modelo');
    ativarBotao('modelo');
});