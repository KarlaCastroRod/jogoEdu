const perguntas = [
    {
      pergunta: "Qual é o **sinônimo** de FELIZ?",
      opcoes: ["Triste", "Contente", "Bravo"],
      correta: "Contente"
    },
    {
      pergunta: "Qual é o **antônimo** de ALTO?",
      opcoes: ["Grande", "Pequeno", "Baixo"],
      correta: "Baixo"
    },
    {
      pergunta: "Qual é o **sinônimo** de INTELIGENTE?",
      opcoes: ["Esperto", "Lento", "Teimoso"],
      correta: "Esperto"
    },
    {
      pergunta: "Qual é o **antônimo** de RÁPIDO?",
      opcoes: ["Devagar", "Ligado", "Curto"],
      correta: "Devagar"
    }
  ];
  
  let indiceAtual = 0;
  let pontuacao = 0;
  
  function carregarPergunta() {
    const atual = perguntas[indiceAtual];
    document.getElementById("pergunta").textContent = atual.pergunta;
  
    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
  
    atual.opcoes.forEach(opcao => {
      const botao = document.createElement("button");
      botao.textContent = opcao;
      botao.onclick = () => verificarResposta(opcao);
      opcoesDiv.appendChild(botao);
    });
  
    document.getElementById("feedback").textContent = "";
    document.getElementById("proximo").style.display = "none";
  }
  
  function verificarResposta(respostaSelecionada) {
    const atual = perguntas[indiceAtual];
    const feedback = document.getElementById("feedback");
  
    if (respostaSelecionada === atual.correta) {
      pontuacao++;
      feedback.textContent = "✅ Correto!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `❌ Errado! A resposta correta é: ${atual.correta}`;
      feedback.style.color = "red";
    }
  
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
    document.getElementById("proximo").style.display = "inline-block";
  
    // Desabilita os botões
    const botoes = document.querySelectorAll("#opcoes button");
    botoes.forEach(botao => botao.disabled = true);
  }
  
  function proximaPergunta() {
    indiceAtual++;
  
    if (indiceAtual < perguntas.length) {
      carregarPergunta();
    } else {
      document.getElementById("game-container").innerHTML = `
        <h2>Fim do Jogo!</h2>
        <p>Sua pontuação final foi: ${pontuacao}/${perguntas.length}</p>
        <button onclick="location.reload()">Jogar Novamente</button>
      `;
    }
  }
  
  window.onload = carregarPergunta;
  