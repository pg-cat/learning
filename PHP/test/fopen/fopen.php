<?php
// 读取文件 new.txt
$str = file_get_contents("./new.txt", "r");

$str = strtolower($str);
$str = str_replace("\n"," ",$str);
$str = str_replace(","," ",$str);
$str = str_replace("."," ",$str);

$arr = explode(" ",$str);

$arrNew = [];
$num = 0;
foreach($arr as $v){
  if($v !== ""){
    $num++;
  }
  if(array_key_exists($v,$arrNew)){
    $arrNew[$v]++;
  }else{
    $arrNew[$v]=1;
  }
}

// echo json_encode($arrNew);
// var_dump($arrNew);
echo PHP_EOL;
echo $num;
echo PHP_EOL;
?>