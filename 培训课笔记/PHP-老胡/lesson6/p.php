<?php

$arr = unserialize(file_get_contents('./db.txt'));

$newArr = [
	"posts" => [],
	"user" => [],
];
foreach ($arr as $k => $v) {
	$v['ip'] = $v['ip']??'127.0.0.1';
	$v['content'] = $v['content']??'test';
	$v['id'] = $k;
	$v['date'] = date("Y-m-d H:i:s", time());
	$v['reply_num'] = 0;
	$v['like_num'] = 0;
	$v['view_num'] = 0;
	$v['title'] = $v['content']??'test';
	$newArr['posts'][$k] = $v;

	$newArr['user'][$v['ip']??'127.0.0.1'] = [
		'ip' => $v['ip']??'127.0.0.1',
		'like_list' => [],
	];
}

file_put_contents('./db_new.txt', serialize($newArr));


