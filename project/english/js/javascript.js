function changeImage(a) {
    document.getElementById("omorilogo").src=a;
}

$(document).ready(function(){
    $("iframe").hide();
    $(document).ready(function(){
        $(".welcometowhitespace_gif").click(function(){
            $(".welcometowhitespace_gif").fadeOut();
            $("iframe").delay(750).fadeIn();
        });

    });
});


$(document).ready(function(){
    $("#btn").click(function(){
        $("p:first").append("<br><b>SOMETHING is watching you.</b>");
    });
});