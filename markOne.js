var readlineSync = require('readline-sync')
var userName = readlineSync.question("What is your name ? ")
console.log("Hello " +userName + " Welcome to - Do You Know Raj" )
var score = 0

function quiz(question,answer){
var userAnswer = readlineSync.question(question)
if (userAnswer.toLowerCase() === answer) {
  console.log("You are correct!")
  score = score + 1
} 
else {
  console.log("You are wrong!")
}
console.log("Your current score is : " +score)
console.log("==============")
}

var questions = [ questionOne = {
  question : "Where do I work ?",
  answer : "capgemini"
},
questionTwo = {
  question : "What is my age ? ",
  answer : "22"
},
questionThree = {
  question : "In which town do I live ? ",
  answer : "mulund"
}
]

for(i=0;i<questions.length;i++){
  currentQuestion = questions[i]
  quiz(currentQuestion.question,currentQuestion.answer)
}