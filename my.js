
//target all elements to save to constants
const page1btn=document.querySelector(".page1btn");
const page2btn=document.querySelector(".page2btn");
const page3btn=document.querySelector(".page3btn");
const page4btn=document.querySelector(".page4btn");

var allpages=document.querySelectorAll(".content");

var type_description = document.querySelectorAll(".type_description");

var typeContent = document.querySelectorAll(".type_contents");


var gain = true;

//select all subtopic pages
console.log(allpages);

console.log(type_description);
console.log(typeContent);
console.log(window.innerWidth);
hideall();

hideDescription();


//show homepage //1 is for homepage
show(1);

function hideall(){ //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
        onepage.style.display="none"; //hide it
    }
}

//for guitar descriptions
function hideDescription(){
    for(let description of type_description){ //go through all descriptions
        description.style.display="none"; //hide it
    }

    for(let content of typeContent){
        content.style.width="min-content"; 
    }
}



function show(pgno){ //function to show selected page no
    hideall();

    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);

    //show the page
    onepage.style.display="block";
}

//shows the description of the guitar clicked
function showGuitar(num){
    //hideGuitar(num);
    showDescription(num);

}


function showDescription(num){
    hideDescription();

    let description = document.querySelectorAll(".type_description");
    let oneDescription = description[num];
    oneDescription.style.display="block";
    
}



//initialise the audio but it depends on which audio in Gain
var audio = document.getElementById("myAudio");
function play(){
    audio.play();
}

function setGain(){
    gain = !gain;
    var onIcon = document.querySelector(".onIcon");
    var gainKnob = document.querySelector("#guitarKnob img");

    if(gain){
        audio = document.getElementById("distortedTone");
        gainKnob.style.animation = "rotation 2s";
        onIcon.style.backgroundColor  = "#1f2e1d";
        onIcon.textContent = "on";

    }
    else{
        audio = document.getElementById("cleanTone");
        gainKnob.style.animation = "Antirotation 2s";
        onIcon.textContent = "off";
        onIcon.style.backgroundColor = "red";
    }
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
