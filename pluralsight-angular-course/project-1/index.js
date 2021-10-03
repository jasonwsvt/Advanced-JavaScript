(function() {

	var app = angular.module("githubViewer", [])

	var MainController = function($scope, $http) {

		var onUserComplete = response => {
			$scope.user = response.data
			$scope.error = ""
			$http.get($scope.user.repos_url).then(onRepos, onError)
		}

		var onRepos = response => { $scope.repos = response.data }

		var onError = reason => { $scope.error = "could not fetch the data." }

		$scope.search = username => {
			$http.get("https://api.github.com/users/" + username)
				.then(onUserComplete, onError)
		}

		$scope.username = "angular"
		$scope.message = "GitHub Viewer"
		$scope.repoSortOrder = "-stargazers_count"
	}

app.controller("MainController", ["$scope", "$http", MainController])
}())