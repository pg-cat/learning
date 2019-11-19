<?php

/**
 * 解析路由
 */

// 参数说明：
// $url 用户访问路径
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
            if ($t === false) continue;

            // 循环未 continue 表示当前循环符合要求，进行下一步操作：判断并选择 控制器方法
            if (!isset($v[$_SERVER["REQUEST_METHOD"]])) die("请求方法不正确");

            // 正常情况下选择相应的 控制器方法
            $controllerInfo = $v[$_SERVER["REQUEST_METHOD"]];
            break;
        }
    }

    // 返回最终的 参数列表 和 控制器方法
    return [$params, $controllerInfo];
};


/**
 * 渲染页码
 */

// 参数说明：
// $pageNum 总页数
// $cursor 被选中页码
// 可选参数说明：
// $urls 原网址上的参数
// $num 左右按钮个数
function pageNum($pageNum, $cursor, $urls = "", $num = 4)
{

    // 拼接网址上的参数
    if ($urls !== "") $urls .= "&";

    // 准备 空数组 装 所有页码
    $pageNumArr = [];
    // 上一页
    $left = $cursor - 1;
    // 下一页
    $right = $cursor + 1;
    // 准备 字符串 渲染页码组件
    $str = "<div class='page'>";
    $str .= "<h2>共 {$pageNum} 页</h2>";

    if ($pageNum === 0) $cursor = 1;

    // 当前页码 不为 1 时显示 上一页
    if ($cursor !== 1) {
        $str .= "<a href='?" . $urls . "page=" . $left . "'>上一页</a>";
    };

    // 向数组中压入选中的页码
    $pageNumArr[] = $cursor;

    // 向数组中分别压入选中页码前后4个页码
    for ($i = 0; $i < $num; $i++) {
        if ($cursor - $i - 1 > 0) {
            array_unshift($pageNumArr, $cursor - $i - 1);
        };
        if ($cursor + $i + 1 < $pageNum) {
            $pageNumArr[] = $cursor + $i + 1;
        };
    };

    // 检查数组头部，添加 1 和 ...
    if ($pageNumArr[0] !== 1) {
        if ($pageNumArr[0] !== 2) {
            array_unshift($pageNumArr, "...");
        };
        array_unshift($pageNumArr, 1);
    };

    // 检查数组尾部，添加 最大值 和 ...
    if (end($pageNumArr) !== $pageNum && $pageNum !== 0) {
        if (end($pageNumArr) !== $pageNum - 1) {
            $pageNumArr[] = "...";
        };
        $pageNumArr[] = $pageNum;
    };

    // 获取页码相应的元素标签
    foreach ($pageNumArr as $v) {
        if ($v === "...") {
            $str .= "<span>$v</span>";
            continue;
        };
        if ($v === $cursor) {
            $str .= "<a class='active' href='?" . $urls . "page=" . $v . "'>$v</a>";
            continue;
        };
        $str .= "<a href='?" . $urls . "page=" . $v . "'>$v</a>";
    };
    if ($cursor !== $pageNum && $pageNum !== 0) {
        $str .= "<a href='?" . $urls . "page=" . $right . "'>下一页</a>";
    };
    $str .= "<input type='tel' onchange='change(this.value)' /><a id='goTo' href='?" . $urls . "page='>跳转</a>";
    $str .= "</div>";

    // 返回元素标签字符串
    return $str;
}


/**
 * MD5 加密
 */

// 参数说明
// $str 字符串
// $path 密码表数组文件位置
function md5str($str, $path = "../sql/md5")
{

    // 获取 密码表数组
    $md5Arr = unserialize(file_get_contents($path));

    // 把参数 字符串 转为 数组
    $arr = str_split($str);
    // 获取数组长度
    $arrL = count($arr);

    // 用 密码表数组 中数据替换掉 每个数组元素
    for ($i = 0; $i < $arrL; $i++) {
        $arr[$i] = $md5Arr[ord($arr[$i])];
    };

    // 返回 md5() 处理过的字符串
    $str = md5(serialize($arr));
    return $str;
};


/**
 * 数组排序
 */

// 参数说明
// $arr 被排序数组
// $value 排序参考值
// function Uasort($arr,$value) {
//   if($a === )
// }
