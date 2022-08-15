$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger, .hidden-nav, h5, header, .header-name__btn').toggleClass('active');        
    })

    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
            elem = $(".add-class"); 
        if(windowWidth < 768){
          elem.addClass('order-2');
        }
        else{
          elem.removeClass('order-2');
        }
      }
    
      checkWidth(); 
    
      $(window).resize(function(){
        checkWidth(); 
      });

      $('.owl-carousel').owlCarousel(
        {
          loop:true,
          margin: 32,
          nav:true,
          autoHeight:true,
          dots:true,
          dotsEach:1,
          navText: [
            '<svg width="32" height="32" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
            '<svg width="32" height="32" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
          ],
          responsive:{
            0:{
              items:1,
              nav:false
            },           
            700:{
              items:2,
              nav:false
            },
            1100:{
              items:3
            } 
          }

        });
      
        if ($('.accordion-button').hover(
          function () {
          $(this).children('.accSvg').addClass('accSvg-active');
        },
          function () {
            $(this).children('.accSvg').removeClass('accSvg-active');
          }
        ));
        
        $(".nav-item").click(function(){
          $("body,html").animate({
           scrollTop:$("#" + $(this).children('a').data('value')).offset().top
          },1000)
          
         })

         $('.form-element-input').change(function() {
          if($(this).val()) {
            $(this).addClass('hasValue');
          } else {
            $(this).removeClass('hasValue');
          }
        });



        var validName = false;
		var validTel = false;

		$("form").submit(function(event){
			event.preventDefault();

			var name = $("#name").val();
			var tel = $("#tel").val();

			if(name == "") {
				$("#name").parent().removeClass("has-success").addClass("has-error");	
				$(".form-input_name").prepend($('<img>',{id:'sImg',src:'./img/cancel.svg'}));
				$(".form-input_name #eImg").remove();
				validName = false;
			} else {
				$("#name").parent().removeClass("has-error").addClass("has-success");	
				$(".form-input_name").prepend($('<img>',{id:'eImg',src:'./img/check circle.svg'}));
				$(".form-input_name #sImg").remove();
				validName = true;
			}

			if(tel == "") {
				$("#tel").parent().removeClass("has-success").addClass("has-error");	
				$(".form-input_tel").prepend($('<img>',{id:'sImg',src:'./img/cancel.svg'}));
				$(".form-input_tel #eImg").remove();
				validTel = false;	
			} else {
				$("#email").parent().removeClass("has-error").addClass("has-success");	
				$(".form-input_tel").prepend($('<img>',{id:'eImg',src:'./img/check circle.svg'}));
				$(".form-input_tel #sImg").remove();
				validTel = true;	
			}


			if(validName == true && validTel == true) {
				$("form").unbind('submit').submit();
			}

		});

});