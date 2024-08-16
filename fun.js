function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function greeting(name) {
  return `Hello ${name}`;
}

module.exports = { randomNumber, greeting };
