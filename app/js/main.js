/**
 * Created by lavor on 18.05.2016.
 */


	"use strict";
    function slider() {
    	let slides = ['one', 'two', 'three'],
    		object = document.querySelector(".slider__wrapper--nado"),
    		sliderNavigation = document.querySelector(".slider__navigation"),
    		li = sliderNavigation.querySelectorAll("li"),
    		item = 0;
    	setInterval(function() {
			object.classList.remove('one');
			object.classList.remove('two');
			object.classList.remove('three');
			li[0].classList.remove('active');
			li[1].classList.remove('active');
			li[2].classList.remove('active');
			li[item].classList.add('active');
			object.classList.add(slides[item++]);
    		if (item == 3) {
    			item = 0;
    		}    		
    	}, 4000);
    	
    }
    
window.onload = function() {
	let sliderNav = document.querySelector(".slider__navigation"),
		object = document.querySelector(".slider__wrapper--nado"),
		navLi = sliderNav.querySelectorAll("li"),
		item = 0;

	slider();
	sliderNav.addEventListener("click", function(event) {
		object.classList.remove('one');
		object.classList.remove('two');
		object.classList.remove('three');
		if (event.target == navLi[0]) {
			navLi[1].classList.remove('active');
			navLi[2].classList.remove('active');
			navLi[0].classList.add('active');
			object.classList.add('one');
		} else {
			if (event.target == navLi[1]) {
				navLi[0].classList.remove('active');
				navLi[2].classList.remove('active');
				navLi[1].classList.add('active');
				object.classList.add('two');
			} else {
				navLi[0].classList.remove('active');
				navLi[1].classList.remove('active');
				navLi[2].classList.add('active');
				object.classList.add('three');
			}
		}

	})
}
