chart.setOption({
  // ...
  series: {
    type: 'custom',
    renderItem: function () {
      // ...
      return {
        type: 'group',
        children: [{
          type: 'circle'
          // ...
        }, {
          type: 'circle',
          name: 'aaa',
          // 用户指定的信息，可以在 event handler 访问到。
          info: 12345,
          // ...
        }]
      };
    }
  }
});
chart.on('click', { element: 'aaa' }, function (params) {
  // 当 name 为 'aaa' 的图形元素被点击时，此回调被触发。
  console.log(params.info);
});