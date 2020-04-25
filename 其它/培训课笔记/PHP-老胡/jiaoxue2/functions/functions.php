<?php

/**
 * 解析路由
 */
function genControllerInfoAndParams($uri)
{
    $routes = include('../routes/web.php');

    $pathArr = explode("/", $uri);
    $params = [];
    $controllerInfo = Null;
    foreach ($routes as $k => $v) {

        $itemArr = explode("/", $k);

        $t = 0;
        if (count($pathArr) === count($itemArr)) {
            for ($i=0;$i<count($itemArr);$i++) {
                if (
                    $pathArr[$i] !== $itemArr[$i] &&
                    strpos($itemArr[$i], "{") === false
                ) {
                    $t = 1;
                    break;
                } else if (
                    $pathArr[$i] !== $itemArr[$i] &&
                    strpos($itemArr[$i], "{") !== false
                ) {
                    $params[trim($itemArr[$i], "{}")] = $pathArr[$i];
                } else if (
                    $pathArr[$i] === $itemArr[$i]
                ) {
                    continue;
                }
            }
            if ($t === 1) {
                continue;
            }
            if (isset($v[$_SERVER['REQUEST_METHOD']])) {
                $controllerInfo = $v[$_SERVER['REQUEST_METHOD']];
            } else {
                die("请求方法不正确");
            }
        }
    }

    return [$params, $controllerInfo];
}

/**
 * 生成分页
 */
function generatePaginationTar($totalNum, $perPage, $currentPage)
{
    // 数组长度，每页的数据量，当前的页面
    $path = "";
    $str = "";
    $totalPageNum = (int)ceil($totalNum / $perPage);
    $str = "<div class='page_nav'>";
    $str .= "<em>共{$totalPageNum}页&nbsp;</em>";

    if ($currentPage !== 1) {
        $prePageNum = $currentPage - 1;
        $str .= "<a href='{$path}?page={$prePageNum}' class='pageliststy next_page'>上一页</a>";
    }

    $arr = array($currentPage);
    for ($i=0;$i<4;$i++) {
        $prePage = $currentPage - $i - 1;
        $nextPage = $currentPage + $i + 1;
        if ($prePage >= 1) {
            array_unshift($arr, $prePage);
        }

        if ($nextPage <= $totalPageNum) {
            array_push($arr, $nextPage);
        }
    }

    if ($arr[0] !== 1) {
        if ($arr[0] !== 2) {
            array_unshift($arr, "...");
        }

        array_unshift($arr, 1);
    }

    if ($arr[count($arr)-1] !==  $totalPageNum) {
        if ($arr[count($arr)-1] !== $totalPageNum - 1) {
            array_push($arr, "...");
        }

        array_push($arr, $totalPageNum);
    }

    foreach ($arr as $v) {
        if ($v === "...") {
            $str .= "<em>...</em>";
            continue;
        }

        $classStr = "";
        if ($v == $currentPage) {
            $classStr = "cur_page";
        }

        $str .= "<a href='{$path}?page={$v}' class='pageliststy {$classStr}'>{$v}</a>";
    }
    // <a href="/forums/Java?page=3" class="pageliststy next_page">上一页</a>
    // 上一页，1，2，3，4 。。。 最后一页，下一页，跳转

    if ($currentPage !== $totalPageNum) {
        $nextPageNum = $currentPage + 1;
        $str .= "<a href='{$path}?page={$nextPageNum}' class='pageliststy next_page'>下一页</a>";
    }

    $str .= "</div>";

    return $str;
}


