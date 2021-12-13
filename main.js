

function redirect(page){
    document.getElementById(page).style.transform = "scale(1)"
}


const ball = document.querySelector(".area-ball");

ball.addEventListener("animationend" , event => {
    if (event.animationName == "bounce"){
        ball.classList.add("treme");
        document.querySelector(".button-active-light").classList.add("changeLightColor");
        console.log("animation end - bounce");
    }
})

