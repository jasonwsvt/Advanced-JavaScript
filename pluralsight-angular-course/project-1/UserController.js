(function() {

	var app = angular.module("githubViewer", [])

	var UserController = function($scope, github, $routeParams) {

		var onUserComplete = data => {
			$scope.user = data
			$scope.error = ""
			github.getRepos($scope.user).then(onRepos, onError)
		}

		var onRepos = data => { $scope.repos = data }

		var onError = reason => { $scope.error = "could not fetch the data." }

		$scope.username = $routeParams.username
		$scope.repoSortOrder = "-stargazers_count"
		github.getUser($scope.username).then(onUserComplete, onError)
	}

	app.controller("UserController", UserController)
}())