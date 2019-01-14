window.onload=function(){
	var phone=document.querySelector(".input-phone-error");
	var Otip=document.querySelectorAll(".tip");
	var oYh=document.querySelectorAll(".yh");
		var str="";
		var atr="0";
		var reg=/^[1-9]\d{10}$/;
		var reg1=/^[a-z0-9]{7,15}$/;
		phone.onblur=function(){

		str=phone.value;
		if (reg.test(str)) {

		Otip[0].innerHTML="";
		this.style.border="1px solid #cccccc"
		}
		else if(str==""){
			Otip[0].innerHTML="ⓘ输入手机号码";
			this.style.border="1px solid red"
		}
		else{
			this.style.border="1px solid red"

			Otip[0].innerHTML="ⓘ请输入正确的手机号";

		}

		}
		oYh[0].onblur=function(){

		str=oYh[0].value;

		if(str==""){
			Otip[3].innerHTML="ⓘ输入用户名";
			this.style.border="1px solid red"
		}
		else{
			Otip[3].innerHTML="";
			this.style.border="1px solid #cccccc"

		}


		}
		oYh[1].onblur=function(){

		str=oYh[1].value;
		if(reg1.test(str)) {

		Otip[4].innerHTML="";
		this.style.border="1px solid #cccccc"
		}
		else if(str==""){
			Otip[4].innerHTML="ⓘ输入密码";
			this.style.border="1px solid red"
		}
		else{
			this.style.border="1px solid red"

			Otip[4].innerHTML="ⓘ密码需要8-16位，包含数字和密码";

		}

		}
		var oYzm=document.querySelectorAll(".yzm");
		oYzm[0].onblur=function(){
			str=oYzm[0].value;

		if(str==""){
			this.style.border="1px solid red"
			Otip[1].innerHTML="ⓘ输入验证码";
		}
		else{
			Otip[1].innerHTML="";
			this.style.border="1px solid #cccccc"

		}
		}
		oYzm[1].onblur=function(){
			str=oYzm[1].value;

		if(str==""){
			this.style.border="1px solid red"
			Otip[2].innerHTML="ⓘ输入短信验证码";
		}
		else{
			Otip[2].innerHTML="";
			this.style.border="1px solid #cccccc"

		}
		}
		var oSub=document.querySelector(".submit");
		var oIn=document.querySelectorAll("input");
		oSub.onclick=function(){
			for(let i=0;i<oIn.length;i++)
			{
				if (oIn[i].value!="")
				{
				}
				else{
					oIn[0].focus();
				}
			}
		}

		$(".submit").click(function(){
				var username = $(".input-phone-error").val();
				var password = $(".yh").val();

				$.ajax({
				url:"https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a					3			6db68f5&phone=username&passwd=password",
				type:"get",
				success:function( res ){
					 console.log(res)
					if(res.code == 200){
						$("p").html(res.msg)
						window.open("../index.html")
					}else if( res.code == 202 ){
						alert(res.msg);
						// $("p").html(res.msg)
					}
				}
			})

		})
}
