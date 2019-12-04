<!DOCTYPE html>

<!-- 开启session -->
<?php session_start(); ?>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>登录</title>
  <link rel="stylesheet" href="./css/auto.css">
  <link rel="stylesheet" href="./css/nav.css">
  <link rel="stylesheet" href="./css/login.css">
</head>

<body>

  <?php include("./nav.php"); ?>

  <form action="./port/login.php" method="post">
    用户名：
    <br />
    <input type="text" name="username" />
    <br />
    密码：
    <br />
    <input type="password" name="password" />
    <br />
    <input class="submit" type="submit" value="登录" />
  </form>

</body>

</html>