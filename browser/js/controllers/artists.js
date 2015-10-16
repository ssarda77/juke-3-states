app.controller('ArtistsCtrl', function ($scope, $rootScope, artists) {
    $scope.artists = artists;

});

app.config(function ($stateProvider) {
	$stateProvider.state('Artists', {
		resolve: {
			artists : function(ArtistFactory){
				return ArtistFactory.fetchAll()
			}
		},
		url: '/artists',
		templateUrl: 'artistsTemplate.html',
		controller: 'ArtistsCtrl'
	})

})