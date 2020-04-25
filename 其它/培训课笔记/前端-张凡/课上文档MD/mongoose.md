# mongoose的常用方法

## Schema 数据类型

  String 字符串

  Number 数字

  Date  日期

  Buffer  二进制

  Boolean  布尔类型

  Mixed  混合类型

  ObjectId  对象ID

  Array  数组

  var mySchema = new Schema({

    title:String,

    content:[{
      biaoti:String,
      neirong:String
    }],

    date:{
      type:Date,
      default:Date.now
    }

  })

## timestamps

  如果在Schema中设置该项为true，会自动添加创建时间和更新时间

## _id

  每个文档，默认添加一个_id，不重复的，可以当做唯一的项来进行使用

## 增

### save()

  new Ppt(postData).save(function(error,data){
    if(error) throw error;
    console.log(data);
    res.send(data);
  })

### create()

  Ppt.create(postData,function(error,data){
      if(error) throw error;
      console.log(data);
      res.send(data);
  })

### insertMany() 可以利用数组的方式添加多条

  以数组的形式，插入多个数据

  Ppt.insertMany([one,two],function(error,data){
        if(error) throw error;
        console.log(data);
        res.send(data);
  })

## 查

### find()   条件查询，查询条件写在小括号里面

  Ppt.find({id:'1'},function(error,data){
    if(error) throw error;
    console.log(data);
    res.send(data);
  })

  $lt    <   (less  than )

  $lte    <=  (less than  or equal to )

  $gt   >    （greater  than ）

  $gte   >=    (greater  than or   equal to

  查询imgTitle并且带有四这个字的数据

  Ppt.find({imgTitle:/四/},'imgTitle',function(error,data){

    if(error) throw error;
    console.log(data);
    res.send(data);

  })

  如果上面的代码不添加'imgTitle'，会返回整条数据

### findById()

  Ppt.findById('5d6e5207a0f60a05636113b7',function(error,data){
      if(error) throw error;
      console.log(data);
      res.send(data);
  })

### findOne()  查询满足条件的第一个

  Ppt.findOne({id:{$gt:'6'}},'ewai').exec(function(error,data){
        if(error) throw error;
        console.log(data);
        res.send(data);
  })

  以上查询的是id大于6的第一个是否有ewai属性，如果有，输出大于6的第一个的_id和该属性，如果没有只输出该属性

## 改

### update()

  三个参数，第一个参数是查询信息，第二个参数是要修改的信息，第三个参数是设置选项

  设置选项:

    safe 类型为布尔类型,安全模式

    upsert 布尔类型，默认为false ，如果将它改成true，没有查询到该结果的话，会自动插入该信息

    multi 布尔类型,如果查询到多个匹配项，会全部修改

    overwrite 完全覆盖这条数据

    // 查询id大于4的数据，并且把imgTitle修改为id大于4
    // 修改update必须写回调，如果不写，默认执行一遍，但是没有任何事情发生
    Ppt.update({id:{$gt:'4'}},{imgTitle:'id大于4'}).exec(function(error,data){
            if(error) throw error;
            console.log(data);
            res.send(data);
    });

备注：在Schema中添加timestamps:true可以自动添加更新时间

### updateMany()  更改多个数据

  Ppt.updateMany({imgTitle: /id大于/ },{imgTitle:'修改后的title'},function(error,data){
      if(error) console.log(error);
      console.log(data);
      res.send(data);
  })

### find()+save()  修改添加数据

  Ppt.find({id:{$gt:8}},function(error,data){

    console.log(data);
    console.log('-------------------');
    data.forEach(function(item,index,array){
      item.imgTitle  = 'id大于8';
      item.save();
    })

  })

### updateOne()

  更新找到的数据的第一条

  Ppt.updateOne({id:0},{
    imgTitle:'这是0',
    ewai:'这是0',
    imgUrl:'这是0'
  },function(error,data){
        if(error) console.log(error);
        console.log(data);
        res.send(data);
  })

### findOne()+save()

  用法和find()+save()一致，只修改碰到的第一个，一般没有应用场景

### findOneAndUpdate()

  该方法有第三个参数，是Option选项，大家可以查阅一下

  Ppt.findOneAndUpdate({id:{$gt:5}},{imgUrl:'这些都是id大于5的数据'},function(error,data){
    if(error) console.log(error);
    console.log(data);
    res.send(data);
  })

### findByIdAndUpdate()

  通过id查找内容并且修改

  Ppt.findByIdAndUpdate({_id:'5d6e59b9186b0a06020a23cb'},{ewai:'这是通过_id查询修改的-----------'},function(error,data){
            if(error) console.log(error);
            console.log(data);
            res.send(data);
  });

## 删

### remove()

### findOneAndRemove()

### findByIdAndRemove()





出现错误

'Cast to ObjectId failed for value "{ _id: \'ObjectId("5d6e59b9186b0a06020a23cb")\' }" at path "_id" for model "ppt"',
name: 'CastError',
stringValue: '"{ _id: \'ObjectId("5d6e59b9186b0a06020a23cb")\' }"',
kind: 'ObjectId',
value: { _id: 'ObjectId("5d6e59b9186b0a06020a23cb")' },
path: '_id',
reason: undefined,
model: Model { ppt } }

每个人写一个新的路由文件

里面的子路由控制接口数据

羽生:用户信息由以下内容组成

  用户名:username

  用户id:uuid

  密码:password

  年龄:age

  职业:work ,default:baomi

  性别:sex

  购买课程:classmate  数组，里面都是字符串

接口：增删改查齐全

船船:课程内容

  课程名称:classname

  课程id:classid

  课程标题:classtitle

  是否完结:classend  布尔类型

  课程包含的章节:chapter   数组[{章节id  chapterid,章节标题   chaptertitle}]

超超:章节内容

  章节名称:chaptertitle

  章节id:chapterid

  作者:auth

  创建时间:createtime

  章节内容:chaptercontent

  购买人数:chapternumber

  所属课程：课程id

弘毅:编辑推荐

  首页图片:pptimg  

  首页标题:title   

  对应课程:pptclass   对应的是课程的id

  类型：数组[hot,new,good]

顺哥:作者信息

  作者id:authid

  用户id:uuid

  作者作品:authclass 数组对应课程id

  作者粉丝数量:authreader
