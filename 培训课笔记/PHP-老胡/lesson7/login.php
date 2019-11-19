<?php
session_start();

$userName = $_POST['username'];
$password = $_POST['password'];

$str = file_get_contents('./db_new.txt');
$arr = unserialize($str);


foreach ($arr['user'] as $v) {
    if ($v['username'] === $userName && $v['password'] === $password) {
        unset($v['password']);
        $_SESSION['user'] = $v;
        header("Location:index.php");
        return;
    }
}

$_SESSION['error_info'] = "用户名或密码错误";
header("Location:error.php");