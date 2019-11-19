<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $onePost["title"] ?></title>
    <link rel="stylesheet" href="/css/auto.css">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/pageNum.css">
    <link rel="stylesheet" href="/css/form.css">
    <link rel="stylesheet" href="/css/page.css">
</head>

<body>

    <!-- 回到顶部 -->
    <div id="toTOP">
        <a href="#toTOP">回到顶部</a>
    </div>

    <?php include("./views/nav.php"); ?>

    <article>
        <h2 class="h2">帖子主题：<span><?php echo $onePost["title"] ?></span></h2>
        <div class="allUser">
            <?php
            foreach ($postSay as $v) {
                echo "<div class='oneUser'>";
                echo "<div class='user'>";
                echo "<img src='/img/user.jpg' alt=''>";
                echo "<span>" . $v["write"] . "</span>";
                echo "</div>";
                echo "<div class='say'>" . $v["user_say"];
                echo "<span>" . $v["date"];
                if ($v["date"] === $postSay[0]["date"]) {
                    echo " 发帖";
                } else {
                    echo " 回复";
                };
                echo " - ". $v["floor"]."楼</span>";
                echo "</div>";
                echo "</div>";
            }
            ?>
        </div>

        <!-- 页码部分 -->
        <?php
        echo $pageNums;
        ?>

        <!-- 回复帖子 -->
        <?php
        $formId = "pageForm";
        $formAction = "./port/page.php?id=" . $_GET["id"];
        $formH2 = "回复帖子 ：";
        include("./views/form.php");
        ?>

    </article>

    <!-- 回帖 跳转到底部 -->
    <div id="pageBottom"></div>
</body>

</html>
<script src="./js/pageNum.js"></script>
