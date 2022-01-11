$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:3
            },
            994:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });
      

});
AOS.init();

// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     });



    var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#linkss").hide();
a=1;
});
$("#serv").click(function(){
    $("#linkss").hide();
    a=1;
    });
    $("#ghar").click(function(){
        $("#linkss").hide();
        a=1;
        });
        $("#cont").click(function(){
            $("#linkss").hide();
            a=1;
            });  
            $("#menuu").click(function(){
                $("#linkss").hide();
                a=1;
                });  
                $("#galery").click(function(){
                    $("#linkss").hide();
                    a=1;
                    });   

$("#icon").click(function(){
            $("#linkss").slideToggle();
            // alert("hello");
// if (a==1){
//          $("#linkss").animate({"right":"0"});
//          a=2;
// }
// else{
//          $("#linkss").animate({"right":"-100%"});
// } 
});
});