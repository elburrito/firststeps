$(document).ready(function() {
    
    $('.fs-toggler').click(function() {
       $(this).closest('.fs-toggle-group').toggleClass('active');
        return false;
    });
    
    
    $('#tp02_selfcheck .toggle.btn').click(function() {
        setTimeout(function() {
            console.log($('#tp02_selfcheck .toggle.btn.btn-primary').length);
            if($('#tp02_selfcheck .toggle.btn.btn-primary').length > 0) {
                $('#selfcheck-result').html('Im Konflikt mit Gott').addClass("conflict");
            } else {
                $('#selfcheck-result').html('Im Einklang mit Gott').removeClass("conflict");;
            }
        },1000);
        
        return;
    });
    
    
    
});