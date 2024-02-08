// Write your code here
getRandomDogImageURL(function(url) {
    dogImage = document.createElement('img');
    dogImage.src = url;
    document.body.appendChild(dogImage);
})
// alternate code
// getRandomDogImageURL((url => {
//     dogImage = document.createElement('img');
//     dogImage.src = url;
//     document.body.appendChild(dogImage);
// }))