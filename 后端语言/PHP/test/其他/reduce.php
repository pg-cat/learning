<?php

$arr = [2, 4, 6, 8];

function reduceStr(callable $fun, $arr)
{
    $str = $fun($arr);
    return $str;
};

function fun($arr) {
    $str = "";
    foreach ($arr as $v) {
        $str .= $v;
    }
    return $str;
};

var_dump(reduceStr("fun", $arr));
