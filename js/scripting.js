// Its a five image slider
var image_count = 1;
var arr = ["/paralax/img/img2.jpg","/paralax/img/img3.jpg","/paralax/img/img4.jpg","/paralax/img/simg.jpg"];
var i = 0;
setInterval(function() {
    $("#slider").css("background-image", "url(" + arr[i] + ")");
    (i < arr.length - 1) ? i++ : i = 0;
        // alert(i);
    }, 3000);
// fancy
function ready() {
    $("h3").addClass("animated bounce");
}
window.addEventListener("onload",ready,false);

// onclick drop
    $("#clickdrop").click(function(){
        $height = $("#clickdrop").offset().top;
        $("body").scrollTop($height-35);
});

