<?php

$arr = [1,2,78,3,4,8,7,5,6,9,12,10,11];

$arr2 = [
    [
        "id" => 1,
        "like_num" => 5,
        "view_num" => 134,
        "date" => "2019-10-22 07:04:03",
        "status" => 0
    ],
    [
        "id" => 2,
        "like_num" => 35,
        "view_num" => 154,
        "date" => "2019-10-22 12:04:03",
        "status" => 0

    ],
    [
        "id" => 3,
        "like_num" => 35,
        "view_num" => 94,
        "date" => "2019-10-22 13:04:03",
        "status" => 1

    ],
    [
        "id" => 4,
        "like_num" => 85,
        "view_num" => 124,
        "date" => "2019-10-22 13:14:03",
        "status" => 0

    ],
    [
        "id" => 5,
        "like_num" => 45,
        "view_num" => 334,
        "date" => "2019-10-22 17:04:03",
        "status" => 0

    ],
];

function r()
{

}
$n = 0;
usort($arr2, function ($a, $b) {
    if (
        $a['like_num'] === $b['like_num'] &&
        $a['view_num'] === $b['view_num'] &&
        $a['date'] === $b['date'] &&
        $a['status'] > $b['status']
    ) {
        return 0;
    } else if (
        $a['status'] > $b['status'] ||
        ($a['status'] === $b['status'] && $a['like_num'] > $b['like_num']) ||
        ($a['like_num'] === $b['like_num'] && $a['view_num'] > $b['view_num']) ||
        ($a['like_num'] === $b['like_num'] && $a['view_num'] === $b['view_num'] && $a['date'] > $b['date'])
    ) {
        return -1;
    } else {
        return 1;
    }
});

var_dump($arr2);
var_dump($n);
