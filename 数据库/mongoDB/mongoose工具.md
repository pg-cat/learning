# mongoose 的常用方法

## Schema 数据类型

- String 字符串

- Number 数字

- Date 日期

- Buffer 二进制

- Boolean 布尔类型

- Mixed 混合类型

- ObjectId 对象 ID

- Array 数组

```js
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
```

## timestamps

如果在 Schema 中设置该项为 true ，会自动添加创建时间和更新时间

## _id

每个文档，默认添加一个 _id ，不重复的，可以当做唯一的项来进行使用

## 增

### save()

```js
new Ppt(postData).save(function(error,data){
  if(error) throw error;
  console.log(data);
  res.send(data);
})
```

### create()

```js
Ppt.create(postData,function(error,data){
  if(error) throw error;
  console.log(data);
  res.send(data);
})
```

### insertMany() 可以利用数组的方式添加多条

> 以数组的形式，插入多个数据

```js
Ppt.insertMany([one,two],function(error,data){
  if(error) throw error;
  console.log(data);
  res.send(data);
})
```

## 查

### find() 条件查询，查询条件写在小括号里面

```js
  Ppt.find({id:'1'},function(error,data){
    if(error) throw error;
    console.log(data);
    res.send(data);
  })
```

#### 查询条件

$lt < (less than)

$lte <= (less than or equal to)

$gt > (greater than)

$gte >= (greater than or equal to)

例：查询 imgTitle 并且带有四这个字的数据

```js
Ppt.find({imgTitle:/四/},'imgTitle',function(error,data){

  if(error) throw error;
  console.log(data);
  res.send(data);

})
```

> 如果上面的代码不添加 `'imgTitle'` ，会返回整条数据

### findById()

```js
Ppt.findById('5d6e5207a0f60a05636113b7',function(error,data){
  if(error) throw error;
  console.log(data);
  res.send(data);
})
```

### findOne()  查询满足条件的第一个

```js
Ppt.findOne({id:{$gt:'6'}},'ewai').exec(function(error,data){
  if(error) throw error;
  console.log(data);
  res.send(data);
})
```

> 以上查询的是 id 大于 6 的第一个是否有 ewai 属性，如果有，输出大于 6 的第一个的 _id 和该属性，如果没有只输出该属性

## 改

### update()

> 修改 update 必须写回调，如果不写，默认执行一遍，但是没有任何事情发生

- 第一个参数是查询信息

- 第二个参数是要修改的信息

- 第三个参数是设置选项

  - safe
  
    类型为布尔类型,安全模式

  - upsert
  
    布尔类型，默认为false ，如果将它改成true，没有查询到该结果的话，会自动插入该信息

  - multi
  
    布尔类型,如果查询到多个匹配项，会全部修改

  - overwrite
  
    完全覆盖这条数据

- 第四个参数为回调函数

例：查询 id 大于 4 的数据，并且把 imgTitle 修改为 id 大于 4

```js
Ppt.update({id:{$gt:'4'}},{imgTitle:'id大于4'}).exec(function(error,data){
  if(error) throw error;
  console.log(data);
  res.send(data);
});
```

> 备注：在 Schema 的第二个参数对象中添加 timestamps:true 可以自动添加更新时间


### updateMany() 更改多个数据

```js
Ppt.updateMany({imgTitle: /id大于/ },{imgTitle:'修改后的title'},function(error,data){
  if(error) console.log(error);
  console.log(data);
  res.send(data);
})
```

### find() + save() 修改添加数据

```js
Ppt.find({id:{$gt:8}},function(error,data){

  console.log(data);
  console.log('-------------------');
  data.forEach(function(item,index,array){
    item.imgTitle  = 'id大于8';
    item.save();
  })

})
```

### updateOne() 更新找到的数据的第一条

```js
Ppt.updateOne({id:0},{
  imgTitle:'这是0',
  ewai:'这是0',
  imgUrl:'这是0'
},function(error,data){
  if(error) console.log(error);
  console.log(data);
  res.send(data);
})
```

### findOne()+save()

用法和 `find() + save()` 一致，只修改碰到的第一个，一般没有应用场景

### findOneAndUpdate()

该方法有第三个参数，是 `Option` 选项，大家可以查阅一下

```js
Ppt.findOneAndUpdate({id:{$gt:5}},{imgUrl:'这些都是id大于5的数据'},function(error,data){
  if(error) console.log(error);
  console.log(data);
  res.send(data);
})
```

### findByIdAndUpdate() 通过id查找内容并且修改

```js
Ppt.findByIdAndUpdate({_id:'5d6e59b9186b0a06020a23cb'},{ewai:'这是通过_id查询修改的-----------'},function(error,data){
  if(error) console.log(error);
  console.log(data);
  res.send(data);
});
```

## 删

### remove()

### findOneAndRemove()

### findByIdAndRemove()

## 出现错误

```
'Cast to ObjectId failed for value "{ _id: \'ObjectId("5d6e59b9186b0a06020a23cb")\' }" at path "_id" for model "ppt"',
name: 'CastError',
stringValue: '"{ _id: \'ObjectId("5d6e59b9186b0a06020a23cb")\' }"',
kind: 'ObjectId',
value: { _id: 'ObjectId("5d6e59b9186b0a06020a23cb")' },
path: '_id',
reason: undefined,
model: Model { ppt } }
```
