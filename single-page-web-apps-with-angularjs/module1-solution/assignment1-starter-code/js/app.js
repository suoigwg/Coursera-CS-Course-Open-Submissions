(function () {
    'use strict';
    angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.message = "";
        $scope.items = "";
        $scope.showMessage = function () {
            $scope.message = checkQuantity($scope.items);
        };
        function checkQuantity (items) {
            if (items === "") return "Please enter data first";
            var number = items.split(",");
            console.log(number.length);
            if (number.length < 4)
                $scope.message = "Enjoy!";
            else $scope.message = "Too much!";
            return $scope.message;
        }
    }
})();