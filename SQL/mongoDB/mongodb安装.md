以下内容整理自[【 ubuntu 环境下使用 apt-get 命令安装 MongoDB 】](https://jingyan.baidu.com/article/ae97a646030e07bbfd461d3b.html)


---

MongoDB 是一个基于分布式文件存储的数据库，旨在为 WEB 应用提供可扩展的高性能数据存储解决方案

# linux 下安装 mongodb

以下命令，使用 `apt` 或 `apt-get` 皆可，官方推荐 ubuntu 16 版本后使用 `apt`

## 在终端输入命令

```
sudo apt-get install mongodb
```

## 更新软件库

如果出现找不到的问题，请输入以下命令更新软件库

```
sudo apt-get update
```

## 启动 MongoDB 服务的命令

```
sudo service mongodb start
```

## 关闭 MongoDB 服务的命令

```
sudo service mongodb stop
```

## 查看 MongoDB 的安装位置

```
locate mongo
```

## 查看配置文件信息

默认 mongodb 配置文件存放在 /etc/mongodb.conf

## 卸载 MOngoDB 命令

```
sudo apt-get --purge remove mongodb mongodb-clients mongodb-server
```