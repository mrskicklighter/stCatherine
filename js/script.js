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

//click before and after image
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

//picture slideshow

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}