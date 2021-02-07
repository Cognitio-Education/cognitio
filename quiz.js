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

var metals_acids = [
    {
        question: "Metal + water -> ?",
        answers: {
            a: "metal hydroxide + hydrogen",
            b: "metal oxide + hydrogen",
            c: "metal hydroxide + water",
            d: "metal sulfate + water"
        },
        correctAnswer: "a"
    },
    {
        question: "Metal + acid -> ?",
        answers: {
            a: "salt + water",
            b: "salt + hydrogen",
            c: "salt",
            d: "metal oxide + water"
        },
        correctAnswer: "b"
    },
    {
        question: "Nitric acid forms which type of salt with metals?",
        answers: {
            a: "Metal sulfate",
            b: "Metal hydronitrate",
            c: "Metal nitrate",
            d: "Metal nitride"
        },
        correctAnswer: "c"
    },
    {
        question: "What colour flame does potassium produce in water?",
        answers: {
            a: "Green",
            b: "Lilac",
            c: "Yellow",
            d: "Blue"
        },
        correctAnswer: "b"
    },
    {
        question: "Acid + ammonia -> ?",
        answers: {
            a: "ammonium salt + water",
            b: "ammonium salt",
            c: "salt + hydrogen",
            d: "ammonium salt + carbon dioxide"
        },
        correctAnswer: "b"
    },
    {
        question: "What must NOT be done when preparing a sample of salt?",
        answers: {
            a: "heat the acid",
            b: "add the metal/metal compound with stirring",
            c: "evaporate the excess water",
            d: "boil the acid"
        },
        correctAnswer: "d"
    }
]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

switch(window.location.pathname) {
    case "/chem/metals_acids.html":
        generateQuiz(metals_acids, quizContainer, resultsContainer, submitButton);
}