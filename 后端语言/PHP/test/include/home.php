<!DOCTYPE html>
<html lang="en">

<!-- 头部 -->
<?php include("./head.php") ?>

<body>

  <!-- 菜单 -->
  <?php include("./nav.php") ?>

  <!-- 轮播图 -->
  <?php include("./banner.php") ?>

  <!-- 推荐产品 -->
  <section class="list">
    <h2>推荐产品丨HOT</h2>
    <?php for($i=1;$i<6;$i++){
      echo "<div>推荐产品 0".$i."</div>";
    } ?>
  </section>

  <!-- 新星产品 -->
  <section class="list">
    <h2>新星产品丨NEW</h2>
    <?php for($i=1;$i<4;$i++){
      echo "<div>新星产品 0".$i."</div>";
    } ?>
  </section>

  <!-- 底部 -->
  <?php include("./footer.php") ?>

</body>

</html>
<!-- 轮播图 js -->
<script src="./js/banner.js"></script>