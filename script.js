function crearElemento() {
    let imagen = document.createElement("img");
    imagen.src = "img/ea4a006ccd46d354d8af99ba17bb800c-removebg-preview.png"; 
    imagen.className = "elemento";
    imagen.style.top = `${-20 - Math.random() * 200}px`; 
    imagen.style.left = `${Math.random() * 100}vw`; 
    document.querySelector(".container").appendChild(imagen);

    setTimeout(() => {
        imagen.remove();
    }, 4000);
}

setInterval(crearElemento, 2000);