/*Banner Rotativo Inicial*/
let tempo = 7000,
    currentImageIndex = 0,
    images = document.querySelectorAll("section .slider img"),
    max = images.length;


function proximaImagem () {
    images[currentImageIndex].classList.remove("selected");
    currentImageIndex++;

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    
    images[currentImageIndex].classList.add("selected");
}

function start () {
console.log("Window loaded");
    setInterval(() => {
        //Lógica para a troca de imagens do banner rotativo
        proximaImagem();
    }, tempo);
}

window.addEventListener("load", start);


/*Banner Rotativo Secundário*/
let tempo2 = 4000,
    currentImageIndex2 = 0,
    images2 = document.querySelectorAll(".slider2 img"),
    max2 = images.length;

function proximaImagem2 () {
    images2[currentImageIndex2].classList.remove("selected2");
    currentImageIndex2++;

    if (currentImageIndex2 >= max2) {
        currentImageIndex2 = 0;
    }

    images2[currentImageIndex2].classList.add("selected2");
}

function start2 () {
    console.log("Window loaded");
    setInterval(() => {
        proximaImagem2();
    }, tempo2);
}

window.addEventListener("load", start2);

//slide cards
