<?php

class CumstomException extends Exception
{

}

try {
    $dbh = new PDO('pgsql:host=192.168.31.112;dbname=test;port=8084', 'hubiteng', '123456');

    /*
    // 增删改查
    // 增删改
    $name = "hubiteng";
    $birthDay = "1987-02-02 23:23:23";
    $sql = "INSERT INTO users VALUES (nextval('users_id_seq'::regclass), '{$name}', '{$birthDay}',  '2019-10-02 23:23:23');";
    echo $sql."\n";
    $count = $dbh->exec($sql);
    echo "插入了{$count}行\n";

    $sql2 = "UPDATE users SET name = 'hehe' WHERE id = 1111111;";
    $count = $dbh->exec($sql2);
    echo "更新了{$count}行\n";

    $sql3 = "DELETE FROM users WHERE id = 12;";
    $count = $dbh->exec($sql3);
    echo "删除了{$count}行\n";
     */


    // 查询
    // query  直接foreach
    /*
    $sql = "SELECT * FROM users;";
    $stm = $dbh->query($sql);
    foreach ($stm as $v) {
        var_dump($v);
    }
     */

    /*
    // query 使用fetchAll()  或者 fetch()
    $sql = "SELECT * FROM users ORDER BY id DESC;";
    $stm = $dbh->query($sql);
    //$item = $stm->fetch();
    //$item2 = $stm->fetch();
    //var_dump($item);
    //var_dump($item2);
    $all = $stm->fetchAll();
    echo count($all)."\n";
    var_dump($all);
     */

    /*
    // prepare 方法
    $sql = "SELECT * FROM users WHERE id = :abc AND name = :def";
    $stm = $dbh->prepare($sql);
    $stm->execute([':abc' => 13, ':def' => 'hubiteng']);
    $all = $stm->fetchAll();
    var_dump($all);
     */

    // prepare 增删改
    $sql = "INSERT INTO users VALUES (nextval('users_id_seq'::regclass), :name, :birthday,  '2019-10-02 23:23:23');";
    $stm = $dbh->prepare($sql);
    $t = $stm->execute([':name' => "hubiteng", ':birthday' => "1987-02-02 23:23:23"]);
    var_dump($t);

    echo "链接成功";
} catch (PDOException $e) {
    //echo $e->getMessage()."\n";
    echo "链接数据库异常";
}
