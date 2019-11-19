<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>页面错误</title>
  <link rel="stylesheet" href="/css/auto.css">
  <link rel="stylesheet" href="/css/nav.css">
  <link rel="stylesheet" href="/css/err.css">
</head>
<body>

  <?php include("./views/nav.php"); ?>

  <h2 class="err">非常抱歉，遇到错误了：</h2>

  <div class="err">
  <?php
    echo $_SESSION["err_info"];
  ?>
  </div>

</body>
</html>