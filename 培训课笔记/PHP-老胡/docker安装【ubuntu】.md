为什么要使用docker
    docker是一种虚拟化技术，它在一个基础的linux内核的上，使用软件级别的隔离技术，虚拟化出独立的linux环境，
    这个linux环境相对于宿主机是独立的。
    这带来很多便利：我们不用把各种运行环境都安装在宿主机里面，PHP，JS，Java等都可以安装在不同的docker容器里面，
    还可以安装不同的软件版本。例如多个PHP容器分别对应多个版本等。
    而且容器的销毁和新建都十分方便，软件安装有问题删除容器重来，不会对宿主机有任何影响。
    整个开发环境 和宿主机的隔离，不会出现弄开发环境把宿主机系统弄坏了的情况。

预备工作：
    先配置ubuntu的源(以下是针对ubutnu18.04配置)
    https://opsx.alibaba.com/guide?lang=zh-CN&document=69a2341e-801e-11e8-8b5a-00163e04cdbb

在ubuntu下安装docker：

删除旧的docker版本（不管有没有，都运行一下这个命令）
$ sudo apt-get remove docker docker-engine docker.io containerd runc

安装 docker 引擎 - 社区版

    第一种方式：从软件源里面安装
        设置源：
        1，更新系统apt包索引
            $ sudo apt-get update
        2，安装以下包做准备
            $ sudo apt-get install \
                apt-transport-https \
                ca-certificates \
                curl \
                gnupg-agent \
                software-properties-common
        3，添加docker官方的GPG秘钥
            $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

            或者以下命令：（换成阿里源的秘钥，推荐，和下面第4步阿里源一起使用，推荐）
            $ curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -

            验证秘钥
            $ sudo apt-key fingerprint 0EBFCD88

        4，添加源(选稳定的)
            $ sudo add-apt-repository \
                "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
                $(lsb_release -cs) \
                stable"

            或者以下命令：(这个更换了源，换成阿里的了，推荐)
            $ sudo add-apt-repository \
                "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
                $(lsb_release -cs) \
                stable"

        安装：
        1，更新系统apt包索引
            $ sudo apt-get update
        2，安装最新版本 docker 引擎
            $ sudo apt-get install docker-ce docker-ce-cli containerd.io
