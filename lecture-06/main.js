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
    const userInputValue = userInput.value;
    if (userInput.value.length > 0) {
        const listItem = document.createElement("li");
        // listItem.innerText = userInput.value;
        document.querySelector("ul").append(listItem);
        for (const letter of userInputValue) {
            const spanEl = document.createElement('span');
            spanEl.classList.add('letter');
            spanEl.innerText = letter;
            listItem.append(spanEl);
        }
        userInput.value = ""; 
        // clears value of input field^
    }
});
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        score++;
        button.setAttribute("disabled", "true");
        setTimeout(() => {
            button.removeAttribute("disabled");
        }, 1000);
        const userInputValue = userInput.value;
        if (userInputValue.length > 0) {
            const listItem = document.createElement("li");
            // listItem.innerText = userInput.value;
            document.querySelector("ul").append(listItem);
            for (const letter of userInputValue) {
                const spanEl = document.createElement('span');
                spanEl.classList.add('letter');
                spanEl.innerText = letter;
                listItem.append(spanEl);
            }
            userInput.value = "";
        }
    }
});