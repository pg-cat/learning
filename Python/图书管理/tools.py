import os

# 读取文本文件
## name 为文件名；bool 为读写操作，默认只读
def readTXT(name,bool=0):

    # 打开文件 users.txt
    path = os.path.dirname(__file__) + '/data/' + name
    usersTXT = open(path,'r')
    print(usersTXT.read())


