$(function(){
	function moren(sj){
			var htm="";
					for(let k=0;k<sj.length;k++)
					{
						var str=`<li><img width="275" height="185" class="zw-module-smallcard-itemimg"src="${sj[k].img}"><div class="zw-module-sort-qyer-rmd"></div><div class="zw-module-smallcard-mask"><div class="zw-module-smallcard-mask-inner clearfix"><div class="smallcard-mask-title">交通票券 / 城市通票 | 日本</div><div class="zw-module-smallcard-mask-inner-right"><div class="zw-module-smallcard-sold"><p class="sold"><span>已售</span><span	class="num">${sj[k].shouchu}</span><span>件</span></p></div></div></div></div><h2>${sj[k].font}</h2><div class="zw-module-smallcard-infobar smallcard clearfix"><p class="zw-module-smallcard-price"><em>${sj[k].price}</em>元起</p></div></li>`
						htm += str
					
					}
				$(".zw-module-smallcard-list").html(htm);
		}
function sortArr(arr){

		// 1，价格降序排
        for(var i=0;i<arr.length-1;i++){
            //比对的次数；
            for(var j=0;j<arr.length-i-1;j++){
//          	console.log(i,j,j+1)
                var temp;
                if(parseInt(arr[j].shouchu) < parseInt(arr[j+1].shouchu)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        
        moren(arr);
       
	}
}
//function sortAtt(arr){
//
//		// 1，价格升序排
//      for(var i=0;i<arr.length-1;i++){
//          //比对的次数；
//         for(var i=0;i<arr.length-1;i++){
//          //比对的次数；
//          for(var j=0;j<arr.length-i-1;j++){
//          	console.log(i,j,j+1)
//              var temp;
//              if(parseInt(arr[j].price) > parseInt(arr[j+1].price)){
//                  temp=arr[j];
//                  arr[j]=arr[j+1];
//                  arr[j+1]=temp;
//              }
//          }
//      }
//      moren(arr)
//     
//	}
//}
$.ajax({
				url:"http://127.0.0.1/web04/qiongyou/js/qiongyou.json",
				type:"post",
				dataType:"json",
				success:function(res){
//					console.log(res);
					moren(res.qiongyou);
//					console.log(res.qiongyou);
					
					
				},
				error:function(err){
					//获取失败时
					console.log(err);
				}
		})
//$("#sort_sales a").click(function(){
//	$.ajax({
//				url:"http://127.0.0.1/web04/qiongyou/js/qiongyou.json",
//				type:"post",
//				dataType:"json",
//				success:function(res){
//					console.log(res);
//					// moren(res.siku);
//					sortArr(res.qiongyou);
//					
//				},
//				error:function(err){
//					//获取失败时
//					console.log(err);
//				},
//				complete:function(){
//					//无论成功与失败，均会执行
//					console.log("ajax完成");
//				}
//		})
//})
	$("#sort_sales a").click(function(){
		console.log("a");
	$.ajax({
				url:"http://127.0.0.1/web04/qiongyou/js/qiongyou.json",
				type:"post",
				dataType:"json",
				success:function(res){
					console.log(res);
					// moren(res.siku);
					sortArr(res.qiongyou);
					
				},
				error:function(err){
					//获取失败时
					console.log(err);
				},
				complete:function(){
					//无论成功与失败，均会执行
					console.log("ajax完成");
				}
		})
})
})
