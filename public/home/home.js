/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var App;
(function (App) {
    (function (Home) {
        var module = angular.module('app.home', ['ngRoute']);
        module.controller('homeCtrl', Controller);
        module.config([
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/', {
                    controller: Controller,
                    controllerAs: 'home',
                    templateUrl: 'home/home.html'
                });
            }]);

        var Controller = (function () {
            function Controller($scope, $window) {
                var _this = this;
                this.$scope = $scope;
                this.$window = $window;
                $($window).resize(function () {
                    _this.calculateImageHeight();
                    $scope.$apply();
                });

                this.calculateImageHeight();
            }
            Controller.prototype.calculateImageHeight = function () {
                var top = $('body>div>div').position().top;
                var fullheight = this.$window.innerHeight;

                this.imageHeight = fullheight - top - 2;
            };
            Controller.$inject = ['$scope', '$window'];
            return Controller;
        })();
    })(App.Home || (App.Home = {}));
    var Home = App.Home;
})(App || (App = {}));
//# sourceMappingURL=home.js.map
