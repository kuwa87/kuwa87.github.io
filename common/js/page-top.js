//page topボタン
// jQuery(document).ready(function() {
// var offset = 220;
// var duration = 500;
// jQuery(window).scroll(function() {
// if (jQuery(this).scrollTop() > offset) {
// jQuery('#page-top').fadeIn(duration);
// } else {
// jQuery('#page-top').fadeOut(duration);
// }
// });
//
// jQuery('#page-top').click(function(event) {
// event.preventDefault();
// jQuery('html, body').animate({scrollTop: 0}, duration);
// return false;
// })
// });

//
// $(function(){
// var topBtn=$('#page-top');
// topBtn.hide();
//
//
//
// $(window).scroll(function(){
//   if($(this).scrollTop()>80){
//
//     topBtn.fadeIn();
//
//   }else{
//
//     topBtn.fadeOut();
//
//   }
// });
//
//
//
// topBtn.click(function(){
//   $('body,html').animate({
//   scrollTop: 0},500);
//   return false;
//
// });
//
//
// });


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
