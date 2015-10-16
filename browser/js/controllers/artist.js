app.controller('ArtistCtrl', function ($scope, $rootScope, PlayerFactory, artist) {
	$scope.artist = artist;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

});


app.config(function ($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when('/artist/:id' ,'/artist/:id/albums');
	$stateProvider
	.state('Artist', {
		resolve:{
			artist: function(ArtistFactory,$stateParams){
				return ArtistFactory.fetchById($stateParams.id)
			}
		},
		url: '/artist/:id',
		templateUrl: 'artistTemplate.html',
		controller: 'ArtistCtrl'
	})
	.state('Artist.album',{
		url: '/albums',
		templateUrl: 'oneArtistAlbum.html',
        controller :'ArtistCtrl'
	})
	.state('Artist.songs',{
		url: '/songs',
		templateUrl: 'oneArtistSongs.html',
        controller :'ArtistCtrl'
	})


})