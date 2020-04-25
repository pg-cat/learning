<?php

class DB
{
    // pdo 链接的数据源
    private $dsn = null;

    // 用户
    private $user = null;

    // 密码
    private $password = null;

    // 链接
    protected $dbh = null;

    public function __construct()
    {
        $dbConfig = parse_ini_file('../.env');
        $this->dsn = $dbConfig['DB_CONNECTION'] . ":" . "host=" . $dbConfig['DB_HOST'] . ";port=" . $dbConfig['DB_PORT'] . ";dbname=" . $dbConfig['DB_DATABASE'];
        $this->user = $dbConfig['DB_USERNAME'];
        $this->password = $dbConfig['DB_PASSWORD'];

        $this->dbh = new PDO($this->dsn, $this->user, $this->password);
    }

    /**
     * 查询方法
     */
    public function select($sql)
    {
        $stm = $this->dbh->query($sql);
        return $stm->fetchAll();
    }

    /**
     * 插入
     */
    public function insert($sql)
    {

    }

    /**
     * 更新
     */
    public function update($sql)
    {

    }

    /**
     * 删除
     */
    public function delete($sql)
    {

    }
}