<?php
class objs{
  const cc = "这是常量"; // 不会被序列化
  public $a= 1;
  public $b= "s";
  public function __sleep(){
    return array("a");
  }
  public function __wakeup(){
    // $this->a = $this->b;
    // $this->b = 33;
  }
};

$ob = new objs;
echo json_encode($ob);
echo "\n";
$obSer = serialize($ob);
echo json_encode($obSer);

echo "\n";

// 保存到当前目录的 ser 文件中
file_put_contents("ser",$obSer);

// 查看文件内容判断是否保存成功
echo "文件内容：".file_get_contents("ser");

echo "\n";

// 反序列化
$unser = unserialize($obSer);
echo json_encode($unser);

echo "\n";

// 对序列化之后的数据进行反序列化
$unser = unserialize(file_get_contents("ser"));
echo json_encode($unser);

echo "\n";