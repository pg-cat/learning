<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>
  <?php
    $str = $_SERVER['PHP_SELF'];
    $arr = explode("/",$str);
    $title = end($arr);
    switch ($title)
    {
    case "index.php":
      echo "主页丨index";
      break;
    case "listHot.php":
      echo "推荐产品丨HOT";
      break;
    case "listNew.php":
      echo "新星产品丨NEW";
      break;
    case "about.php":
      echo "公司介绍丨ABOUT";
      break;
    default:
      echo "你炸了";
    } 
  ?>
  </title>
  <link rel="stylesheet" href="./css/index.css">
</head>