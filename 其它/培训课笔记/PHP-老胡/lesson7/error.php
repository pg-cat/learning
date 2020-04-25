<html>
	<head>
		<meta charset="utf-8"/>
		<title>错误</title>
	</head>
	<body>
    <?php

        session_start();

        echo @$_SESSION['error_info'];

        unset($_SESSION['error_info']);

    ?>
    <script>
        setInterval(() => {
            window.location.href="./register.html"
        }, 3000);
    </script>
	</body>
</html>


