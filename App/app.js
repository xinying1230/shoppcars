/**
 * Created by 12345 on 2017/10/13.
 */
var app=angular.module("app",["ui.router"]);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("serarch",{
            url:"/serarch",
            templateUrl:"App/View/search.html",
            controller:"searchController"
        });
    $urlRouterProvider.otherwise("/serarch")

});