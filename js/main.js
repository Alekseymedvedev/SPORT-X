$(function () {
    $('.slider__inner').slick({
        dots: true,
        slidesToShow: 1,
        
        responsive: [
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 1,
              dots: true,
              
            }
          }
        ]
      });



   $('.header__btn').on('click', function(){
    $(this).toggleClass('header__btn-active');
   });
   $('.header__btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu-active');

   });


   new WOW().init();

   	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});