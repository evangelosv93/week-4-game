// Gameflow logic:
//
// set up random number for start of the game you are trying to get to w out going over
// (make a function to randomize amount each time you restart)
//
// math.floor math.random
//
// variable for wins and losses
//
// set up a box bellow to display your points form crystals
//
//
// set up crystal var and point ammount for each crystal
//  (set function to randomize crystal points between *ie 1<x<20)
// add each crytal points you click on to total score
//
// if your total score is = to random start # then win variable +1
// if total score > random start # then +1 loss var
//
// game resets after either win or loss var is changed
//
// (each crystal points change on restart, total score is reset to 0, random # rand again)

$(document).ready(function() {
 // ^---when fucntion starts


var wins= 0;
var losses= 0;
var Random;
var userPoints = 0;
var userScore = 0;


// random number for target number user wants to get between 19-120
var randNumValue=Math.floor(Math.random() * 120)+ 19;

// random number for crystal value between 1-12
var ioneValue=Math.floor(Math.random() * 12);
var itwoValue=Math.floor(Math.random() * 12);
var ithreeValue=Math.floor(Math.random() * 12);
var ifourValue=Math.floor(Math.random() * 12);
