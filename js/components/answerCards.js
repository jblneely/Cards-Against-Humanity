angular.module("CardsAgainstAssembly")
    .component("answerCards", {
        templateUrl: "js/components/views/answerCards.html",
        controller: ["$scope", "AnswersFactory", AnswerCardsController],
        controllerAs: "ac",
        $scope: true
    });


function AnswerCardsController($scope, AnswersFactory) {
    var ac = this;
    var cards = AnswersFactory.getCards();
    ac.answerCards = shuffleAndLimit(cards, $scope.$parent.numPlayers);
}


function shuffleAndLimit(cards, limit) {
    if (limit > cards.length) {
        limit = cards.length;
    }
    var shuffle = cards.sort(function() {
        return 0.5 - Math.random();
    });
    return shuffle.slice(0, limit);
}
