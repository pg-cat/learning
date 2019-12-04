<div class="nav">

  <div class="alist">
    <a class="<?php echo $class === '发帖' ? 'active' : '' ?>" href="/posts/say">发帖</a>
    <a class="<?php echo $class === '帖子列表' ? 'active' : '' ?>" href="/posts">帖子列表</a>

    <!-- 判断 是否登录 -->
    <?php if (@$_SESSION["user"]) { ?>
      <a class="<?php echo $class === '个人中心' ? 'active' : '' ?>" href="/users/me">个人中心</a>
      <a id="out" href="/users/loginOut">退出</a>
      <span class="user">你好，<span><?php echo $_SESSION["user"]["username"]; ?></span> ，欢迎回来！</span>
      <img src=<?php echo $_SESSION["user"]["img"] ?> alt="">
    <?php } else { ?>
      <a class="<?php echo $class === '注册' ? 'active' : '' ?>" href="/users/register">注册</a>
      <a class="<?php echo $class === '登录' ? 'active' : '' ?>" href="/users/login">登录</a>
    <?php }; ?>

    <?php if ($_SERVER['PHP_SELF'] === "/message/page.php") { ?>
      <a class="toPage" href="#pageForm">回帖</a>
    <?php } ?>

  </div>
  <div class="utile">
    <a class="null" href="/users/loginOut">清除缓存</a>
  </div>
</div>