$(function(){
  //1.鼠标移入移出bannerbox
  $(".bannerbox").hover(function(){
  	$(".left,.right").animate({opacity:1},200);
  	clearInterval(t) 
  },function(){
  	$(".left,.right").animate({opacity:0},200)
  	t=setInterval(move,3000)
  })
  //2.自动轮播
  var t=setInterval(move,3000);
  var arr=["#CB2D14","#631BBB","#03105F","#FF7329","#9A05FE","#FC4E90","#FF9C03","#FC0067","#8804FF","#D70B43","#E30D58","#FF38FF","#FB1866","#DEDEDE","#BA1B2E"]
  var num=0
  function move(){
  num++;
  if(num>$(".btn").length-1){
  	num=0;
  }
  $(".bar").css("background",arr[num])
 $(".btn").css("background","#fff").eq(num).css("background","yellow").parent().css("display","block").animate({top:-15},100).addClass("aa").parent().css("background","rgba(0,0,0,0.8)");
 $(".bg").not(".aa").animate({top:0}).css("display","none").parent().css("background","rgba(0,0,0,0.5)").end().end().removeClass("aa");
 $(".innerbox a").css({display:"none",opacity:0.5}).eq(num).css("display","block").animate({opacity:1},300); 
  }
 //3.箭头的点击事件
  $(".right").click(function(){
     $(".bg").stop();
  	 move();
  })
  $(".left").click(function(){
  	$(".bg").stop();
  	 num-=2;  
  	 if(num<=-2){
     num=$(".btn").length-2;
  	 }
  	 move();
  })
  //4.每一个按钮的移入移出事件
    $(".btn").each(function(index){   
        this.index=index;
        $(this).hover(function(){

        $(".innerbox a").css({display:"none",opacity:0.5}).eq(this.index).css("display","block").animate({opacity:1},300);
        $(".btn").css("background","#fff") 
        $(this).css("background","yellow");
        },function(){
           num=this.index;	
        })
    }) 
  //5.btninner的移入移出效果
   $(".btninner").each(function(index){
   	 this.index=index;
     var that=this;
   	  $(this).hover(function(){
      $(".bar").css("background",arr[this.index])
   	  $(this).siblings().css("background","rgba(0,0,0,0.5").end().css("background","rgba(0,0,0,0.8)");
   	  $(".bg").css({top:0,display:"none"});
   	  var num=$(this).find(".btn").length;

   	  if(this.index<6){
   	  $(this).find(".bg").css({
   	  	width:150,
   	  	height:num*20,
   	  	display:"block",
   	  	top:-num*20,
   	  	left:0
   	  }).find(".btn").css({
        margin:5,
        float:"left",
        display:"block"
      }).wrap("<div class='wrap'></div>").after("<a href='#'>这是一个链接</a>");
   	  }else{
   	  $(this).find(".bg").css({
   	  	width:150,
   	  	height:num*20,
   	  	display:"block",
   	  	top:-num*20,
   	  	right:0,
        left:"",
   	  	textAlign:"left"
   	   }).find(".btn").css({
        margin:5,
        float:"left",
        display:"block"
       }).wrap("<div class='wrap'></div>").after("<a href='#'>这是一个链接</a>");
   	   }
  //     //此时轮播图的切换 
      $(".btn").css("background","#fff");
      $(".innerbox a").css({display:"none","opacity":0.5});
      $(this).find(".btn").eq(0).css("background","yellow")
      $(".innerbox").eq(this.index).find("a").eq(0).css("display","block").animate({opacity:1})
      //此时wrap 中的a的hover效果
      $(".wrap a").each(function(index){ 
      this.index=index;
      $(this).hover(function(){

      $(".wrap a").css("color","#fff");
      $(this).css("color","yellow");
      $(".btn").css("background","#fff");
      $(this).prev().css("background","yellow");
      $(".innerbox a").css({display:"none",opacity:0.5});
      $(".innerbox").eq(that.index).find("a").eq(this.index).css("display","block").animate({opacity:1})
      },function(){})
  })},function(){
      $(this).find(".bg").css({
        width:70,
        height:20,
        display:"block",
        left:0,
        top:-20,
        textAlign:"center"
      }).find(".btn").css({
        margin:"",
        display:"inline-block",
        float:""
      }).unwrap().next().remove();
     })
   })

 
var d3s=$(".d3");
var r1s=$(".r1");
for (var i = 0; i < d3s.length; i++) {
  d3s[i].index=i;
  d3s[i].onmouseover=function(){
    r1s[this.index].style.display="block";
    // animate(r1s[this.index],{width:0},100)
    
  }
  d3s[i].onmouseout=function(){
    r1s[this.index].style.display="none";
    
  }
};
var d4s=$(".d4");
var r2s=$(".r2");
for (var i = 0; i < d4s.length; i++) {
  d4s[i].index=i;
  d4s[i].onmouseover=function(){
    r2s[this.index].style.display="block";
 } 
  d4s[i].onmouseout=function(){
    r2s[this.index].style.display="none";
    
  }

}
var d5s=$(".d5");
var r5s=$(".r5");
for (var i = 0; i < d5s.length; i++) {
  d5s[i].index=i;
  d5s[i].onmouseover=function(){
    r5s[this.index].style.display="block";
 } 
  d5s[i].onmouseout=function(){
    r5s[this.index].style.display="none";
    
  }

}
})
$(function(){
  var r1=$(".danghang-r3");
  var r2=$(".danghang-r2");
  for (var i = 0; i < r1.length; i++) {
    r1[i].index=i;
    r1[i].onmouseover=function(){
    r2[this.index].style.display="block";
    r2[this.index].style.borderBottom="1px solid #e8e8e8";
    r2[this.index].style.borderLeft="1px solid #e8e8e8";
    r2[this.index].style.borderRight="1px solid #e8e8e8";


  }
  r1[i].onmouseout=function(){
    r2[this.index].style.display="none"


}
}
})
$(function(){
  

  $(".Tsgkuang  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".Tsgkuang1  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_2  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_3  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_4  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_5  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_6  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_7  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_8  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_9  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })
$(".ren_center_10  img").each(function(index){
    this.index=index
    $(this).hover(function(){
      $(this).siblings().css("opacity","1").end().css("opacity","0.8")
    },function(){
      $(this).css("opacity","1")
    })
    
  })

})

$(function(){
    var suning=$(".suning1");
    var suleft=$(".suningleft")[0];
    var suright=$(".suningright")[0];
       for (var i = 0; i < suning.length; i++) {
         suning[i].index=i;
         suning[i].onmouseover=function(){
          suleft.style.display="block";
          suright.style.display="block";
         }
         suning[i].onmouseout=function(){
          suleft.style.display="none";
          suright.style.display="none";
         }
  };
  })
// 左下边的固定定位图片切换
   $(function(){

    var fl=$(".floor")[0];
    var floors=$(".floor1");
    var floorword=$(".floorword");
window.onscroll=function(){
  var fl1=document.documentElement.scrollTop;
  if(fl1>=800){
    fl.style.display="block";
  }
  if(fl1<900){
    fl.style.display="none"
  }
}
    for (var i = 0; i < floors.length; i++) {
      floors[i].index=i;
      for (var j = 0; j <floorword.length; j++) {
        floorword[j].index=i;
      floors[i].onmouseover=function(){   
           floorword[this.index].style.display="block";
 }
 floors[i].onmouseout=function(){
      floorword[this.index].style.display="none";
 }
      }
    }
   })
   
 
$(function(){
  // 楼层跳转
  var jump1=$(".jump",$(".floor")[0]);
  // 楼层
var jump2=$(".renbig");
for (var i = 0; i < jump1.length; i++) {
 

    jump1[i].aa=jump2[i].offsetTop+(-50);
    jump1[i].onclick=function(){
        if(document.documentElement.scrollTop==0){
            document.documentElement.scrollTop=1
        }
        var obj=document.documentElement.scrollTop!=0?
        document.documentElement:document.body;
        animate(obj,{scrollTop:this.aa},500)
    }
}
})
        