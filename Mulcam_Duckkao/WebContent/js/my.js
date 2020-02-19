$(document).ready(function(){
	$(document).on("click","#logout", function(){
		alert('안녕하세요!');
		let temp={
			sign:"logout"
		};
		let jsonOBJ=JSON.stringify(temp);
		

		$.ajax({url:"main", 
			type:"POST", 
			data:jsonOBJ, 
			dataType:"json",
			success:function(returnData){
				if(returnData.resultCode==1){
					alert(returnData.message);
					//$('#login_b').val("로그아웃");
					$('#login_Main').text("로그아웃");
				}else if(returnData.resultCode==0){
					alert(returnData.message);
				}
			
				/*
				if(returnData.result==1){
					$("#login").html(jsonObj.message+"<br><input type='button' value='logout'/>");
				}else if(jsonObj.result==2){
					alert(returnData.message);
				} */
			},
	        error:function(err) {
				//alert('Ajax readyState: '+xhr.readyState+'\nstatus: '+xhr.status + ' ' + err);
				alert(err);
	        }
		});  
	})
	//alert('a:b');
	/*
	$('#login').click(function(){    //동적으로 로그인 페이지를 만드는 곳
		//alert();
		let login_html_content='<h1>로그인</h1>';
		login_html_content+="<hr><form action='' method='get'>";
		login_html_content+="ID<input id='form_id'><br>";
		login_html_content+="PW<input type='password' id='form_pw'>";
		login_html_content+="<input type='button' value='login' id='login_b'></form>";
		$('#content').html(login_html_content);
	});            */

	$(document).on("click","#login_Main",function(){
		let id_val=$('#form_id').val();
		let pw_val=$('#form_pw').val();
		let temp={
			"id":id_val,   // "변수명":값 json에서는 변수명도 있지만 값에 대한 "키"라고 부른다.
			"pw":pw_val
			
		};
		var jsonOBJ=JSON.stringify(temp);  //javascript 객체를 json으로 바꿔주는 메서드
		//alert(id+":"+pw);
		
		//alert(jsonOBJ);

		
		$.ajax({url:"main", 
			type:"POST", 
			data:jsonOBJ, 
			dataType:"json",
			success:function(returnData){
				if(returnData.resultCode==1){
					alert(returnData.message);
					//$('#login_b').val("로그아웃");
					$('#login_Main').text("로그아웃");
				}else if(returnData.resultCode==0){
					alert(returnData.message);
				}
			
				/*
				if(returnData.result==1){
					$("#login").html(jsonObj.message+"<br><input type='button' value='logout'/>");
				}else if(jsonObj.result==2){
					alert(returnData.message);
				} */
			},
	        error:function(err) {
				//alert('Ajax readyState: '+xhr.readyState+'\nstatus: '+xhr.status + ' ' + err);
				alert(err);
	        }
		});  


	});
});
