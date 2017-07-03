(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.dismiss = function() {
          $uibModalInstance.dismiss('cancel');
        };


        this.submit = function () {

            Room.add(this.newRoom);
            this.newRoom = '';
            $uibModalInstance.close();
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
