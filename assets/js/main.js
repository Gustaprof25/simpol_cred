// Formulário de contato 
document
    .getElementById('leadForm')
    .addEventListener('submit', function (e) {

        e.preventDefault();

        const nome =
            document.getElementById('nome').value;

        const telefone =
            document.getElementById('telefone').value;

        const cidade =
            document.getElementById('cidade').value;

        let whatsapp = '';

        const atendentes = {

            palmas: [
                '5563991111111',
                '5563992222222'
            ],

            araguaina: [
                '5563993333333',
                '5563994444444'
            ],

            gurupi: [
                '5563995555555',
                '5563996666666'
            ]
        };

        const lista = atendentes[cidade];

        // distribuição simples
        const indice =
            Math.floor(Math.random() * lista.length);

        whatsapp = lista[indice];

        const mensagem =
            `Olá! Meu nome é ${nome}.

Cidade: ${cidade}

Telefone: ${telefone}

Gostaria de fazer uma simulação de crédito.`;

        const url =
            `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');

    });

window.addEventListener('scroll', () => {

    const navbar =
        document.querySelector('.custom-navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});

const servico = document.getElementById('servico');

servico.addEventListener('change', function () {

    const icone = this.parentElement.querySelector('i');

    switch (this.value) {

        case 'cartao':
            icone.className = 'fas fa-credit-card';
            break;

        case 'fgts':
            icone.className = 'fas fa-piggy-bank';
            break;

        case 'consignado':
            icone.className = 'fas fa-hand-holding-usd';
            break;

        case 'financiamento':
            icone.className = 'fas fa-car';
            break;

        case 'seguro':
            icone.className = 'fas fa-shield-alt';
            break;

        default:
            icone.className = 'fas fa-briefcase';
    }

});

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

        if (modoAtual === 'receber') {

            label.innerHTML =
                'Quanto deseja receber?';

            input.placeholder =
                'Ex: 2000';

        } else {

            label.innerHTML =
                'Qual seu limite disponível?';

            input.placeholder =
                'Ex: R$2500';

        }

    });

});

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

document
    .getElementById('btnCalcular')
    .addEventListener('click', function () {

        const cidade =
            document.getElementById('cidade').value;

        const parcelas =
            document.getElementById('parcelas').value;

        const valor =
            parseFloat(
                document.getElementById('valorPrincipal').value
            );

        if (!cidade || !parcelas || !valor) {
            alert('Preencha todos os campos.');
            return;
        }

        const taxa =
            taxas[cidade][parcelas];

        let resultado;

        if (modoAtual === 'receber') {

            resultado =
                valor * (1 + taxa / 100);

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

            document.querySelector(
                '.resultado-simulacao p'
            ).innerHTML =
                'Este é o limite aproximado que você precisa ter disponível no cartão.';

        } else {

            resultado =
                valor / (1 + taxa / 100);

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

            document.querySelector(
                '.resultado-simulacao p'
            ).innerHTML =
                'Este é o valor aproximado que você pode receber.';
        }
        document.getElementById(
            'resultadoSimulacao'
        ).style.display = 'block';
    });
    
const whatsappBtn =
    document.querySelector('.whatsapp-float');

const mensagem =
    `Olá! Acabei de fazer uma simulação no site.

Cidade: ${cidade}
Parcelas: ${parcelas}x

Resultado: ${resultado.toLocaleString(
        'pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    )}

Gostaria de falar com um especialista.`;

whatsappBtn.href =
    `https://wa.me/5563992093340?text=${encodeURIComponent(mensagem)}`;