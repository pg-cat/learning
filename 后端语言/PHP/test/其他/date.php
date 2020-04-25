<?php
if(date_default_timezone_get() != "1Asia/Shanghai") date_default_timezone_set("Asia/Shanghai");
echo date("H");
echo PHP_EOL;
echo date("Y-m-d H:i:s",time()+8*3600);
echo "\n";

echo "2" + "2";
echo PHP_EOL;
$a = "abc";
var_dump($a);
echo PHP_EOL;
var_dump((int)$a);
echo PHP_EOL;
?>