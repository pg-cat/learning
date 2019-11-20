<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>留言板</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      list-style: none;
      outline: 0;
    }

    body {
      background: rgba(238, 238, 238, 0.3);
    }

    ul {
      width: 100%;
      max-width: 777px;
      height: 555px;
      overflow-y: auto;
      margin: 20px auto;
    }

    ul li {
      padding: 10px;
    }

    ul li h4 {
      color: green;
    }

    ul li p {
      margin-top: 13px;
      font-size: 16px;
      font-weight: bold;
      text-indent: 1em;
      letter-spacing: 2px;
    }

    form {
      width: 100%;
      overflow: hidden;
      padding: 33px 0;
      background: skyblue;
    }
    form div{
      width: 100%;
      max-width: 777px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
    }
    form div input {
      margin-right: 5px;
      padding: 3px 7px;
    }

    form div input:first-child {
      width: 300px;
    }
  </style>
</head>

<body>
<?php
// 获取前面所有发言
$strNews = file_get_contents("./news");
// 判断留言不为空，为空则返回空数组
if(trim($strNews) === ""){
  $arr = [];
}else{
  $arr = unserialize($strNews);
}

// 限制当前发言不为 NULL 和 ""
if($_REQUEST !== [] && $_REQUEST["value"] !== ""){
  // 生成当前发言的小数组
  $arrOne = array(
    "ip"=>$_SERVER["REMOTE_ADDR"],
    "say"=>$_REQUEST["value"],
    "time"=>date('Y年m月d日 H:i:s', time())
  );
  // 把当前发言的小数组加入大数组
  $arr[]=$arrOne;
}

// 存储所有发言
file_put_contents("./news",serialize($arr));

?>

<ul>
<?php
if($arr !== []){
  foreach($arr as $v){
    echo "<li>";
      echo "<h4>【头像】".$v["ip"]."[".$v["time"]."]说：</h4>";
      echo "<p>".$v["say"]."</p>";
    echo "</li>";
  }
}else{
  echo "<h4>无留言记录</h4>";
}
?>
</ul>
<hr />
<form action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' method="post">
  <div>
    输入框：
    <input type="text" name="value" id="value" />
    <input type="submit" value="发送">
  </div>
</form>
</body>

</html>
<?php
// 重定向刷新页面，去掉当前请求头的数据
if($_REQUEST !== []){
  header("Location:http://localhost/ceshi/request/message.php");
}
?>