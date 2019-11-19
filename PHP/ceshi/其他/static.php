<?php
function myTest()
{
  static $x=0;
  echo $x;
  $x++;

  echo PHP_EOL;
  // 换行符
}

myTest(); // 0
myTest(); // 1
myTest(); // 2
?>