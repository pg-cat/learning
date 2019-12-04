<?php

/**
 * 解析路由
 */
function routerChange($url)
{

  // 导入 路由列表
  $routers = include_once("../router/router.php");

  // 获取 用户访问路径 ，并使用 / 切割成 用户访问的路由数组
  $pathArr = explode("/", $url);

  // 准备一个放路由参数的 空数组
  $params = [];
  // 准备一个 NULL 变量，用来存放需要激活的 控制器方法
  $controllerInfo = null;

  // 循环 路由列表数组 ，将 每一个事先定义的路由 和 用户访问的路由 做对比
  foreach ($routers as $k => $v) {

    // 使用 / 分割 预定义的路由 为 预定义的路由数组
    $itemArr = explode("/", $k);

    // 准备一个状态 变量 ，初始值为 true
    $t = true;

    // 当 用户访问的路由数组 与我们 预定义的路由数组 长度相同时
    if (count($pathArr) === count($itemArr)) {

      // 循环对比 两个数组 中的 元素
      // 如：["posts", "123"] 与 ["posts", "{id}"]
      for ($i = 0; $i < count($itemArr); $i++) {

        // 当 元素 中有一项不相等，且不是 动态路由("{id}") 时
        // 如：["posts", "details", "abc"] 与 ["posts", "list",    "def"]
        if ($pathArr[$i] !== $itemArr[$i] && strpos($itemArr[$i], "{") === false) {
          // 改变状态变量 $t 的值为 false ，并终止此 for 循环
          $t = false;
          break;
        }

        // 当 元素 中有一项不相等，但包含 动态路由("{id}") 时
        // 如：["posts", "123"] 与 ["posts", "{id}"]
        if ($pathArr[$i] !== $itemArr[$i] && strpos($itemArr[$i], "{") !== false) {
          // 存储 用户访问的路由中的 id ，并终止此 for 循环
          $params[trim($itemArr[$i], "{}")] = $pathArr[$i];
          break;
        }

      }

      // 查看状态变量 $t 的值，为 false 时表示当前循环不符合要求，continue 跳出
      if ($t === false) {
        continue;
      }

      // 循环未 continue 表示当前循环符合要求，进行下一步操作：判断并选择 控制器方法
      if (isset($v[$_SERVER["REQUEST_METHOD"]])) {
        $controllerInfo = $v[$_SERVER["REQUEST_METHOD"]];
      } else {
        die("请求方法不正确");
      }

    }

  }

  // 返回最终的 参数列表 和 控制器方法
  return [$params, $controllerInfo];
};
