var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope){
	$scope.answerQuestion=function(answer){
		// var answeredCorrectly;

		if (answer===true){
			$scope.answeredCorrectly=true;
		}else{
			$scope.answeredCorrectly=false;
		}
		$scope.answered=true;
	}

	$scope.flashCard = {
	    question: 'What is Angular?',
	    answers: [
	        { text: 'A front-end framework for great power!', correct: true },
	        { text: 'Something lame, who cares, whatever.', correct: false },
	        { text: 'Some kind of fish, right?', correct: false }
	    ]
	};
});
 

