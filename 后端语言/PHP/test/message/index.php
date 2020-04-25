<!DOCTYPE html>

<!-- 开启session -->
<?php session_start(); ?>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>帖子列表</title>
  <link rel="stylesheet" href="./css/auto.css">
  <link rel="stylesheet" href="./css/nav.css">
  <link rel="stylesheet" href="./css/pageNum.css">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>

<?php include("./nav.php"); ?>

<ul>
<?php

// 获取 数据源数组
include_once("./utile/AutoArr.php");
$arr = AutoArr();

// 获取 数据源数组
$posts = $arr["posts"];
// 获取 数据源数组 长度
$pages = count($posts);
// 设置 每页帖子数量
$oneNum = 10;
// 获取 总页数
$pageNum = intval(ceil($pages/$oneNum));
// 获取 被选中页码(默认为 1 )
$cursor = intval(@$_GET["page"] ?: 1);

// 限制 被选中页码 ，小于 1 时为 1 ，大于 $pageNum (总页数)时为 $pageNum
if($cursor<1) $cursor = 1;
if($cursor>$pageNum) $cursor = $pageNum;

// 获取 当前页的留言
$arrPage = array_slice($posts,($cursor-1)*$oneNum,$oneNum);

// 渲染当前页的留言
if($arrPage !== []){
  foreach($arrPage as $v){
    echo "<li>";
      echo "<a href='./page.php?id=".$v["id"]."'>".$v["title"]."</a>";
      if (count($v["post"]) === 1) {
        echo "<span>大神 ".$v["post"][0]["write"]."【".($v["post"][0]["time"])."】发帖";
      } else {
        echo "<span>大神 ".end($v["post"])["write"]."【".end($v["post"])["time"]."】最后一次回复";
      };
      echo "丨浏览量 ".$v["read_num"]."丨回复 ".$v["reply_num"]."丨";
        echo "<span class='like' data-id='".$v["id"]."' onclick='getId(this)'>点赞 ".$v["like_num"]."</span>";
      echo "</span>";
    echo "</li>";
  }
}else{
  echo "<h4>无帖子记录</h4>";
}
?>
</ul>

<!-- 渲染页码 -->
<?php
// 引用页码组件
include_once("./utile/PageNum.php");
// 生成页码组件
echo PageNum($pageNum,$cursor);
?>

<!-- 报错漂浮层 -->
<div id="err"></div>

</body>

</html>
<script src="./js/pageNum.js"></script>
<script src="./js/indexFetch.js"></script>
