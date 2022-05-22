// Audiovisual Effects //
const green_sound = new Audio("assets/sounds/green.mp3");
const red_sound = new Audio("assets/sounds/red.mp3");
const blue_sound = new Audio("assets/sounds/blue.mp3");
const yellow_sound = new Audio("assets/sounds/yellow.mp3");
const wrong_sound = new Audio("assets/sounds/wrong.mp3");

const green_btn= document.getElementById("top_left");
const red_btn = document.getElementById("top_right");
const blue_btn = document.getElementById("bottom_left");
const yellow_btn = document.getElementById("bottom_right");

//Event listeners//
document.getElementById("top_left").onclick = function() {press_green();}
document.getElementById("top_right").onclick = function() {press_red();}
document.getElementById("bottom_left").onclick = function() {press_blue();}
document.getElementById("bottom_right").onclick = function() {press_yellow();}

//Assigning the variables//
let player_sequence = [];
let rand_sequence = [];
const colors = ["green", "red", "blue", "yellow"];
var color = " ";
green = "green";
red = "red";
blue = "blue";
yellow = "yellow";

////////////////
  //Game loader//
///////////////
document.addEventListener("keypress", function(event) {

start_game(1)
    



});



//////////////
  //Functions//
/////////////



// under construction //\\
                     //  \\
                    // !! \\ 
                   //  !!  \\
                  //   ..   \\
                 //==========\\
function start_game (level)  {
    
    while (level !== 0) {
        add_random(colors, rand_sequence); //adding a color to the random sequence//
        // green_btn.addEventListener("click", press_green(player_sequence));
        // blue_btn.addEventListener("click", press_blue(player_sequence));
        // red_btn.addEventListener("click", press_red(player_sequence));
        // yellow_btn.addEventListener("click", press_yellow(player_sequence));
                
        if (last_value(player_sequence) !== last_value(rand_sequence)){
            press_wrong();
            let level = 0; //You lost case//
        } else{
            level++; //You passed case//
            start_game(level);
        } 
    }
}





//Function to add random values/
function add_random(array, rand_array) {
    var temp_value = array[Math.floor(Math.random() * array.length)];
    rand_array.push(temp_value);
    return rand_array;
}
//Function to return the last value recorded in an array//
function last_value(array) {
    return array[array.length -1];
}



//Random sequence player//
function play_new_color(array) {
    let x =last_value(array);
    if      (x==="red")    {press_red(rand_sequence);}
    else if (x === "blue") {press_blue(rand_sequence);}
    else if (x === "green"){press_green(rand_sequence);}
    else                   {press_yellow(rand_sequence);}
}    



//Functions for the buttons animation//
function press_green(array) {
    green_sound.play();
    green_btn.style.backgroundColor = "grey";
    setTimeout(() => {green_btn.style.backgroundColor = "green";}, 200);
    array.push(green);
}
function press_red(array) {
    red_sound.play();
    red_btn.style.backgroundColor = "grey";
    setTimeout(() => {red_btn.style.backgroundColor = "red";}, 200);
    array.push(red);
}
function press_blue(array) {
    blue_sound.play();
    blue_btn.style.backgroundColor = "grey";
    setTimeout(() => {blue_btn.style.backgroundColor = "blue";}, 200);
    array.push(blue);
}
function press_yellow(array) {
    yellow_sound.play();
    yellow_btn.style.backgroundColor = "grey";
    setTimeout(() => {yellow_btn.style.backgroundColor = "yellow";}, 200);
    array.push(yellow);
}

function press_wrong() {
    wrong_sound.play();
    game_container.style.backgroundColor = "red";
    setTimeout(() => {game_container.style.backgroundColor = "df7777";}, 200);
}