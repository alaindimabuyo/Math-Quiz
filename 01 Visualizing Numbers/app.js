function populate() {
    if(quiz.isEnded()) {
        showEnd();
    }
    else{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
       
    

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        
        
        showProgress();
        
        }
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
        
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showEnd() {
    var OverHTML = "<h1>End Of Quiz</h1>";
    OverHTML += "<h2 id='score'></h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = OverHTML;
};

// create questions
var questions = [
    new Question("What number is represented by these number discs?", ["36,650", "35,500","34,550", "34,500"], "36,650"),
    new Question("What number is represented by these number discs?", ["36,684", "36,500", "35,804", "35,884"], "36,684"),
    new Question("What number is represented by these number discs?", ["64,775", "54,595","54,675", "64,765"], "54,675"),
    new Question("What number is represented by these number discs?", ["56,787", "65,497", "34,156", "43,268"], "43,268"),
    new Question("What number is represented by these number discs?", ["84,357", "73,397", "85,347", "74,487"], "84,357")
    
];


// create quiz
var quiz = new Quiz(questions);


// display quiz
populate();
var correct = 0;


var slider_content = document.getElementById('box');
var image = ['a', 'b', 'c', 'd', 'e'];
var i = image.length;

// function for next slide 

function nextImage(){
    if (i<image.length) {
        i= i+1;
    }else{
        i = 2;
    }
      slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


var messages = ["Great job!", "That's just okay", "You really need to do better"];
var score;

function correctSubmit(){
 document.getElementById('correct_submit').style.visibility = "visible";
 document.getElementById('grid').style.visibility = "hidden";
 myAudio.pause();
}

function wrongSubmit(){
    document.getElementById('wrong_submit').style.visibility = "visible";
    document.getElementById('grid').style.visibility = "hidden";
    myAudio.pause();
   }

function hideGrid(){
    document.getElementById('grid').style.visibility = "hidden";
}
function showGrid(){
    document.getElementById('grid').style.visibility = "visible";
    document.getElementById('wrong_submit').style.visibility = "hidden";
    document.getElementById('correct_submit').style.visibility = "hidden";
    document.getElementById('start_button').style.visibility = "hidden";
    myAudio.play();
    
}
//wrongsound    
function playSound(){
    var sound = document.getElementById("wrong");
    sound.play();
    }
//correctsound
function playSoundCorrect(){
    var sound = document.getElementById("correct");
    sound.play();
    
    
}

//play background music
myAudio = new Audio('bg.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    this.stop();
}, false);
myAudio.play();




