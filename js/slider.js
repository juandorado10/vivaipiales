var main = function(){
	$(".nextSlide").click(function(){
		var actualSlide = $(".active");
		var nextSlide = actualSlide.next();

		var miniActual = $('.miniActive');
		var nextMini = miniActual.next();

		if(nextSlide.length === 0) {
		      nextSlide = $('.slide').first();
		      nextMini = $('.mini').first();
		    }

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');
	});

	$(".prevSlide").click(function(){
		var actualSlide = $(".active");
		var prevSlide = actualSlide.prev();

		var miniActual = $('.miniActive');
		var prevMini = miniActual.prev();

		if(prevSlide.length === 0) {
		      prevSlide = $('.slide').last();
		      prevMini = $('.mini').last();
		    }

		actualSlide.fadeOut(50).removeClass("active");
		prevSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	prevMini.addClass('miniActive');
	});

	$(".uno").click(function(){
		var actualSlide = $(".active");
		var nextSlide = $(".slideUno");

		var miniActual = $('.miniActive');
		var nextMini = $('.uno');

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');

	});

	$(".dos").click(function(){
		var actualSlide = $(".active");
		var nextSlide = $(".slideDos");

		var miniActual = $('.miniActive');
		var nextMini = $('.dos');

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');

	});

	$(".tres").click(function(){
		var actualSlide = $(".active");
		var nextSlide = $(".slideTres");

		var miniActual = $('.miniActive');
		var nextMini = $('.tres');

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');

	});

	$(".cuatro").click(function(){
		var actualSlide = $(".active");
		var nextSlide = $(".slideCuatro");

		var miniActual = $('.miniActive');
		var nextMini = $('.cuatro');

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');

	});

	$(".cinco").click(function(){
		var actualSlide = $(".active");
		var nextSlide = $(".slideCinco");

		var miniActual = $('.miniActive');
		var nextMini = $('.cinco');

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');

	});

	$(".seis").click(function(){
		var actualSlide = $(".active");
		var nextSlide = $(".slideSeis");

		var miniActual = $('.miniActive');
		var nextMini = $('.seis');

		actualSlide.fadeOut(50).removeClass("active");
		nextSlide.fadeIn(500).addClass("active");

		miniActual.removeClass('miniActive');
    	nextMini.addClass('miniActive');

	});
}

$(document).ready(main);