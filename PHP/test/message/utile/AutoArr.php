<?php

// 获取 数据源文件 中的 数组
// 参数说明
// $path  数据源文件 位置路径
function AutoArr($path = "./sql/sql") {

  // 获取 数据源文件 中的 序列化字符串
  $str = file_get_contents($path);

  // 当 序列化字符串为 空 时
  if (trim($str) !== ""){
    $arr = unserialize($str);
  } else {
    $arr = [
      "posts" => [],
      "users" => [],
    ];
  };

  // 当 数组 中无 "posts" 这个元素时
  if (!isset($arr["posts"])){
    $arr["posts"] = [];
    return $arr;
  };

  // 当 数组 中无 "users" 这个元素时
  if (!isset($arr["users"])){
    $arr["users"] = [];
    return $arr;
  };

  // 返回处理好的 数组
  return $arr;

};
