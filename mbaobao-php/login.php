<?php
	header("Content-type: text/html; charset=utf-8");
	
	header('Access-Control-Allow-Origin: *');
	
	if($_POST){
		//连接数据库
		$servername = "localhost";
		$username = "root";
		$psd = "";
		$dbname ="mbaobao";
		
		$conn = mysqli_connect($servername, $username, $psd, $dbname);
		if (!$conn) {
		    die("连接失败: " . mysqli_connect_error());
		}
		//获取post过来的数据
		
//		$user='13500000000';
//		$password='123456ddf';
//		if(empty($password)){
//			if($user==13500000000){
//				echo 'vvvvkong';
//			}else{
//				echo 'xxx';
//			}
//			
//		}else{
//			if($user==13500000000){
//				if($password=='123456'){
//					echo 'vvvvvv';
//				}else{
//					echo 'yyyy';
//				}
//				
//			}else{
//				echo 'xxx';
//			}
//			
//		}


		$user=$_POST['user'];
		if(!empty($_POST['password']) ){
			$password=$_POST['password'];
		}
		
		$info="SELECT * FROM user_info WHERE user='$user'";
		$result=mysqli_query($conn, $info);
		if(empty($_POST['password'])){
			if($row=mysqli_fetch_array($result)){
				$message=array(
						'msg'=>true,
						'message'=>''
					);
			}else{
				$message=array(
					'msg'=>false,
					'message'=>'用户名不存在'
				);
			}
			
		}else{
			if($row=mysqli_fetch_array($result)){
				if( $password==$row['password']){
					$message=array(
						'msg'=>true,
						'message'=>'登录成功'
					);
				}else{
					$message=array(
						'msg'=>false,
						'message'=>'密码错误'
					);
				}
			}
			
			else{
				$message=array(
					'msg'=>false,
					'message'=>'用户名不存在'
				);
			}
		}
		
		echo json_encode($message);
	}
	
?>