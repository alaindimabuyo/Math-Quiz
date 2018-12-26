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
    new Question("Choose P if the given is a proper fraction, I if it is an improper fraction and M if it is a mixed number.", ["P","I", "M"], "P"),
    new Question("Choose P if the given is a proper fraction, I if it is an improper fraction and M if it is a mixed number.", ["P","I", "M"], "M"),
    new Question("Choose P if the given is a proper fraction, I if it is an improper fraction and M if it is a mixed number.", ["P","I", "M"], "P"),
    new Question("Choose P if the given is a proper fraction, I if it is an improper fraction and M if it is a mixed number.", ["P","I", "M"], "M"),
    new Question("Choose P if the given is a proper fraction, I if it is an improper fraction and M if it is a mixed number.", ["P","I", "M"], "I")
    
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