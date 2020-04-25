<section class="path">
<span>当前所在位置 ：</span>
<a href="./index.php">首页</a>
<span> >> </span>
<span>
<?php
  $str = $_SERVER['PHP_SELF'];
  $arr = explode("/",$str);
  $title = end($arr);
  switch ($title)
  {
  case "listHot.php":
    echo "推荐产品";
    break;
  case "listNew.php":
    echo "新星产品";
    break;
  case "about.php":
    echo "公司介绍";
    break;
  default:
    echo "你炸了";
  } 
?>
</span>
</section>