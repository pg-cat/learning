<div class="nav">

  <div class="alist">
    <a href="./say.php">发帖</a>
    <a href="./index.php">帖子列表</a>

    <?php if (@$_SESSION["user"]) { ?>
    <a class="out" href="./me.php">个人中心</a>
    <a href="./port/loginOut.php">退出</a>
    <span class="user">你好，<span><?php echo $_SESSION["user"]["username"]; ?></span> ，欢迎回来！</span>
    <img src=<?php echo $_SESSION["user"]["img"] ?> alt="">
    <?php } else { ?>
    <a href="./register.php">注册</a>
    <a href="./login.php">登录</a>
    <?php }; ?>

    <?php if ($_SERVER['PHP_SELF'] === "/message/page.php") { ?>
    <a class="toPage" href="#pageForm">回帖</a>
    <?php } ?>

  </div>
  <div class="utile">
    <a class="null" href="./port/loginOut.php">清除缓存</a>
  </div>
</div>
