app.controller('AlbumCtrl', function ($scope, $rootScope, PlayerFactory, AlbumFactory,$stateParams) {
    $scope.albumid = $stateParams.id;


	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

	AlbumFactory.fetchById($scope.albumid)
			.then(function (album) {
				$scope.album = album;
			});

	// $rootScope.$on('changeView', function (evt, data) {
	// 	if (data.name == 'oneAlbum') {
	// 		$scope.showMe = true;
	// 		AlbumFactory.fetchById(data.id)
	// 		.then(function (album) {
	// 			$scope.album = album;
	// 		});
	// 	} else {
	// 		$scope.showMe = false;
	// 	}
	// });

});


app.config(function ($stateProvider) {
	$stateProvider.state('Album', {
		url: '/album/:id',
		templateUrl: 'albumTemplate.html',
		controller: 'AlbumCtrl'
	})

})