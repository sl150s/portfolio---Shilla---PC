




$(document).ready(function(){
   
    
/*.menu_btn 클릭 시... */
    $("nav .menu_btn").click(function(){
        $(this).toggleClass("menu-open");
        $(".all_menu").slideToggle();
    });
    
    
    
    
    
    
/*비주얼 화면전환 */
    
	//이미지 전환효과 함수생성
    
    showImg=0;
    nextImg=0;
    
    function changeVisual(){ //일반함수
        
        nextImg++;
        ImgCount=$(".visual_img li").length;
        
        if(nextImg==ImgCount){ //마지막이미지일때 다시 첫번째 이미지로
            nextImg=0;
        }
        
        $(".visual_img li")
            .eq(showImg)
            .removeClass("imgEmp");
        
        $(".visual_img li")
            .eq(nextImg)
            .addClass("imgEmp");
        
        $(".visual_btn span")
            .eq(nextImg)
            .addClass("btnEmp"); //선택된 하단버튼
        
        $(".visual_btn span")
            .eq(showImg)
            .removeClass("btnEmp"); //기존 하단버튼
        showImg=nextImg;
    }
    
    timer1=setInterval(changeVisual,5000);
    
    
    
    
    
    
    
    
    //텍스트 전환효과 함수생성
    
    showText=0;
    nextText=0;
    
    function changeText(){ //일반함수
        
        nextText++;
        TextCount=$(".visual_txt li").length;
        
        if(nextText==TextCount){ //마지막텍스트일때 다시 첫번째 텍스트로
            nextText=0;
        }
        
        $(".visual_txt .Vtext")
            .eq(showText)
            .removeClass("txtEmp");
        
        $(".visual_txt .Vtext")
            .eq(nextText)
            .addClass("txtEmp");
        
        $(".visual_btn span")
            .eq(nextText)
            .addClass("btnEmp"); //선택된 하단버튼
        
        $(".visual_btn span")
            .eq(showText)
            .removeClass("btnEmp"); //기존 하단버튼
        showText=nextText;
    }
    
    timer2=setInterval(changeText,5000);
    
    
    
    
    
    
    
    //버튼클릭시....
    $(".visual_btn span").click(function(){
        
        //버튼 클릭 시 자동함수 해제
        clearInterval(timer1); 
        clearInterval(timer2);
        
        //이미지 텍스트에서 숫자(index)매기기
        nextImg=$(this).index(); //0,1,2...
        nextText=$(this).index();
        
        
        //움직이는 이미지
        $(".visual_img li")
            .eq(showImg)
            .removeClass("imgEmp");
        
        $(".visual_img li")
            .eq(nextImg)
            .addClass("imgEmp");
        
        $(".visual_btn span")
            .eq(nextImg)
            .addClass("btnEmp"); //선택된 하단버튼
        
        $(".visual_btn span")
            .eq(showImg)
            .removeClass("btnEmp"); //기존 하단버튼
        showImg=nextImg;
        
        
        //움직이는 텍스트
        $(".visual_txt .Vtext")
            .eq(showText)
            .removeClass("txtEmp");
        
        $(".visual_txt .Vtext")
            .eq(nextText)
            .addClass("txtEmp");
        
        $(".visual_btn span")
            .eq(nextText)
            .addClass("btnEmp"); //선택된 하단버튼
        
        $(".visual_btn span")
            .eq(showText)
            .removeClass("btnEmp"); //기존 하단버튼
        showText=nextText;
                          
        
        //버튼 클릭하지 않으면 다시 자동함수 재생
        timer1=setInterval(changeVisual,5000);
        timer2=setInterval(changeText,5000);
    });
    
    
    
    
    
    
    
//비주얼 하단 메뉴 hover 시... 
    
    
    $(".foot_menu .tit").hover(function(){
        $(this).find(">a").addClass("Taction")
        $(this).find("ul").stop(true,true).animate({"opacity":1},200);
        
    },function(){
        $(this).find(">a").removeClass("Taction")
        $(this).find("ul").stop(true,true).animate({"opacity":0},200);
    });
    
    
});





