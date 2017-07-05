(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        this.rooms = Room.all;
        console.log(this.rooms)

        $scope.currentRoomId = ""

        this.open = function () {
          $uibModal.open({
              templateUrl: 'templates/modal.html',
              size: 'sm',
              controller: 'ModalCtrl as modal'
          });
        };

        // click function that sets current room based on the id of the room
        // make a Message.js that handles message functionality(SERVICE)
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();
