<?php
session_start();

$userName = $_POST['username'];
$password = $_POST['password'];

$str = file_get_contents('./db_new.txt');
$arr = unserialize($str);

foreach ($arr['user'] as $v) {
    if ($v['username'] === $userName) {
        $_SESSION['error_info'] = "该用户已被注册";
        header('Location:error.php');
        return;
    }
}

$item = [
    'id' => count($arr['user']),
    'ip' => $_SERVER['REMOTE_ADDR'],
    'username' => $userName,
    'password' => $password,
    'like_list' => [],
];

$arr['user'][] = $item;

file_put_contents('./db_new.txt', serialize($arr));

header("Location:./login.html");