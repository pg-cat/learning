#注册阿里云code帐号

  注册好之后，把你的个人帐号给我

#注册共用密钥

  需要我把你添加到项目组之后，进行

  在控制台执行:ssh-keygen -t rsa -C ""

  第一次需要确定密钥的路径，直接点击回车

  第二次和第三次需要你输入密码

  控制台输入以下指令，写入密钥对：cat ~/.ssh/id_rsa.pub

  Windows:

  clip < ~/.ssh/id_rsa.pub

  Mac:

  pbcopy < ~/.ssh/id_rsa.pub

  GNU/Linux (requires xclip):

  xclip -sel clip < ~/.ssh/id_rsa.pub

  执行完毕上面的操作之后，密钥已经在你的剪贴板里

  在ssh密钥页面，添加密钥，把东西靠近去就行了

#提交/合并线上代码

##合并线上项目

  比对你的项目地址的源头是不是你目前的项目地址

  git remote -v  查看当前项目地址

  如果不一致，需要修改你的项目地址

  git remote set-url origin git@code.aliyun.com:15201341330/wuHanProTe.git(新的项目地址)

  如果地址一致或者修改完毕，那么更新代码

  git branch   刷新所有代码列表

  git fetch    从线上代码库更新代码

##如果自己要写代码，那么注意需要切换分支

  git checkout -b zhangshun

  git add .

  git commit -m '提交描述'

  git push -u origin 分支名称
