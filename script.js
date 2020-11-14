let time = 4000, // tempo de transição da imagem
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#slider img")
max = images.length;

function nextImage() {       ///trocar a imagem

    images[currentImageIndex].classList.remove("selected")  // pra poder ficar no loop

    currentImageIndex++     ///passar a proxima  imagem

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")

}
function start() {      ///iniciar as transiçõwes
    setInterval(() => {   
        //toca de imagem
        nextImage()
    }, time)
}
    window.addEventListener("load", start)