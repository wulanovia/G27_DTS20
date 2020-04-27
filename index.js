function getResolution() {
let desktopMessage = document.querySelector(".message-wrapper");

    if (screen.width < 1000) {
        desktopMessage.querySelector(".container-about").querySelectorAll(".msg").forEach(element => {
            element.remove()
        });

        desktopMessage.querySelector(".container-about").innerHTML = '<div class="content-right msg"><img class="vector-pic"src="img/3411109.jpg" alt=""></div> <div class="content-left msg"><div class="question"><h2>Apakah anda siap untuk menjadi programer yang handal?</h2><h3>Ayo belajar coding, ayo belajar menjadi lebih kreatif!</h3><span class="btn message">Mulai Belajar</span></div></div>'

    } 
    
}