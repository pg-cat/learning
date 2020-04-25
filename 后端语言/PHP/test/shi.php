<?php

$arr = [];
$arr[0] = 10;
$arr[1] = 7;
$arr[2] = 5;
$arr[3] = 4;

for ($i = 0; $i < 119; $i++) {

    $num = max($arr);

    foreach ($arr as $k => $v) {
        if ($v === $num) {
            $v = $v - 3;
            $arr[$k] = $v;
        } else {
            $v = $v + 1;
            $arr[$k] = $v;
        }
    }
}

var_dump($arr);
