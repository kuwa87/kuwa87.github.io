//page topボタン

$(function(){
  $('#page-top').hide();                     // デフォルトで非表示とする

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {          // ←【1】scrollTop() で現在のスクロール上の上位置を取得
      $('#page-top').fadeIn();               // 100を過ぎていたら、#backToTop（戻るボタン）をフェードインさせる
    } else {
      $('#page-top').fadeOut();              // それ以外は、フェードアウト
    }
  });

  // クリック時にスムーズにページ上部へスクロールさせる
  $('#page-top').click(function(){
    $('body,html').animate({ scrollTop: 0 }, 350);  // ←【2】
    return false;  // ←【3】
  });

});
