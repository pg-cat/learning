<html>
	<head>
		<meta charset="utf-8"/>
		<title>留言板</title>
	</head>
	<body>
	<?php
		$str = file_get_contents('./db.txt');

		$ip = $_SERVER['REMOTE_ADDR'];
		$content = $_POST['content'];

		$str = $str . "\n" . $ip . "##" . $content;
		file_put_contents('./db.txt', $str);
	?>

	<?php
		$strArr = explode("\n", $str);
		echo "<ul>";
		foreach ($strArr as $v) {
			echo "<li>" . str_replace('##', ':  ', $v) . "</li>";
		}
		echo "</ul>";
	?>
		<form method="POST">
			<input name="content" type="text" />
			<input type="submit" value="提交" />
		</form>
	</body>
</html>
