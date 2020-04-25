<!DOCTYPE html>
<html lang="en">

<!-- 头部 -->
<?php include("./head.php") ?>

<body>

  <!-- 菜单 -->
  <?php include("./nav.php") ?>

  <!-- 当前所在位置 -->
  <?php include("./path.php") ?>

  <!-- 当前所在位置 -->
  <?php include("./news.php") ?>

  <!-- 新星产品 -->
  <section class="list">
    <h2>新星产品丨NEW</h2>
    <?php for($i=1;$i<9;$i++){
      echo "<div>新星产品 0".$i."</div>";
    } ?>
  </section>

  <!-- 底部 -->
  <?php include("./footer.php") ?>

</body>

</html>