<?php

// 开启session
session_start();

if (!@$_SESSION["user"]) {
  $_SESSION["err_info"] = "请登陆后点赞！";
  header("Location:../err.php");
  return;
};

// 获取 文章id 用户名
$id = $_GET["id"];
$user = $_SESSION["user"];

// 获取数据源数组
include_once("../utile/AutoArr.php");
$arr = AutoArr("../sql/sql");

// 判断 此文章id 是否已在 用户点赞列表
if (in_array($id, $user["like_list"])) {

  // 是 则返回失败信息
  $res = [
    "code" => "FAIL",
    "data" => "不可重复给同一篇文章点赞！"
  ];
  echo json_encode($res);
  return;

}

// 添加 此文章id 到 用户点赞列表
$user['like_list'][] = $id;

$_SESSION["user"] = $user;

// 操作 此帖子的点赞数量 +1
$arr["posts"][$id]["like_num"] ++;

// 返回带有 点赞成功 和 点赞数量 的响应信息
$res = [
  "code" => "SUCCESS",
  "data" => $arr["posts"][$id]["like_num"]
];
echo json_encode($res);

// 存储修改后的数据
file_put_contents("../sql/sql", serialize($arr));
