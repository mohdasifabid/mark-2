var readlineSync = require("readline-sync");

score = 0;

console.log("Hello !");

var userName = readlineSync.question("May I have your name?  ");
console.log("....")
console.log("Welcome to the Wasseypur quiz, dear " + userName);
console.log("...");


function play(question, answer) {
 var userAnswer = readlineSync.question(question);

 if (userAnswer.toLowerCase() === answer.toLowerCase()) {
   console.log("Right Answer");
   score = score + 1;

 } else {
   console.log("its wrong, The right answer is " + answer + ".");
   score = score-1;

 }

   console.log("Current Score is " + score);
   console.log("...");

}


var questions = [{
  question: "Ek ladka aur lakdi kabhi dost nahin hote, is the diaologued by whome ",
  answer: "definite"
  

}, {
  question: "Humara naam hai ........ hum aapka dukan lutne aye hain Faizal Khan haamare bada bhai hain, fill in the blank ",
  answer: "perpendicular" 

}, {
  question: "Baap ka, Bhai ka, Dada ka, sabka badla, lene ka dawa karne wale shaqs ka naam? ",
  answer: "faizal khan"

}, {
  question: "Tum apni bhavnaaon ko daalo apni gaand me, shabd kis mahan vibhuti ke muh se avatarit hue the? ",
  answer: "ramadhir singh"

}, {
  question: "Tum logo ko khana hazam kaise hota hai re, ka satire kisne bola tha? ",
  answer: "nagma khan"

}, {
 question: "Ye Wasseypur hai, yahaan kabootar bhi ek pankh se udta hai air dusre se apni ijjat bachata hai, according to.... ",
 answer: "sultan"

}];



for ( var i=0; i< questions.length; i++) {
  var currentQuestion = questions [i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("Thanks for participating, you did great " + userName + "  and your final score is " + score);  