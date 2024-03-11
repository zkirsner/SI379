function fetchWithCache(url, options = {}, cacheDuration = 1000 * 60 * 60) { 
    function getResponseObject(data) {
        return new Response(new Blob([JSON.stringify(data)]));
    }
    const cachedData = localStorage.getItem(url); 
    if (cachedData) { 
        const { timestamp, data } = JSON.parse(cachedData); 
        if (Date.now() - timestamp < cacheDuration) { 
            return Promise.resolve(getResponseObject(data)); 
        } else { 
            localStorage.removeItem(url);
        }
    }
    return fetch(url, options)
        .then((response) => response.json()) 
        .then((data) => {
            localStorage.setItem(url, JSON.stringify({ 
                data
            }));
            return getResponseObject(data);
        });
}
function shuffleArray(array) {
    const shuffledArray = array.slice(); 
    for (let i = shuffledArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements i and j
    }
    return shuffledArray; 
}

async function fetchTriviaQuestions() {
    const apiUrl = 'https://the-trivia-api.com/v2/questions?limit=10&types=text_choice'; 
    const cacheDuration = 3600000;
    try {
        const response = await fetchWithCache(apiUrl, {}, cacheDuration); 
        if (!response.ok) {
            throw new Error('Network response was not ok.'); 
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
        return [];
    }
}
let score = document.getElementById('score');
let numCorrectAnswers = 0;
let numAnswers = 0;
let totalQuestions = 10;
const triviaContainer = document.getElementById('trivia-container');

function displayFeedback() {
    let feedbackMessage = document.getElementById('score-feedback');
    feedbackMessage.id = 'score-feedback'; 
    if (numCorrectAnswers === totalQuestions) {
        feedbackMessage.innerText = 'Your Score was ' + `${numCorrectAnswers}` + '/' + `${totalQuestions}`+'. Perfect! Nice Job!';
    } else if (numCorrectAnswers >= 8) {
        feedbackMessage.innerText = 'Your Score was ' + `${numCorrectAnswers}` + '/' + `${totalQuestions}` + '. Good Job!';
    } else if (numCorrectAnswers >= 5) {
        feedbackMessage.innerText = 'Your Score was ' + `${numCorrectAnswers}` + '/' + `${totalQuestions}`+'. Not Bad!';
    } else {
        feedbackMessage.innerText = 'Your Score was ' + `${numCorrectAnswers}` + '/' + `${totalQuestions}`+'. Better luck next time!';
    }
    triviaContainer.appendChild(feedbackMessage);
}

function displayTriviaQuestions(questions) {
    triviaContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const questionPrompt = document.createElement('p');
        questionPrompt.textContent = `${index + 1}. ${question.question.text}`;
        questionDiv.appendChild(questionPrompt);
        const answersList = document.createElement('ul');
        const allAnswers = shuffleArray([...question.incorrectAnswers, question.correctAnswer]);
        allAnswers.forEach((answer) => {
            const answerItem = document.createElement('li');
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.classList.add('answer-button');
            answerButton.addEventListener('click', function () {
                console.log('Answer clicked!');
                if (answer === question.correctAnswer) {
                    answerButton.classList.add('correct');
                    numCorrectAnswers++;
                } else {
                    answerButton.classList.add('incorrect');
                }
                numAnswers++;
                const buttons = this.parentElement.parentElement.querySelectorAll('.answer-button');
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                let score = document.getElementById('score');
                score.innerText = 'Your Score: ' + `${numCorrectAnswers}` + '/' + `${totalQuestions}`;
                if (numAnswers === totalQuestions) {
                    disableGame();
                    displayFeedback();
                }
            });
            answerItem.appendChild(answerButton);
            answersList.appendChild(answerItem);
        });
        questionDiv.appendChild(answersList);
        triviaContainer.appendChild(questionDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    function displayCountdownTimer(seconds) {
        const countdownElement = document.createElement('div');
        countdownElement.id = 'countdown';
        document.body.appendChild(countdownElement);

        let timer = seconds;
        const countdownInterval = setInterval(() => {
            countdownElement.textContent = `Time left: ${timer} seconds`;
            if (timer === 0) {
                clearInterval(countdownInterval);
                disableGame();
            }
            if (numAnswers === totalQuestions) {
                clearInterval(countdownInterval);
                disableGame();
                displayFeedback();
            }
            timer--;
        }, 1000);
    }
    function disableGame() {
        const answerButtons = document.querySelectorAll('.answer-button');
        answerButtons.forEach(button => {
            button.disabled = true;
        });
    }
    fetchTriviaQuestions()
        .then(questions => displayTriviaQuestions(questions))
        .catch(error => console.error('Error fetching and displaying trivia questions:', error));
    const countdownDuration = 30; 
    displayCountdownTimer(countdownDuration);
});
