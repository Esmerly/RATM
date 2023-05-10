let question = document.querySelectorAll ('.question');
let btnDropdown = document.querySelectorAll ('.question .more')
let answer = document.querySelectorAll ('.answer');
let parrafo = document.querySelectorAll ('.answer p');

for (let i = 0; i < btnDropdown.length; i ++ ) {

let altoParrafo = parrafo[i].clientHeight;
let switchc = 0;


btnDropdown[i].addEventListener('click', () => {

    if ( switchc == 0 ) {

     answer[i].style.height = `${altoParrafo}px`;
     question[i].style.marginBottom = '10px';
     btnDropdown[i].innerHTML = '<i>-</i>';
     switchc ++;

    }

   else if ( switchc == 1 ) {

        answer[i].style.height = `0`;
        question[i].style.marginBottom = '0';
        btnDropdown[i].innerHTML = '<i>+</i>';
        switchc --;
   
       }

})

}

// GALERIA DE FOTOS

// Create a lightbox
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
    // Add image and caption to lightbox
  
    $lightbox
      .append($img)
      .append($caption);
  
    // Add lighbox to document
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // Get image link and description
      var src = $(this).attr("data-image-hd");
      var cap = $(this).attr("alt");
  
      // Add data to lighbox
  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Show lightbox
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());