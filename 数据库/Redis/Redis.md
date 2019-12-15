# Redis

Redis 是完全开源免费的，遵守 BSD 协议，是一个高性能的 `key-value` 数据库

## 简介

Redis 与其他 `key - value` 缓存产品有以下三个特点：

- Redis 支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用

- Redis 不仅仅支持简单的 `key-value` 类型的数据，同时还提供 list ，set ，zset ，hash 等数据结构的存储

- Redis 支持数据的备份，即 `master-slave` 模式的数据备份

### 优势

- 性能极高

  Redis 能读的速度是 `110000次/s` ，写的速度是 `81000次/s`

- 丰富的数据类型

  Redis 支持二进制案例的 Strings ，Lists ，Hashes ，Sets 及 Ordered Sets 数据类型操作

- 原子

  Redis 的所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行

  - 单个操作是原子性的

  - 多个操作也支持事务，即原子性，通过 MULTI 和 EXEC 指令包起来

- 丰富的特性

  – Redis 还支持 `publish` / `subscribe` ，**`通知`** ，**`key 过期`** 等等特性

### 与其他 key-value 存储

- Redis 有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径

  Redis 的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象

- Redis 运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，因为数据量不能大于硬件内存

  在内存数据库方面的另一个优点是，相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样 Redis 可以做很多内部复杂性很强的事情

  同时，在磁盘格式方面他们是紧凑的以追加的方式产生的，因为他们并不需要进行随机访问

## 安装

### Window 下安装

> 下载地址：https://github.com/MSOpenTech/redis/releases

Redis 支持 32 位和 64 位

- 这个需要根据你系统平台的实际情况选择

- 这里我们下载 `Redis-x64-xxx.zip` 压缩包到 C 盘，解压后，将文件夹重新命名为 `redis`

![图片](https://www.runoob.com/wp-content/uploads/2014/11/3B8D633F-14CE-42E3-B174-FCCD48B11FF3.jpg)

- 打开文件夹，内容如下：

![图片](https://www.runoob.com/wp-content/uploads/2014/11/C2CEBAA0-30B9-4340-8D23-78F6FEB8CBE2.png)

- 打开一个 cmd 窗口 使用 cd 命令切换目录到 `C:\redis` 运行：

```
redis-server.exe redis.windows.conf
```

- 如果想方便的话，可以把 redis 的路径加到系统的环境变量里，这样就省得再输路径了，后面的那个 `redis.windows.conf` 可以省略，如果省略，会启用默认的

  - 输入之后，会显示如下界面：

![图片](https://www.runoob.com/wp-content/uploads/2014/11/redis-install1.png)

- 这时候另启一个 cmd 窗口，原来的不要关闭，不然就无法访问服务端了

  - 切换到 redis 目录下运行：

```
redis-cli.exe -h 127.0.0.1 -p 6379
```

- 设置键值对：

```
set myKey abc
```

- 取出键值对：

```
get myKey
```

![图片](https://www.runoob.com/wp-content/uploads/2014/11/redis-install2.jpg)

### Linux 下安装

> 下载地址：http://redis.io/download，下载最新稳定版本

本教程使用的最新文档版本为 `2.8.17` ，下载并安装：

```
$ wget http://download.redis.io/releases/redis-2.8.17.tar.gz
$ tar xzf redis-2.8.17.tar.gz
$ cd redis-2.8.17
$ make
```

- make 完后 `redis-2.8.17` 目录下会出现编译后的 redis 服务程序 `redis-server` ，还有用于测试的客户端程序 `redis-cli` ，两个程序位于安装目录 `src` 目录下

- 下面启动 redis 服务：

```
$ cd src
$ ./redis-server
```

> 注意这种方式启动 redis 使用的是默认配置

- 也可以通过启动参数告诉 redis 使用指定配置文件使用下面命令启动：

```
$ cd src
$ ./redis-server ../redis.conf
```

> redis.conf 是一个默认的配置文件
>> 我们可以根据需要使用自己的配置文件

- 启动 redis 服务进程后，就可以使用测试客户端程序 `redis-cli` 和 redis 服务交互了，比如：

```
$ cd src
$ ./redis-cli
redis> set foo bar
OK
redis> get foo
"bar"
```

### Ubuntu 下安装

在 Ubuntu 系统安装 Redis 可以使用以下命令：

```
$sudo apt-get update
$sudo apt-get install redis-server
```

- 启动 Redis

```
$ redis-server
```

- 查看 redis 是否启动

```
$ redis-cli
```

> 以上命令将打开以下终端：
>> `redis 127.0.0.1:6379>`
> - `127.0.0.1` 是本机 `IP` ，`6379` 是 redis 服务端口

- 现在我们输入 `PING` 命令

```
redis 127.0.0.1:6379> ping
PONG
```

- 以上说明我们已经成功安装了redis

## 配置

Redis 的配置文件位于 Redis 安装目录下，文件名为 `redis.conf`

- Windows 系统下名为 `redis.windows.conf`

- 可以通过 `CONFIG` 命令查看或设置配置项，其语法：

```
redis 127.0.0.1:6379> CONFIG GET CONFIG_SETTING_NAME
```

- 实例：

```
redis 127.0.0.1:6379> CONFIG GET loglevel

1) "loglevel"
2) "notice"
```

- 使用 `*` 号获取所有配置项：

```
redis 127.0.0.1:6379> CONFIG GET *

  1) "dbfilename"
  2) "dump.rdb"
  3) "requirepass"
  4) ""
  5) "masterauth"
  6) ""
  7) "unixsocket"
  8) ""
  9) "logfile"
 10) ""
 11) "pidfile"
 12) "/var/run/redis.pid"
 13) "maxmemory"
 14) "0"
 15) "maxmemory-samples"
 16) "3"
 17) "timeout"
 18) "0"
 19) "tcp-keepalive"
 20) "0"
 21) "auto-aof-rewrite-percentage"
 22) "100"
 23) "auto-aof-rewrite-min-size"
 24) "67108864"
 25) "hash-max-ziplist-entries"
 26) "512"
 27) "hash-max-ziplist-value"
 28) "64"
 29) "list-max-ziplist-entries"
 30) "512"
 31) "list-max-ziplist-value"
 32) "64"
 33) "set-max-intset-entries"
 34) "512"
 35) "zset-max-ziplist-entries"
 36) "128"
 37) "zset-max-ziplist-value"
 38) "64"
 39) "hll-sparse-max-bytes"
 40) "3000"
 41) "lua-time-limit"
 42) "5000"
 43) "slowlog-log-slower-than"
 44) "10000"
 45) "latency-monitor-threshold"
 46) "0"
 47) "slowlog-max-len"
 48) "128"
 49) "port"
 50) "6379"
 51) "tcp-backlog"
 52) "511"
 53) "databases"
 54) "16"
 55) "repl-ping-slave-period"
 56) "10"
 57) "repl-timeout"
 58) "60"
 59) "repl-backlog-size"
 60) "1048576"
 61) "repl-backlog-ttl"
 62) "3600"
 63) "maxclients"
 64) "4064"
 65) "watchdog-period"
 66) "0"
 67) "slave-priority"
 68) "100"
 69) "min-slaves-to-write"
 70) "0"
 71) "min-slaves-max-lag"
 72) "10"
 73) "hz"
 74) "10"
 75) "no-appendfsync-on-rewrite"
 76) "no"
 77) "slave-serve-stale-data"
 78) "yes"
 79) "slave-read-only"
 80) "yes"
 81) "stop-writes-on-bgsave-error"
 82) "yes"
 83) "daemonize"
 84) "no"
 85) "rdbcompression"
 86) "yes"
 87) "rdbchecksum"
 88) "yes"
 89) "activerehashing"
 90) "yes"
 91) "repl-disable-tcp-nodelay"
 92) "no"
 93) "aof-rewrite-incremental-fsync"
 94) "yes"
 95) "appendonly"
 96) "no"
 97) "dir"
 98) "/home/deepak/Downloads/redis-2.8.13/src"
 99) "maxmemory-policy"
100) "volatile-lru"
101) "appendfsync"
102) "everysec"
103) "save"
104) "3600 1 300 100 60 10000"
105) "loglevel"
106) "notice"
107) "client-output-buffer-limit"
108) "normal 0 0 0 slave 268435456 67108864 60 pubsub 33554432 8388608 60"
109) "unixsocketperm"
110) "0"
111) "slaveof"
112) ""
113) "notify-keyspace-events"
114) ""
115) "bind"
116) ""
```

### 编辑配置

可以通过修改 `redis.conf` 文件或使用 `CONFIG set` 命令来修改配置

- 基本语法：

```
redis 127.0.0.1:6379> CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
```

- 实例

```
redis 127.0.0.1:6379> CONFIG SET loglevel "notice"
OK
redis 127.0.0.1:6379> CONFIG GET loglevel

1) "loglevel"
2) "notice"
```

### 参数说明

[【 `redis.conf` 配置项说明】](https://www.runoob.com/redis/redis-conf.html)

## 数据类型








































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































