

function handleKeyboard(event){
    const title = document.querySelector(".js-title");
    const keyboard = document.querySelector(".js-key");
    const location = document.querySelector(".js-loc");
    const code = document.querySelector(".js-code");
    console.log(event);
    title.innerText = event.keyCode;
    keyboard.innerText = event.key;
    location.innerText = event.location;
    code.innerText = event.code;
}

function init(){
    window.addEventListener("keydown", handleKeyboard);
}

init();