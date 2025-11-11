// Function Declaration
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selected ? selected.value : "";

    // Compare and display feedback
    const feedbackEl = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! Well done.";
    } else {
        feedbackEl.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the Submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
