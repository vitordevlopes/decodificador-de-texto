function criptografarTexto() {

    let textoDescriptografado = document.getElementById("textArea").value



    let textoCriptografado = textoDescriptografado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let imagemLupa = document.getElementById("lupa-img")

    imagemLupa.style.display = "none"

    let paragrafoResultado = document.getElementById("paragrafo-resultado")

    paragrafoResultado.innerHTML = textoCriptografado

    let mensagemNaoEncontrada = document.getElementById("mensagem-nao-encontrada")

    mensagemNaoEncontrada.style.display = "none"

    let avisoDigitar = document.getElementById("aviso-digitar")

    avisoDigitar.style.display = "none"
}

function descriptografarTexto() {
    let textoCriptografado = document.getElementById("textArea").value

    let textoDescriptografado = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let imagemLupa = document.getElementById("lupa-img")

    imagemLupa.style.display = "none"
    
    let paragrafoResultado = document.getElementById("paragrafo-resultado")
    
    paragrafoResultado.innerHTML = textoDescriptografado
    
    let mensagemNaoEncontrada = document.getElementById("mensagem-nao-encontrada")
    
    mensagemNaoEncontrada.style.display = "none"
    
    let avisoDigitar = document.getElementById("aviso-digitar")
    
    avisoDigitar.style.display = "none"
}

function copiarResultado() {
    // Obter o elemento <p> com o ID 'paragrafo-resultado'
    var paragrafoResultado = document.getElementById("paragrafo-resultado");

    // Criar uma seleção de intervalo
    var range = document.createRange();
    range.selectNode(paragrafoResultado);

    // Limpar qualquer seleção existente e adicionar a nova seleção
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copiar o texto selecionado para a área de transferência
    navigator.clipboard.writeText(range.toString())
    };

