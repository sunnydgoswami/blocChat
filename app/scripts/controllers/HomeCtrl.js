(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        this.rooms = Room.all;
        console.log(this.rooms)

        this.open = function () {
          $uibModal.open({
              templateUrl: 'templates/modal.html',
              size: 'sm',
              controller: 'ModalCtrl as modal'
          });
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();
