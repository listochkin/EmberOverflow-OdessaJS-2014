var users = [
  { id: 11, name: 'Артем Тритьяк', twitter: 'artyomtrityak', password: '123', questions: [21] },
  { id: 12, name: 'Эльдар Джафаров', twitter: 'edjafarov', password: '145', answers: [31] },
  { id: 13, name: 'Ингвар Степанян', twitter: 'RReverser', password: '178', answers: [32] },
  { id: 14, name: 'Максим Климишин', twitter: 'maxmaxmaxmax', password: '167', answers: [33] }
];

var questions = [
  { id: 21, title: 'Как в JS можно числа складывать?', body: 'Чеваки, я чегго-то не могу понять, как мне в JavaScript сложить 2 и 3. Я уже три часа ковыряюсь и толку никакого.', user: 11, answers: [31, 32, 33] }
];

var answers = [
  { id: 31, body: "Чувак, я тебе советую  попробовать Реакт - он офигенен! Я не пробовал сам числа складывать, но уверен, что Реакт это умеет.", user: 12, question: 21 },
  { id: 32, body: "Так JIT в V8 все равно все заинлайнит, и числа складывать совсем не придется.", user: 13, question: 21 },
  { id: 33, body: "Чувак, ты больной??? 2 + 3", user: 14, question: 21 }
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