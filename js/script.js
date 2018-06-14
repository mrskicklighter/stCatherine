// var imageObject = {
//     clickSwap : function(obj) {
//         obj.click(function(){
//             var activeImage= $(this).children('img.active');
//             activeImage.removeClass('active');
//             if (activeImage.next().length > 0) {
//                 activeImage.next().addClass('active');
//             } else{
//                 $(this).children('img:first-child').addClass('active');
//             }
//             return false;
//         });
//     }
// };
//  $(function(){
//     imageObject.clickSwap($('#imageContainer'));
//  });

$(function(){
    $(".img-swap").on('click', function() {
      if ($(this).attr("class") == "img-swap") {
        this.src = this.src.replace("/photos/front_before.jpg", "/photos/front_after.jpg");
      } else {
        this.src = this.src.replace("/photos/front_after.jpg","/photos/front_before.jpg");
      }
      $(this).toggleClass("on");
    });
  });

  $(function(){
    $(".img-swap2").on('click', function() {
      if ($(this).attr("class") == "img-swap2") {
        this.src = this.src.replace("photos/demo_before.jpg", "/photos/demo_after.jpg");
      } else {
        this.src = this.src.replace("/photos/demo_after.jpg","photos/demo_before.jpg");
      }
      $(this).toggleClass("on");
    });
  });