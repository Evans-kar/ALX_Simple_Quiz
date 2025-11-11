// Create the function
function checkAnswer() {
    // Retrieve the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected ? selected.value : "";

    // Compare and provide feedback
    const feedbackEl = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! Well done.";
    } else {
        feedbackEl.textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the submit button & add the event listener
const submitBtn = document.getElementById('submit-answer');
submitBtn.addEventListener('click', checkAnswer);

