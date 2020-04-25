<?php

// 开启session
session_start();

// 获取 请求路由
$url = trim(@$_SERVER["REDIRECT_URL"], "/");

// 引入 路由请求方法
require("../utile/functions.php");
$arr = routerChange($url);
// 获得 参数
$params = $arr[0];
// 获得 控制器
$controllerInfo = $arr[1];

// var_dump($params);
// echo "<hr \>";
// var_dump($controllerInfo);
// echo "<hr \>";

// 解析路由，激活相应的控制类
if ($controllerInfo !== null) {

    // 获取对应 控制器名 和 方法名
    $controllerName = explode("@", $controllerInfo)[0];
    $methodName = explode("@", $controllerInfo)[1];

    // 引入 控制器类
    require("../routerClass/" . $controllerName . ".php");
    // 实例化 控制器
    $controller = new $controllerName;
    if (!empty($params)) {
        $controller->{$methodName}($params);
    } else {
        $controller->{$methodName}();
    }
} else {

    die("资源不存在");
}
