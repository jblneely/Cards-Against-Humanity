angular.module('CardsAgainstAssembly', ['CardsApp'])
    .controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory) {
        console.log("Cards Controller");
        var questionCards = QuestionsFactory.getCards();
        $scope.numPlayers = 10;

        $scope.newQuestion = function() {
            $scope.displayCard = questionCards[pickCardIndex(questionCards.length)].question;
        };
        $scope.newQuestion()
    }]);


function pickCardIndex(deskSize) {
    return Math.floor(Math.random() * deskSize);
}
