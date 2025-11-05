/*
===========================================
ARQUIVO JAVASCRIPT MODULAR - ENTREGA III
===========================================
*/

// ===== 1. MÓDULO DE SPA E TEMPLATES (Requisito da Entrega III) =====

/**
 * Objeto que armazena os "templates" JavaScript.
 * Cada função retorna o HTML que será injetado na página.
 */
const templates = {
    home: function() {
        return `
            <section>
                <h2>Nossa Missão: Transformar Vidas</h2>
                <p>Acreditamos no poder da comunidade para criar um futuro mais brilhante para crianças e adolescentes. Nossa missão é oferecer acesso à educação de qualidade, programas esportivos e apoio psicossocial para jovens em situação de vulnerabilidade.</p>
                <img src="images/imagem-principal.jpg" alt="Crianças sorrindo enquanto estudam em uma sala de aula iluminada.">
            </section>
            <section>
                <h2>Nossos Valores</h2>
                <div class="grid-container">
                    <article style="grid-column: span 12; md:grid-column: span 4;">
                        <h3>Empatia</h3>
                        <p>Colocamo-nos no lugar do outro para entender suas necessidades e desafios.</p>
                    </article>
                    <article style="grid-column: span 12; md:grid-column: span 4;">
                        <h3>Transparência</h3>
                        <p>Prestamos contas de cada doação e projeto, com relatórios claros e acessíveis.</p>
                    </article>
                    <article style="grid-column: span 12; md:grid-column: span 4;">
                        <h3>Inovação</h3>
                        <p>Buscamos constantemente novas formas de educar, engajar e impactar positivamente a comunidade.</p>
                    </article>
                </div>
            </section>
        `;
    },
    
    projetos: function() {
        return `
            <section>
                <h2>Nossos Projetos em Andamento</h2>
                <div class="container-cards">
                    <article class="card">
                        <img src="images/projeto-educacao.jpg" alt="Voluntário ajudando um adolescente com o dever de casa." class="card-imagem">
                        <div class="card-conteudo">
                            <h3>Educação para Todos</h3>
                            <div class="container-badges">
                                <span class="badge badge-voluntariado">Voluntariado</span>
                                <span class="badge badge-doacao">Doação</span>
                            </div>
                            <p>Aulas de reforço escolar e oficinas de leitura para garantir que todos os jovens alcancem seu potencial acadêmico.</p>
                            <a href="#cadastro" onclick="carregarPagina('cadastro', event)" class="btn">Quero Ajudar</a>
                        </div>
                    </article>
                    <article class="card">
                        <img src="images/projeto-esporte.jpg" alt="Um time de jovens jogando futebol em uma quadra comunitária." class="card-imagem">
                        <div class="card-conteudo">
                            <h3>Esporte que Transforma</h3>
                            <div class="container-badges">
                                <span class="badge badge-voluntariado">Voluntariado</span>
                            </div>
                            <p>Ensinamos valores como disciplina e trabalho em equipe através de treinos de futebol, vôlei e artes marciais.</p>
                            <a href="#cadastro" onclick="carregarPagina('cadastro', event)" class="btn">Quero Ajudar</a>
                        </div>
                    </article>
                     <article class="card">
                        <img src="images/voluntarios-reunidos.jpg" alt="Grupo de voluntários diversos" class="card-imagem">
                        <div class="card-conteudo">
                            <h3>Cultura e Arte</h3>
                            <div class="container-badges">
                                 <span class="badge badge-doacao">Doação</span>
                            </div>
                            <p>Oficinas de teatro, música e desenho para estimular a criatividade e a expressão dos nossos jovens.</p>
                            <a href="#cadastro" onclick="carregarPagina('cadastro', event)" class="btn">Quero Ajudar</a>
                        </div>
                    </article>
                </div>
            </section>
        `;
    },
    
    cadastro: function() {
        return `
            <section>
                <h2>Faça Parte da Mudança</h2>
                
                <div id="form-messages"></div>

                <form id="form-voluntario" class="formulario">
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" required minlength="3" placeholder="Digite seu nome completo">

                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required placeholder="exemplo@email.com">

                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">

                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" placeholder="(00) 00000-0000">
                        
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" required>
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" placeholder="00000-000">

                        <label for="endereco">Endereço (Rua e Número):</label>
                        <input type="text" id="endereco" name="endereco" required>
                        
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>

                        <label for="estado">Estado:</label>
                        <select id="estado" name="estado" required>
                            <option value="">Selecione...</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            </select>
                    </fieldset>

                    <div class="botoes-form">
                        <button type="submit" class="btn">Enviar Cadastro</button>
                        <button type="reset" class="btn btn-secundario">Limpar</button>
                    </div>
                </form>
            </section>
        `;
    }
};

/**
 * Função principal do "roteador" da SPA.
 * Carrega o template correto no container <main id="app-content">.
 */
function carregarPagina(pagina, event) {
    if (event) {
        event.preventDefault(); // Impede o recarregamento da página
    }

    const appContent = document.getElementById('app-content');
    const navPrincipal = document.querySelector('.nav-principal');

    // Carrega o template correspondente
    if (templates[pagina]) {
        appContent.innerHTML = templates[pagina]();
        
        // Se a página for 'cadastro', inicializa os scripts do formulário
        if (pagina === 'cadastro') {
            inicializarFormulario();
        }
    } else {
        // Página não encontrada (fallback)
        appContent.innerHTML = templates.home();
    }
    
    // Fecha o menu hambúrguer (em modo mobile) após clicar
    if (navPrincipal.classList.contains('ativo')) {
        navPrincipal.classList.remove('ativo');
    }

    // Atualiza a URL (opcional, para refletir a navegação)
    window.location.hash = pagina;
}

// ===== 2. MÓDULO DE VALIDAÇÃO DE CONSISTÊNCIA (Requisito da Entrega III) =====

/**
 * Inicializa todos os scripts da página de cadastro
 * (máscaras e validação de envio).
 */
function inicializarFormulario() {
    // 2.1. Adiciona as máscaras de input
    adicionarMascaras();
    
    // 2.2. Adiciona o listener de envio (submit) do formulário
    const form = document.getElementById('form-voluntario');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão
        validarFormulario(form);
    });
}

/**
 * Função principal que valida o formulário.
 */
function validarFormulario(form) {
    const mensagensErro = [];
    
    // Seleciona os campos
    const cpf = form.querySelector('#cpf');
    const dataNasc = form.querySelector('#nascimento');

    // 1. Validação de Consistência do CPF
    if (!validarCPF(cpf.value)) {
        mensagensErro.push('O CPF digitado não é válido.');
        cpf.style.borderColor = 'var(--cor-erro)';
    } else {
        cpf.style.borderColor = 'var(--cor-sucesso)';
    }
    
    // 2. Validação de Consistência da Data de Nascimento (ex: maior de 16 anos)
    if (!validarIdade(dataNasc.value, 16)) {
        mensagensErro.push('Você deve ter pelo menos 16 anos para ser voluntário.');
        dataNasc.style.borderColor = 'var(--cor-erro)';
    } else {
        dataNasc.style.borderColor = 'var(--cor-sucesso)';
    }
    
    // 3. Verifica outros campos obrigatórios (nativo do HTML, mas bom reforçar)
    const camposObrigatorios = form.querySelectorAll('[required]');
    camposObrigatorios.forEach(campo => {
        if (!campo.value) {
            mensagensErro.push(`O campo "${campo.name}" é obrigatório.`);
        }
    });

    // Exibe os avisos ao usuário
    const divMensagens = document.getElementById('form-messages');
    if (mensagensErro.length > 0) {
        // Junta todos os erros em uma lista HTML
        divMensagens.innerHTML = '<strong>Por favor, corrija os seguintes erros:</strong><ul>' + 
                                  mensagensErro.map(erro => `<li>${erro}</li>`).join('') + 
                                '</ul>';
        divMensagens.className = 'alert-danger';
    } else {
        // Sucesso!
        divMensagens.innerHTML = '<strong>Cadastro enviado com sucesso!</strong> Em breve entraremos em contato.';
        divMensagens.className = 'alert-success';
        form.reset(); // Limpa o formulário
    }
}

/**
 * Função de utilidade para validar a lógica de um CPF.
 */
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;
    
    // Elimina CPFs inválidos conhecidos (ex: "111.111.111-11")
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Lógica de validação dos dígitos verificadores
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}

/**
 * Função de utilidade para validar se a data de nascimento é válida
 * e se a pessoa tem a idade mínima.
 */
function validarIdade(dataNasc, idadeMinima) {
    const dataNascimento = new Date(dataNasc);
    const dataHoje = new Date();
    
    // Calcula a idade
    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    const m = dataHoje.getMonth() - dataNascimento.getMonth();
    if (m < 0 || (m === 0 && dataHoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    
    return idade >= idadeMinima;
}


// ===== 3. MÓDULO DE FUNCIONALIDADES GERAIS (Menu Hambúrguer e Máscaras) =====

/**
 * Controla o menu hambúrguer.
 */
function inicializarMenuHamburguer() {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const navPrincipal = document.querySelector('.nav-principal');

    if (menuHamburguer) {
        menuHamburguer.addEventListener('click', () => {
            navPrincipal.classList.toggle('ativo');
        });
    }
}

/**
 * Adiciona as máscaras de input (CPF, Telefone, CEP).
 * Esta função precisa ser chamada DEPOIS que o template do formulário é carregado.
 */
function adicionarMascaras() {
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }
    
    const telInput = document.getElementById('telefone');
    if (telInput) {
        telInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }

    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }
}


// ===== 4. INICIALIZAÇÃO DA APLICAÇÃO =====

/**
 * Roda quando o DOM (a página) é carregado pela primeira vez.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o menu hambúrguer
    inicializarMenuHamburguer();
    
    // Verifica se há uma # (hash) na URL para carregar a página correta
    // ou carrega a 'home' por padrão.
    const paginaInicial = window.location.hash.replace('#', '') || 'home';
    carregarPagina(paginaInicial);
});