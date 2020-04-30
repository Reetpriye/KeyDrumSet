var numOfDrumButtons = document.querySelectorAll("button").length;
//Detecting Mouse Click

for (var i = 0; i < numOfDrumButtons; i++){

document.querySelectorAll("button")[i].addEventListener("click", function(){
    var innerHtml = this.innerHTML;
    playTone(innerHtml);
    buttonAnimation(innerHtml);
} );
};


//Detecting Keyboard Press

for (var i = 0; i < numOfDrumButtons; i++) {
    
    document.addEventListener("keypress", function(event){
       playTone(event.key);
       buttonAnimation(event.key);
    })
}

//Case Specific Function to play sound

function playTone(key) {
    switch(key)
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
         
        case "s":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    
        case "j":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
    
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    
        case "l":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
    
        default:
            console.log(this.innerHTML);
            
    };
}


//Function for the Button Animation

function buttonAnimation(key) {

    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100
    );
}

