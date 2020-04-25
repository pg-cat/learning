<?php

// 连接数据库
$dbh = new PDO('pgsql:host=192.168.31.39;dbname=test;port=8084', "cat", "1234567");

echo "连接成功\n";

// 增
$str = "INSERT INTO users(id, username, password) VALUES (nextval('users_id_seq'::regclass), 'me', '123')";

// 删
$strDel = "DELETE FROM users WHERE id = 2";

// 改
$strUp = "UPDATE users SET username = '我是你大爷', password = '222' WHERE id = 1";

// 执行 增 删 改 的数据库操作
// $num = $dbh->exec($str);
// echo "操作了{$num}行\n";

// prepare() 预加载请求进行 增 删 改 一行，此处只举例 增
$strOne = "INSERT INTO users(id, username, password) VALUES (nextval('users_id_seq'::regclass), :user, :pass)";
$ddd = $dbh->prepare($strOne);
$boo = $ddd->execute([':user'=>"大爷", ':pass'=>"666666"]);
var_dump($boo);

echo "---\n";

// 查
$strF = "SELECT username, password FROM users ORDER BY id";

// query() 逐行请求，下标自动往后一行
// foreach($dbh->query($strF) as $v){
//   var_dump($v)."\n";
// }

// fetch() 请求一行
// $obj = $dbh->query($strF);
// $objOne = $obj->fetch();
// echo json_encode($objOne);

// fetchAll() 请求全部
// $obj = $dbh->query($strF);
// $objAll = $obj->fetchAll();
// var_dump($objAll);

// prepare() 预加载请求一行
// $strPre = "SELECT * FROM users WHERE username = :user AND password = :pass";
// $dbb = $dbh->prepare($strPre);
// $dbb->execute([':user'=>"我是你大爷", ':pass'=>"222"]);
// $objAll = $dbb->fetchAll();
// var_dump($objAll);

// 关闭连接
$dbh = null;
echo "\n";
