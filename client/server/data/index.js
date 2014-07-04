var users = [
  { id: 11, name: 'Artyom Trityak', twitter: 'artyomtrityak', password: '123', questions: [21] },
  { id: 12, name: 'Eldar Djafarov', twitter: 'edjafarov', password: '145', answers: [31] },
  { id: 13, name: 'Ingvar Stepanyan', twitter: 'RReverser', password: '178', answers: [32] },
  { id: 14, name: 'Maxim Klymyshyn', twitter: 'maxmaxmaxmax', password: '167', answers: [33] }
];

var questions = [
  { id: 21, title: 'How ca I add two values in JavaScript?', body: 'I have numbers 2 and 3 and I have no idea how I can add them together in JavaScript. Can you guys help me?', user: 11, answers: [31, 32, 33] }
];

var answers = [
  { id: 31, body: "I don't know, dude. May be there's a jQuery plugin for that?", user: 12, question: 21 },
  { id: 32, body: "V8's JIT is so fast, no need to add numbers - it will optimize all the results away!", user: 13, question: 21 },
  { id: 33, body: "What about just adding them with +???", user: 14, question: 21 }
];

var next = 100;

function id () {
  return next++;
}

module.exports = {
  id: id,
  users: users,
  questions: questions,
  answers: answers
}