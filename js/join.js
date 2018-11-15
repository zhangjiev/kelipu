$("#user").blur(function(){
	if($("#user").val() == ""){
		$(".p1").html("请输入内容");
		$(".join-layout .formDiv form>p .p1").css("color","red")
	}else if(!/@/.test($("#user").val()) || !/.com/.test($("#user").val())){
		$(".p1").html("请输入正确的邮箱格式");
		$(".join-layout .formDiv form>p .p1").css("color","red")
	}else{
		$(".p1").html("");		
	}
})
$("#user").focus(function(){
		$(".p1").html("账号邮箱作为登录账号，方便你接收订单通知，找回密码等");
		$(".join-layout .formDiv form>p .p1").css("color","#ccc")
})
$("#pass").blur(function(){
	if($("#pass").val() == ""){
		$(".p2").html("请输入内容");
		$(".join-layout .formDiv form>p .p2").css("color","red")
	}else if(!/[0-9a-zA-z]{6,16}/.test($("#pass").val())){
		$(".p2").html("请输入6-16位字母或数字");
		$(".join-layout .formDiv form>p .p2").css("color","red")
	}else{
		$(".p2").html("");				
	}
})
$("#pass").focus(function(){
		$(".p2").html("密码为6-16数字、字母，建议混合使用");
		$(".join-layout .formDiv form>p .p2").css("color","#ccc")
})
$("#pass2").blur(function(){
	if($("#pass2").val() == ""){
		$(".p3").html("请输入内容");
		$(".join-layout .formDiv form>p .p3").css("color","red")
	}else if($("#pass2").val() !== $("#pass").val()){
		$(".p3").html("输入的密码不一致");
		$(".join-layout .formDiv form>p .p3").css("color","red")
	}else{
		$(".p3").html("");		
	}
})
$("#pass2").focus(function(){
		$(".p3").html("密码为6-16数字、字母，建议混合使用");
		$(".join-layout .formDiv form>p .p3").css("color","#ccc")
})


//$("#join-btn").click(function(){
//
//	$.ajax({
//		url:"http://www.liyangyf.com/ctrl/register.php",
//		data:{
//			user:$("#user").val(),
//			pass:$("#pass").val(),
//			pass2:$("#pass2").val(),
//		},
//		success:function(res){
//		console.log($("#user").val())			
//			
//		console.log(res)			
//			$(".Popup")[0].style.display = "block"
//			switch(res){
//				case "0":
//					$(".Popup")[0].textContent = "你的用户名太火爆了，被抢先注册了，你再换一个吧";
//					break;
//				case "1":
//					$(".Popup")[0].textContent = "恭喜你注册成功，3秒之后跳转到登录";
//					setTimeout(function(){
//						location.href = "login.html";
//					},3000)					
//					break;
//				case "2":
//					$(".Popup")[0].textContent = "请至少输入用户名和密码";
//					break;
//			}


$("#join-btn").click(function(){
			
			$.ajax({
				url:"http://www.liyangyf.com/ctrl/register.php",
				data:{
					tel:$("#user").val(),
					pass:$("#pass").val(),
				},
				success:function(res){					
					$(".Popup")[0].style.display = "block"				
					
					switch(res){
						case "0":
							$(".Popup")[0].innerHTML = "你的用户名太火爆了，被抢先注册了，你再换一个吧";
							break;
						case "1":
							$(".Popup")[0].innerHTML = "恭喜你注册成功，3秒之后跳转到登录";
							setTimeout(function(){
								location.href = "login.html";
							},3000)
							break;
						case "2":
							$(".Popup")[0].innerHTML = "请至少输入用户名和密码";
							break;							
					}
					setTimeout(function(){
						$(".Popup")[0].style.display = "none"										
					},2000)
				},			
		
	})
})
