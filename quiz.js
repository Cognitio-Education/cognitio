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
                answerContainers[i].style.color = 'green';
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

var salts_acids = [
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
    }];

var organisation = [
    {
        question: "Which of the following is NOT a level of organisation?",
        answers: {
            a: "DNA",
            b: "The heart",
            c: "Tissues",
            d: "Organ systems"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these is the correct order of organisation, from largest to smallest?",
        answers: {
            a: "Cells, DNA, Organs, Organ systems, Tissues, Organisms",
            b: "DNA, Cells, Organs, Tissues, Organ systems, Organisms",
            c: "DNA, Cells, Tissues, Organs, Organ systems, Organisms",
            d: "DNA, Tissues, Cells, Organs, Organ systems, Organisms"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of these is an example of an organ?",
        answers: {
            a: "The liver",
            b: "Muscles",
            c: "The gut",
            d: "The endocrine system"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these statements is false?",
        answers: {
            a: "The heart is an organ.",
            b: "Tissues are groups of cells.",
            c: "Not all cells contain DNA.",
            d: "Organs contain tissues with a similar purpose."
        },
        correctAnswer: "c"
    },
    {
        question: "Give the correct definition for a cell.",
        answers: {
            a: "A group of tissues working together.",
            b: "The building blocks of living organisms, which perform important functions.",
            c: "A living thing containing several organ systems.",
            d: "An organ system which contains the heart."
        },
        correctAnswer: "b"
    }];

var acids_alkalis = [
    {
        question: "What is pH a measure of?",
        answers:
        {
            a: "Solubility",
            b: "H+ ion concentration",
            c: "Water concentration",
            d: "Number"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the difference in concentration between pH 1 and 4?",
        answers:
        {
            a: "x100",
            b: "x10",
            c: "x10000",
            d: "x1000"
        },
        correctAnswer: "d"
    },
    {
        question: "pH 1 = ? mole/dm^3",
        answers:
        {
            a: "0",
            b: "0.1",
            c: "1",
            d: "100"
        },
        correctAnswer: "b"
    },
    {
        question: "What ions do acids release?",
        answers:
        {
            a: "H+",
            b: "OH-",
            c: "H20",
            d: "H-"
        },
        correctAnswer: "a"
    },
    {
        question: "What is a base?",
        answers:
        {
            a: "A soluble alkali",
            b: "A H+ ion acceptor",
            c: "An element",
            d: "A hydrogen ion"
        },
        correctAnswer: "b"
    }];

var reactivity_displacement = [
        {
            question: "Which of the following metals cannot be reduced with carbon?",
            answers:
            {
                a: "Iron",
                b: "Copper",
                c: "Aluminium",
                d: "Lead"
            },
            correctAnswer: "c"
        },
        {
            question: "What is reduction?",
            answers:
            {
                a: "Loss of electrons, gaining of oxygen",
                b: "Loss of hydrogen ions",
                c: "Gaining of electrons, loss of oxygen",
                d: "A change in colour"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is a method of extracting metals more reactive than carbon?",
            answers:
            {
                a: "Blast furnace",
                b: "React with copper",
                c: "React with hydrogen",
                d: "Electrolysis"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of the following metals is the most reactive?",
            answers:
            {
                a: "Ca",
                b: "Au",
                c: "Zn",
                d: "Cu"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following react vigorously with water?",
            answers:
            {
                a: "Magnesium, Aluminium, Zinc",
                b: "Copper, Gold, Silver",
                c: "Zinc, Iron, Tin",
                d: "Potassium, Sodium, Calcium"
            },
            correctAnswer: "d"
        }];


var digestion_intro = [
    {
        question: "In which of the following does mechanical digestion occur?",
        answers:
        {
            a: "Liver",
            b: "Large intestine",
            c: "Gallbladder",
            d: "Stomach"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these does the liver NOT do?",
        answers:
        {
            a: "Produce bile",
            b: "Emulsify fats",
            c: "Produce enzymes",
            d: "Send bile to the gallbladder"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is false?",
        answers:
        {
            a: "The large intestine absorbs water",
            b: "The stomach absorbs nutrients",
            c: "The pancreas produces enzymes",
            d: "The small intestine absorbs nutrients"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the ring of muscle that releases faeces called?",
        answers:
        {
            a: "Pancreas",
            b: "Rectum",
            c: "Liver",
            d: "Anus"
        },
        correctAnswer: "d"
    },
    {
        question: "Which organ's contents are acidic?",
        answers:
        {
            a: "The small intestine",
            b: "The large intestine",
            c: "The stomach",
            d: "The gallbladder"
        },
        correctAnswer: "c"
    }];

var classifying_acids = [
    {
        question: "Which of the following is NOT a strong acid?",
        answers:
        {
            a: "Sulfuric acid",
            b: "Hydrochloric acid",
            c: "Methanoic acid",
            d: "Nitric acid"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is the correct definition of dissociation?",
        answers:
        {
            a: "The splitting of an acid into its ions",
            b: "The dissolving of an acid",
            c: "The neutralisation of an acid with an alkali",
            d: "Burning of an acid"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is unusual about weak acids?",
        answers:
        {
            a: "They can release H+ ions",
            b: "Their dissociation is reversible",
            c: "They can be dissolved in water",
            d: "They can exist as a liquid"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of these is NOT a weak acid?",
        answers:
        {
            a: "Methanoic acid",
            b: "Ethanoic acid",
            c: "Hydrochloric acid",
            d: "Phosphoric acid"
        },
        correctAnswer: "c"
    }];

var food_biology = [
    {
        question: "Which of the following is NOT a use for carbohydrates?",
        answers:
        {
            a: "As an energy store",
            b: "As an energy source",
            c: "For growth and repair of tissues",
            d: "For structure in cells"
        },
        correctAnswer: "c"
    },
    {
        question: "Which method is used to test for lipids?",
        answers:
        {
            a: "Biuret reagent/test",
            b: "Benedict's reagent",
            c: "Iodine solution",
            d: "Ethanol + water"
        },
        correctAnswer: "a"
    },
    {
        question: "Which method is used to test for starch?",
        answers:
        {
            a: "Biuret reagent/test",
            b: "Benedict's reagent",
            c: "Iodine solution",
            d: "Ethanol + water"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is false?",
        answers:
        {
            a: "Lipids are used as an energy store.",
            b: "Proteins contain nitrogen.",
            c: "Proteins, lipids and carbohydrates all contain carbon.",
            d: "Carbohydrates do not contain oxygen."
        },
        correctAnswer: "d"
    }];

var enzymes = [
    {
        question: "What is the name of the theory in which the active site of an enzyme is slightly flexible?",
        answers: {
            a: "Lock and key theory",
            b: "Substrate theory",
            c: "Induced fit theory",
            d: "Enzyme theory"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the term for when an enzyme stops working due to its conditions?",
        answers: {
            a: "Denaturing",
            b: "pH",
            c: "Optimum values",
            d: "Amylase"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the optimum temperature for enzymes in the human body (in general)?",
        answers: {
            a: "34&#8451;",
            b: "35&#8451;",
            c: "36&#8451;",
            d: "37&#8451;"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these enzymes works in the stomach?",
        answers: {
            a: "Amylase",
            b: "Protease",
            c: "Lipase",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Give the correct definiton of a substrate.",
        answers: {
            a: "A biological catalyst.",
            b: "Something that controls the rate of a reaction.",
            c: "Something which is affected by an enzyme.",
            d: "The enzyme used to catalyse the breakdown of proteins into amino acids."
        },
        correctAnswer: "c"
    }];

var cell_structure = [
    {
        question: "Which of the following is NOT found in an animal cell?",
        answers: {
            a: "Mitochondria",
            b: "Nucleus",
            c: "Cell wall",
            d: "Cytoplasm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which organelle is known as the 'powerhouse' of the cell?",
        answers: {
            a: "Mitochondria",
            b: "Chloroplasts",
            c: "Cell wall",
            d: "Cytoplasm"
        },
        correctAnswer: "a"
    },
    {
        question: "Which organelle performs photosynthesis?",
        answers: {
            a: "Mitochondria",
            b: "Chloroplasts",
            c: "Cell wall",
            d: "Cytoplasm"
        },
        correctAnswer: "b"
    },
    {
        question: "Which organelle performs aerobic respiration?",
        answers: {
            a: "Mitochondria",
            b: "Chloroplasts",
            c: "Cell wall",
            d: "Cytoplasm"
        },
        correctAnswer: "a"
    },
    {
        question: "Give the correct definiton of a vacuole.",
        answers: {
            a: "An organelle which makes the cell/plant green.",
            b: "A gel in which organelles are suspended.",
            c: "A support structure made of cellulose.",
            d: "A sac filled with cell sap."
        },
        correctAnswer: "d"
    }];

var microscopes = [
    {
        question: "Which of the following is NOT a part of the microscope?",
        answers: {
            a: "Glass lens",
            b: "Objective lens",
            c: "Coarse focus",
            d: "Eyepiece lens"
        },
        correctAnswer: "a"
    },
    {
        question: "Which equation allows us to find the real size of a magnified image?",
        answers: {
            a: "image size x magnification",
            b: "magnification / image size",
            c: "image size / magnification",
            d: "image size + magnification"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is a disadvantage of an electron microscope?",
        answers: {
            a: "It allows for a higher resolution",
            b: "It allows for a greater magnification",
            c: "It is very cheap",
            d: "It cannot take colour images"
        },
        correctAnswer: "d"
    },
    {
        question: "Why are there two focus controls?",
        answers: {
            a: "In order to see the cells more clearly",
            b: "It allows for colour images",
            c: "In order to have more control over the focus of the image",
            d: "In order to zoom in further to the cell"
        },
        correctAnswer: "c"
    },
    {
        question: "A cell, size 26μm is magnified 100x. What is the image size?",
        answers: {
            a: "2.6mm",
            b: "26mm",
            c: "260μm",
            d: "2.6cm"
        },
        correctAnswer: "a"
    }];

var cell_transport = [
    {
        question: "Which of the following is an example of active transport in the human body?",
        answers: {
            a: "Gas exchange in the alveoli",
            b: "Transfer of sugars in the small intestine",
            c: "Transfer of water in the cells",
            d: "Gas exchange in the cells"
        },
        correctAnswer: "b"
    },
    {
        question: "In which direction does diffusion occur?",
        answers: {
            a: "From low concentration to high concentration",
            b: "From high concentration to low concentration",
            c: "Between areas of equal concentration",
            d: "They do not move in any direction"
        },
        correctAnswer: "b"
    },
    {
        question: "In which direction does osmosis occur?",
        answers: {
            a: "Between areas of equal concentration",
            b: "They do not move in any direction",
            c: "From high concentration to low concentration",
            d: "From low concentration to high concentration"
        },
        correctAnswer: "c"
    },
    {
        question: "Which transport process occurs in the lungs?",
        answers: {
            a: "Active transport",
            b: "No transport occurs",
            c: "Osmosis",
            d: "Diffusion"
        },
        correctAnswer: "d"
    }];

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
    case "/chem/acids_alkalis.html":
        generateQuiz(acids_alkalis, quizContainer, resultsContainer, submitButton);
        break;
    case "/chem/reactivity_displacement.html":
        generateQuiz(reactivity_displacement, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/digestion_intro.html":
        generateQuiz(digestion_intro, quizContainer, resultsContainer, submitButton);
        break;
    case "/chem/classifying_acids.html":
        generateQuiz(classifying_acids, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/food_biology.html":
        generateQuiz(food_biology, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/enzymes.html":
        generateQuiz(enzymes, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/cell_structure.html":
        generateQuiz(cell_structure, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/microscopes.html":
        generateQuiz(microscopes, quizContainer, resultsContainer, submitButton);
        break;
    case "/bio/cell_transport.html":
        generateQuiz(cell_transport, quizContainer, resultsContainer, submitButton);
        break;
    default:
        quizContainer.innerHTML = "<img src=\"/images/noQuiz.png\">"
}