const quiz = document.getElementById("quiz");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const message = document.getElementById("message");
const finalResult = document.getElementById("finalResult");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");

const questions =[
    {
        question: "Which language makes a website interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Photoshop"
        ],

        answer: "JavaScript"
    },

    {
        question: "Which tag is used to add JavaScript in HTML?",
        options:[
            "<style>",
            "<script>",
            "<js>",
            "<javascript>"
        ],

        answer: "<script>"

    },

    {
        question: "Which keyword creates a variable in JavaScript?",
        options: [
            "let",
            "style",
            "html",
            "link"
        ],

        answer: "let"
    },

    {
        question: "Which method selects an element by ID?",
        options: [
            "getElementById",
            "getClass",
            "getHTML",
            "selectId"
        ],

        answer: "getElementById"
    },

    {
        question: "Which event is used for a button click?",
        options: [
            "hover",
            "change",
            "click",
            "load"
        ],

        answer: "click"
    }
];

let currentQuestion = 0;

let score = 0;

    function showQuestion() {

            message.innerText = "";
            options.innerHTML = "";

            questionNumber.innerText ="Question " +(currentQuestion + 1) + " of " + 
            questions.length;

            question.innerText = questions[currentQuestion].question;


            const currentOptions = questions[currentQuestion].options;


            currentOptions.forEach(function (option) {

                const optionBox = document.createElement("div");
                optionBox.classList.add("option");

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "answer";
                radio.value = option;

                const label = document.createElement("label");
                label.innerText = option;

                optionBox.appendChild(radio);
                optionBox.appendChild(label);
                options.appendChild(optionBox);

            });


            if (currentQuestion === questions.length - 1) {

                nextBtn.innerText = "Finish Quiz";

            } else {

                nextBtn.innerText = "Next Question";

            }

        }


        nextBtn.addEventListener("click", function () {

            const selectedAnswer = document.querySelector('input[name="answer"]:checked' );

            if (selectedAnswer === null) {

                message.innerText =
                    "Please select an answer";
                return;
            }

            if (
                selectedAnswer.value ===
                questions[currentQuestion].answer
            ) {
                score = score + 1;

            }

            currentQuestion = currentQuestion + 1;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        });


        function showResult() {
            quiz.style.display = "none";
            finalResult.style.display = "block";

            scoreText.innerText =
                "Your Score: " +
                score +
                " / " +
                questions.length;

        }

        restartBtn.addEventListener("click", function () {
            currentQuestion = 0;
            score = 0;
            quiz.style.display = "block";
            finalResult.style.display = "none";
            showQuestion();
        });

        showQuestion();