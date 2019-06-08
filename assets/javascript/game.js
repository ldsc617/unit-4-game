/*What I need to make it work:
-Generate random number between 19-120
-assign each crystal image a random number 1-12
-make number change when image is clicked
-change wins and losses score when random number is reached or passed. Then reset score back to 0.
*/

//starts player at 0
var score = 0;
$("#score").text(score);

//wins
var wins = 0;
$("#wins").text(wins);

//losses
var losses = 0;
$("#losses").text(losses);

//random number generator
var randomNum = Math.floor(Math.random() *120) + 19;
$("#random-number").text(randomNum);

//crystals values generator
function crystalGen() {
var crystalNum = Math.floor(Math.random() * 12 + 1);
return crystalNum;
}

//reset
function reset() {

//score=0
score = 0;
$("#score").text(score);

//random number generator Again
randomNum = Math.floor(Math.random() * 120) + 19;
$("#random-number").text(randomNum);

//give each crystal a value
$("#diamond").attr("data-value", crystalGen());
$("#amethyst").attr("data-value", crystalGen());
$("#emerald").attr("data-value", crystalGen());
$("#ruby").attr("data-value", crystalGen());

}
//resets
reset();


//changes score with clicked crystal
$(".crystals").on("click", function () {
    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#score").text(score); 

//if/else for winner or loser + resets
if (score === randomNum) {
wins++;
$("#wins").text(wins);
$("#win-or-lose").text("Winner!!!")
reset();

} else if (score > randomNum) {
    losses++;
    $("#losses").text(losses);
    $("#win-or-lose").text("Loser!!")
    reset();
}
});