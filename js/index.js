window.onload=function(){
	var boder = document.getElementsByClassName("boder");
	for(var i = 0; i<boder.length;i++){ 
			boder[i].index=i;
			boder[i].onmouseenter=function(){
			var ind=this.index;
			console.log(ind)
			boder[ind].style.borderTop="3px solid white";
			boder[ind].style.transition="all 1s"
		}
			boder[i].onmouseleave=function(){
			var ind=this.index;
			console.log(ind)
			boder[ind].style.borderTop="none";
			boder[ind].style.transition="all 1s"
		}
		}
		var tmenu=document.getElementById("tmenu");
		var three=document.getElementsByClassName("head1-1-1")[0];
		tmenu.onmouseenter=function(){
			three.style.display="block";
		}
		tmenu.onmouseleave=function(){
			three.style.display="none";
		}
		var oScreen = document.querySelector(".banner");
		var oImgs = document.querySelectorAll(".imgBox");
		var oBtns = document.querySelectorAll(".btns span");
		var oLeft = document.querySelector(".left");
		var oRight = document.querySelector(".right")
		var index = 0;
		var timer;
		
		function changeImg(currentIndex){
			index = currentIndex;
			// 检测右边界
			if( index >= oImgs.length ){
				index = 0
			}
			//检测左边界
			if( index <= -1 ){
				index = oImgs.length-1
			}
			for(let i = 0 ; i < oImgs.length ; i++){
				oImgs[i].style.opacity = "0"
				// oImgs[i].style.transform = "rotate(-360deg)"
				oBtns[i].setAttribute("class","");
			}
			oImgs[index].style.opacity = "1"
			// oImgs[index].style.transform = "rotate(360deg)"
			oBtns[index].setAttribute("class","active");
		}
		
		for( let i = 0 ; i < oBtns.length ; i++ ){
			oBtns[i].onclick = function(){
				changeImg(i)
				console.log(index)
			}
		}
		
		function autoPlay(){
			timer = setInterval(function(){
				index++
				changeImg(index)
			},4000)
		}
		
		autoPlay()
		
		// 左右按钮的点击事件
		oRight.onclick = function(){
			index++
			console.log(index)
			
			changeImg(index)
		}
		
		oLeft.onclick = function(){
			index--
			console.log(index)
			
			changeImg(index)
		}
		
		oScreen.onmouseover = function(){
			clearInterval(timer)
		}
		oScreen.onmouseout = function(){
			autoPlay()
		}
		
		var Oul=$(".hotthread ul");
		var Ospan = $(".span-zh span");
		var index1 = 0;
		var timer1;
		
		function changeUl(UlIndex){
			index1 = UlIndex;
			// 检测右边界
			if( index1 >= Oul.length ){
				index1 = 0
			}
			//检测左边界
			if( index1 <= -1 ){
				index1 = Oul.length-1
			}
			for(let i = 0 ; i < Oul.length ; i++){
				Oul[i].style.display = "none"
				// oImgs[i].style.transform = "rotate(-360deg)"
				Ospan[i].setAttribute("class","");
			}
			Oul[index1].style.display = "block"
			// oImgs[index].style.transform = "rotate(360deg)"
			Ospan[index1].setAttribute("class","active1");
		}
		
		for( let i = 0 ; i < Ospan.length ; i++ ){
			Ospan[i].onmouseover = function(){
				changeUl(i)
				console.log(index1)
			}
		}
		
		//返回顶部
		  $(function(){

        $('.Return').hide();        //隐藏go to top按钮

        $(window).scroll(function(){
            // console.log($(this).scrollTop());

            //当window的scrolltop距离大于1时，go to 
            if($(this).scrollTop() > 400){
                $('.Return').fadeIn();
            }else{
                $('.Return').fadeOut();
            }
        });

        $('.ReturnTop').click(function(){
            $('html ,body').animate({scrollTop: 0}, 300);
            return false;
        });



    });
		}
