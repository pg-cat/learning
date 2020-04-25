<?php
$arr = [1,2,4];
var_dump($arr);
// echo "\n";
echo json_encode($arr);
echo "\n";
unset($arr[0]); // 删除数组第一项
$arr = array_values($arr); // 对数组进行重新排列
var_dump($arr);
// echo "\n";
echo json_encode($arr);
echo "\n";
?>