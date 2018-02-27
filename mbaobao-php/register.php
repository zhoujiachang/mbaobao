<?php

header("Content-type: text/html; charset=utf-8");
	
header('Access-Control-Allow-Origin: *');
	
	if($_POST){
		//连接数据库
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname ="mbaobao";
		
		$conn = mysqli_connect($servername, $username, $password,$dbname);
		// 检测连接
		if (!$conn) {
		    die("连接失败: " . mysqli_connect_error());

		}
//		$user=13500001;
//		$password='ssssss';
		$user=$_POST['user'];
		if(!empty($_POST['password']) ){
			$password=$_POST['password'];
		}

		$info="SELECT * FROM user_info WHERE user='$user'";

		$query=mysqli_query($conn,$info);
		$rows=mysqli_fetch_array($query);
		if($rows){
			$message=array(
				'msg'=>false,
				'message'=>'用户已存在'
			);
		}else{
			$message=array(
				'msg'=>true,
				'message'=>'用户不存在'
			);
			if($password){
				$sql = "INSERT INTO user_info (user, password)
				VALUES ('".$user."','".$password."')";
				if (mysqli_query($conn, $sql)) {
				    $message=array(
					'msg'=>true,
					'message'=>'注册成功'
					);
				}else {
				    $message=array(
					'msg'=>false,
					'message'=>'注册失败'
					);
				}
			}
			
		}
		
		
   		echo json_encode($message);
		
		mysqli_close($conn);
	
	}



?>