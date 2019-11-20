<?php

// 开启session
session_start();

// 获取 用户名 密码
$username = $_POST["username"];
$password = $_POST["password"];

// 获取 数据源数组
include_once("../utile/AutoArr.php");
$arr = AutoArr("../sql/sql");

// 判断 用户名 是否已在 数据源数组
foreach ($arr["users"] as $v) {
  if ($v["username"] === $username) {
    $_SESSION["err_info"] = "该用户名已被注册";
    header("Location:../err.php");
    return;
  }
};

// 建立 用户小数组(不包括密码)
$userOne = [
  "id" => count($arr["users"]),
  "ip" => $_SERVER["REMOTE_ADDR"],
  "username" => $username,
  "img" => "./img/user.jpg",
  "like_list" => []
];

// 在session中存储 用户信息(不包括密码)
$_SESSION["user"] = $userOne;

// 引入 MD5 文件
include_once("../utile/MD5str.php");

// 存储 用户信息(包括 MD5 操作后的密码) 到数据源文件
$userOne["password"] = MD5str($password);
$arr["users"][] = $userOne;
file_put_contents("../sql/sql", serialize($arr));

// 重定向到 主页
header("Location:../index.php");
