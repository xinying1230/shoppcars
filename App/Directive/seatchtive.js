/**
 * Created by 12345 on 2017/10/13.
 */
app.directive('shopItem', function () {
    return{
        restrict: "EA",
        scope:{
            item: "=item",
            index: "@index"
        },
        templateUrl:'App/View/temp/searchs.html',
        controller:"searchitemController"
    }
})