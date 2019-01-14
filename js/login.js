window.onload=function(){
	var dl=document.getElementsByClassName("login-box")[0];
	var dl1=document.getElementsByClassName("login-box1")[0];
	dl.onclick=function(){
		dl.style.borderBottom="3px solid #10b041";
		dl.style.color="#10b041";
		dl1.style.borderBottom="1px solid gainsboro";
		dl1.style.color="black";
	}
	dl1.onclick=function(){
		dl1.style.borderBottom="3px solid #10b041";
		dl1.style.color="#10b041";
		dl.style.borderBottom="1px solid gainsboro";
		dl.style.color="black";
	}


}
