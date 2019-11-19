<?php

// 开启session
session_start();

// 限制 登录 后才能发帖
if (!@$_SESSION["user"]) {
  $_SESSION["err_info"] = "请登陆后发帖！";
  header("Location:../err.php");
  return;
};

// 获取 数据源数组
include_once("../utile/AutoArr.php");
$arr = AutoArr("../sql/sql");

// 限制当前发言不为 NULL 和 ""
if($_POST === [] || $_POST["title"] === "" || $_POST["say"] === ""){
  $_SESSION["err_info"] = "标题或内容不能为空";
  header("Location:../err.php");
  return;
}

// 生成 当前发言的小数组
$arrOne = [
  "id" => count($arr["posts"]),
  "ip" => $_SERVER["REMOTE_ADDR"],
  "title" => $_POST["title"],
  "post" => [],
  "read_num" => 0,
  "reply_num" => 0,
  "like_num" => 0
];
// id 把此时数据源中总数组的长度作为 id
// ip 用户IP
// title 帖子标题
// post 帖子数据
// read_num 浏览量
// reply_num 回复数量
// like_num 点赞数量

// 把 当前的发言 加入 当前发言的小数组 中的 帖子数组
$arrOne["post"][] = [
  "say" => $_POST["say"],
  "write" => $_SESSION["user"]["username"],
  "time" => date('Y.m.d H:i:s', time())
];
// say 帖子内容，且第一条为 帖子主题
// write 编辑人，且第一个为 发帖人
// time 帖子时间，且第一个为 发布时间

// 把 当前发言的小数组 加入到 数据源数组
$arr["posts"][]=$arrOne;

// 存储 数据源数组
file_put_contents("../sql/sql",serialize($arr));

// 重定向到主页
header("Location:../index.php");
