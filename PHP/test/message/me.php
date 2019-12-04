<!DOCTYPE html>

<!-- 开启session -->
<?php session_start(); ?>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>个人中心</title>
  <link rel="stylesheet" href="./css/auto.css">
  <link rel="stylesheet" href="./css/nav.css">
  <link rel="stylesheet" href="./css/me.css">
</head>

<body>

  <?php include("./nav.php"); ?>

  <form action="./port/userimg.php" method="post" enctype="multipart/form-data">
    设置头像：
    <br />
    <span>提示：请保持图片大小不超过 100KB</span>
    <br />
    <input type="hidden" name="MAX_FILE_SIZE" value="102400" />
    <input type="file" name="userImg" />
    <br />
    <input class="submit" type="submit" value="提交" />
  </form>

  <img class="user" src=<?php echo $_SESSION["user"]["img"] ?> alt="">
  
</body>

</html>