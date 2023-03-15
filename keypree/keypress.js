const key = document.getElementById("key")
key.addEventListener("keypress", hello)
function hello(){
    key.style.backgroundColor = "red"
}