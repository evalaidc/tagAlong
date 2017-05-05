angular
  .module('tagAlongApp', [
    'ui.router',
    'ngResource'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ])
  .controller('DriverIndexCtrl', [
    '$state',
    DriverIndexControllerFunction
  ])


function RouterFunction($stateProvider){
  $stateProvider
    .state()
}


function DriverIndexControllerFunction(){

}
