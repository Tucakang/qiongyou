$(function(){
	function moren(sj){
			var htm="";
					for(let i=0;i<sj.length;i++)
					{
						var str=`<div class="imggg"><img src="${sj[i].img}" /> </div><span class="font-list">非自营</span><div class="fenge"></div><p class="intrduce">${sj[i].font}</p><span class="prices1">￥${sj[i].price}</span><br /><button class="bt">加入购物车</button><img src="../xiangqing/3331.png" class="tutu" /><span class="shouchang">收藏</span>`
					$(".img-list").eq(i).html(str);
					}
		}
function sortArr(arr){

		// 1，价格降序排
        for(var i=0;i<arr.length-1;i++){
            //比对的次数；
            for(var j=0;j<arr.length-i-1;j++){
            	console.log(i,j,j+1)
                var temp;
                if(parseInt(arr[j].price) < parseInt(arr[j+1].price)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        
        moren(arr);
       
	}
}
function sortAtt(arr){

		// 1，价格剩序排
        for(var i=0;i<arr.length-1;i++){
            //比对的次数；
           for(var i=0;i<arr.length-1;i++){
            //比对的次数；
            for(var j=0;j<arr.length-i-1;j++){
            	console.log(i,j,j+1)
                var temp;
                if(parseInt(arr[j].price) > parseInt(arr[j+1].price)){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        moren(arr)
       
	}
}
$.ajax({
				url:"http://127.0.0.1/web04/item one/js/siku.json",
				type:"post",
				dataType:"json",
				success:function(res){
					console.log(res);
					moren(res.siku);
					// sortArr(res.siku);
					
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
$(".jiage").click(function(){
	$.ajax({
				url:"http://127.0.0.1/web04/item one/js/siku.json",
				type:"post",
				dataType:"json",
				success:function(res){
					console.log(res);
					// moren(res.siku);
					sortArr(res.siku);
					
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
	$(".jia").click(function(){
	$.ajax({
				url:"http://127.0.0.1/web04/item one/js/siku.json",
				type:"post",
				dataType:"json",
				success:function(res){
					console.log(res);
					// moren(res.siku);
					sortAtt(res.siku);
					
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
