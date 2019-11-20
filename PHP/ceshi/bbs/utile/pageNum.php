<?php

// 获取 页码
// 参数说明：
// $pageNum 总页数
// $cursor 被选中页码
// 可选参数说明：
// $urls 原网址上的参数
// $num 左右按钮个数
function pageNum($pageNum,$cursor,$urls="",$num=4){

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

  if($pageNum === 0) $cursor = 1;

  // 当前页码 不为 1 时显示 上一页
  if($cursor !== 1){
    $str .= "<a href='?".$urls."page=".$left."'>上一页</a>";
  };

  // 向数组中压入选中的页码
  $pageNumArr[] = $cursor;

  // 向数组中分别压入选中页码前后4个页码
  for ($i=0; $i < $num; $i++) {
    if($cursor-$i-1>0){
      array_unshift($pageNumArr,$cursor-$i-1);
    };
    if($cursor+$i+1<$pageNum){
      $pageNumArr[]=$cursor+$i+1;
    };
  };

  // 检查数组头部，添加 1 和 ...
  if($pageNumArr[0] !== 1){
    if($pageNumArr[0] !== 2){
      array_unshift($pageNumArr,"...");
    };
    array_unshift($pageNumArr,1);
  };

  // 检查数组尾部，添加 最大值 和 ...
  if(end($pageNumArr) !== $pageNum && $pageNum !== 0){
    if(end($pageNumArr) !== $pageNum-1){
      $pageNumArr[] = "...";
    };
    $pageNumArr[] = $pageNum;
  };

  // 获取页码相应的元素标签
  foreach($pageNumArr as $v){
    if($v === "..."){
      $str .= "<span>$v</span>";
      continue;
    };
    if($v === $cursor){
      $str .= "<a class='active' href='?".$urls."page=".$v."'>$v</a>";
      continue;
    };
    $str .= "<a href='?".$urls."page=".$v."'>$v</a>";
  };
  if($cursor !== $pageNum && $pageNum !== 0){
    $str .= "<a href='?".$urls."page=".$right."'>下一页</a>";
  };
  $str .= "<input type='tel' onchange='change(this.value)' /><a id='goTo' href='?".$urls."page='>跳转</a>";
  $str .= "</div>";

  // 返回元素标签字符串
  return $str;

}
