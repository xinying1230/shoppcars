/**
 * Created by 12345 on 2017/10/18.
 */
app.controller("searchitemController", function ($scope) {
//    删除
$scope.deleteItem= function (index) {
    $scope.$emit("deleteItem",index);
};
 $scope.iteChecked= function (index) {
        $scope.$emit("itemChange",index);
    };
    //点击加减
    $scope.Count = function (flag) {
        if (flag == "+") {
            $scope.item.num += 1;
        } else {
            //小于1的时候跳出
            if ($scope.item.num <= 1) return;
            $scope.item.num -= 1;
        }
        $scope.$emit("countChange");
    }
});