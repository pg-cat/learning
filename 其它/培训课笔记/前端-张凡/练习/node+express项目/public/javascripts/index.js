for (let i = 0; i < $('a').length; i++) {
  $('a').eq(i).click(function () {
    $('h2').html('你点击了：');
    $('h2').html($('h2').html() + $('p').eq(i).html());
  })
}