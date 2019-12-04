<?php
namespace Foo;

function strlen() {}
const INI_ALL = 3;
class Exception {}

$a = \strlen('hi'); // 调用全局函数strlen
echo \strlen('hi');
echo "\n";
$b = \INI_ALL; // 访问全局常量 INI_ALL
echo \INI_ALL;
echo "\n";
$c = new \Exception('error'); // 实例化全局类 Exception
echo $c;
echo "\n";
?>