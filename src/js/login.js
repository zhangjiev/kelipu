$("#login-btn").click(function(){
			
			$.ajax({
				url:"http://www.liyangyf.com/ctrl/login.php",
				data:{
					user:$("#user").val(),
					pass:$("#pass").val(),
				},
				success:function(res){
					$(".Popup")[0].style.display = "block";										
					switch(res){
						case "0":
							$(".Popup")[0].innerHTML = "用户名和密码错误";
							break;
						case "1":
							$(".Popup")[0].innerHTML = "用户名密码为空，并且客户端没有cookie";
							break;
						default:
							res = JSON.parse(res)
							console.log(res)
							$(".Popup")[0].innerHTML = "欢迎" + res.user + "登录本系统";
							setTimeout(function(){
								location.href = "index.html"										
							},2000)
					}
					setTimeout(function(){
						$(".Popup")[0].style.display = "none"										
					},2000)
				},
			})
			
		})