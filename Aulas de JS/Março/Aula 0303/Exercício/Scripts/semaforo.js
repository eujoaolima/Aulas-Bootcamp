const semaforoImg = document.getElementById("semaforo-img");
const descParagrado = document.getElementById("semaforo-descricao");

function trocarVermelho() {
  console.log("Mudar para vermelho");
  semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
  descParagrado.innerHTML = "Pare!!";
}

function trocarAmarelo() {
  console.log("Mudar para amarelo");
  semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
  descParagrado.innerHTML = "Fique atento!";
}

function trocarVerde() {
  console.log("Mudar para verde");
  semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
  descParagrado.innerHTML = "Passagem liberada!";
}
