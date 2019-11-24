jQuery(document).ready(function ($) {
	let navFlag = false;
	let navWidth = $(".header__nav > .nav").innerWidth() + 15;
	let headerNav = $(".header__nav > .nav");
	let navIcon = $(".nav-icon");

	let titleCompanyFlag = false;
	let titleCompanyList = $(".header__title").find(".company__list");
	let titleCompanyIcon = $(".header__title").find("i");
	//funtions
	function toggleNav(node, icon) {
		if(!navFlag) {
			$(node).animate({
                'right' : '0',
                'opacity' : '1'
            }, 150);
			$(icon).addClass('open');
		} else {
			$(node).animate({
                'right' : -navWidth + 'px',
                'opacity' : '0'
            }, 100);
			$(icon).removeClass('open');
		}
		navFlag = !navFlag;
	}

	//

	$(".nav-icon").click(function () {
		toggleNav(headerNav, navIcon);
	});

  	//
	$(document).click(function (e){
		let headerNavParent = $(".header__nav");
		let headerTitle = $(".header__title");
		if (!headerNavParent.is(e.target) && headerNavParent.has(e.target).length === 0) { 
			navFlag = true;
			toggleNav(headerNav, navIcon);
		}
	});
})