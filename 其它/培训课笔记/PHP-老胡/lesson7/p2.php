<?php

$arr = [
        'posts' => [],
        'user' => [],
];

file_put_contents('./db_new.txt', serialize($arr));
