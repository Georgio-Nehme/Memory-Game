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

document.getElementById("top_left").onclick = function() {press_green()}
document.getElementById("top_right").onclick = function() {press_red()}
document.getElementById("bottom_left").onclick = function() {press_blue()}
document.getElementById("bottom_right").onclick = function() {press_yellow()}


var level = 0;
var player_sequence = [];
var temp_player_sequence = [];
var rand_sequence = [];
const colors = ["green", "red", "blue", "yellow"];

















































function press_green() {
    green_sound.play();
    green_btn.style.backgroundColor = "grey";
    setTimeout(() => {green_btn.style.backgroundColor = "green";}, 100);
};

function press_red() {
    red_sound.play();
    red_btn.style.backgroundColor = "grey";
    setTimeout(() => {red_btn.style.backgroundColor = "red";}, 100);
};

function press_blue() {
    blue_sound.play();
    blue_btn.style.backgroundColor = "grey";
    setTimeout(() => {blue_btn.style.backgroundColor = "blue";}, 100);
};

function press_yellow() {
    yellow_sound.play();
    yellow_btn.style.backgroundColor = "grey";
    setTimeout(() => {yellow_btn.style.backgroundColor = "yellow";}, 100);
};

function press_wrong() {
    wrong_sound.play();
    game_container.style.backgroundColor = "red";
    setTimeout(() => {game_container.style.backgroundColor = "df7777";}, 100);
};