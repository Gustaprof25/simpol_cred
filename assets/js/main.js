/* ========================================
   FORMULÁRIO DE CONTATO
======================================== */

const leadForm = document.getElementById('leadForm');

if (leadForm) {

    leadForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const nome =
            document.getElementById('nome').value;

        const telefone =
            document.getElementById('telefone').value;

        const cidade =
            document.getElementById('cidade').value;

        const servico =
            document.getElementById('servico').value;

        const mensagem = `
*Novo Lead - Site Simpol Cred*

👤 Nome: ${nome}

📱 Telefone: ${telefone}

📍 Cidade: ${cidade}

📋 Serviço: ${servico}
`;

        const url =
            `https://wa.me/5563992093340?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');

    });

}

/* ========================================
   NAVBAR SCROLL
======================================== */

window.addEventListener('scroll', () => {

    const navbar =
        document.querySelector('.custom-navbar');

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});

/* ========================================
   ALTERAÇÃO ÍCONE SERVIÇO
======================================== */

const servico =
    document.getElementById('servico');

if (servico) {

    servico.addEventListener('change', function () {

        const icone =
            this.parentElement.querySelector('i');

        if (!icone) return;

        switch (this.value) {

            case 'cartao':
                icone.className =
                    'fas fa-credit-card';
                break;

            case 'fgts':
                icone.className =
                    'fas fa-piggy-bank';
                break;

            case 'consignado':
                icone.className =
                    'fas fa-hand-holding-usd';
                break;

            case 'financiamento':
                icone.className =
                    'fas fa-car';
                break;

            case 'seguro':
                icone.className =
                    'fas fa-shield-alt';
                break;
            case 'solar':
                icone.className = 'fas fa-solar-panel';
                break;

            case 'juridico':
                icone.className = 'fas fa-scale-balanced';
                break;

            case 'municipal':
                icone.className = 'fas fa-building-columns';
                break;

            case 'estadual':
                icone.className = 'fas fa-landmark';
                break;

            case 'federal':
                icone.className = 'fas fa-landmark-dome';
                break;

            case 'inss':
                icone.className = 'fas fa-user-shield';
                break;

            case 'igeprev':
                icone.className = 'fas fa-file-shield';
                break;
            case 'clt':
                icone.className = 'fas fa-id-card';
                break;
            case 'consorcio':
                icone.className = 'fas fa-handshake';
                break;

            default:
                icone.className =
                    'fas fa-briefcase';

        }

    });

}

/* ========================================
   ALTERNAR MODO DO SIMULADOR
======================================== */

let modoAtual = 'receber';

const botoesModo =
    document.querySelectorAll('.modo-btn');

botoesModo.forEach(btn => {

    btn.addEventListener('click', () => {

        botoesModo.forEach(b =>
            b.classList.remove('active')
        );

        btn.classList.add('active');

        modoAtual =
            btn.dataset.modo;

        const label =
            document.getElementById('labelValor');

        const input =
            document.getElementById('valorPrincipal');

        if (!label || !input) return;

        if (modoAtual === 'receber') {

            label.innerHTML =
                'Quanto deseja receber?';

            input.placeholder =
                'Ex: 2000';

        } else {

            label.innerHTML =
                'Qual seu limite disponível?';

            input.placeholder =
                'Ex: 2500';

        }

    });

});

/* ========================================
   TABELA DE TAXAS
======================================== */

const taxas = {

    palmas: {
        3: 8,
        6: 10,
        9: 12,
        12: 15,
        15: 17,
        18: 19,
        21: 21
    },

    araguaina: {
        3: 9,
        6: 11,
        9: 13,
        12: 16,
        15: 18,
        18: 20,
        21: 22
    },

    gurupi: {
        3: 8,
        6: 10,
        9: 12,
        12: 14,
        15: 16,
        18: 18,
        21: 20
    }

};

/* ========================================
   SIMULADOR
======================================== */

const btnCalcular =
    document.getElementById('btnCalcular');

if (btnCalcular) {

    btnCalcular.addEventListener('click', function () {

        const nome =
            document.getElementById('simNome').value;

        const cpf =
            document.getElementById('simCpf').value;

        const telefone =
            document.getElementById('simTelefone').value;

        const cidade =
            document.getElementById('simCidade').value;

        const parcelas =
            document.getElementById('simParcelas').value;

        const valor =
            parseFloat(
                document.getElementById('valorPrincipal').value
            );

        if (
            !nome ||
            !cpf ||
            !telefone ||
            !cidade ||
            !parcelas ||
            !valor
        ) {

            alert('Preencha todos os campos.');

            return;
        }

        if (
            !taxas[cidade] ||
            !taxas[cidade][parcelas]
        ) {

            alert('Taxa não encontrada.');

            return;
        }

        const taxa =
            taxas[cidade][parcelas];

        let resultado;

        if (modoAtual === 'receber') {

            resultado =
                valor * (1 + taxa / 100);

            document.querySelector(
                '.resultado-simulacao p'
            ).innerHTML =
                'Este é o limite aproximado que você precisa ter disponível no cartão.';

        } else {

            resultado =
                valor / (1 + taxa / 100);

            document.querySelector(
                '.resultado-simulacao p'
            ).innerHTML =
                'Este é o valor aproximado que você pode receber.';

        }

        document.querySelector(
            '.valor-resultado'
        ).innerHTML =
            resultado.toLocaleString(
                'pt-BR',
                {
                    style: 'currency',
                    currency: 'BRL'
                }
            );

        document.getElementById(
            'resultadoSimulacao'
        ).style.display = 'block';

        const mensagem =
            `*Nova Simulação Simpol Cred*

👤 Nome: ${nome}
📄 CPF: ${cpf}
📱 Telefone: ${telefone}
📍 Cidade: ${cidade}
💳 Parcelas: ${parcelas}x

${modoAtual === 'receber'
                ? `💰 Valor Desejado: ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                : `💳 Limite Disponível: ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}

✅ Resultado: ${resultado.toLocaleString(
                    'pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }
                )}
`;

        const url =
            `https://wa.me/5563992093340?text=${encodeURIComponent(mensagem)}`;

        const btnWhatsapp =
            document.getElementById(
                'btnWhatsappResultado'
            );

        if (btnWhatsapp) {

            btnWhatsapp.href = url;

        }

    });

}

const btnMostrar =
    document.getElementById(
        'btnMostrarServicos'
    );

const servicosExtras =
    document.getElementById(
        'servicosExtras'
    );

if (btnMostrar && servicosExtras) {

    btnMostrar.addEventListener(
        'click',
        () => {

            servicosExtras.classList.toggle(
                'show'
            );

            btnMostrar.classList.toggle(
                'active'
            );

            if (
                servicosExtras.classList.contains(
                    'show'
                )
            ) {

                btnMostrar.innerHTML =
                    'Mostrar menos <i class="fas fa-chevron-up"></i>';

            } else {

                btnMostrar.innerHTML =
                    'Ver todos os serviços <i class="fas fa-chevron-down"></i>';
            }

        }
    );

}