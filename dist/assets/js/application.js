$(document).ready(function () {
	/**
	toggles everything
	*/
	$('.fs-toggler').click(function () {
		$(this).closest('.fs-toggle-group').toggleClass('active').toggleClass('collapsed');
		return false;
	});



	$('.fs-videobox .fs-play').click(function() {
		$(this).closest('.fs-videobox').removeClass('fs-videobox-minimized').addClass('playing');
	});

	/**
	CHAPTER 02 - specific stuff
	*/
	$('#tp02_selfcheck .toggle.btn').click(function () {
		setTimeout(function () {
			//console.log($('#tp02_selfcheck .toggle.btn.btn-primary').length);
			if ($('#tp02_selfcheck .toggle.btn.btn-primary').length > 0) {
				$('#selfcheck-result').html('Im Konflikt mit Gott').addClass("conflict");
			} else {
				$('#selfcheck-result').html('Im Einklang mit Gott').removeClass("conflict");;
			}
		}, 1000);

		return;
	});
	$('#waypoint_chapter_finished').waypoint(function (direction) {
		$('#waypoint_chapter_finished').removeClass('.animated-onviewport').addClass('animated');
	}, {
		offset: '70%'
	});

	$('.fs-attentionseeker').waypoint(function (direction) {
		$(this.element).addClass('pulse-once');
	}, {
		offset: '80%'
	});


	$('section:not(.fs-chapter-exchange) h2').waypoint(function (direction) {
		$(this.element).addClass('animate-onviewport');
	}, {
		offset: '70%'
	});

	$('section.fs-chapter-exchange h2').waypoint(function (direction) {
		$(this.element).addClass('animate-onviewport');
	}, {
		offset: '30%'
	})


	//adds animation that is triggered when it sneaks into the viewport
	$('.animate-onviewport').waypoint(function (direction) {
		$(this.element).addClass('animate');
	}, {
		offset: '80%'
	});

});
