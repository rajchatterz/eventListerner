const mouseover = document.getElementById("mover")
const mouseout = document.getElementById("mover")
mouseout.addEventListener("mouseout",helo)
mouseover.addEventListener("mouseover",helooo)
function helooo(){
    mouseover.style.color = "red"
}
function helo(){
    mouseout.style.color = "black"
}
