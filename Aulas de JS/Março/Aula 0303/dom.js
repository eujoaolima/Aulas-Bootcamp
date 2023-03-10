// Esses códigos serão mostrados no console

// O document representa o arquivo HTML no formato de objeto
console.log(document);
console.log(document.title);
document.title = "Batata!";
console.log(document.body);

// A propriedade style existe em qualquer elemento HTML
document.body.style.backgroundColor = "magenta";
document.body.style.fontFamily = "monospace";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.border = '2px solid red'


// innerHTML representa o conteudo interno do elemento
document.body.innerHTML = "<h1>Oi, sou eu de novo!</h1>";
document.body.innerHTML += "<p>Sou um novo parágrafo!</p>";


// Podemos aplicar estruturas que vimos no JS
document.body.innerHTML = ""
for(let i = 0; i<1000; i++){
    document.body.innerHTML += `<p>Parágrafo Nº ${i}</p>`
}

const tituloH1 = document.getElementById("titulo-principal");
tituloH1.style.color = 'pink'
tituloH1.style.fontFamily = 'monospace'
tituloH1.style.fontSize = '48px'
tituloH1.style.fontStyle = 'italic'
tituloH1.style.textShadow = '1px 1px 2px red'

const figura = document.getElementById("figura-dom")
figura.style.width = '400px'
figura.style.height = '500px'
figura.src = 'https://picsum.photos/500'