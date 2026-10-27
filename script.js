const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formJogo')
const lista = document.getElementById('listarJogos')
const mensagemVazia = document.getElementById('mensagemVazia')

btnCadastrar.addEventListener("click", () => {
    modal.showModal()
})

btnCancelar.addEventListener("click", () => {
    modal.close()
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const jogo = document.getElementById("jogo").value.trim()
    const desenvolvedora = document.getElementById("desenvolvedora").value.trim()
    const genero = document.getElementById("genero").value.trim()
    const plataforma = document.getElementById("plataforma").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)

    criarCard(jogo, desenvolvedora, genero, plataforma, imagem, preco)

    form.reset()
    modal.close()
})

function criarCard(jogo, desenvolvedora, genero, plataforma, imagem, preco) {
    mensagemVazia.hidden = true

    const card = document.createElement("article")
    card.classList.add("card-jogo")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    imagemCapa.alt = "Capa do jogo " + jogo

    const titulo = document.createElement("h3")
    titulo.textContent = jogo

    const nomeDesenvolvedora = document.createElement("p")
    nomeDesenvolvedora.textContent = "Desenvolvedora: " + desenvolvedora

    const nomeGenero = document.createElement("p")
    nomeGenero.textContent = "Gênero: " + genero

    const nomePlataforma = document.createElement("p")
    nomePlataforma.textContent = "Plataforma: " + plataforma

    const valor = document.createElement("p")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    card.append(imagemCapa, titulo, nomeDesenvolvedora, nomeGenero, nomePlataforma, valor)
    lista.append(card)
}
