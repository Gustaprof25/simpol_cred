// Formulário de contato 
document
.getElementById('leadForm')
.addEventListener('submit', function(e){

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