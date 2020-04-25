<?php
include '../db/DB.php';
include_once '../functions/functions.php';

class PostController
{
    public function list()
    {
				// 前端参数处理
				$pageNo = (int)$_GET['page']??1;
				// 初始化每页显示数据数量
				$limit = 10;

				// 数据库查询
				$db = new DB;

				// 统计数据库数据数量
				$sqlCount = "select count(*) from posts;";
				var_dump($db->select($sqlCount));
				$count = $db->select($sqlCount)[0]['count'];
				// 重置$pageNo
				if ( $pageNo > (int)ceil($count / $limit) ) {
					$pageNo = (int)ceil($count / $limit);
				} else if ($pageNo < 1) {
					$pageNo = 1;
				}

				// 计算查询起始位置
				$offset = ($pageNo-1) * $limit;
				// 分页查询
				$sql = "select * from posts order by post_id limit {$limit} offset {$offset} ;";
				$pageArr = $db->select($sql);

				// 生成分页html
				$paginationHtml = generatePaginationTar($count, $limit, $pageNo);

				extract(['arr' => $pageArr, 'paginationHtml' => $paginationHtml]);
				@include("../views/index.php");
    }

    public function details($routeParams)
    {
			$postId = $routeParams['id'];

			if (!is_numeric($postId)) {
				die("找不到");
			}

			// new DB类
			$db = new DB;

			// 拼接sql
			$sql = "select * from posts where post_id = {$postId};";

			// 查询
			$arr = $db->select($sql);
			if (empty($arr)) {
				die("找不到");
			}
			$details = $arr[0];


			extract(['details' => $details]);
      @include("../views/details.php");
    }

    public function like()
    {
		//

        // 数据库查询
        $v = "abc视图";

		echo json_encode([
			'code' => 'SUCCESS',
			'data' => [
				'like_num' => 58,
			]
		]);
    }
}

