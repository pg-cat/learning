var express = require('express');
var router = express.Router();
var Ppt = require('../model/ppt');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  var postData = {
    id:'10',
    imgTitle:'第一张',
  }

  var one = {
    id:'10',
    imgTitle:'第十章',
    ewai:'10'
  }
  var two = {
    id:'11',
    imgTitle:'第11章',
    ewai:'11'
  }

  Ppt.findOne({id:postData.id},function(err,data){
    if(data){
      res.send('用户名已经被注册')
    }else{
      // new Ppt(postData).save(function(error,data){
      //   if(error) throw error;
      //   console.log(data);
      //   res.send(data);
      //
      // })
      //
      // Ppt.create(postData,function(error,data){
      //     if(error) throw error;
      //     console.log(data);
      //     res.send(data);
      // })
      //
      Ppt.insertMany([one,two],function(error,data){
            if(error) throw error;
            console.log(data);
            res.send(data);
      })
    }
  })
});

router.get('/find', function(req, res, next) {

    // Ppt.find({id:'1'},function(error,data){
    //
    //   if(error) throw error;
    //   console.log(data);
    //   res.send(data);
    //
    // })
    // 查询id大于1的数据
    // Ppt.find({id:{$gte:'2'}},function(error,data){
    //
    //   if(error) throw error;
    //   console.log(data);
    //   res.send(data);
    //
    // })
    //
    // 查询 imgTitle里面有四这个字的数据
    // Ppt.find({imgTitle:/四/},'imgTitle',function(error,data){
    //
    //   if(error) throw error;
    //   console.log(data);
    //   res.send(data);
    //
    // })
    //
    // 5d6e5207a0f60a05636113b7
    // findById  通过数据库自动添加的_id字段查询数据
    // Ppt.findById('5d6e5207a0f60a05636113b7',function(error,data){
    //     if(error) throw error;
    //     console.log(data);
    //     res.send(data);
    // })
    //
    // 查询id大于3的第一个   并且包含imgTitle字段的数据的第一个
    Ppt.findOne({id:{$gt:'6'}}).exec(function(error,data){
          if(error) throw error;
          console.log(data._id);
          res.send(data);
    })
    // Ppt.find({$where:"obj.id == obj.ewai"},function(error,data){
    //         if(error) throw error;
    //         console.log(data);
    //         res.send(data);
    // })
});

router.get('/update', function(req, res, next) {

    // 查询id大于4的数据，并且把imgTitle修改为id大于4
    // 修改update必须写回调，如果不写，默认执行一遍，但是没有任何事情发生
    // Ppt.update({
    //   id:null
    // },{
    //   imgTitle:'id为空'
    //   },{
    //     upsert:true,
    //     overwrite:true
    //   }).exec(function(error,data){
    //         if(error) console.log(error);
    //         console.log(data);
    //         res.send(data);
    // });
    //
    //
    // Ppt.updateMany({imgTitle: /id大于/ },{imgTitle:'修改后的title'},function(error,data){
    //     if(error) console.log(error);
    //     console.log(data);
    //     res.send(data);
    // })
    //
    // 修改id大于8的，在imgTitle后面添加一句id大于8
    // Ppt.find({id:{$gt:8}},function(error,data){
    //
    //   console.log(data);
    //   console.log('-------------------');
    //   data.forEach(function(item,index,array){
    //     item.imgTitle  = 'id大于8';
    //     item.save();
    //   })
    //
    // })
    //
    // Ppt.updateOne({id:0},{
    //   imgTitle:'这是0',
    //   ewai:'这是0',
    //   imgUrl:'这是0'
    // },function(error,data){
    //       if(error) console.log(error);
    //       console.log(data);
    //       res.send(data);
    // })
    //
    // Ppt.findOneAndUpdate({id:{$gt:5}},{imgUrl:'这些都是id大于5的数据'},function(error,data){
    //         if(error) console.log(error);
    //         console.log(data);
    //         res.send(data);
    // })
    //
    Ppt.findByIdAndUpdate({_id:'5d6e59b9186b0a06020a23cb'},{ewai:'这是通过_id查询修改的-----------'},function(error,data){
              if(error) console.log(error);
              console.log(data);
              res.send(data);
    });
});

router.get('/remove', function(req, res, next) {

  Ppt.remove({id:{$gt:5}},function(error,data){
    if(error) console.log(error);
    console.log(data);
    res.send(data);
  })

});

module.exports = router;
