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
    <link rel="stylesheet" href="/css/details.css">
</head>

<body>

    <!-- 回到顶部 -->
    <div id="toTOP">
        <a href="#toTOP">回到顶部</a>
    </div>

    <?php include("./views/nav.php"); ?>

    <article>
        <h2 class="h2">帖子主题：<span><?php echo $post["title"] ?></span></h2>
        <div class="allUser">
            <?php
            // 发帖
            echo "<div class='oneUser'>";
            echo "<div class='user'>";
            echo "<img src='/img/user.jpg' alt=''>";
            echo "<span>{$post['user_id']}</span>";
            echo "</div>";
            echo "<div class='say'>" . $post["say"];
            echo "<span>{$post['date']} 发帖 - 楼主</span>";
            echo "</div>";
            echo "</div>";

            // 回复
            foreach ($postSay as $v) {
                echo "<div class='oneUser'>";
                echo "<div class='user'>";
                echo "<img src='/img/user.jpg' alt=''>";
                echo "<span>{$v['user_id']}</span>";
                echo "</div>";
                echo "<div class='say'>" . $v["user_say"];
                echo "<span>{$v['date']} 回复 - {$v['floor']} 楼</span>";
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
        $formAction = "./{$post['id']}";
        $formH2 = "回复帖子 ：";
        include("./views/form.php");
        ?>

    </article>

    <!-- 回帖 跳转到底部 -->
    <div id="pageBottom"></div>
</body>

</html>
<script src="/js/pageNum.js"></script>