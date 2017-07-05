(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.dismiss = function() {
          $uibModalInstance.dismiss('cancel');
        };


        this.createRoom = function () {

            Room.add(this.newRoom);
            // later auto-go to new room (normal or global scope)
            $uibModalInstance.close();
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
