// Check of specif TOdos by clicking

// $("li").click(function(){
//     // if li is grey
//      //turn it black
//      // else turn it gray
//      if($(this).css("color")=== "rgb(128, 128, 128)"){
//         $(this).css({
//             "color":"black",
//             "text-decoration":"none"
//         })
         
//      }
//      else { 
//     $(this).css({
//         "color":"gray",
//         "text-decoration":"line-through"
//     })
// }
// })

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){

    if(event.which === 13){
       var todotext= $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+todotext+"</li>")
    }
})

$(".fa-plus").click(function(){
    $('input[type="text"]').fadeToggle();
})
