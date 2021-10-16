(function () { 
	var github = function($http) {
		var getUser = username =>
			$http.get("https://api.github.com/users/" + username).then(response => response.data)

		var getRepos = user => $http.get(user.repos_url).then(response => response.data)
		
		var getRepoDetails = function(username, reponame) {
			var repo
			var repoUrl = `https://api.github.com/repos/${username}/${reponame}`

			return $http.get(repoUrl).then(response => {
				repo = response.data
				return $http.get(`${repoUrl}/collaborators` )
					.then(response => {
						repo.collaborators = response.data
						return repo
					})
			})
		}
	}

		return {
			getUser: getUser,
			getRepos: getRepos,
			getRepoDetails: getRepoDetails
		}
	}

	var module = angular.module("githubViewer")
	module.factory( "github", github)
}())