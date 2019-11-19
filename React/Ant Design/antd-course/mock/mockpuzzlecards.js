const random_jokes = [
  {
    setup: '这是第一个问题？',
      punchline: '好像是的',
  },
  {
    setup: '这是第二个问题了吧',
    punchline: "是的",
  },
  {
    setup: '这是第三个问题？',
    punchline: '不，你不是！',
  },
  {
    setup: '感觉楼上有点傻',
    punchline: '是啊',
  },
  {
    setup: '我是三楼又回来了，我想说，在座各位都是垃圾~',
    punchline: '哈哈哈',
  }
]

let random_joke_call_count = 0;

export default {
  'get /dev/random_joke': function (req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000)
  }
}

// 模拟出错
// export default {
//   'get /dev/random_joke': function (req, res) {
//     res.status(500);
//     res.json({})
//   }
// }

// 简单数据模拟
// export default {
//   'get /dev/random_joke': {
//     setup: '一条假数据111111',
//     punchline: '233333333333',
//   }
// }