<?php
session_start();
require('../functions/functions.php');
// 获取请求路由
// $uri = trim($_SERVER['REQUEST_URI'], '/');
$uri = trim($_SERVER['REDIRECT_URL'], '/');

$arr = genControllerInfoAndParams($uri);

$controllerInfo = $arr[1];
$routeParams = $arr[0];

// 解析路由，激活相应的控制类
if ($controllerInfo !== null) {

    // 获取对应控制器名和方法名
    $controllerName = explode("@", $controllerInfo)[0];
    $methodName = explode("@", $controllerInfo)[1];

    // 导入控制器类文件
    require("../controllers/" . $controllerName . ".php");

    // 实例化控制器类
    $controller = new $controllerName;
    // 调用相应方法
    if (!empty($routeParams)) {
        $controller->{$methodName}($routeParams);
    } else {
        $controller->{$methodName}();
    }

} else {
    die("资源不存在");
}
