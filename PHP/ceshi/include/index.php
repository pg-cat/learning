<?php
$routes = ["/ceshi/include/index.php"=>"home.php","/ceshi/include/index.php"=>"listNew.php","/ceshi/include/index.php"=>"listHot.php","/ceshi/include/index.php"=>"about.php"];

$route = $_SERVER["REQUEST_URI"];

if(array_key_exists($route,$routes)){
  switch ($route){
    case "index.php":
      include("./home.php");
    // case ""
  }
}else{
  echo "非法路由";
}








