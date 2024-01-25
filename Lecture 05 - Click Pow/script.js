// Write your code here
const zzzImage = document.querySelector(".clickable")

function clickImage() {
    if(zzzImage) {
        zzzImage.classList.add("clicked");
    }
    setTimeout(()=> {
        zzzImage.classList.remove("clicked");
    }, 1000);
}
zzzImage.addEventListener("click", clickImage);
