// Function to check the user's answer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);