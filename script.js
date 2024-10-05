const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const startBtn = document.querySelector(".start");
const numQuestion = document.querySelector("#num-questions");
const difficulty = document.querySelector("#difficulty");
const category = document.querySelector("#category");
const timePerQuestion = document.querySelector("#time-limit");
const quiz = document.querySelector(".quiz");
const startScreen = document.querySelector(".start-screen");
const endScreen = document.querySelector(".end-screen");
const finalScoreText = document.querySelector(".final-score");
const totalScoreText = document.querySelector(".total-score");

// Existing questions array with difficulty levels
let questions = [
    // Easy questions
    {
        question: "What are Exoplanets?",
        correct_answer: "A planet that orbits a star outside our Solar System",
        incorrect_answers: ["A planet within our Solar System", "A planet that does not orbit any star", "A star outside the Solar System"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following is a planet outside our solar system that usually orbits another star in our galaxy?",
        correct_answer: "Exoplanet",
        incorrect_answers: ["Mesoplanet", "Super Earth", "Haumea"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "Which method is most commonly used to discover exoplanets?",
        correct_answer: "Transit method",
        incorrect_answers: ["Direct imaging", "Gravitational lensing", "Radio signals"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "How many exoplanets are there?",
        correct_answer: "More than 5,500",
        incorrect_answers: ["Less than 4000", "More than 6000", "Nove of the above"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "What term is used to describe an Earth-like exoplanet?",
        correct_answer: "Super-Earth",
        incorrect_answers: ["Supernova", "Red dwarf", "Black hole"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "Which space telescope is famous for discovering thousands of exoplanets?",
        correct_answer: "Kepler Space Telescope",
        incorrect_answers: ["Hubble Space Telescope", "Spitzer Space Telescope", "James Webb Space Telescope"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "What is a Super-Earth?",
        correct_answer: "An exoplanet with a mass higher than Earth's but lower than Neptune's",
        incorrect_answers: ["A planet with Earth-like conditions and atmosphere", "A planet with extremely high surface gravity", "A planet larger than Earth but made mostly of gas"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "What type of exoplanets are most commonly detected?",
        correct_answer: "Gas giants",
        incorrect_answers: ["Rocky planets", "Ice giants", "Rogue planets"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "What is the primary goal of the Kepler Space Telescope?",
        correct_answer: "To discover exoplanets",
        incorrect_answers: ["To study black holes", "To map the surface of Mars", "To detect asteroids"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following is a method used to detect exoplanets?",
        correct_answer: "Doppler spectroscopy (Radial velocity)",
        incorrect_answers: ["Plate tectonics", "Photosynthesis", "Nuclear fusion"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "What is the main component of gas giant exoplanets?",
        correct_answer: "Hydrogen and helium",
        incorrect_answers: ["Water", "Methane", "Iron"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "Which type of planet is Jupiter in our solar system, similar to many exoplanets found by astronomers?",
        correct_answer: "Gas Giant",
        incorrect_answers: ["Terrestrial", "Super-Earth", "Dwarf Planet"],
        difficulty: "easy",
        note: "Jupiter is a Gas Giant, a massive planet made mostly of hydrogen and helium, similar to many exoplanets classified as 'Hot Jupiters'."
    },
    {
        question: "Which of these stars has an exoplanet in its orbit?",
        correct_answer: "Proxima Centauri",
        incorrect_answers: ["Alpha Centauri", "Betelgeuse", "Sirius"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "How many exoplanets have been discovered to-date?",
        correct_answer: "More than 5000",
        incorrect_answers: ["Less than 100", "Around 500", "None"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    {
        question: "Why can't we visit an exoplanet?",
        correct_answer: "They are too far away",
        incorrect_answers: ["They are too hot", "They have no oxygen", "They are too cold"],
        difficulty: "easy",
        note: "Add or edit additional information here"
    },
    // Medium questions
    {
        question: "What was the first confirmed exoplanet discovered in 1992?",
        correct_answer: "PSR B1257+12",
        incorrect_answers: ["Proxima Centauri b", "51 Pegasi b", "Kepler-452b"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following exoplanets was the first discovered around a Sun-like star?",
        correct_answer: "51 Pegasi b",
        incorrect_answers: ["Kepler-22b", "Proxima Centauri b", "HD 209458 b"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following is a hot Jupiter?",
        correct_answer: "HD 189733 b",
        incorrect_answers: ["Kepler-452b", "TRAPPIST-1e", "Gliese 581g"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which term describes an exoplanet that has a highly eccentric orbit?",
        correct_answer: "Eccentric planet",
        incorrect_answers: ["Super-Earth", "Rogue planet", "Hot Neptune"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "What is the name of the first ESA space telescope dedicated to studying exoplanets?",
        correct_answer: "Cheops",
        incorrect_answers: ["Cyclops", "Botox", "Rosetta"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which factor primarily determines whether an exoplanet is terrestrial or gas giant?",
        correct_answer: "It's mass",
        incorrect_answers: ["It's distance from its star", "The age of the star", "The size of the star"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "What is a rogue planet?",
        correct_answer: "A planet that does not orbit any star",
        incorrect_answers: ["A planet that moves from one star system to another", "A planet with multiple moons", "A planet that orbits a binary star system"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following is NOT a confirmed method used to detect exoplanets?",
        correct_answer: "Astrological Predictions",
        incorrect_answers: ["Transit Method", "Radial Velocity", "Direct Imaging"],
        difficulty: "medium",
        note: "While the other methods rely on scientific techniques to observe exoplanets, 'astrological predictions' are not a valid or scientific approach to finding planets."
    },
    {
        question: "What is an exoplanet transit? When an exoplanet…",
        correct_answer: "Passes in front of its star, dimming its light",
        incorrect_answers: ["wobbles", "leaves a star's orbit", "finds a new star to orbit"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "How can the composition of an exoplanet’s atmosphere be determined?",
        correct_answer: "By analyzing the light spectrum from the planet’s transit",
        incorrect_answers: ["By measuring the gravitational pull of the planet", "By using radar to map the planet’s surface", "By measuring the planet’s magnetic field"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following exoplanets is considered the best candidate for studying atmospheric biosignatures, such as oxygen or methane?",
        correct_answer: "TRAPPIST-1e",
        incorrect_answers: ["HD 209458b", "Kepler-10c", "WASP-121b"],
        difficulty: "medium",
        note: "TRAPPIST-1e, located in the habitable zone of a nearby M-dwarf, has been identified as one of the best candidates for studying atmospheric biosignatures that could indicate life."
    },
    {
        question: "What is the nearest exoplanet to Earth?",
        correct_answer: "Proxima Centauri b",
        incorrect_answers: ["HD 189733 b", "51 Pegasi b", "Gliese 581g"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which exoplanet is the same size as Earth?",
        correct_answer: "Kepler-1649c",
        incorrect_answers: ["HD 189733 b", "51 Pegasi b", "Gliese 581g"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "What is the farthest exoplanet we know?",
        correct_answer: "HD 106906 b",
        incorrect_answers: ["51 Pegasi b", "HD 189733 b", "Gliese 581g"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following is a characteristic of a Hot Jupiter?",
        correct_answer: "A gas giant that orbits very close to its star",
        incorrect_answers: ["A rocky planet similar to Earth", "A gas giant orbiting far from its star", "A planet with a long orbital period"],
        difficulty: "medium",
        note: "Add or edit additional information here"
    },
    // Hard questions
    {
        question: "What is the average density of Earth-like exoplanets compared to gas giants?",
        correct_answer: "Higher",
        incorrect_answers: ["Lower", "Equal", "Varies randomly"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    },
    {
        question: "What does the transit method measure to detect an exoplanet?",
        correct_answer: "The dimming of a star as a planet passes in front of it",
        incorrect_answers: ["The gravitational influence of the planet on its star", "The heat emitted by the exoplanet", "The Doppler shift in the star's light"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    },
    {
        question: "What is the main challenge of the direct imaging method for discovering exoplanets?",
        correct_answer: "The brightness of the host star overwhelms the light from the planet",
        incorrect_answers: ["The planet’s orbital distance from the star", "The planet's lack of sufficient gravity", "The planet’s small size compared to stars"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    },
    {
        question: "The James Webb Space Telescope is designed to study exoplanets primarily through:",
        correct_answer: "Infrared spectroscopy",
        incorrect_answers: ["Gravitational microlensing", "X-ray imaging", "Ultraviolet detection"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    },
    {
        question: "Which of the following has NOT been detected in the atmosphere of an exoplanet?",
        correct_answer: "Artificial Chlorofluorocarbons (CFCs)",
        incorrect_answers: ["Water vapor", "Methane", "Carbon dioxide"],
        difficulty: "hard",
        note: "While scientists have detected water, methane, and carbon dioxide in exoplanetary atmospheres, no evidence of artificial pollutants like CFCs has been found, which would suggest technological civilizations."
    },
    {
        question: "What is a major limitation of the Radial Velocity method in detecting Earth-sized exoplanets?",
        correct_answer: "Earth-sized planets induce a very small wobble in the star",
        incorrect_answers: ["Radial velocity can't detect planets around binary star systems", "It only works for planets far from the star", "It requires very large telescopes"],
        difficulty: "hard",
        note: "Radial velocity measures the 'wobble' in a star caused by gravitational interactions with a planet. Earth-sized planets cause a wobble too small to detect easily."
    },
    {
        question: "Which of the following exoplanets orbits within the habitable zone of its host star?",
        correct_answer: "Kepler-452b",
        incorrect_answers: ["51 Pegasi b", "WASP-12b", "HD 209458 b"],
        difficulty: "hard",
        note: "Kepler-452b orbits a Sun-like star and is located within the habitable zone, which could potentially allow for liquid water on its surface."
    },
    {
        question: "In 1992, astronomers Aleksander Wolszczan and Dale Frail found the first exoplanets around what unusual object?",
        correct_answer: "A pulsar",
        incorrect_answers: ["A marsbar", "A quasar", "A gamma ray burster"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    },
    {
        question: "Which exoplanet has the longest orbit?",
        correct_answer: "Gliese 900 b ",
        incorrect_answers: ["PSR J1719-1438 b", "HD 106906 b", "Kepler-452b"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    },
    {
        question: "Advances in which telescope technology has revolutionized exoplanetary research?",
        correct_answer: "CCD",
        incorrect_answers: ["MMP", "THC", "HDTV"],
        difficulty: "medium",
        note: "CCD (Charge-Coupled Devices) revolutionized exoplanet detection by improving the precision of astronomical imaging, crucial for detecting exoplanets through techniques like transits and radial velocity."
    },
    {
        question: "Launched in 2003, the Space Infrared Telescope Facility has directly imaged large 'Hot Jupiter' planets such as Osiris. This telescope is named after which famous theoretical physicist?",
        correct_answer: "Lyman Spitzer",
        incorrect_answers: ["Charles Babbage", "Edwin Hubble", "James Ussher"],
        difficulty: "medium",
        note: "This telescope was later renamed the Spitzer Space Telescope in honor of Lyman Spitzer, who was a pioneer in theoretical astrophysics and advocated for space-based observatories."
    },
    {
        question: "Which of the following exoplanets is known for having an extremely short orbital period, completing one orbit in less than a day?",
        correct_answer: "WASP-19b",
        incorrect_answers: ["Kepler-22b", "HD 189733b", "Proxima Centauri b"],
        difficulty: "hard",
        note: "WASP-19b is a 'Hot Jupiter' that orbits its host star in less than a day, making it one of the closest orbiting gas giants discovered."
    },
    {
        question: "Which type of exoplanet is the most difficult to detect using the transit method?",
        correct_answer: "Earth-sized planets around distant stars",
        incorrect_answers: ["Hot Jupiters", "Super-Earths", "Planets with short orbital periods"],
        difficulty: "hard",
        note: "Small Earth-sized planets block only a tiny fraction of their star’s light, making them more challenging to detect, especially when the star is far away."
    },
    {
        question: "51 Pegasi b is the first exoplanet discovered around a sun-like star. It has an orbital period of only 4 Earth days and is thus known as the prototype of what kind of planet?",
        correct_answer: "Hot Jupiter",
        incorrect_answers: ["Near Neptunian", "Ice giant", "Brown dwarf"],
        difficulty: "easy",
        note: "51 Pegasi b is a 'Hot Jupiter', a gas giant with an extremely short orbital period, which was surprising when first discovered because it was closer to its star than expected for a gas giant."
    },    
    {
        question: "The radial velocity method measures which property of a star to detect exoplanets?",
        correct_answer: "Motion towards or away from Earth",
        incorrect_answers: ["Temperature", "Brightness", "Magnetic field strength"],
        difficulty: "hard",
        note: "Add or edit additional information here"
    }
];

let time = 30;
let score = 0;
let currentQuestion = 0;
let selectedQuestions = [];
let timeLimit = 0;
let timer;

// Start the quiz function
const startQuiz = () => {
    const num = parseInt(numQuestion.value);
    timeLimit = parseInt(timePerQuestion.value);
    const selectedDifficulty = difficulty.value; // Get the selected difficulty

    startScreen.classList.add("hide");
    quiz.classList.remove("hide");

    currentQuestion = 0;
    score = 0;

    // Filter questions based on selected difficulty
    const filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);
    selectedQuestions = filteredQuestions.slice(0, num); 

    showQuestion(selectedQuestions[currentQuestion], selectedQuestions.length);
};

// Function to show the question
const showQuestion = (question, totalQuestions) => {
    const questionText = document.querySelector(".question");
    const answerWrapper = document.querySelector(".answer-wrapper");
    const questionNumber = document.querySelector(".number .current");
    const totalNumber = document.querySelector(".number .total");

    questionText.innerHTML = question.question;

    const answers = [
        ...question.incorrect_answers,
        question.correct_answer,
    ];
    answers.sort(() => Math.random() - 0.5);

    answerWrapper.innerHTML = "";

    answers.forEach((answer) => {
        answerWrapper.innerHTML += `
            <div class="answer">
                <span class="text">${answer}</span>
                <span class="checkbox">
                    <span class="icon">✓</span>
                </span>
            </div>
        `;
    });

    questionNumber.innerHTML = `${currentQuestion + 1}`;
    totalNumber.innerHTML = `/${totalQuestions}`;

    const answerDiv = document.querySelectorAll(".answer");
    answerDiv.forEach((answer) => {
        answer.addEventListener("click", () => {
            answerDiv.forEach((ans) => {
                ans.classList.remove("selected");
            });
            answer.classList.add("selected");
            submitBtn.disabled = false;
        });
    });

    time = timeLimit; 
    resetTimer(); 
};

// Timer function
const startTimer = (duration) => {
    let timeLeft = duration;
    progressBar.style.width = "100%";

    timer = setInterval(() => {
        timeLeft--;
        progressText.innerText = timeLeft;

        const percentage = (timeLeft / duration) * 100;
        progressBar.style.width = `${percentage}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            goToNextQuestion();
        }
    }, 1000);
};

// Reset timer function
const resetTimer = () => {
    clearInterval(timer);
    startTimer(timeLimit);
};

// Function to go to the next question
const goToNextQuestion = () => {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        showQuestion(selectedQuestions[currentQuestion], selectedQuestions.length);
    } else {
        endQuiz();
    }
};

// End the quiz
const endQuiz = () => {
    clearInterval(timer);
    quiz.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScoreText.innerHTML = score;
    totalScoreText.innerHTML = `/${selectedQuestions.length}`;
};

// Event Listeners
startBtn.addEventListener("click", startQuiz);
document.querySelector(".restart").addEventListener("click", () => {
    endScreen.classList.add("hide");
    startScreen.classList.remove("hide");
});

// Submit button logic
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
    const selectedAnswer = document.querySelector(".answer.selected");
    if (!selectedAnswer) return;

    const answerText = selectedAnswer.querySelector(".text").innerText;
    const currentQuestionData = selectedQuestions[currentQuestion];

    if (answerText === currentQuestionData.correct_answer) {
        score++;
        selectedAnswer.classList.add("correct");
    } else {
        selectedAnswer.classList.add("wrong");
        const correctAnswer = Array.from(document.querySelectorAll(".answer")).find(
            ans => ans.querySelector(".text").innerText === currentQuestionData.correct_answer
        );
        if (correctAnswer) {
            correctAnswer.classList.add("correct");
        }
    }

    const allAnswers = document.querySelectorAll(".answer");
    allAnswers.forEach(answer => {
        answer.classList.add("checked");
    });

    submitBtn.disabled = true;

    // Directly go to the next question after a delay
    setTimeout(goToNextQuestion, 1000); // Wait 1 second before moving to the next question
});