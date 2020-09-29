
// $(".h3").on("click", function(){
//     if ($(".p").css("display") == "none") {
//         $(".p").slideDown(500);
//         $(".sign-in").css("transform", "rotate(90deg)");
//     }
//     else {
//         $(".p").slideUp(500);
//         $(".sign-in").css("transform", "rotate(0deg)");
//     }
//   })

$(document).ready(function(){
    $(".h3").on("click", function () {
        var x = $(this).parent().find(".p");
        $(".p").not(x).slideUp(500);
        x.slideDown(500);
    })
    // else {
    //     $(".p").slideUp(500);
    //     $(".sign-in").css("transform", "rotate(0deg)");
    // }
})