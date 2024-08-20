function criptografarTexto() {

    let textoDescriptografado = document.getElementById("textArea").value



    let textoCriptografado = textoDescriptografado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let textArea = document.querySelector(".mensagem")

    textArea.style.backgroundImage = "none"
    textArea.value = textoCriptografado
}

function descriptografarTexto() {
    let textoCriptografado = document.getElementById("textArea").value

    let textoDescriptografado = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let textArea = document.querySelector(".mensagem");

    textArea.style.backgroundImage = "none";
    textArea.value = textoDescriptografado;
}

function copiarResultado() {
    let textArea = document.querySelector(".mensagem");

    let texto = textArea.value

    navigator.clipboard.writeText(texto)
};

