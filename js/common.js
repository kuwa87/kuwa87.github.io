//page topボタン

$(function () {
  $('#page-top').hide(); // デフォルトで非表示とする

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // ←【1】scrollTop() で現在のスクロール上の上位置を取得
      $('#page-top').fadeIn(); // 100を過ぎていたら、#backToTop（戻るボタン）をフェードインさせる
    } else {
      $('#page-top').fadeOut(); // それ以外は、フェードアウト
    }
  });

  // クリック時にスムーズにページ上部へスクロールさせる
  $('#page-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 350); // ←【2】
    return false; // ←【3】
  });

});
//header固定
$(function () {
  var $win = $(window),
    $main = $('main'),
    $nav = $('nav'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';

  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});


// アンカーリンクはゆっくり
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});


// アンカーリンクでheaderを非表示
jQuery(function ($) {
  $('a.nav-link').on('click', function () {
    if (window.innerWidth <= 768) {
      $('.navbar-toggler').click();
    }
  });
});