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


});


