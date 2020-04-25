var express = require('express');
var router = express.Router();
var request = require('request');

var str = null;
var reqData = '';
// 把中文转化成unicode
// function tounicode(data)
// {
//    var str ='';
//    for(var i=0;i<data.length;i++)
//    {
//       str+="\\u"+parseInt(data[i].charCodeAt(0),10).toString(16);
//    }
//    return str;
// }
/* GET home page. */
// 如果是Php或者python，他会在发送请求的时候自动把中文转化
router.get('/', function (req, res, next) {
  console.log(req.query);

  reqData = encodeURI(req.query.cityname);

  request({
    url: 'http://v.juhe.cn/weather/index?cityname=' + reqData + '&key=f3d74c635ec20a44d66f265c251b3942',
    headers: {
      "content-type": "application/json",
    }
  }, function (error, ress, body) {
    console.log(error);
    console.log(ress);
    str = ress;
  })
  res.send(str);
});

router.get('/go', function (req, res) {
  console.log(req.query);

  res.send({
    name: '你走了...'
  })

  // let datt = null;
  // console.log(datt);

  // fetch('https://cnodejs.org/api/v1/topics', {
  //     page: 2,
  //     tab: 'good',
  //     limit: 10
  //   })
  //   .then(
  //     // res => res.json()
  //     res=>res.text()
  //   )
  //   .then(
  //     data => console.log(data, '+data')
  //   )
  //   .catch(
  //     err => console.log(err, '+err')
  //   )
})

module.exports = router;