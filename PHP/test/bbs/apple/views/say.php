<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>发布新帖</title>
    <link rel="stylesheet" href="/css/auto.css">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/form.css">
</head>

<body>

    <?php include("./views/nav.php"); ?>

    <?php
    $formAction = "/posts/say";
    $formH2 = "发布新帖丨NEW";
    $formTitle = true;
    include("./views/form.php");
    ?>

</body>

</html>