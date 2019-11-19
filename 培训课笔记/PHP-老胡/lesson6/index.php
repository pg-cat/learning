<html>
	<head>
		<meta charset="utf-8"/>
		<title>留言板</title>
		<style>
			.page_nav {
    			background: #fff;
    			text-align: center;
    			font-size: 24px;
			}

			.page_nav em {
			    cursor: pointer;
    			padding: 0 5px;
    			font-size:24px;
    			color: #ccc;
			}

			.page_nav .pageliststy.next_page {
    			width: auto;
			}

			.page_nav .next_page {
			    margin-left: 16px;
			    padding: 0 5px;
			}

			.page_nav .pageliststy {
			    width: 32px;
			    padding: 0;
			    text-align: center;
				display: inline-block;
			}

			.page_nav .pageliststy.cur_page {
			    color: #fff;
			}

			.page_nav .cur_page {
			    font-size: 24px;
			    color: #fff;
			    font-weight: 400;
			    background: #ca0c16;
			    border-color: #ca0c16;
			}

			.content {
				width:800px;
				height:800px;
				margin: 0 auto;
			}

			ul {

			}

			span.title {
				overflow:hidden;
				text-overflow: ellipsis; 
        		white-space:nowrap;
				//background:red;
				width:250px;
				display:inline-block;
				height: 1.5em;
			}

			span.ip {
				text
				overflow:hidden;
				text-overflow: ellipsis; 
        		white-space:nowrap;
				//background:red;
				width:120px;
				display:inline-block;
				height: 1.5em;
			}



		</style>
	</head>
	<body>
	<?php
		require_once("./functions.php");
		$page = (int)(@$_GET['page']?:1);
		$limit = 10;
		

		$str = file_get_contents('./db_new.txt');
		$arr = unserialize($str);
		if ($arr === false) $arr = ['post'=>[], 'user' => []];

		if ($page > ceil(count($arr['posts']) / $limit)) {
			$page = ceil(count($arr['posts']) / $limit);
		}

		$offset = ($page - 1) * $limit;
	?>

	<div class="content">
	<?php 
		echo "<ul >";
		$pageArr = array_slice($arr['posts'], $offset, $limit);
		foreach ($pageArr as $v) {
			echo "<li><a href='./detail.php?id=" . $v['id'] . "'><span class='ip'>" . $v['ip'] . "</span>  <span class='title'>: " . $v['content'] .  "</span></a><span>回复数： " . $v['reply_num'] . "</span><span class='like' onclick='doLike(this)' postId='" . $v['id'] . "'>  点赞：" . $v['like_num'] . "</span></li>";
		}
		echo "</ul>";
		echo generatePaginationTar(count($arr['posts']), $limit, $page);
	?>

		<a href="./form.php">去留言</a>

	</div>
	<script>
		function postData(url, data) {
  		// Default options are marked with *
  			return fetch(url, {
    			body: data,//JSON.stringify(data), // must match 'Content-Type' header
    			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    			credentials: 'same-origin', // include, same-origin, *omit
    			headers: {
    			  'user-agent': 'Mozilla/4.0 MDN Example',
    			  'content-type': 'application/x-www-form-urlencoded'
				  //'content-type': 'application/form-data',
				  //'content-type': 'application/json',
    			},
    			method: 'POST', // *GET, POST, PUT, DELETE, etc.
    			mode: 'cors', // no-cors, cors, *same-origin
    			redirect: 'follow', // manual, *follow, error
    			referrer: 'no-referrer', // *client, no-referrer
  				})
  			.then(
				function(response) {
					console.log('json 之前');
    				return response.json();
				}
			) // parses response to JSON
		}

		function doLike (t) {
			console.log('like')
			data = "id=" + t.getAttribute('postId');
			postData('./like.php', data).then(function (res) {
				if (res.code === "SUCCESS") {
					t.innerHTML = " 点赞：" + res.data.like_num
				}
			});
		};
	</script>
	</body>
</html>