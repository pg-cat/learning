<?php

class DB
{

    // pdo 链接数据库
    protected $db = null;

    // 初始化
    public function __construct()
    {

        // 引用配置，并链接数据库
        $ini = parse_ini_file("../.env");
        $this->db = new PDO(
            $ini["DB_CONNECTION"] .
                ":host=" . $ini["DB_HOST"] .
                ";dbname=" . $ini["DB_DATABASE"] .
                ";port=" . $ini["DB_PORT"],
            $ini["DB_USERNAME"],
            $ini["DB_PASSWORD"]
        );
    }

    /**
     * 查询
     */

    // 参数说明：
    // $str 数据库操作命令字符串
    public function select($str)
    {
        $pdo = $this->db->query($str);
        if ($pdo) {
            $arr = $pdo->fetchAll();
        } else {
            $arr = [];
        }
        return $arr;
    }

    /**
     * 插入
     */

    // 参数说明：
    // $sql 需要插入的表
    // $arr 需要插入的数据
    public function insert($sql, $arr)
    {

        // 处理参数
        $sqlStr = $sql . " (";
        $arrStr = "";
        $arrEX = [];
        $lastOne = end($arr);
        foreach ($arr as $k => $v) {
            $arrEX[":" . $k] = $v;
            if ($lastOne === $v) {
                $sqlStr .= $k;
                $arrStr .= ":" . $k;
                continue;
            }
            $sqlStr .= $k . ", ";
            $arrStr .= ":" . $k . ", ";
        }

        // 插入数据
        $str = "INSERT INTO {$sqlStr}) VALUES ({$arrStr});";
        $pdo = $this->db->prepare($str);
        $pdoYes = $pdo->execute($arrEX);
        return $pdoYes;
    }

    /**
     * 更新
     */

    // 参数说明：
    // $sql 需要插入的表
    // $arr 需要插入的数据
    // $username 查询条件,暂为用户名
    public function update($sql, $arr, $username)
    {

        // 处理参数
        $sqlStr = "";
        $arrStr = "";
        $arrEX = [];
        $lastOne = end($arr);
        foreach ($arr as $k => $v) {
            $arrEX[":" . $k] = $v;
            if ($lastOne === $v) {
                $sqlStr .= $k;
                $arrStr .= ":" . $k;
                continue;
            }
            $sqlStr .= $k . ", ";
            $arrStr .= ":" . $k . ", ";
        }

        // 插入数据
        $str = "UPDATE $sql SET ({$sqlStr}) = ({$arrStr}) WHERE username = '{$username}';";
        $pdo = $this->db->prepare($str);
        $pdoYes = $pdo->execute($arrEX);
        return $pdoYes;
    }

    /**
     * 删除
     */
    public function delete($str)
    { }
}
