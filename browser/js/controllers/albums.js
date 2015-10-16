app.controller('AlbumsCtrl', function ($scope,albums,$location) {
     $scope.albums = albums;
     var newpath = $location.absUrl();
     newpath = newpath.replace('/#' ,'');
     $location.replace(newpath);
});

app.config(function ($stateProvider) {

	$stateProvider.state('Albums', {
		resolve:{
			albums : function(AlbumFactory){
				return AlbumFactory.fetchAll();
			}
		},
		url: '/albums',
		templateUrl: 'albumsTemplate.html',
		controller: 'AlbumsCtrl'
	})


})