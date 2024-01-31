var textinput = document.querySelector("#input-texto");
var outinput = document.querySelector("#output");

function criptografar(){
    var texto = textinput.value;

    var resultcripto= texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">'+ resultcripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick"copiar()">copiar </button>'
};

    function descriptografar(){
        var texto= textinput.value;

        var resuldescripto = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u"); 

        document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">'+ resuldescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick"copiar()">copiar </button>'
};
 
function copiarTexto() { 
    const textAfterElement = document.getElementById("texto-final");
    const text = textAfterElement.innerText;

    navigator.clipboard.writeText(text);

    console.log("copiarTexto");
} 