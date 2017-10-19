/**
 * Created by 12345 on 2017/10/13.
 */
app.controller("searchController", ['$scope','searchsever',function ($scope,searchsever) {
    $scope.flag=false;
    searchsever.gets("GET", "http://localhost:9090/?price").then(function (result) {
        $scope.shuju = result;
        price();
    });
    //删除
    $scope.$on("deleteItem", function (event,index) {
         $scope.shuju.splice(index,1);
        price();
    });
    //当点击的时候改变
    $scope.$on("itemChange", function (event,index) {
        $scope.shuju[index].state=!$scope.shuju[index].state;

        var count=0;
        // 如果下面的数据源全部都选中 则全选按钮选中
        for (var i = 0; i < $scope.shuju.length; i++) {
            if ($scope.shuju[i].state) {
                count++;//选中的时候++

            }
        }
        //如果最后的count加的数最后等于数据的长度  则全选选中
        if (count == $scope.shuju.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        price();
    });
    //如果点击全选
    $scope.checkAll= function () {
        //取反
        $scope.flag=!$scope.flag;
    //循环遍历数据源的每一项
        for (var i = 0; i < $scope.shuju.length; i++) {
            if ($scope.flag) {
                $scope.shuju[i].state = true;
            } else {
                $scope.shuju[i].state = false;
            }

        }
        price();
    };
//    结算
    $scope.$on("countChange", function (event) {
        price();
    });
//    封装一个合计的方法
    function price() {
        $scope.zong = 0;
        $scope.zongpic = 0;
        $scope.shuju.forEach(function (item, index) {
            //如果是选中值
            if (item.state) {
                //个数乘以价格
                $scope.zong += item.num * item.pic;
                $scope.zongpic += item.num;
            }
        });

    }
}]);