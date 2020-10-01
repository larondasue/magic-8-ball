$(document).ready(function(){
var magic8ball = {};

magic8ball.answerList = ["As I see it – yes", "Ask again later", "Better not tell you now", "Concentrate and ask again", "Don't count on it", "It is decidedly so", "It is certain", "Most likely", "My sources say no", "Reply hazy – try again", "Signs point to yes", "Very doubtful", "Yes"];

$("#answer").hide();

magic8ball.askQuestion = function(question) {
	var randomNumber = Math.random();
	var randomNumberForAnswerList = randomNumber * this.answerList.length;
	var randomIndex = Math.floor(randomNumberForAnswerList);
	var answer = this.answerList [randomIndex];

$("#answer").text( answer );

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

console.log(question);
console.log(answer);
};
var onClick = function() {
 $("#answer").hide();
 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
setTimeout(
       function() {
           var question = prompt("Ask a yes or no question");
           magic8ball.askQuestion(question);
		    $("#8ball").effect( "shake" );
       }, 500);

$("#answer").fadeIn(4000);
};

$("#questionButton").click( onClick );
	});
