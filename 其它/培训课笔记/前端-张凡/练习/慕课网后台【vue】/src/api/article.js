import axios from 'axios'

//// 课程信息
export function getData(url, num, pageLen, callback) {
  axios.get(url, {
    params: {
      num,
      pageLen
    }
  }).then(callback);
}

export function getLen(url, callback) {
  axios.get(url).then(callback)
}


//// 轮播图

// 获取当前页的数据
export function getImgData(url, num, pageLen, callback) {
  axios.get(url, {
    params: {
      num,
      pageLen
    }
  }).then(callback);
}

// 获取所有数据总和的长度
export function getImgLen(url, callback) {
  axios.get(url).then(callback)
}

// 添加一条数据
export function addImg(url, obj, callback) {
  axios.post(url, obj).then(callback)
}

// 删除一条数据
export function remImg(url,id,callback){
  axios.get(url,{
    params: {
      id
    }
  }).then(callback)
}

// 更新一条数据
export function updateImg(url, obj, callback) {
  axios.post(url, obj).then(callback)
}