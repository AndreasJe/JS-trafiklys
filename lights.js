
const body = document.getElementsByTagName("BODY")[0];
const contCreate = document.createElement('main')

var i
var welcome = "Welcome to my traffic light demonstration"
var subHeader = "Built entirely using Javascript at page-load"
var readMe = "Wait 10 seconds for the function to start"
var cirkel = `<div class="cirkel"></div>`


function byggemandBob() {
    //Building elements 
    console.log("Bob is building the DOM")
    document.querySelector("body").appendChild(document.createElement('h1'))
    document.querySelector('h1').appendChild(document.createTextNode(welcome))
    document.querySelector("body").appendChild(document.createElement('p'))
    document.querySelector('p').appendChild(document.createTextNode(subHeader))

    //Building containers
    document.body.insertBefore(contCreate, body);
    contCreate.classList.add("container")
    document.querySelector(".container").appendChild(document.createElement('div').cloneNode(true))
    document.querySelector('div').classList.add("box1")
    document.querySelector(".container").appendChild(document.createElement('div').cloneNode(true))
    document.querySelector('div:nth-child(2)').classList.add("box2")
    document.querySelector(".container").appendChild(document.createElement('div').cloneNode(true))
    document.querySelector('div:nth-child(3)').classList.add("box3")
    document.querySelector("body").appendChild(document.createElement('h4'))
    document.querySelector('h4').appendChild(document.createTextNode(readMe))

    //Applying Content - just to practice something different - rather than more of the above
    document.querySelector(".box1").innerHTML = cirkel
    document.querySelector(".box2").innerHTML = cirkel
    document.querySelector(".box3").innerHTML = cirkel

    //start Styling function
    malerHjornet()

}


function malerHjornet() {
    console.log("Picasso is paiting")

    //Body Styling
    document.querySelector("body").style.backgroundColor = "#d6cfc7";

    //Header Styling
    document.querySelector("h1").style.fontSize = "40px";
    document.querySelector("h1").style.fontWeight = "bold";
    document.querySelector("h1").style.color = "black";
    document.querySelector("h1").style.fontVariant = "uppercase";
    document.querySelector("h1").style.textAlign = "center";
    document.querySelector("p").style.fontSize = "25px";
    document.querySelector("p").style.fontWeight = "bold";
    document.querySelector("p").style.color = "black";
    document.querySelector("p").style.textAlign = "center";
    document.querySelector("h4").style.fontSize = "25px";
    document.querySelector("h4").style.fontWeight = "bold";
    document.querySelector("h4").style.color = "darkred";
    document.querySelector("h4").style.textAlign = "center";
    document.querySelector("h4").style.marginBottom = "50px";

    //Traffic Light styling
    document.querySelector(".container").style.width = "20rem";
    document.querySelector(".container").style.height = "50rem";
    document.querySelector(".container").style.backgroundColor = "black";
    document.querySelector(".container").style.margin = "auto";
    document.querySelector(".container").style.padding = "40px";
    document.querySelector(".container").style.borderRadius = "40px";
    document.querySelector(".container").style.border = "6px silver solid";
    document.querySelector(".container").style.boxShadow = "-16px 12px 16px 10px rgba(130,130,121,0.75)    ";
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".container").style.flexDirection = "column";
    document.querySelector(".container").style.justifyContent = "space-evenly";


    //Light styling - Had problems with querySelectorAll and getElementsbyClassName. 
    var x, i;
    x = document.querySelectorAll(".cirkel");
    for (i = 0; i < x.length; i++) {
        x[i].style.margin = "auto";
        x[i].style.width = "250px";
        x[i].style.height = "250px";
        x[i].style.borderRadius = "125px";
        x[i].style.backgroundColor = "grey";
    }

    timer()
}


function timer() {
    console.log("Bomb has been planted")
    var green = document.getElementsByClassName("cirkel")[2];
    var red = document.getElementsByClassName("cirkel")[0];
    var yellow = document.getElementsByClassName("cirkel")[1];

    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";

    red.style.opacity = "0.3";
    yellow.style.opacity = "0.3";
    green.style.opacity = "0.3";
    setInterval(function () {
        //Displays a red light 350ms after the pageload
        setTimeout(function () {
            red.style.opacity = "1";
            yellow.style.opacity = "0.3";
            green.style.opacity = "0.3";
        }, 450);

        //1000ms later it will turn on the "resting" light
        setTimeout(function () {
            red.style.opacity = "1";
            yellow.style.opacity = "1";
            green.style.opacity = "0.3";
        }, 1800);

        //Switches to green light 2 seconds later
        setTimeout(function () {
            red.style.opacity = "0.3";
            yellow.style.opacity = "0.3";
            green.style.opacity = "1";
        }, 3500);

        //1000ms later it will turn on the "resting" light
        setTimeout(function () {
            red.style.opacity = "0.3";
            yellow.style.opacity = "1";
            green.style.opacity = "0.3";
        }, 8800);


        console.log("Allahu Akbar!")
    }, 10000);
}
window.onload = byggemandBob