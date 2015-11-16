$(document).ready(function() {
	// tab
	function tab() {
		$(".js-tab").each(function(){
			var tab_link 	= $(this).find("a"),
				tab_item 	= $(this).find("li"),
				index 		= tab_link.attr("href"),
				parents 	= $(this).parents(".js-tab-group"),
				accordL 	= parents.find('.js-tab-link'),
				tab_cont 	= parents.find(".js-tab-cont");
			tab_link.on("click", function() {
				var index = $(this).attr("href");
				$('.js-tab-item').removeClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.fadeOut(0);
				parents.find("."+index).fadeIn(300);
				return false;
			});
			accordL.on("click", function() {
				var this_ 	= $(this),
					index 	= $(this).attr("href"),
					parent 	= $(this).parent();
				if (!parent.hasClass('is-active')) {
					$('.js-tab-acc').removeClass("is-active");
					tab_cont.slideUp(300);
					parent.addClass("is-active");
					parents.find("."+index).slideDown(300);
				}
				else {
					parent.removeClass("is-active");
					tab_cont.slideUp(300);
				}
				return false;
			});
			parents.find('.js-tab-acc:first').addClass("is-active");
			$(this).find('li:first').addClass("is-active");
			parents.find("."+index).fadeIn(300);
		});
	}
	tab();

	// datepicker
	$('.js-datepicker').datepicker({
		showOn: "both",
		buttonImage: "img/svg/doing.svg",
		buttonImageOnly: true,
		dateFormat: 'dd mm yy',
		monthNamesShort: ['янв.', 'фев.', 'март.', 'апр.', 'май.', 'июнь.', 'июль.', 'авг.', 'сент.', 'окт.', 'ноя.', 'дек.'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesShort: ['вс','пн','вт','ср', 'чт', 'пт','сб'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	});
});