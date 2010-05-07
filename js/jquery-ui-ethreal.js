$(document).ready(function(){
    $("div div").hover(function(){$(this).mouseover(function() { $(this).css("opacity","1.0"); });$(this).mouseout(function() { $(this).css("opacity","0.6"); });});
    $('#tabs').tabs({
        load: function(event, ui) {
            $('a', ui.panel).click(function() {
                $(ui.panel).load(this.href);
                return false;
            });
        }
    }, { fx: { opacity: 'toggle' } });
    $("ul li").click(function(){
      window.location=$(this).find("a").attr("href"); return false;
    });
});

