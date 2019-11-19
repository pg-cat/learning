<!DOCTYPE html>

<!-- 开启session -->
<?php session_start(); ?>

<html lang="en">

<!-- 加载文章 -->
<?php

// 获取 数据源数组
include_once("./utile/AutoArr.php");
$arr = AutoArr("./sql/sql");

// 从 数据源数组 中取出当前 帖子数据
$onePost = $arr["posts"][$_GET["id"]];
// 获取 数据源数组 长度
$pages = count($onePost["post"]);
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
$post = array_slice($onePost["post"],($cursor-1)*$oneNum,$oneNum);

?>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $onePost["title"]; ?></title>
  <link rel="stylesheet" href="./css/auto.css">
  <link rel="stylesheet" href="./css/nav.css">
  <link rel="stylesheet" href="./css/pageNum.css">
  <link rel="stylesheet" href="./css/form.css">
  <link rel="stylesheet" href="./css/page.css">
</head>

<body>

  <!-- 回到顶部 -->
  <div id="toTOP">
    <a href="#toTOP">回到顶部</a>
  </div>

  <?php include("./nav.php"); ?>

  <article>
    <h2 class="h2">帖子主题：<span><?php echo $onePost["title"]; ?></span></h2>
    <div class="allUser">
    <?php
    $num = ($cursor-1)*$oneNum;
    foreach ($post as $v) {
      $num ++;
      echo "<div class='oneUser'>";
        echo "<div class='user'>";
          echo "<img src='./img/user.jpg' alt=''>";
          echo "<span>".$v["write"]."</span>";
        echo "</div>";
        echo "<div class='say'>".$v["say"];
          echo "<span>".$v["time"];
          if ($v["time"] === $onePost["post"][0]["time"]) {
            echo " 发帖";
          } else {
            echo " 回复";
          };
          echo " - {$num}楼</span>";
        echo "</div>";
      echo "</div>";
    }
    ?>
    </div>

    <!-- 渲染页码 -->
    <?php
    // 引用页码组件
    include_once("./utile/PageNum.php");
    // 获取网址上的参数
    $urls = "id=".$_GET["id"];
    // 生成页码组件
    echo PageNum($pageNum,$cursor,$urls);
    ?>

    <!-- 回复帖子 -->
    <?php
      $formId = "pageForm";
      $formAction = "./port/page.php?id=".$_GET["id"];
      $formH2 = "回复帖子 ：";
      include("./form.php");
    ?>

  </article>

  <!-- 回帖 跳转到底部 -->
  <div id="pageBottom"></div>
</body>

</html>
<script src="./js/pageNum.js"></script>