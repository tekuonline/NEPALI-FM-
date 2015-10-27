angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MusicCtrl', function($scope) {
    $scope.tracks = [
        {
            url: 'http://radiokantipur.ekantipur.com/audios/audioGallery/NEW_NEPALI_NATIONAL_ANTHEM.mp3',
            artist: 'Hits Fm',
            title: 'http://www.hitsfm.com.np',
            art: 'http://www.hitsfm.com.np/uploads/images/news/hmalogo-2072.jpg'
        },
        {
            url: 'http://a144.phobos.apple.com/us/r1000/068/Music/a1/e3/8b/mzm.exwbrvrq.aac.p.m4a',
            artist: 'Kantipur',
            title: 'Kantipur',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
        },
        {
         url: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3',
            artist: 'Tek Nepal',
            title: 'Test',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
          }
    ];
});
