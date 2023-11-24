const questions=[
  {
    question: "Which is largest animal in the world?",
    answers:[
      {text:"Shark",correct:false},
      {text:"Blue Whale",correct:True},
      {text:"Elephant",correct:false},
      {text:"Giraffe",correct:false},
    ]
  },
  {
    question: "Which is smallest continent in the world?",
    answers:[
      {text:"Asia",correct:false},
      {text:"Australia",correct:True},
      {text:"Arctic",correct:false},
      {text:"Africa",correct:false},
    ]
  },
  {
    question: "Which is smallest country in the world?",
    answers:[
      {text:"Vatican City",correct:true},
      {text:"Bhutan",correct:false},
      {text:"Nepal",correct:false},
      {text:"SriLanka",correct:false},
    ]
  },
  {
    question: "Which is largest city in the world?",
    answers:[
      {text:"Tokyo",correct:true},
      {text:"New York",correct:false},
      {text:"Delhi",correct:false},
      {text:"Seoul",correct:false},
    ]
  },
  {
    question: "Which is largest desert in the world?",
    answers:[
      {text:"Kalhari",correct:false},
      {text:"Gobi",correct:false},
      {text:"Sahara",correct:false},
      {text:"Antarctic Polar",correct:true},
    ]
  }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){

}