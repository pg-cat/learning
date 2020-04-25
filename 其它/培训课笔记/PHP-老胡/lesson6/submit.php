<?php
$str = file_get_contents('./db_new.txt');
$arr = unserialize($str);
if ($arr === false) $arr = [];

if ($_POST !== [] && $_POST['content'] !== "") {
    $item = [
        'id' => count($arr),
        'ip' => $_SERVER['REMOTE_ADDR'],
        'title' => $_POST['title'],
        'content' => $_POST['content'],
        'date' => date('Y-m-d H:i:s', time()),
        'reply_num' => 0,
        'like_num' => 0,
        'view_num' => 0,
        // 回复数量reply_num
        // 点赞数量like_num
        // 浏览量view_num
    ];

    $arr['posts'][] = $item;
    file_put_contents('./db_new.txt', serialize($arr));

    //var_dump($arr);
    header("Location:index.php");
}
/*
[
    'id' => 1,
    'ip' => '121233',
]
*/