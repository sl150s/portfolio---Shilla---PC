    
/* 라연 _________________________________매개변수
다이닝 갤러리 페이드 인아웃 + 초이스 사진 클릭 시*/

    var oldidx=0;
    var idx=0;
    var img_n= $("#Rayeon .Dfade li").length;

    function changeImg(idx){ 
        if(oldidx!=idx){ 
            $("#Rayeon .Choice_img ul li").eq(idx).addClass("active");
            $("#Rayeon .Choice_img ul li").eq(oldidx).removeClass("active");
            $("#Rayeon .Dfade li").eq(idx).stop(true,true).fadeIn(300); 
            $("#Rayeon .Dfade li").eq(oldidx).stop(true,true).fadeOut(300);
        }
        oldidx=idx;
    }

    
    //자동함수 생성
    function changeAuto(){
        idx++;
        if(idx>img_n-1){ 
           idx=0;
        }
        changeImg(idx);
    }
    timer=setInterval(changeAuto,6000);





    
/* 더 파크뷰 _________________________________ 
______다이닝 갤러리 페이드 인아웃 + 초이스 사진 클릭 시*/   
    
    var Poldidx=0; //기존이미지
    var Pidx=0; //새로바뀌는 이미지
    var Pimg_n= $("#Parkview .Dfade li").length; //1,2,3..개수를 세어서 변수를 저장한다.  
    
    //이미지와 버튼이 바뀌는 함수
    function changeImg_P(Pidx){ //매개변수가 있는 함수 => dix는 선택되는 이미지
        
        if(Poldidx!=Pidx){ //기존의 이미지와 선택된 이미지가 다를때
            $("#Parkview .Choice_img ul li").eq(Pidx).addClass("active");//선택된 하단버튼 활성화 -> active 클래스를 불러냄
            $("#Parkview .Choice_img ul li").eq(Poldidx).removeClass("active");//기존 하단버튼 비활성화 -> active 클래스를 삭제함
            $("#Parkview .Dfade li").eq(Pidx).stop(true,true).fadeIn(300); // 선택된 이미지 나타남
            $("#Parkview .Dfade li").eq(Poldidx).stop(true,true).fadeOut(300);// 기존 이미지 사라짐
        }
        Poldidx=Pidx; // 선택된 이미지는 다시 기존이미지로 저장되어서 fade Out
    }

    //자동함수 생성
    function changeAuto_P(){
        Pidx++;
        if(Pidx>Pimg_n-1){ 
           Pidx=0;
        }
        changeImg_P(Pidx);
    }
    timer=setInterval(changeAuto_P,6000);  //4초 간격으로 함수를 자동재생(기억하자, setInterval 자동재생하는 함수임)






/* 콘티넨탈 _________________________________

다이닝 갤러리 페이드 인아웃 + 초이스 사진 클릭 시*/
    var Coldidx=0;
    var Cidx=0;
    var Cimg_n= $("#continental .Dfade li").length;

    function changeImg_C(Cidx){ 
        if(Coldidx!=Cidx){ 
            $("#continental .Choice_img ul li").eq(Cidx).addClass("active");
            $("#continental .Choice_img ul li").eq(Coldidx).removeClass("active");
            $("#continental .Dfade li").eq(Cidx).stop(true,true).fadeIn(300); 
            $("#continental .Dfade li").eq(Coldidx).stop(true,true).fadeOut(300);
        }
        Coldidx=Cidx;
    }

    //자동함수 생성
    function changeAuto_C(){
        Cidx++;
        if(Cidx>Cimg_n-1){ 
           Cidx=0;
        }
        changeImg_C(Cidx);
    }
    timer=setInterval(changeAuto_C,6000);







/* 디럭스 팝업 이미지 매개변수 _________________________________*/

var Aoldidx=0; //기존이미지
var Aidx=0; //선택되는이미지

function changeImg_A(Aidx){ 
    //함수 만드는 방법: 앞에 function을 붙이기 -> idx는 선택되는이미지(매개변수)
    //매개변수 : 계속 쓸수 있는 변수
    
    if(Aoldidx!=Aidx){ //기존의이미지와 선택된 이미지가 다를때... Aidx
    // != >>같지 않다
        $(".Deluxe .Plist_img li").eq(Aidx).addClass("opaci"); //선택된 썸네일 이미지
        $(".Deluxe .Plist_img li").eq(Aoldidx).removeClass("opaci"); // 선택되지 않은 기존의 썸네일 이미지
        $(".Deluxe .Ptitle_img li").eq(Aidx).stop(true,true).fadeIn(300);//선택된 이미지
        $(".Deluxe .Ptitle_img li").eq(Aoldidx).stop(true,true).fadeOut(300); //기존이미지
    }
    Aoldidx=Aidx; //선택된 이미지는 다시 기존이미지로 저장
}




//비즈니스 디럭스 팝업 이미지 매개변수 ________________________________
var Boldidx=0; //기존이미지
var Bidx=0; //선택되는이미지

function changeImg_B(Bidx){ 
    //함수 만드는 방법: 앞에 function을 붙이기 -> idx는 선택되는이미지(매개변수)
    //매개변수 : 계속 쓸수 있는 변수
    
    if(Boldidx!=Bidx){ //기존의이미지와 선택된 이미지가 다를때... Aidx
    // != >>같지 않다
        
        $(".Business .Plist_img li").eq(Bidx).addClass("opaci"); //선택된 썸네일 이미지
        $(".Business .Plist_img li").eq(Boldidx).removeClass("opaci"); // 선택되지 않은 기존의 썸네일 이미지
        $(".Business .Ptitle_img li").eq(Bidx).stop(true,true).fadeIn(300);//선택된 이미지
        $(".Business .Ptitle_img li").eq(Boldidx).stop(true,true).fadeOut(300); //기존이미지
    }
    Boldidx=Bidx; //선택된 이미지는 다시 기존이미지로 저장
}




//슈페리어 스위트 팝업 이미지 매개변수 ________________________________
var Soldidx=0; //기존이미지
var Sidx=0; //선택되는이미지

function changeImg_S(Sidx){ 
    //함수 만드는 방법: 앞에 function을 붙이기 -> idx는 선택되는이미지(매개변수)
    //매개변수 : 계속 쓸수 있는 변수
    
    if(Soldidx!=Sidx){ //기존의이미지와 선택된 이미지가 다를때... Aidx
    // != >>같지 않다
        
        $(".Superior .Plist_img li").eq(Sidx).addClass("opaci"); //선택된 썸네일 이미지
        $(".Superior .Plist_img li").eq(Soldidx).removeClass("opaci"); // 선택되지 않은 기존의 썸네일 이미지
        $(".Superior .Ptitle_img li").eq(Sidx).stop(true,true).fadeIn(300);//선택된 이미지
        $(".Superior .Ptitle_img li").eq(Soldidx).stop(true,true).fadeOut(300); //기존이미지
    }
    Soldidx=Sidx; //선택된 이미지는 다시 기존이미지로 저장
}

















//_____________________시작_______________________



$(document).ready(function(){
                  
    
/*풀다운 메뉴 */
     $("nav").mouseenter(function(){
        /*배경+메뉴 슬라이드*/
        $(this)
            .find("li>.lnb")
            .stop(true,true)
            .slideDown();
        $(".bg_box")
            .stop(true,true)
            .slideDown();
         
        /*head 배경색+밑줄*/
          $("header")
            .css({"background":"#1f1918","border-bottom":"1px solid rgba(235,235,235,0.2)","transition":"all 0.7s"});
         
        /* 메인메뉴 글자색*/
        $(".gnb>li>a")
            .css({"color":"#fff"});
         
        /* 유틸메뉴 글자색*/
        $(".top_link")
            .css({"color":"#fff"});
            
        /*로고이미지*/
        $(".logo img")
            .attr({"src":"image/shilla_logo_hover.png"});
    });
    
    
    
    $("header").mouseleave(function(){
        $(this)
            .find("li>.lnb")
            .stop(true,true)
            .slideUp();
        $(".bg_box")
            .stop(true,true)
            .slideUp();
        $(this)
            .css({"background":"#f1e3c4","transition":"all 0.7s"});
        $(".gnb>li>a")
            .css({"color":"#1f1918"});
        $(".top_link")
            .css({"color":"#1f1918"});
        $(".logo img")
            .attr({"src":"image/shilla_logo.png"});
    });
  
    
    
    

/*글로벌박스(한국어) 클릭 시 */
     $(".global_box>a").click(function(){
        $(this).toggleClass("mclose"); //addClass+removeClass
        $(".global_box ul").slideToggle("slow"); //slideDown+slideUp
    });

    
  
    
 
/*네비게이션 메뉴 클릭 시 */    
      $(".intro_box>a").click(function(){

      $(".intro_box>a").not(this).next("ul").stop(true,true).slideUp(200); 
      $(".intro_box>a").not(this).removeClass("sclose");

      $(this).next("ul").stop(true,true).slideToggle(200); 
      $(this).toggleClass("sclose");

   });
    
   
    
    
    
    
    
/*수상이력 클릭 시*/
    $(".tab_text li:not(:first)").hide();
    $(".tab_Title a:first").addClass("media");
    
    $(".tab_Title a").click(function(){
        $(".tab_Title a").removeClass("media");
        $(this).addClass("media");
        $(".tab_text li").hide();
        $($(this).attr("href")).show(); 
        return false; //a 기능 차단 
    });
    
    
    
    
    
    
    
    
    
/* 다이닝 탭(라연,더 파크뷰, 콘티넨탈) 클릭 시*/
    
    $(".dining_txt>ul>li:not(:first)").hide();
      //첫번째를 제외한 나머지 내용 숨기기
    $(".Dtab li:first a").css({"border":"solid #000","border-width":"2px 2px 0 2px"});
      //첫번째에만 아래 제외한 나머지 밑줄주기
    $(".Dtab li:not(:first) a").css({"border":"solid #000","border-width":"0 0 2px 0"});
      //첫번째를 제외한 아래 밑줄 주기
    
    
    $(".Dtab li a").click(function(){
        
        $(".Dtab li a").css({"border":"solid #000","border-width":"0 0 2px 0"});
        $(this).css({"border":"solid #000","border-width":"2px 2px 0 2px"});
        
        $(".dining_txt>ul>li").hide();
        $($(this).attr("href")).show();
        
        return false; //a 기능 차단 
    });
    
    
    
    
    
    


/* 라연 _________________________________

다이닝 갤러리 페이드 인아웃 + 초이스 사진 클릭 시*/
    
    
    
    //하단버튼 클릭시...
    $("#Rayeon .Choice_img ul li").click(function(){
        clearInterval(timer); 
        idx=$(this).index(); 
        changeImg(idx);
        timer=setInterval(changeAuto,6000);
    });


    //좌우버튼 클릭시...
    $("#Rayeon .Dbutton .Dprev").click(function(){ 
        clearInterval(timer);
        idx--;
        if(idx>img_n-1){ 
            idx=0;
        }
        changeImg(idx);
        timer=setInterval(changeAuto,6000);
    });
    
    $("#Rayeon .Dbutton .Dnext").click(function(){  
        clearInterval(timer);
         idx++;
        if(idx>img_n-1){ 
            idx=0;
        }
        changeImg(idx);
        timer=setInterval(changeAuto,6000);
    });


    
    
    
    
    
/* 더 파크뷰 _________________________________ 
______다이닝 갤러리 페이드 인아웃 + 초이스 사진 클릭 시*/ 
   
    //하단버튼 클릭시...
    $("#Parkview .Choice_img ul li").click(function(){
        clearInterval(timer); 
        //버튼 클릭 시 자동함수 해지 -> clearInterval
        
        Pidx=$(this).index(); // 0,1,2..
        changeImg_P(Pidx);
        timer=setInterval(changeAuto_P,6000);
        //버튼을 클릭안할 때는 다시 함수 자동재생
    });


    //좌우버튼 클릭시...
    $("#Parkview .Dbutton .Dprev").click(function(){ // 왼쪽 버튼 
        clearInterval(timer);
        Pidx--;
        if(Pidx>Pimg_n-1){ //선택한 이미지가 0,1,2..4 마지막일때 맨처음부터 다시 시작
            Pidx=0;
        }
        changeImg_P(Pidx);
        timer=setInterval(changeAuto_P,6000);
    });
    
    $("#Parkview .Dbutton .Dnext").click(function(){ // 오른쪽 버튼 
        clearInterval(timer);
         Pidx++;
        if(Pidx>Pimg_n-1){ //선택한 이미지가 0,1,2..4 마지막일때 맨처음부터 다시 시작
            Pidx=0;
        }
        changeImg_P(Pidx);
        timer=setInterval(changeAuto_P,6000);
    });

    


    
/* 콘티넨탈 _________________________________
다이닝 갤러리 페이드 인아웃 + 초이스 사진 클릭 시*/
    
    //하단버튼 클릭시...
    $("#continental .Choice_img ul li").click(function(){
        clearInterval(timer); 
        Cidx=$(this).index(); 
        changeImg_C(Cidx);
        timer=setInterval(changeAuto_C,6000);
    });


    //좌우버튼 클릭시...
    $("#continental .Dbutton .Dprev").click(function(){ 
        clearInterval(timer);
        Cidx--;
        if(Cidx>Cimg_n-1){ 
            Cidx=0;
        }
        changeImg_C(Cidx);
        timer=setInterval(changeAuto_C,6000);
    });
    
    $("#continental .Dbutton .Dnext").click(function(){  
        clearInterval(timer);
         Cidx++;
        if(Cidx>Cimg_n-1){ 
            Cidx=0;
        }
        changeImg_C(Cidx);
        timer=setInterval(changeAuto_C,6000);
    });

    
   
    
    
/* 팝업창 띄우기 .pop --------------------------- */

//각 메뉴를 클릭했을 때...
    $(".room_more>a").click(function(){
        
        $(this).next().show(); //다음 형제인 .pop을 보이게함
        $("html").css({"overflow":"hidden"});
        return false;
     
});
    
    
//close 버튼 눌렀을 때...
	$(".pop_close1").click(function(){
        $("#pop1").hide(); //.pop을 안보이게함
        $("html").css({"overflow-y":"scroll"});//html스크롤 다시 보이게함 
    });
    $(".pop_close2").click(function(){
        $("#pop2").hide(); //.pop을 안보이게함
        $("html").css({"overflow-y":"scroll"});//html스크롤 다시 보이게함 
    });
    $(".pop_close3").click(function(){
        $("#pop3").hide(); //.pop을 안보이게함
        $("html").css({"overflow-y":"scroll"});//html스크롤 다시 보이게함 
    });
    

    
    
    

    
/* 팝업창 갤러리 썸네일 버튼 클릭시*/
    
    /*디럭스*/
    $(".Deluxe .Plist_img li").click(function(){
        Aidx=$(this).index();
        changeImg_A(Aidx); //매개변수 실행
    });
    
    /*비즈니스*/
    $(".Business .Plist_img li").click(function(){
        Bidx=$(this).index();
        changeImg_B(Bidx); //매개변수 실행
    });
    
    /*슈페리어 스위트*/
    $(".Superior .Plist_img li").click(function(){
        Sidx=$(this).index();
        changeImg_S(Sidx); //매개변수 실행
    });
    
    
    
    
    
    
/*룸 소개 팝업창 이용안내 탭 클릭 시*/
    
    $(".pop_content .use_txt").show();
    $(".pop_content > dt:first button").addClass("Tclose");
    
    $(".pop_content>dt").click(function(){
       
        $(this).next("dd").slideToggle(200);
        $(this).find("button").toggleClass("Tclose");
     
   });
    
  
    
  
    
    
    
    
    
    
/*스크롤에 따라 보이는 갤러리 ..... */
 
    

//top_btn---------------------------------------
    $("#top_btn").hide(); //탑버튼 숨기기

    
    //스크롤이 350이상일때 TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
    $(window).scroll(function(){
       
        if($(this).scrollTop()>100){
            $("#top_btn").fadeIn();
        }else{
            $("#top_btn").fadeOut();
        }
    });
    

    //TOP버튼 클릭시 맨위로
    $("#top_btn a").click(function(){
        $("html,body").animate({scrollTop:"0"});
        return false;
    })
    
    
    
    
    
});



