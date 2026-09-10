"use strict";

const elements = {
  quizView: document.querySelector("#quiz-view"),
  resultView: document.querySelector("#result-view"),
  score: document.querySelector("#score"),
  counter: document.querySelector("#question-counter"),
  progressTrack: document.querySelector("#progress-track"),
  progressBar: document.querySelector("#progress-bar"),
  instruction: document.querySelector("#instruction"),
  sentence: document.querySelector("#sentence"),
  answers: document.querySelector("#answer-buttons"),
  feedback: document.querySelector("#feedback"),
  successImage: document.querySelector("#success-image"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackAnswer: document.querySelector("#feedback-answer"),
  feedbackExplanation: document.querySelector("#feedback-explanation"),
  feedbackNote: document.querySelector("#feedback-note"),
  nextButton: document.querySelector("#next-button"),
  resultTitle: document.querySelector("#result-title"),
  resultText: document.querySelector("#result-text"),
  restartButton: document.querySelector("#restart-button")
};

let questions = [];
let questionIndex = 0;
let score = 0;
let answered = false;
let activeChoices = [];

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function startGame() {
  questions = shuffled(PREPOSITION_QUESTIONS);
  questionIndex = 0;
  score = 0;
  answered = false;
  elements.score.textContent = "0";
  elements.resultView.hidden = true;
  elements.quizView.hidden = false;
  renderQuestion();
}

function currentQuestion() {
  return questions[questionIndex];
}

function renderSentence(text) {
  const [before, after] = text.split("___");
  elements.sentence.replaceChildren();
  elements.sentence.append(document.createTextNode(before));

  const blank = document.createElement("span");
  blank.className = "blank";
  blank.textContent = "___";
  blank.setAttribute("aria-label", "manglende preposisjon");
  elements.sentence.append(blank);
  elements.sentence.append(document.createTextNode(after));
}

function renderQuestion() {
  const question = currentQuestion();
  answered = false;
  activeChoices = shuffled(question.choices);

  elements.counter.textContent = `Oppgave ${questionIndex + 1} av ${questions.length}`;
  elements.progressTrack.setAttribute("aria-valuemax", String(questions.length));
  elements.progressTrack.setAttribute("aria-valuenow", String(questionIndex + 1));
  elements.progressBar.style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  elements.instruction.textContent = `Velg mellom ${activeChoices[0]} og ${activeChoices[1]}.`;
  renderSentence(question.sentence);

  elements.answers.replaceChildren();
  activeChoices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.choice = choice;
    button.textContent = `${index + 1}. ${choice}`;
    button.addEventListener("click", () => checkAnswer(choice));
    elements.answers.append(button);
  });

  elements.feedback.hidden = true;
  elements.feedback.classList.remove("no-image");
  elements.successImage.hidden = true;
  elements.feedbackNote.hidden = true;
}

function explanationFor(question) {
  return question.correct
    .map(answer => question.explanations[answer])
    .filter(Boolean)
    .join(" ");
}

function showWithItalicPrepositions(element, text, prepositions) {
  const alternatives = prepositions.join("|");
  const pattern = new RegExp(
    `(?<!\\p{L})(${alternatives})(?!\\p{L})`,
    "giu"
  );
  let previousEnd = 0;

  element.replaceChildren();

  for (const match of text.matchAll(pattern)) {
    if (match.index > previousEnd) {
      element.append(document.createTextNode(text.slice(previousEnd, match.index)));
    }

    const italic = document.createElement("em");
    italic.textContent = match[0];
    element.append(italic);
    previousEnd = match.index + match[0].length;
  }

  if (previousEnd < text.length) {
    element.append(document.createTextNode(text.slice(previousEnd)));
  }
}

function checkAnswer(choice) {
  if (answered) return;
  answered = true;

  const question = currentQuestion();
  const isCorrect = question.correct.includes(choice);
  const hasSeveralAnswers = question.correct.length > 1;

  if (isCorrect) {
    score += 1;
    elements.score.textContent = String(score);
    elements.feedbackTitle.textContent = "Riktig!";
    showWithItalicPrepositions(
      elements.feedbackAnswer,
      hasSeveralAnswers
        ? "Her er begge svarene mulige."
        : `${choice} er riktig preposisjon.`,
      question.correct
    );
    elements.successImage.hidden = false;
    elements.feedback.classList.remove("no-image");
  } else {
    elements.feedbackTitle.textContent = "Ikke helt!";
    showWithItalicPrepositions(
      elements.feedbackAnswer,
      `Riktig svar er ${question.correct.join(" eller ")}.`,
      question.correct
    );
    elements.successImage.hidden = true;
    elements.feedback.classList.add("no-image");
  }

  showWithItalicPrepositions(
    elements.feedbackExplanation,
    explanationFor(question),
    question.correct
  );
  if (question.note) {
    showWithItalicPrepositions(
      elements.feedbackNote,
      question.note,
      question.correct
    );
    elements.feedbackNote.hidden = false;
  } else {
    elements.feedbackNote.hidden = true;
  }

  elements.answers.querySelectorAll("button").forEach(button => {
    const buttonChoice = button.dataset.choice;
    button.disabled = true;
    if (question.correct.includes(buttonChoice)) button.classList.add("correct");
    if (buttonChoice === choice && !isCorrect) button.classList.add("wrong");
  });

  elements.nextButton.textContent = questionIndex === questions.length - 1
    ? "Se resultatet"
    : "Neste oppgave";
  elements.feedback.hidden = false;
  elements.nextButton.focus();
}

function showNext() {
  if (!answered) return;
  if (questionIndex < questions.length - 1) {
    questionIndex += 1;
    renderQuestion();
    elements.answers.querySelector("button").focus();
  } else {
    showResult();
  }
}

function showResult() {
  const percentage = Math.round((score / questions.length) * 100);
  let title = "Godt forsøk!";

  if (percentage >= 80) title = "Preposisjonsmester!";
  else if (percentage >= 60) title = "Bra jobba!";
  else if (percentage >= 40) title = "Du er godt i gang!";

  elements.resultTitle.textContent = title;
  elements.resultText.textContent = `Du fikk ${score} av ${questions.length} riktige (${percentage} %).`;
  elements.quizView.hidden = true;
  elements.resultView.hidden = false;
  elements.restartButton.focus();
}

elements.nextButton.addEventListener("click", showNext);
elements.restartButton.addEventListener("click", startGame);

document.addEventListener("keydown", event => {
  if (event.key === "Enter" && answered) {
    showNext();
    return;
  }

  if (!answered && (event.key === "1" || event.key === "2")) {
    const choice = activeChoices[Number(event.key) - 1];
    checkAnswer(choice);
  }
});

startGame();
