(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        console.log(this.rooms)

        this.openNewRoom = function () {
          $uibModal.open({
              templateUrl: 'templates/modal.html',
              size: 'sm',
              controller: 'ModalCtrl as modal'
          });
        };

        this.currentRoom = null;

        this.storeRoomName = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id)
            console.log(this.messages)
        };

        // click function that sets current room based on the id of the room
        // make a Message.js that handles message functionality(SERVICE)
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
