var setaesq = window.document.getElementById("setaesq")
var leo = window.document.getElementById("leo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadir = window.document.getElementById("setadir")

function RolarParaDireita() {
    leo.style ="display:none"
    bruna.style ="display:flex"
    setadir.style ="display:none"
    setaesq.style ="display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    leo.style ="display:flex"
    bruna.style ="display:none"
    setadir.style ="display:flex"
    setaesq.style ="display:none"
}