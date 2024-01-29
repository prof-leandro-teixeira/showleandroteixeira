document.addEventListener("DOMContentLoaded", function () {
    let depoimentos = ["Em julho de 2023, o Leandro tocou para alguns amigos na casa da minha mãe. Foi um show além das minhas expectativas, toca e canta muito, interage com a galera. (Mari - Santa Luzia)","Leandro tem um grande talento, possui excelente repertório atendendo a todos os gostos musicais e faixas etárias. Fiquei muito feliz e satisfeito em contratá-lo para tocar na festa de aniversário do meu filho. (Renato - BH)",
        "Só tenho elogios pela qualidade da apresentação e profissionalismo, todos os convidados gostaram bastante. Com certeza o contratarei novamente para as festas da família. (Thiago - BH)",
        "Chamei o Leandro para tocar no aniversário do meu filho. Foi incrível... meus amigos e minha família ficamos impressionados com seu talento. Com certeza o Leandro será nossa primeira opção nos próximos eventos. (Lilia - BH)",
        "Nada melhor do que contratar quem entende do assunto. Contratamos o Leandro e não precisamos nos preocupar com nada, só curtimos demais! Canta muito e toca muito. (Renata - JF)",'','',''
    ];

    let depoimentoAtual = 0;
    let depoimento1 = document.getElementById("depoimento1");
    let depoimento2 = document.getElementById("depoimento2");
    let depoimento3 = document.getElementById("depoimento3");

    // Define os depoimentos iniciais
    depoimento1.textContent = depoimentos[depoimentoAtual];
    depoimento2.textContent = depoimentos[(depoimentoAtual + 1) % depoimentos.length];
    depoimento3.textContent = depoimentos[(depoimentoAtual + 2) % depoimentos.length];

    // Função para avançar os depoimentos
    function avancarDepoimentos() {
        depoimentoAtual = (depoimentoAtual + 1) % depoimentos.length;
        atualizarDepoimentos();
    }

    // Função para retroceder os depoimentos
    function retrocederDepoimentos() {
        depoimentoAtual = (depoimentoAtual - 1 + depoimentos.length) % depoimentos.length;
        atualizarDepoimentos();
    }

    // Atualiza os depoimentos na tela
    function atualizarDepoimentos() {
        depoimento1.textContent = depoimentos[depoimentoAtual];
        depoimento2.textContent = depoimentos[(depoimentoAtual + 1) % depoimentos.length];
        depoimento3.textContent = depoimentos[(depoimentoAtual + 2) % depoimentos.length];
    }

    // Define intervalo para avançar automaticamente
    let intervalo = setInterval(avancarDepoimentos, 500);

    // Adiciona eventos de clique para as setas
    document.getElementById("seta-esquerda").addEventListener("click", retrocederDepoimentos);
    document.getElementById("seta-direita").addEventListener("click", avancarDepoimentos);
});