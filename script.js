
function calcular() {

    let idadeAtual = Number(document.getElementById("idadeAtual").value);

    let idadeAposentadoria = Number(document.getElementById("idadeAposentadoria").value);

    let renda = Number(document.getElementById("rendaMensal").value);

    let anosParaAposentar = idadeAposentadoria - idadeAtual;

    let mesesParaAposentar = anosParaAposentar * 12;

    let mesesDeAposentadoria = 20 * 12;

    let valorTotal = renda * mesesDeAposentadoria;

    let valorPorMes = valorTotal / mesesParaAposentar;

    localStorage.setItem("valorPorMes", valorPorMes);

    window.location.href = "resultado.html";
}

function salvarNome() {
    let nome = document.getElementById("nome").value;

    localStorage.setItem("nome", nome);

    window.location.href = "escolha.html";
}