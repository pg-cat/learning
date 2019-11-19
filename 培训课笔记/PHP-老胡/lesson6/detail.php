<html>
	<head>
		<meta charset="utf-8"/>
		<title>详情页</title>
		<style>
            .container {
                background: red;
                width: 800px;
                height: 800px;
                margin: 0 auto;
            }

            .post {
                background: black;
                width: 100%;
                height: 300px;
            }

            .author {
                height:100%;
                width: 150px;
                display:inline-block;
                background: yellow;
            }

            .right_side {
                height:100%;
                width: 600px;
                display:inline-block;
                background: blue;
            }

            .title {
                height:100px;
                width: 100%;
                background: #ab34ab;
            }

            .content {
                height:200px;
                width: 100%;
                background: #8934ab;
            }

		</style>
	</head>
	<body>
        <?php
        $str = file_get_contents('./db_new.txt');
        $arr = unserialize($str);
        
        $id = (int)$_GET['id'];

        $post = $arr['posts'][$id];
        
        ?>



        <div class="container">
            <div class="post">
                <div class="author"><?php echo $post['ip']; ?></div>
                <div class="right_side">
                    <div class="title"><?php echo $post['title']; ?></div>
                    <div class="content"><?php echo $post['content']; ?></div>
                </div>
            </div>

            <div>

            </div>
        </div>

	</body>
</html>