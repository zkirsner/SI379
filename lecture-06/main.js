let score = 0;
const button = document.querySelector("button");
const userInput = document.querySelector("input");
// const list = document.createElement("ul");
button.addEventListener("click", ()=> {
    score++;
    // document.querySelector('p').innerText = `Hit button ${score} times`;
    button.setAttribute("disabled", "true");
    setTimeout(() => {
        button.removeAttribute("disabled");
    }, 1000);
    if (userInput.value.length > 0) {
        const listItem = document.createElement("li");
        listItem.innerText = userInput.value;
        document.querySelector("ul").append(listItem);
        userInput.value = ""; 
        // clears value of input field^
    }
})
