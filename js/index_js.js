/// <reference path="../typings/globals/jquery/index.d.ts" />

// sideBar 

$("a[href^='#']").click(function (e) {

    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html, body").animate( {scrollTop:sectionOffset}, 2000);
})


$(".close").click(function(){
    
    $(".sideBar").animate( { left : "-15%"  } ,  1000 );
    $(".toggle").show( 300  );
})


$(".toggle").click(function(){

    let sideBarPosition = $(".sideBar").css("left");
    let barWidth = $(".sideBar").innerWidth();


    if ( sideBarPosition == "0px"){

        $(".sideBar").animate( { left : -barWidth  } ,  1000 );
    }
    else {
        $(".sideBar").animate( { left : "0px"  } ,  1000 );
    }
})

$(document).scroll(function(){

    let scrollPosition = $(document).scrollTop();
    let elementPosition = $("#detail").offset().top;
    
    let sideBarPosition = $(".sideBar").css("left");

    if ( scrollPosition >= elementPosition -100 && sideBarPosition >= "0" ){
        $(".toggle").hide(  300 );
    }   
    else {
        $(".toggle").show( 300  );
      
    }
})


// Detailes 
$('#Details h2').click(function(){

    let x = $(this).next().eq(0).css( "display" );

    console.log(x)
    if( x == 'none'){

        $('#Details p').slideUp(500);
        $(this).next().eq(0).slideToggle( 500);
     
    }
    else  {
        $(this).next().eq(0).slideUp( 500);
    }
    
})


// Duration 

setInterval ( function () {

    let date1 = new Date();
    let date2 = new Date(2022, 5, 25);
    let difference = new Date(date2.getTime() - date1.getTime());
    
    let years = difference.getFullYear()-1970 ;
    let months = difference.getMonth() -1 ;
    let days = difference.getDay(); 
    let hours = difference.getHours(); 
    let mins = difference.getMinutes(); 
    let secs = difference.getSeconds(); 
    
    $(".months").text(`${months}  Months `);
    $(".days").text(`${days}  Days `);
    $(".min").text(`${mins}  Min `);
    $(".sec").text(`${secs}  Sec `);
    
} , 1000  )

// contact 

$(".textarea").keyup(function(){

    let charctNumber = this.value.length;
    let remainingCharact = 100 - charctNumber;

    if (remainingCharact > 0) {

        $(".alert").html(  `<h3 class=" character text-danger fw-bold  pe-3 " >${remainingCharact}</h3>
        <h3 class=" text-dark fw-bold " >Characters Available </h3>`)

    }
    else{
        $(".alert").html('<h4 class=" text-danger fw-bold   " >your available characters have finished!</h4>');
        $(".textarea").attr( "maxlength" , "100");
    }

})
