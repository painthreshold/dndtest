let currentQuestion = 1;

function nextQuestion(answer) {
    if (currentQuestion === 1) {
        if (answer === 'A') {
            document.getElementById('question').textContent = "In a heated argument, how do you typically react?";
        } else if (answer === 'B') {
            document.getElementById('question').textContent = "In a heated argument, how do you typically react?";
        } else if (answer === 'C') {
            document.getElementById('question').textContent = "In a heated argument, how do you typically react?";
        } else if (answer === 'D') {
            document.getElementById('question').textContent = "In a heated argument, how do you typically react?";
        }
    } else if (currentQuestion === 2) {
        if (answer === 'A') {
            document.getElementById('question').textContent = "In a crisis, what's your role within a group?";
        } else if (answer === 'B') {
            document.getElementById('question').textContent = "In a crisis, what's your role within a group?";
        }
        // add more conditions for other questions
    }

    currentQuestion++;
}

function previousQuestion(prebutton) {
    if (currentQuestion > 2) {
        currentQuestion--;
        // Here, you should add logic to reset the question and answers to the previous state.
        // For simplicity, let's assume you have the initial questions and answers stored in an array.
        // You would then update the content based on the currentQuestion index.
    }
}