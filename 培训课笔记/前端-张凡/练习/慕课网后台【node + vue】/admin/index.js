const app = new Vue({
  el: "#app",
  data: {

    // 判断是否有数据显示，若无，则显示 文字提示
    tableListNull: true,

    // 渲染数据
    tableList: [],

    // 控制 弹出层 的显示/隐藏，默认隐藏
    isShow: 'display:none',
    // 弹出层 标题栏文本
    titleMod: '添加信息丨Info',
    // 控制弹出层 确定 按钮的显示/隐藏，默认显示 添加 按钮
    add: true,

    // 获取弹出层中填写的数据
    table: {
      id: 0,
      class: '',
      tag: '',
      url: '',
      title: '',
      war: '',
      level: '',
      num: 100,
      price: 0,
      oldPrice: 0
    },

    // 获取未修改前的数据
    oldData: {}
  },
  methods: {

    // 显示 弹出层
    showMod: function () {
      this.isShow = 'display:block';
      this.add = true;
    },

    // 隐藏 弹出层
    hidMod: function () {
      this.isShow = 'display:none';
    },

    // 获取当前版块全部数据
    getData: function () {
      this.$http.get('http://127.0.0.1:3000/getTableList')
        .then(function (res) {
          this.tableList = res.body;
          this.tableListNull = !Boolean(this.tableList);
        }, function () {
          console.log('请求失败处理');
        });
    },

    // 添加一条数据
    addData: function () {

      // 接收需要添加的数据为一个大对象
      let tableOne = {
        id: this.table.id,
        class: this.table.class,
        tag: this.table.tag,
        url: this.table.url,
        title: this.table.title,
        war: this.table.war,
        level: this.table.level,
        num: this.table.num,
        price: this.table.price,
        oldPrice: this.table.oldPrice,
      }

      // 请求接口进行添加操作
      this.$http.post('http://127.0.0.1:3000/addTable', tableOne, {
          emulateJSON: true
        })
        .then(function (res) {
          console.log(res);
          this.isShow = 'display:none';
          this.getData();
          this.table = {
            id: 0,
            class: '',
            tag: '',
            url: '',
            title: '',
            war: '',
            level: '',
            num: 100,
            price: 0,
            oldPrice: 0
          }
        }, function (res) {
          console.log(res);
        });

    },

    // 删除一条根据 ID 查询到的数据
    remData: function (id) {
      this.$http.get('http://127.0.0.1:3000/remTable', {
          params: {
            id: id
          }
        })
        .then(function (res) {
          this.getData();
        }, function () {
          console.log('请求失败处理');
        });
    },

    // 显示 弹出层 ，并查询此条数据加载到 弹出层
    findData: function (id) {

      // 显示弹出层
      this.isShow = 'display:block';

      // 显示触发 修改 请求的事件的按钮
      this.add = false;

      // 根据 ID 查询这条数据
      this.$http.get('http://127.0.0.1:3000/findTable', {
          params: {
            id: id
          }
        })
        .then(function (res) {

          // 暂存查找到的数据
          this.oldData = {
            id: res.body[0].id,
            class: res.body[0].class,
            tag: res.body[0].tag,
            url: res.body[0].url,
            title: res.body[0].title,
            war: res.body[0].war,
            level: res.body[0].level,
            num: res.body[0].num,
            price: res.body[0].price,
            oldPrice: res.body[0].oldPrice
          }

          // 把数据显示到弹出层
          this.table = {
            id: res.body[0].id,
            class: res.body[0].class,
            tag: res.body[0].tag,
            url: res.body[0].url,
            title: res.body[0].title,
            war: res.body[0].war,
            level: res.body[0].level,
            num: res.body[0].num,
            price: res.body[0].price,
            oldPrice: res.body[0].oldPrice
          }

        }, function () {
          console.log('请求失败处理');
        });

    },

    // 更新这条数据的内容
    updateData: function () {

      // 接收 弹出层 当前的数据
      let tableNew = {
        id: this.table.id,
        class: this.table.class,
        tag: this.table.tag,
        url: this.table.url,
        title: this.table.title,
        war: this.table.war,
        level: this.table.level,
        num: this.table.num,
        price: this.table.price,
        oldPrice: this.table.oldPrice
      }

      // 请求接口进行替换数据
      this.$http.post('http://127.0.0.1:3000/updateTable', {
          tableNew,
          oldData: this.oldData
        }, {
          emulateJSON: true
        })
        .then(function (res) {
          this.isShow = 'display:none';
          this.getData();
        }, function (res) {
          console.log(res);
        });

    }

  }
})