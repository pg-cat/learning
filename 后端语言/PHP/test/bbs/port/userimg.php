<?php

// 开启session
session_start();

// 限制 登录 后才能设置头像
if (!@$_SESSION["user"]) {
  $_SESSION["err_info"] = "请登陆后设置头像！";
  header("Location:../err.php");
  return;
};

// 上传错误的信息说明
$err = $_FILES["userImg"]["error"];
if ($err !== 0) {
  // 当错误代码为 1
  if ($err === 1) {
    $_SESSION["err_info"] = "上传失败，文件大小超过 2M";
    header("Location:../err.php");
    return;
  };
  // 当错误代码为 2
  if ($err === 2) {
    $_SESSION["err_info"] = "上传失败，文件大小超过 100KB";
    header("Location:../err.php");
    return;
  };
  // 当错误代码为 3
  if ($err === 3) {
    $_SESSION["err_info"] = "上传失败，文件只有部分被上传";
    header("Location:../err.php");
    return;
  };
  // 当错误代码为 4
  if ($err === 4) {
    $_SESSION["err_info"] = "上传失败，没有文件被上传";
    header("Location:../err.php");
    return;
  };
  // 当错误代码为 6
  if ($err === 6) {
    $_SESSION["err_info"] = "上传失败，找不到临时文件夹";
    header("Location:../err.php");
    return;
  };
  // 当错误代码为 7
  if ($err === 7) {
    $_SESSION["err_info"] = "上传失败，文件写入失败";
    header("Location:../err.php");
    return;
  };
  // 未知错误
  $_SESSION["err_info"] = "上传失败，未知错误，请联系傻逼程序！";
  header("Location:../err.php");
  return;
};

// 判断上传的文件类型
// 获取 上传文件类型 字符串并切割成数组，数组第一项为 文件类型，第二项为文件后缀名
$imgArr = explode("/",$_FILES["userImg"]["type"]);
// 上传文件类型 不为 image 时报错
if ($imgArr[0] !== "image") {
  $_SESSION["err_info"] = "上传失败，上传文件类型非图片类型";
  header("Location:../err.php");
  return;
}
// 可继续根据后缀名 $imgArr[0] 限制图片类型

// 上传成功后续操作
// 临时文件位置
$path = $_FILES["userImg"]["tmp_name"];
// 获取当前用户的 用户id
$id = $_SESSION["user"]["id"];
// 指定服务器上 存放图片位置
$pathOK = "./img/user".$id.".".$imgArr[1];

// 移动临时图片到服务器指定位置
move_uploaded_file($path,".".$pathOK);

// 获取 数据源数组
include_once("../utile/AutoArr.php");
$arr = AutoArr("../sql/sql");

// 获取当前用户的 数据源数组 中的 小数组 及用户
$user = &$arr["users"][$id];


// 更新session中的用户信息中 图片位置
$_SESSION["user"]["img"] = $pathOK;

// 更新用户信息中 图片位置
$user["img"] = $pathOK;

// 存储数据
file_put_contents("../sql/sql",serialize($arr));

// 重定向到 个人中心
header("Location:../me.php");
