var ajax = {
  getData:function(url,data,callback){
    // 发起网络请求
    // 'http://192.168.31.132:8080/getMsg?username=zhangfan&password=123'
    url += '?';
    for(var index in data ){
      url += index + '=' + data[index] + '&'
    }
    fetch(url,{
      method:'get'
    }).then(
      (res) => res.json()
    ).then(
      callback(res)
    ).catch(
      (error)=>{
        console.log(error)
      }
    );
  },

  postData:function(url,data,callback){

    // 声明一个formdata对象
    //
    let formData = new FormData();

    for(var index in data ){
      formData.append(index,data[index]);
    }

    fetch(url,{
      method:'post',
      headers:{
        "Content-Type": "application/json",
      },
      body:formData
    }).then(
      res => res.json()
    ).then(
      callback(res)
    ).catch(
      (error)=>{
        console.log(error)
      }
    );
  }
}

export {
  ajax
}
