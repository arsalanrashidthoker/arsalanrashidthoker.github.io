$(function(){
    if(window.innerWidth < 900){
        $("li>a").hide();
    }
    else{
        $("li>a").show();
    }
    $("li.menu").click(function(){
        $("li>a").slideToggle();
    });
});
