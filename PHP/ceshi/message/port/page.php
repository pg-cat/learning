<?php

// 开启session
session_start();

// 限制 登录 后才能回帖
if (!@$_SESSION["user"]) {
  $_SESSION["err_info"] = "请登陆后回帖！";
  header("Location:../err.php");
  return;
};

// 获取 数据源数组
include_once("../utile/AutoArr.php");
$arr = AutoArr("../sql/sql");

// 限制当前发言不为 NULL 和 ""
if($_POST === [] || $_POST["say"] === ""){
  $_SESSION["err_info"] = "标题或内容不能为空";
  header("Location:../err.php");
  return;
}

// 生成 回复帖子内容小数组
$arrOne = [
  "say" => $_POST["say"],
  "write" => $_SESSION["user"]["username"],
  "time" => date('Y.m.d H:i:s', time())
];

// 拼接 回复帖子内容小数组 到 数据源数组
$arr["posts"][$_GET["id"]]["post"][] = $arrOne;

// 存储 数据源数组
file_put_contents("../sql/sql",serialize($arr));

// 重定向到 帖子
header("Location:../page.php?id=".$_GET["id"]);
