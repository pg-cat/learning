<?php
$num = 0;
for ($i = 0; $i < 1000; $i++) {
    for ($ii = 0; $ii < 1000; $ii++) {
        for ($iii = 0; $iii < 1000; $iii++) {
            $num += $i;
        }
    }
}

echo $num;
