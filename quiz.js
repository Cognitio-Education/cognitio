/*eslint-env browser*/

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;
        
        for(var i=0; i<questions.length; i++) {
            answers = [];
            for(var letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ": "
                        + questions[i].answers[letter]
                    + '</label><br>'
                );
            }
            
            output.push(
                '<div class="question"><b>' + questions[i].question + '</b></div>'
                + '<div class="answers">' + answers.join('') + '</div><br>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
    
    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for (var i=0; i<questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if (userAnswer===questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        if (numCorrect == questions.length) {
            resultsContainer.innerHTML = "You got " + numCorrect + ' out of ' + questions.length + "! Keep it up!";
        }
        else if (numCorrect > questions.length / 2) {
            resultsContainer.innerHTML = "You got " + numCorrect + ' out of ' + questions.length + ". You're almost there, go over the ones you got wrong!";
        }
        else if (numCorrect <= questions.length / 2 && numCorrect > 0) {
            resultsContainer.innerHTML = "You got " + numCorrect + ' out of ' + questions.length + ". You're not quite there yet, keep revising the topic!";
        }
        else if (numCorrect == 0) {
            resultsContainer.innerHTML = "You got " + numCorrect + ' out of ' + questions.length + ". You need to revise the topic more, make sure you read the questions!";
        }
    }
    
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

switch(window.location.pathname) {
    case "/chem/salts_acids.html":
        generateQuiz(salts_acids, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/organisation.html":
        generateQuiz(organisation, quizContainer, resultsContainer, submitButton);
        break;
    default:
        quizContainer.innerHTML = "<p>A quiz has not been made for this topic yet, sit tight!<p>"
}