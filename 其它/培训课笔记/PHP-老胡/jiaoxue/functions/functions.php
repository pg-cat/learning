<?php

function genControllerInfoAndParams($uri)
{
	// 导入事先定义好的路由列表数组
    $routes = include('../routes/web.php');

	// 将获取的用户访问路径切割成数组(使用 / )	
	$pathArr = explode("/", $uri);
	
	// 定义一个放路由参数的空数组
	$params = [];
	// 定义一个需要激活的控制器及方法的变量，初始值为NULL。在php里面，null 和 NULL 以及Null 都是一个意思
	$controllerInfo = Null;
	
	// 循环路由列表数组，将每一个事先定义的路由 和 用户 访问的路由做对比
    foreach ($routes as $k => $v) {
		// 将事先定义的每一个路由切割成数组 (使用 / )
        $itemArr = explode("/", $k);
	
		// 定义一个中间变量，初始值为0，当
		$t = 0;
		
		// 如果用户访问的路由 和 定义的路由 所切割的数组有相同个数的元素，就可以进行下一步分析
		// 如果没有就不要分析
        if (count($pathArr) === count($itemArr)) {

			// 当两个数组的元素个数相等时，循环固定次数(数组长度)，对两个数组 里面 的每一个元素进行对比
			// ["posts", "123"]
			// ["posts", "{id}"]
            for ($i=0;$i<count($itemArr);$i++) {
                if (
                    $pathArr[$i] !== $itemArr[$i] &&
                    strpos($itemArr[$i], "{") === false
                ) {
					// 这种情况就是 当对比到其中一项，不相等，并且也不是我们想要接受的动态路由参数时
					// 我们直接终止本循环(break),并且最外层的循环要进入下一个循环
					// 例如
					// ["posts", "details", "abc"]  用户访问的路由
					// ["posts", "list",    "def"]  定义好的路由
					// 比较到第2项(下标为1时)，发现不相等，并且定义好的路由部分也不是{}这样的，不需要接受参数
					// 此时直接认为 路由解析失败。终止本次循环，外部循环(定义好的路由循环)进入下一个，再进行比对
					// 把$t 赋值为1， 在外层循环中检测的时候，可以根据这个 考虑是否continue(不考虑continue后面的代码直接进入下一个循环)
                    $t = 1;
                    break;
                } else if (
                    $pathArr[$i] !== $itemArr[$i] &&
                    strpos($itemArr[$i], "{") !== false
                ) {
					// 这种情况就是 当对比到其中一项，不相等，但是这个时候我们想接受一个动态路由参数
					// 例如
					// ["posts", "123"]  用户访问的路由
					// ["posts", "{id}"]  定义好的路由
					// 这个时候我们应该讲123作为值，id作为键 存到$params数组中
                    $params[$itemArr[$i]] = $pathArr[$i];
                } else if (
                    $pathArr[$i] === $itemArr[$i]
                ) {
					// 这个else if 分支可以不要
					// 我们主要是在这个小循环中 是否 改变 $t 值
					// 如果改变，外面的循环应该立刻进入下一个循环
                    continue;
                }
			}
			
			// 检测到$t 值，
			// 当$t 为1 时， 表明在对两个路由分割的数组进行每一部分的比较的时候，已经可以认定当前这个循环不符合要求
			// 可以直接到下一个循环
            if ($t === 1) {
                continue;
			}
			
			// 如果$t 没有为0，表明当前这个外层已经找到了，匹配正确
			// 然后去判断请求方法
            if (isset($v[$_SERVER['REQUEST_METHOD']])) {
                $controllerInfo = $v[$_SERVER['REQUEST_METHOD']];
            } else {
                die("请求方法不正确");
            }
        }
    }

    return [$params, $controllerInfo];
}
