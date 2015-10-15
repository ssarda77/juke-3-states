app.controller('ArtistCtrl', function ($scope, $rootScope, PlayerFactory, ArtistFactory,$stateParams) {


     $scope.artistid = $stateParams.id
	ArtistFactory.fetchById( $scope.artistid)
			.then(function (artist) {
				$scope.artist = artist;
			});

	/*$rootScope.$on('changeView', function (evt, data) {
		if (data.name == 'oneArtist') {
			$scope.showMe = true;
			ArtistFactory.fetchById(data.id)
			.then(function (artist) {
				$scope.artist = artist;
			});
		} else {
			$scope.showMe = false;
		}
	});*/

	$scope.viewAlbum = function (albumId) {
		$rootScope.$broadcast('changeView', {
			name: 'oneAlbum',
			id: albumId
		});
	};

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

});


app.config(function ($stateProvider) {
	$stateProvider.state('Artist', {
		url: '/artist/:id',
		templateUrl: 'artistTemplate.html',
		controller: 'ArtistCtrl'
	})

})