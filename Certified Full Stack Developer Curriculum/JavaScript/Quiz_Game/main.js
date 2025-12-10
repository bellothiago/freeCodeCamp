const questions = [
  {
    category: "Mammals",
    question: "What is the largest land animal on Earth?",
    choices: ["African Elephant", "White Rhinoceros", "Hippopotamus"],
    answer: "African Elephant"
  },
  {
    category: "Birds",
    question: "Which bird is known for its ability to mimic human speech?",
    choices: ["African Grey Parrot", "Bald Eagle", "Emperor Penguin"],
    answer: "African Grey Parrot"
  },
  {
    category: "Marine Life",
    question: "How many hearts does an octopus have?",
    choices: ["One", "Two", "Three"],
    answer: "Three"
  },
  {
    category: "Animal Behavior",
    question: "Which animal is known to sleep standing up?",
    choices: ["Horse", "Lion", "Kangaroo"],
    answer: "Horse"
  },
  {
    category: "Animal Classification",
    question: "What type of animal is a Komodo Dragon?",
    choices: ["Mammal", "Reptile", "Amphibian"],
    answer: "Reptile"
  }
];

function getRandomQuestion(questionsArray) {
  let randomNumber = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomNumber];
};

function getRandomComputerChoice(choicesArray) {
  let randomNumber = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomNumber];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!"
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObject.answer
  }
}