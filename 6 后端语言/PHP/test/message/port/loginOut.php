<?php

// 开启session
session_start();

// 删除用户有关user的 session记录
unset($_SESSION["user"]);

// 重定向到 主页
header("Location:../index.php");