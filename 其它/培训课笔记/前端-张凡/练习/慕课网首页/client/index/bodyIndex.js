// header 搜索框 input 获得焦点时
// 添加 css 样式 searchRed
$('.search input').focus(
  function () {
    $('.search').addClass('searchRed');
  }
);

// header 搜索框 input 失去焦点时
// 删除 css 样式 searchRed
$('.search input').blur(
  function () {
    $('.search').removeClass('searchRed');
  }
);


// bodyIndex 顶部幻灯片
let timeBanner = null;
let timeBannerOut = null;
let nBanner = 0;
let bannersLen = $('.banner .swiper .imgs a').length;

// 保持第一张图片在开始时显示
$('.banner .swiper .imgs a').eq(0).css({
  'visibility': 'visible',
  'opacity': 1,
  'z-index': 3
});

// 开始幻灯片
swiperBanner();

// 幻灯片的事件函数
function swiperBanner() {
  timeBanner = setInterval(function () {
    nBanner++;

    if (nBanner > bannersLen) {
      nBanner = 1;
    }

    // 顶部高斯模糊效果
    $('.opac').css('background', 'url("/img/banner0' + nBanner + '.jpg")');

    // 隐藏图片及小圆点选中样式
    for (i = 0; i < bannersLen; i++) {
      $('.banner .swiper .imgs a').eq(i).css({
        'visibility': 'hidden',
        'z-index': 0
      });
      $('.banner .swiper ul li').eq(i).removeClass('active');
    }

    // 切换图片
    $('.banner .swiper .imgs a').eq((nBanner - 1) % 6).css({
      'visibility': 'visible',
      'opacity': 1,
      'z-index': 3
    });
    $('.banner .swiper .imgs a').eq(nBanner % 6).css({
      'visibility': 'visible',
      'opacity': 1,
      'z-index': 2
    });

    // // 图片透明度降低消失
    timeBannerOut = setTimeout(function () {
      $('.banner .swiper .imgs a').eq((nBanner - 1) % 6).css('opacity', 0);
      clearTimeout(timeBannerOut);
      timeBannerOut = null;
    }, 3600)

    // 添加 底部小圆点 的 css 样式
    $('.banner .swiper ul li').eq(nBanner - 1).addClass('active');

    console.log(nBanner);
  }, 4000)
}

// 点击幻灯片左侧 上一张 按钮
$('.banner .swiper .left').click(function () {

  // 停止定时器和计时器
  clearInterval(timeBanner);
  timeBanner = null;
  clearTimeout(timeBannerOut);
  timeBannerOut = null;

  // 改变显示的图片
  nBanner--;
  if (nBanner < 1) {
    nBanner = 6
  }

  // 顶部高斯模糊效果
  $('.opac').css('background', 'url("/img/banner0' + nBanner + '.jpg")');

  // 隐藏图片及小圆点选中样式
  for (i = 0; i < bannersLen; i++) {
    $('.banner .swiper .imgs a').eq(i).css({
      'visibility': 'hidden',
      'z-index': 0
    });
    $('.banner .swiper ul li').eq(i).removeClass('active');
  }
  $('.banner .swiper .imgs a').eq(nBanner % 6).css({
    'visibility': 'visible',
    'opacity': 1,
    'z-index': 3
  });
  $('.banner .swiper .imgs a').eq((nBanner - 1) % 6).css({
    'visibility': 'visible',
    'opacity': 1,
    'z-index': 2
  });

  // 图片透明度降低并消失
  $('.banner .swiper .imgs a').eq(nBanner % 6).css('opacity', 0);

  // 添加 底部小圆点 的 css 样式
  $('.banner .swiper ul li').eq(nBanner - 1).addClass('active');

  console.log(nBanner);
})

// 鼠标进入 上一张 按钮时 nBanner--
$('.banner .swiper .left').mouseover(function () {
  nBanner--;
  console.log(nBanner);
})

// 鼠标离开 上一张 按钮时 nBanner++
$('.banner .swiper .left').mouseleave(function () {
  nBanner++;
  console.log(nBanner);
})

// 点击幻灯片左侧 下一张 按钮
$('.banner .swiper .right').click(function () {

  // 停止定时器和计时器
  clearInterval(timeBanner);
  timeBanner = null;
  clearTimeout(timeBannerOut);
  timeBannerOut = null;

  // 改变显示的图片
  nBanner++;
  if (nBanner > bannersLen) {
    nBanner = 1
  }

  // 顶部高斯模糊效果
  $('.opac').css('background', 'url("/img/banner0' + nBanner + '.jpg")');

  // 隐藏图片及小圆点选中样式
  for (i = 0; i < bannersLen; i++) {
    $('.banner .swiper .imgs a').eq(i).css({
      'visibility': 'hidden',
      'z-index': 0
    });
    $('.banner .swiper ul li').eq(i).removeClass('active');
  }
  $('.banner .swiper .imgs a').eq((nBanner - 1) % 6).css({
    'visibility': 'visible',
    'opacity': 1,
    'z-index': 3
  });
  $('.banner .swiper .imgs a').eq(nBanner % 6).css({
    'visibility': 'visible',
    'opacity': 1,
    'z-index': 2
  });

  // 图片透明度降低并消失
  $('.banner .swiper .imgs a').eq((nBanner - 1) % 6).css('opacity', 0);

  // 添加 底部小圆点 的 css 样式
  $('.banner .swiper ul li').eq(nBanner - 1).addClass('active');

  console.log(nBanner);
})

// 鼠标进入 下一张 按钮时 nBanner++
$('.banner .swiper .right').mouseover(function () {
  nBanner++;
  console.log(nBanner);
})

// 鼠标离开 下一张 按钮时 nBanner--
$('.banner .swiper .right').mouseleave(function () {
  nBanner--;
  console.log(nBanner);
})

// 点击 底部小圆点 时
let liLen = 0;
for (i = 0; i < bannersLen; i++) {
  $('.banner .swiper ul li').eq(i).attr('data-index', '' + i);
  $('.banner .swiper ul li').eq(i).click(function (e) {
    nBanner = Number(e.target.getAttribute('data-index')) + 1;
    lis();
  })
}

// 点击 底部小圆点 时触发的事件函数
function lis() {
  console.log(nBanner);

  // 停止定时器和计时器
  clearInterval(timeBanner);
  timeBanner = null;
  clearTimeout(timeBannerOut);
  timeBannerOut = null;

  // 顶部高斯模糊效果
  $('.opac').css('background', 'url("/img/banner0' + nBanner + '.jpg")');

  // 隐藏图片及小圆点选中样式
  for (i = 0; i < bannersLen; i++) {
    $('.banner .swiper .imgs a').eq(i).css({
      'visibility': 'hidden',
      'z-index': 0,
      'opacity': 0
    });
    $('.banner .swiper ul li').eq(i).removeClass('active');
  }

  // 图片透明度提高并显示
  $('.banner .swiper .imgs a').eq(nBanner - 1).css({
    'visibility': 'visible',
    'opacity': 1,
    'z-index': 3
  });

  // 添加 底部小圆点 的 css 样式
  $('.banner .swiper ul li').eq(nBanner - 1).addClass('active');

}

// 鼠标进入 图片 区域按钮时
$('.banner .swiper').mouseover(function () {

  // 停止定时器和计时器
  clearInterval(timeBanner);
  timeBanner = null;
  clearTimeout(timeBannerOut);
  timeBannerOut = null;

});

// 鼠标离开 图片 区域按钮时
$('.banner .swiper').mouseleave(function () {
  for (i = 0; i < bannersLen; i++) {
    $('.banner .swiper .imgs a').eq(i).css({
      'visibility': 'hidden',
      'z-index': 0
    });
    $('.banner .swiper ul li').eq(i).removeClass('active');
  }

  // 显示当前显示的图片，并启动定时器
  $('.banner .swiper .imgs a').eq((nBanner - 1) % 6).css({
    'visibility': 'visible',
    'opacity': 1,
    'z-index': 3
  });

  // 添加 底部小圆点 的 css 样式
  $('.banner .swiper ul li').eq(nBanner - 1).addClass('active');

  swiperBanner();
})


// 慕课精英名师 轮播图
let timeTeacher = null;
let nTeacher = 0;

// 轮播图 开始自动运行
teacher();

function teacher() {
  timeTeacher = setInterval(function () {
    nTeacher++;

    if (nTeacher > 3) {
      nTeacher = 0;
    }
    $('.teachers .teacher .swiper').css('left', -1170 * nTeacher + 'px');
    if ($('.teachers .teacher .swiper').css('left') == '-2340px') {
      $('.teachers .teacher .swiper').append($('.teachers .teacher .swiper .swiperA').eq(0))
    }

  }, 3000)
}

// 慕课精英名师 轮播图 上一步 按钮
$('.teachers .swiperGo .left').click(function () {

  // 清除定时器
  clearInterval(timeTeacher);
  timeTeacher = null;

  // 点击改变当前所在位置
  nTeacher--;
  if (nTeacher < 0) {
    nTeacher = 3;
  }
  $('.teachers .teacher .swiper').css('left', -1170 * nTeacher + 'px');
  if ($('.teachers .teacher .swiper').css('left') == '-2340px') {
    $('.teachers .teacher .swiper').append($('.teachers .teacher .swiper .swiperA').eq(0))
  }
})

// 鼠标离开 慕课精英名师 轮播图 上一步 按钮
$('.teachers .swiperGo .left').mouseleave(function () {
  if (timeTeacher == null) {
    teacher();
  }
})

// 慕课精英名师 轮播图 下一步 按钮
$('.teachers .swiperGo .right').click(function () {

  // 清除定时器
  clearInterval(timeTeacher);
  timeTeacher = null;

  // 点击改变当前所在位置
  nTeacher++;
  if (nTeacher > 3) {
    nTeacher = 0;
  }
  $('.teachers .teacher .swiper').css('left', -1170 * nTeacher + 'px');
  if ($('.teachers .teacher .swiper').css('left') == '-2340px') {
    $('.teachers .teacher .swiper').append($('.teachers .teacher .swiper .swiperA').eq(0))
  }
})

// 鼠标离开 慕课精英名师 轮播图 下一步 按钮
$('.teachers .swiperGo .right').mouseleave(function () {
  if (timeTeacher == null) {
    teacher();
  }
})

// 点击 慕课精英名师 轮播图 下方白色小圆按钮
let m = 0;
let teacherL = $('.teachers .teacher .swiper .swiperA div').length / 2;
for (i = 0; i < teacherL; i++) {

  // 鼠标点击按钮
  $('.teachers .swiperGo ul li').eq(i).click(function (e) {
    m = e.target.getAttribute('data-index') - 1;
    liTeacher(m);
  })

  // 鼠标离开按钮
  $('.teachers .swiperGo ul li').eq(i).mouseleave(function () {

  })
}

// 鼠标点击 白色小圆按钮 事件
function liTeacher(n) {
  console.log(n);
  $('.teachers .teacher .swiper').css('left', -1170 * n + 'px');
}


// 注：
// 离开页面前记得清除定时器和计时器
// bodyIndex 顶部幻灯片 timeBanner timeBannerOut
// clearInterval(timeBanner);
// timeBanner = null;
// clearTimeout(timeBannerOut);
// timeBannerOut = null;