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
        //nextImage();
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
    new Question("What is the prime factor of 16?", ["1 x 2 x 2 x 1", "2 x 3 x 2 x 3","2 x 2 x 2 x 2", "2 x 2 x 3 x 3"], "2 x 2 x 2 x 2"),
    new Question("What is the prime factor of 24?", ["2 x 3 x 3 x 3", "2 x 2 x 2 x 3","2 x 2 x 3 x 3", "2 x 2 x 2 x 2"], "2 x 2 x 2 x 3"),
    new Question("What is the greatest common factor of 36 and 54?", ["15", "16", "17", "18"], "18"),
    new Question("What is the greatest common factor of 8 and 12?", ["4", "5", "9", "8"], "4"),
    new Question("What is the greatest common factor of 28 and 36?", ["4", "5", "6", "7"], "4")
    
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