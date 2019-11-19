<?php

$arr = unserialize(file_get_contents('./db_new.txt'));

var_dump($arr['user']);
