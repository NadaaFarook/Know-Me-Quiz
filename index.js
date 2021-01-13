var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
console.log('This is a quiz regarding myself.Lets check how much you know me..')

var score = 0
const data = [
    {
      question:'Which is my favourite color ?' ,
       options:['Blue','Red', 'Green',  'Orange'],
       correctAnswer:1,
    },
    {
      question:'What I like doing ?' ,
       options:['Painting','Writing', 'Coding',  'Studing'],
       correctAnswer:2,
    },
    {
      question:'What is my favourite SUPERHERO ?' ,
       options:['SuperMan','WonderWomen', 'Batman',  'SpiderMan'],
       correctAnswer:2,
    },
    {
      question:'What is my favourite food?' ,
       options:['Biryani','Fried Rice', 'Noodles',  'Pani Puri'],
       correctAnswer:3,
    }

  ]




data.map(e=>{
  askQuestions(e.question , e.options ,e.correctAnswer)
})



  function askQuestions(question , options ,correctAnswer){
index = readlineSync.keyInSelect(options, question);
if(index == correctAnswer){
  score =score +1;
  console.log('Correct answer . Your score is : ' + score);
  }else{
    console.log('Wrong answer . Your score is : ' + score);
    console.log('The correct answer is ' + options[correctAnswer])
  }
  }
console.log('#############')
  console.log('Thanks for playing. Your total score is ' + score + ' . Bubbye!!!')