<?php

// 开启session
session_start();

// 获取 用户名 密码
$username = $_POST["username"];
$password = $_POST["password"];

// 获取 数据源数组
include_once("../utile/AutoArr.php");
$arr = AutoArr("../sql/sql");

// 引入 MD5 文件
include_once("../utile/MD5str.php");

// 判断 用户名 密码 是否都在 数据源数组
foreach ($arr["users"] as $v){
  if($v["username"] === $username && $v["password"] === MD5str($password)){
    unset($v['password']);
    $_SESSION["user"] = $v;
    header("Location:../index.php");
    return;
  }
}

// 在session中存储 错误信息
$_SESSION["err_info"] = "用户名或密码错误";

// 重定向到 错误页面
header("Location:../err.php");