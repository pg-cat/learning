<?php

$str = file_get_contents('./num.txt');
$arr = unserialize($str);

function findNum1($arr)
{
    $n = 0;
    foreach ($arr as $k => $v) {
        $n++;
        if ($k!==$v) {
            echo $v."\n".$n."\n";
            break;
        }
    }
}

//$arr = [0,1,2,4,5,6];

function findNum2($arr)
{
    $total = count($arr);

    $t = true;
    $find = 0;
    $start = 0;
    $end = $total;
    $mid = (int)ceil(($end - $start) / 2);
    $n=0;
    while ($t) {
        $n++;
        if ($arr[$mid] === $mid) {
            $start = $mid;
            $mid += (int)ceil(($end - $start) / 2); 
        } else {
            if ($arr[$mid-1] === ($mid-1)) {
                $find = $mid;
                break;
            } else {
                $end = $mid;
                $mid -= (int)ceil(($end - $start) / 2);
            }
        }
    }
    return $find."\n".$n."\n";
}

echo microtime() . "\n";
echo findNum1($arr) . "\n";
echo microtime() . "\n";
