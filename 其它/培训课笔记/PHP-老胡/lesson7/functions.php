<?php

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