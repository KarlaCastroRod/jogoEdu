const perguntas = [
    {
      pergunta: "Quanto é 36 ÷ 6?",
      opcoes: ["5", "6", "7"],
      correta: "6"
    },
    {
      pergunta: "Quanto é 81 ÷ 9?",
      opcoes: ["9", "8", "7"],
      correta: "9"
    },
    {
      pergunta: "Quanto é 56 ÷ 7?",
      opcoes: ["6", "7", "8"],
      correta: "8"
    },
    {
      pergunta: "Quanto é 100 ÷ 10?",
      opcoes: ["9", "10", "11"],
      correta: "10"
    },
    {
      pergunta: "Quanto é 49 ÷ 7?",
      opcoes: ["7", "6", "8"],
      correta: "7"
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
  
  function verificarResposta(resposta) {
    const atual = perguntas[indiceAtual];
    const feedback = document.getElementById("feedback");
  
    if (resposta === atual.correta) {
      pontuacao++;
      feedback.textContent = "✅ Correto!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `❌ Errado! Resposta certa: ${atual.correta}`;
      feedback.style.color = "red";
    }
  
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
    document.getElementById("proximo").style.display = "inline-block";
  
    document.querySelectorAll("#opcoes button").forEach(btn => btn.disabled = true);
  }
  
  function proximaPergunta() {
    indiceAtual++;
  
    if (indiceAtual < perguntas.length) {
      carregarPergunta();
    } else {
      document.getElementById("quiz").innerHTML = `
        <h2>Fim da Atividade!</h2>
        <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>
        <button onclick="location.reload()">Jogar Novamente</button>
      `;
    }
  }
  
  window.onload = carregarPergunta;
  