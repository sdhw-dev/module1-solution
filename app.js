(function(){
	'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

	$scope.element = '';

	$scope.Click= function(){
		console.log ('Items');
		console.log ($scope.element);

		var array= $scope.element.split(',');
	

		var count =0;
		for (var i = 0; i < array.length; i++) {
			if(array[i] !== " " )
				count++;
		}

		if(count <=3){
              $scope.message= "Enjoy!";
              $scope.messageStyle = {"color": "yellowGreen"};
              $scope.borderColor={"border-style": "solid","border-color":"yellowGreen"};
             

           }else{
              $scope.message= "Too much!";
              $scope.messageStyle = {"color": "yellowGreen"};
              $scope.borderColor={"border-style": "solid","border-color":"yellowGreen"};
            }
        if(($scope.element == "") || ($scope.element == " ") ){
        	$scope.message= "Please enter data first" ;
        	$scope.messageStyle = {"color": "darkRed"};
        	$scope.borderColor={"border-style": "solid","border-color":"darkRed"};
        }

	}

	
	

}
})();