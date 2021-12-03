readlineSync = require('readline-sync');


var list = 
[{ques: "What Single Rider Has Won The Most Stages At The Tour de France?",
  a: "a: Mark",
  b: "b: Eddy",
  c: "c: Chris",
  d: "d: Mario",
  correctAnswer: "b"},
  
  {ques: "What Percentage Of Commutes Are Made By Bicycle In Amsterdam?",
    a: "a: 15%",
    b: "b: 90%",
    c: "c: 40%",
    d: "d: 20%",
    correctAnswer: "c"},
    
    {ques: "The invention of the pneumatic tyre changed everything. Who was responsible for this?",
    a: "a: Bob",
    b: "b: keith",
    c: "c: John Boyd",
    d: "d: Alan",
    correctAnswer: "c"},
    
    {ques: "Bicycles became a word several years after their invention. What were they called originally?",
    a: "a: Two-wheeler",
    b: "b: Velocipedes",
    c: "c: A thing of magic",
    d: "d: Demi-car",
    correctAnswer: "b"},
    
    {ques: "When was the 'Penny-farthing' invented?",
    a: "a: 2017",
    b: "b: 1917",
    c: "c: 1417",
    d: "d: 1871",
    correctAnswer: "d"},
    
    {ques: "What's the name of the most famous cycling race?",
    a: "a: Tour de France",
    b: "b: Big bike race",
    c: "c: Cyclemania",
    d: "d: Thunder race",
    correctAnswer: "a"},
    
    {ques: "In the Tour de France, what colour jersey is awarded to the ‘King of the Mountains’ stager leader?",
    a: "a: Yellow",
    b: "b: Red and blue striped",
    c: "c: Black",
    d: "d: White with red polka dots",
    correctAnswer: "d"},
    
    {ques: "What's the difference between a mountain bike and a road bike?",
    a: "a: A mountain bike has chunkier tyres",
    b: "b: Road bikes have lights",
    c: "c: Road bikes have comfier saddles",
    d: "d: A mountain bike is bigger",
    correctAnswer: "c"},
    
    {ques: "Where was the first Road World Championships held in 1921?",
    a: "a: London",
    b: "b: Germany",
    c: "c: Nurburgring",
    d: "d: Switzerland",
    correctAnswer: "c"},
    
    {ques: "Laurent Dufaux rode for which team?",
    a: "a: Alessio",
    b: "b: Phonak",
    c: "c: Domina Vacanze",
    d: "d: Lampre",
    correctAnswer: "a"}]

var score = 0;

function check(correctAnswer, answer)
{
  if (answer === correctAnswer)
  {
    console.log("You are correct");
    score++;
  }
  else
    console.log("You are wrong");
  
  console.log("\n");
}

var username = readlineSync.question("Please enter your username: ");

for(var i = 0; i < list.length; i++)
{
  console.log(list[i].ques);
  console.log(list[i].a);
  console.log(list[i].b);
  console.log(list[i].c);
  console.log(list[i].d);
  var answer = readlineSync.question("Please enter your answer: ");
  check(list[i].correctAnswer, answer);
}

var highestScore = 7;

console.log("Your score is", score)
console.log("Till now the highest score is " + highestScore + ", scored by rajatgupta. If you scored more than this, please share screenshot with us.");
