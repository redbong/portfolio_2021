$(document).ready(function(){
    new fullpage('#fullpage', {
        // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
        anchors: ['section-01','section-02', 'section-03', 'section-04'],
        menu: "#header .menu"
    });

    // 기존 섹션을 다시 활성화 하여, 최초에도 애니메이션이 발동 하도록
    const $current = $('.section.fp-section.active');
    $current.removeClass('active');
    setTimeout(function() {
        $current.addClass('active');
    });
    
	
		


	/* 슬라이드 */
	

	const slide = new Swiper('#portfolio-slide', {
	  // 다양한 옵션 설정, 
	  // 아래에서 설명하는 옵션들은 해당 위치에 들어갑니다!!
	  slidesPerView : '3',

		 loop : true, // 슬라이드 반복 여부
		loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
		pagination : false, // pager 여부
		autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
		  delay : 5000,   // 시간 설정
		  disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
		},

		navigation: {   // 버튼 사용자 지정
			nextEl: '.portfolio-wrap .swiper-btn-next',
			prevEl: '.portfolio-wrap .swiper-btn-prev',
		},

	})


});


