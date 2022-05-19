const name = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

greetMeButton.addEventListener('click', () => {
    greetingOutput.innerText = `Hello ${name.value}`;
});

const wowza = document.querySelector("#wowza");
wowza.addEventListener('click', () => console.log("wowza"));

