const produtos = [
    {
        nome: "Tropinal 20 comprimidos dipirona",
        categoria: "Medicamentos",
        preco: 27.99,
        descricao: "Tropinal 20 Comprimidos Dipirona + Associacao (Dipirona + Associacao) é indicado para o alívio de espasmos e cólicas intestinais, urinárias ou biliares. Consulte sempre um profissional de saúde antes de usar.",
        imagem: "img/produto01.webp"
    },
    {
        nome: "Neopiridin 12 pastilhas benzocaina + cetilpiridinio cloreto",
        categoria: "Medicamentos",
        preco: 18.99,
        descricao: "O Neopiridin é indicado para o alívio rápido e temporário de dores, irritações e infecções leves na garganta e na boca, como faringites, amigdalites incipientes e pequenas aftas.",
        imagem: "img/produto02.webp"
    },
    {
        nome: "Cimegripe 20 capsulas paracetamol + clorfeniramina + fenilefrina",
        categoria: "Medicamentos",
        preco: 12.99,
        descricao: "Cimegripe 20 Capsulas Paracetamol + Clorfeniramina + Fenilefrina (Paracetamol + Clorfeniramina + Fenilefrina) é indicado para o alívio dos sintomas da gripe e resfriado. Consulte sempre um profissional de saúde antes de usar",
        imagem: "img/produto03.webp"
    },
    {
        nome: "Benegrip 20 comprimidos dipirona + clorfeniramina maleato + cafeina",
        categoria: "Medicamentos",
        preco: 37.99,
        descricao: "Benegrip 20 Comprimidos Dipirona + Clorfeniramina Maleato + Cafeina (Dipirona + Clorfeniramina Maleato + Cafeina) é indicado para o alívio dos sintomas da gripe e resfriado. Consulte sempre um profissional de saúde antes de usar.",
        imagem: "img/produto04.webp"
    },
    {
        nome: "Creme de limpeza capilar mantecorp pielus sensi 400ml",
        categoria: "Cabelo",
        preco: 156.90,
        descricao: "Pielus Sensi 400ml é um creme de limpeza capilar para couros cabeludos sensíveis ou irritados. Limpa suavemente, acalma, hidrata e reduz a coceira e o vermelhão.",
        imagem: "img/produto05.webp"
    },
    {
        nome: "condicionador anticaspa siage dermohair 280ml",
        categoria: "Cabelo",
        preco: 39.00,
        descricao: "A linha Siàge DermoHair reequilibra o microbioma capilar, atuando no couro cabeludo, comprimento e pontas. Sua fórmula contém eficácia multidimensional: combate a caspa visível, sensibilidade e oleosidade enquanto trata o comprimento do fio.",
        imagem: "img/produto06.webp"
    },
    {
        nome: "Creme de limpeza vichy dercos sensi-scalp 300ml",
        categoria: "Cabelo",
        preco: 143.99,
        descricao: "Creme de Limpeza Vichy Dercos Sensi Scalp 300ml: acalma o couro cabeludo sensível desde a 1ª aplicação, reduz a coceira e o desconforto, mantendo os fios hidratados.",
        imagem: "img/produto07.webp"
    },
    {
        nome: "Mascara vichy dercos kera solutions 200ml",
        categoria: "Cabelo",
        preco: 194.99,
        descricao: "Máscara Vichy Dercos Kera-Solutions 200ml com tecnologia de microrrestauração que repara cabelos danificados, reduz frizz e danos e devolve brilho e movimento aos fios.",
        imagem: "img/produto08.webp"
    },
    {
        nome: "Mamadeira nuk newborn neutral 90ml",
        categoria: "Bêbe",
        preco: 42.90,
        descricao: "Mamadeira NUK 90 ml Newborn Neutral com bico ortodôntico de silicone, sistema antivazamento, livre de BPA e ideal para recém-nascidos.",
        imagem: "img/produto09.webp"
    },
    {
        nome: "Mordedor kuka multiformas",
        categoria: "Bêbe",
        preco: 47.99,
        descricao: "Mordedor Kuka Multiformas. Alivia a dor da dentição e massageia a gengiva. Atóxico, colorido e fácil de segurar para bebês em fase de crescimento.",
        imagem: "img/produto10.webp"
    },
    {
        nome: "Escova ricca kids ventilada",
        categoria: "Bêbe",
        preco: 13.99,
        descricao: "Escova Ricca Kids Ventilada, design ventilado e cerdas macias para desembaraçar cabelos infantis com conforto e sem dor.",
        imagem: "img/produto11.webp"
    },
    {
        nome: "Bico mamadeira philips avent petala 3.0 t4 3m+ 2 unidades",
        categoria: "Bêbe",
        preco: 65.90,
        descricao: "BICO MAMADEIRA PÉTALA 3.0 - FLUXO 4 - 3M+ - SCY964/02 - PHILIPS AVENT   O bico libera leite quando o bebê bebe ativamente.",
        imagem: "img/produto12.webp"
    },
    {
        nome: "Locao limpeza leite de colonia toque de carinho 100ml",
        categoria: "Beleza",
        preco: 5.90,
        descricao: "A Loção de Limpeza Leite de Colônia Toque de Carinho possui ação adstringente, que ajuda no controle da oleosidade e fecha os poros temporariamente.",
        imagem: "img/produto13.webp"
    },
    {
        nome: "Esmalte impala perolado sonho",
        categoria: "Beleza",
        preco: 4.59,
        descricao: "Esmalte Impala Perolado Sonho 7,5ml: branco perolado com brilho suave, acabamento acetinado, alta cobertura e secagem rápida para unhas elegantes e discretas.",
        imagem: "img/produto14.webp"
    },
    {
        nome: "Tintura color perfect 6/1 louro escuro acinzentado 60gr",
        categoria: "Beleza",
        preco: 34.90,
        descricao: "Coloração permanente em creme para todos os tipos de cabelo. Wella Professionals Color Perfect traz cores que tingem completamente os fios de maneira uniforme, desde a raiz até às pontas. Além disso, conseguem cobrir até 100% do branco.",
        imagem: "img/produto15.webp"
    },
    {
        nome: "Removedor de esmalte smalto 100ml",
        categoria: "Beleza",
        preco: 2.99,
        descricao: "Removedor de Esmalte Smalto 100ml, sem acetona, remove o esmalte com eficácia enquanto hidrata unhas e cutículas com glicerina e vitamina E.",
        imagem: "img/produto16.webp"
    },
    {
        nome: "Livro de colorir comfy e cozy azul capa dura",
        categoria: "Conveniência",
        preco: 29.99,
        descricao: "Livro de Colorir Comfy & Cozy Azul. Capa dura, 96 págs. Arte, relaxamento, antiestresse e criatividade. Ideal para todas as idades",
        imagem: "img/produto17.webp"
    },
    {
        nome: "Balas santa barbara mel e propolis 10 unidades",
        categoria: "Conveniência",
        preco: 7.90,
        descricao: "CBalas Sta. Bárbara Mel e Própolis com 10 unidades. Aliviam irritações na garganta e trazem bem-estar natural com sabor suave e refrescante.",
        imagem: "img/produto18.webp"
    },
    {
        nome: "Chocolate kit kat branco 41,5gr",
        categoria: "Conveniência",
        preco: 4.99,
        descricao: "É indicado para consumo alimentar como snack ou sobremesa, proporcionando sabor doce e textura crocante característica da marca Kit Kat.",
        imagem: "img/produto19.webp"
    },
    {
        nome: "Batata crocks club pimenta com limao 45gr",
        categoria: "Conveniência",
        preco: 5.99,
        descricao: "Nome comercial: Batata Crocks Club Pimenta com Limão",
        imagem: "img/produto20.webp"
    }
];

