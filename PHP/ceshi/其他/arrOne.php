<?php

// 找出数组中不连续的元素
$arr = [0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
// 数组元素间的差值
$poor = $arr[1]-$arr[0];

function arrOne($arr){

  // 使用函数外的 $poor
  global $poor;

  // 当前数组长度
  $arrL = count($arr);
  // 裁剪位置
  $kill = intval(ceil($arrL/2))-1;
  // 数组第一个元素的值
  $v = $arr[0];

  // 开始拆分数组
  if($arr[$kill] === $kill + $v){

    if($arr[$kill+1] !== $kill + $v + $poor){
      echo json_encode($arr);
      echo "\n";
      echo $kill + $v + $poor;
      echo "\n";
      return;
    }

    // 结果为 等于 证明不正确元素在 当前值后面 的范围中
    $arr = array_splice($arr,$kill+1,$arrL-$kill,true);

  }else{

    // 结果为 等于 证明不正确元素在 当前值及其前面 的范围中
    $arr = array_splice($arr,0,$kill,true);

  };

  // 当数组只剩下最后两个或三个元素时为所求数组
  // 原因是 ceil() 取值有时会 +1 影响最后两项或三项的元素的计算
  if(count($arr) === 2 || count($arr) === 3){

    // 打印这个数组
    echo var_dump($arr);

    // 进行 第一个元素 和 第二个元素 的比较
    if($arr[0] + $poor === $arr[1]){
      echo $arr[0] + 2*$poor;
      echo "\n";
    }else{
      echo $arr[0] + $poor;
      echo "\n";
    }
    return;
  };

  return arrOne($arr);
  // echo var_dump($arr);
  // echo "\n";
  // return $arr;

};

arrOne($arr);
