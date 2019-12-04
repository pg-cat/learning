<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>请求测试</title>
</head>
<body>

<div>
  <h2>你提交的数据：</h2>
  <?php
    if(empty($_REQUEST["name"])){
      $nameErr = "年轻人的想法很危险呐！(老铁，啥都不填我可要打你了)";
    }
    echo "姓名：".$_REQUEST["name"];
    echo "<br />性别：".$_REQUEST["sex"];
    echo "<br />爱好：".implode("、",$_REQUEST["hobby"]);
    echo "<br />所在地：".$_REQUEST["address"];
    echo "<br />";
    echo "<br />";
  ?>
  <hr />
</div>

<form action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' method="post">
  姓名：
  <input type="text" name="name" value="<?php echo $_REQUEST["name"]; ?>" />
  <span> <?php echo $nameErr; ?></span>
  <br />
  <br />
  性别：
  <input type="radio" name="sex" value="男" <?php echo $_REQUEST["sex"]=="男"?"checked":"" ?> />男
  <input type="radio" name="sex" value="女" <?php echo $_REQUEST["sex"]=="女"?"checked":"" ?> />女
  <br />
  <br />
  爱好：
  <input type="checkbox" name="hobby[]" value="吃饭" <?php echo in_array("吃饭",$_REQUEST["hobby"])?"checked":"" ?> />吃饭
  <input type="checkbox" name="hobby[]" value="睡觉" <?php echo in_array("睡觉",$_REQUEST["hobby"])?"checked":"" ?> />睡觉
  <input type="checkbox" name="hobby[]" value="打豆豆" <?php echo in_array("打豆豆",$_REQUEST["hobby"])?"checked":"" ?> />打豆豆
  <br />
  <br />
  所在地：
  <select name="address">
    <option value="地球" <?php echo $_REQUEST["address"]=="地球"?"selected":"" ?>>地球</option>
    <option value="火星" <?php echo $_REQUEST["address"]=="火星"?"selected":"" ?>>火星</option>
    <option value="月球" <?php echo $_REQUEST["address"]=="月球"?"selected":"" ?>>月球</option>
  </select>
  <br />
  <br />
  <input type="submit" value="提交">
</form>

<?php
// 请求头和响应头

echo "<hr />";
echo "<hr />";
// 因为是服务器端，无法修改请求头
echo "获取请求头：<br />";
echo json_encode(getallheaders());

echo "<hr />";

// 修改响应头
header("Content-Type: text/html; charset=UTF-88888888");
header("User-Agent:360");
header("Server: windows 3000 (Ubuntu)");
echo "获取响应头：<br />";
echo json_encode(headers_list());
?>

<?php
// 打开并修改文件

echo "<hr />";
echo "<hr />";
// 获取文件内容
$str = file_get_contents("php作业.md");
echo "原文件：<br />".$str;
file_put_contents("php作业.md","修改后的内容：\n".$str);
echo "<hr />修改后的：<br />".$str;
?>
</body>
</html>