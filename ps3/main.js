let timerID = false;
let selectedEventId;
let thumbnailsContainer; 
let eventsList;
document.addEventListener("DOMContentLoaded", function() {
getUMEventsWithImages(handleFetchedEvents);
function displayThumbnails(events) {
    thumbnailsContainer = document.querySelector("#thumbnails");
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const thumbnail = document.createElement("img");
        thumbnail.src = event.styled_images.event_thumb;
        thumbnail.id = `thumb-${event.id}`;
        thumbnail.addEventListener("click", () => handleThumbnailClick(event.id));
        thumbnailsContainer.appendChild(thumbnail);
    }
    advanceImage();
}

function handleFetchedEvents(fetchedEvents) {
    eventsList = fetchedEvents;
    console.log("Events fetched:", eventsList);
    displayThumbnails(eventsList);
    timerID = setTimeout(advanceImage, 10000);
}

function handleThumbnailClick(eventId) {
    selectedEventId = eventId;
    console.log("Thumbnail clicked: " + eventId);
    const index = eventsList.findIndex(event => event.id === eventId);
    setSelectedIndex(index); 
    clearTimeout(timerID);
    timerID = setTimeout(advanceImage, 10000);
}

function advanceImage() {
    const currentIndex = eventsList.findIndex(event => event.id === selectedEventId);
    const nextIndex = (currentIndex + 1) % eventsList.length;
    selectedEventId = eventsList[nextIndex].id;
    setSelectedIndex(nextIndex);
    clearTimeout(timerID);
    timerID = setTimeout(advanceImage, 10000);
}

function setSelectedIndex(index) {
    const thumbnails = document.querySelectorAll("#thumbnails img");
    for (let i = 0; i < thumbnails.length; i++) {
        const thumbnail = thumbnails[i];
        if (i === index) {
            thumbnail.classList.add("selected");
        } else {
            thumbnail.classList.remove("selected");
        }
    }
    const selectedEvent = eventsList[index];
    document.getElementById("selected-title").textContent = selectedEvent.event_title;
    document.getElementById("selected-title").href = selectedEvent.permalink;
    document.getElementById("selected-image").src = selectedEvent.image_url;
    document.getElementById("selected-date").textContent = getReadableTime(selectedEvent.datetime_start);
    document.getElementById("selected-description").textContent = selectedEvent.description;
}

function fetchAndDisplayEvents() {
    getUMEventsWithImages((eventsWithImages) => {
        console.log("Events with images: ", eventsWithImages);
    });
}
fetchAndDisplayEvents();
});

//Used ChatGPT in order to generate a template with a list of functions
//and also to help debug the code within the functions


