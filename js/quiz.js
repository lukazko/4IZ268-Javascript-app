// Funkce, která naplní a sestaví obsah kvízu
function buildQuiz() {

    resultsContainer.innerHTML = ``;
    const output = [];

    listOfQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            // Založení radio buttonů
            answers.push(
                `<label>
              <input type="radio" name="question${questionNumber}" class="disableMe" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        // Vložení otázek a odpovědí do outputu
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
    });

    // Vypsání do HTML dokumentu
    quizContainer.innerHTML = output.join("");

}

// Funkce, která zjistí a vypíše uživatelův výsledek
function showResults() {

    // Shromáždění všech odpovědí
    const answerContainers = quizContainer.querySelectorAll(".answers");
    // Proměnná pro správné odpovědi
    let numCorrect = 0;

    listOfQuestions.forEach((currentQuestion, questionNumber) => {
        // Hledání zaškrtlé otázky
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });

    // Výpis výsledku
    resultsContainer.innerHTML = `${numCorrect} out of ${listOfQuestions.length}`;

    // Vypnutí všech radiobuttonů po vyhodnocení
    var radios = document.getElementsByClassName("disableMe");

    for (var i = 0, iLen = radios.length; i < iLen; i++) {
        radios[i].disabled = true;
    };

};

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const newButton = document.getElementById("new");
const submitButton = document.getElementById("submit");

const listOfQuestions = [
    {
        question: "Ahoj, vítej v mém kvízu, nebudeme otálet a jdeme rovnou na věc!",
        answers: {
            a: "Ahoj!",
            b: "Tvoje máma je kvíz!",
            c: "Život je life",
            d: "4IZ268"
        },
        correctAnswer: "c"
    },
    {
        question: "Jaký je tvůj neoblíbenější kousek z merche The Boring Company?",
        answers: {
            a: "Flamethrower",
            b: "Kšiltovka",
            c: "not a Flamethrower"
        },
        correctAnswer: "c"
    },
    {
        question: "Petr nikdy nemluví pravdu. Zuzana vždycky lže. Zuzana tvrdí, že Petr na sobě má zelený svetr. Petr říká, že tomu tak není. Kolik štěňat má Standa?",
        answers: {
            a: "Nevím :(",
            b: "3",
            d: "Standa má surikatu",
            c: "Panu Jiřímu smrdí nohy"
        },
        correctAnswer: "d"
    },
    {
        question: "Který z Finwëho synů je tvůj nejoblíbenější?",
        answers: {
            a: "Fëanor",
            b: "Fingolfin",
            c: "Finarfin",
            d: "Galadriel"
        },
        correctAnswer: "a"
    },
    {
        question: "Myslíš si, že je Schrödingerova kočka naživu?",
        answers: {
            a: "Ano",
            b: "Ne",
            c: "Kvantová mechanika nefunguje v makrosvětě :(",
            d: "Penny je blbá blondýna"
        },
        correctAnswer: "d"
    },
    {
        question: "Tak jsme na konci. Čeká tě už jen poslední zapeklitá otázka. Líbil se ti tento kvíz?",
        answers: {
            a: "13",
            b: "21",
            c: "42",
            d: "759"
        },
        correctAnswer: "c"
    }
];

buildQuiz();
submitButton.addEventListener("click", showResults);
newButton.addEventListener("click", buildQuiz);