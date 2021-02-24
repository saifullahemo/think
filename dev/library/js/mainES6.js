"use strict";

  $(document).ready(function () {

    // 
    // Reset Modal on Confirm btn click
    // 
    $("#confirmTransfer").on('click', function () {
      $("#transferModalForm")[0].reset();
    });

    // 
    // Reset Approve Modal on Confirm btn click
    // 
    $("#confirmApprove").on('click', function () {
      $("#approveModalForm")[0].reset();
    });

    setMenuActiveClass();
    test();
  });


function setMenuActiveClass(){
  let pathPath = location.pathname;
  if( pathPath.includes('index')){
    $("ul.navbar-nav").children().eq(1).addClass('active');
  }
  else if(pathPath.includes('about')){
    $("ul.navbar-nav").children().eq(2).addClass('active');
  }
}

function test(){
    // console.log("hell2222o");

    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();


    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });


    // $("#navbarSupportedContent").on("click","li",function(e){
    //   $('#navbarSupportedContent ul li').removeClass('active');
    //   $(this).addClass('active');
    //   // e.preventDefault();


    //   var activeWidthNewAnimHeight = $(this).innerHeight();
    //   var activeWidthNewAnimWidth = $(this).innerWidth();
    //   var itemPosNewAnimTop = $(this).position();
    //   var itemPosNewAnimLeft = $(this).position();
    //   $(".hori-selector").css({
    //     "top":itemPosNewAnimTop.top + "px", 
    //     "left":itemPosNewAnimLeft.left + "px",
    //     "height": activeWidthNewAnimHeight + "px",
    //     "width": activeWidthNewAnimWidth + "px"
    //   });
      
    // });
    
  }
  // $(document).ready(function(){
  //   setTimeout(function(){ test(); });
  // });
  $(window).on('resize', function(){
    // setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    // setTimeout(function(){ test(); });
  });



//1. Scroll to Top of the Page

function scrollTopFunction() {
  $(window).scroll(function () {
    $(this).scrollTop() > 800 ? $("#scrollTop").fadeIn() : $("#scrollTop").fadeOut();
  }), $("#scrollTop").bind("click", function (a) {
    a.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 1500);
  });
} /**
  * Set the Copy Right Year in the Page Footer
  */
function setCopyrightYear() {
  var a = new Date(),
    b = a.getFullYear(); $("#year").text(b);
} var screenWidth; $(document).ready(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }),
    // $("#tabOneTable, #tabTwoTable, #tabThreeTable, #userListTable, #tabFourTable").DataTable(),
    // $(".dataTables_length").addClass("bs-select"),
    screenWidth = $(window).width();
    scrollTopFunction();  
    setCopyrightYear();
});
