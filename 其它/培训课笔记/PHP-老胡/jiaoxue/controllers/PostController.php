<?php

class PostController
{
	public function list()
	{
		// 数据库查询
		$v = "控制器加载视图";
		@include("../views/test.php");
	}

	public function details($params)
	{
		// 数据库查询
		$v = "详情视图";
		$id = $params["{id}"];
		@include("../views/test.php");
	}

	public function abc()
	{
		// 数据库查询
		$v = "abc视图";
		@include("../views/test.php");
	}
}

