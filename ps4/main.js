// Function to fetch trivia questions from the API
// fetchWithCache();
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
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
        return [];
    }
}
let numCorrectAnswers = 0;
let numAnswers = 0;
function displayTriviaQuestions(questions) {
    const triviaContainer = document.getElementById('trivia-container'); 
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
            answerButton.classList.add('answer-button'); // Add necessary classes here
            answerButton.addEventListener('click', function() {
                console.log('Answer clicked!');
                if (answer === question.correctAnswer) {
                    answerButton.classList.add('correct');
                    numCorrectAnswers++;
                    numAnswers++;
                } else {
                    answerButton.classList.add('incorrect');
                    numAnswers++;
                }
                const buttons = this.parentElement.parentElement.querySelectorAll('.answer-button');
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                let score = document.getElementById('score');
                score.innerText = 'Your Score: ' + `${numCorrectAnswers}` + '/' + `${numAnswers}`;
            }); 
            answerItem.appendChild(answerButton);
            answersList.appendChild(answerItem);
        });
        questionDiv.appendChild(answersList);
        triviaContainer.appendChild(questionDiv);
    });
    let score = document.getElementById('score');
    score.innerText = 'Your Score: ' + `${numCorrectAnswers}` + '/' + `${numAnswers}`;
}

fetchTriviaQuestions()
    .then(questions => displayTriviaQuestions(questions))
    .catch(error => console.error('Error fetching and displaying trivia questions:', error));
