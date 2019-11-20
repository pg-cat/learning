<?php

// 获取 MD5 加密后的字符串
// 参数说明
// $str 字符串
// $path 密码表数组文件位置
function md5str($str,$path="../sql/md5") {

  // 获取 密码表数组
  $md5Arr = unserialize(file_get_contents($path));

  // 把参数 字符串 转为 数组
  $arr = str_split($str);
  // 获取数组长度
  $arrL = count($arr);

  // 用 密码表数组 中数据替换掉 每个数组元素
  for ($i=0;$i<$arrL;$i++) {
    $arr[$i] = $md5Arr[ord($arr[$i])];
  };

  // 返回 md5() 处理过的字符串
  $str = md5(serialize($arr));
  return $str;

};
