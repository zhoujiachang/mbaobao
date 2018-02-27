<?php

header("Content-type: text/html; charset=utf-8");
	
header('Access-Control-Allow-Origin: *');
	
//	if($_POST){
		//连接数据库
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname ="mbaobao";
		// 创建连接
		$conn = mysqli_connect($servername, $username, $password);
		// 检测连接
		if (!$conn) {
		    die("连接失败: " . mysqli_connect_error());

		}
		
//		$conn2 = mysqli_connect($servername, $username, $password ,$dbname);
//		echo !mysqli_select_db($conn,$dbname);
		if(!mysqli_select_db($conn,$dbname)){
				
			// 创建数据库
			$sql = "CREATE DATABASE mbaobao";
			if (mysqli_query($conn, $sql)) {
			    echo "数据库创建成功";
			} else {
			    echo mysqli_error($conn);
			}
			
			
		}else{
			$conn2=mysqli_connect($servername, $username, $password, $dbname);
			$result=mysqli_query($conn2,"select * from user_info");  //判断表是否存在
			
			if(!$result){
				
				$sql2 = "CREATE TABLE user_info(
					id int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					username VARCHAR(11) NOT NULL,
					password VARCHAR(20) NOT NULL

				)";
				
				
				if (mysqli_query($conn2, $sql2)) {
//					$id=1;
					$username='adf';
					$password='123';
					
//					$sql3 = "INSERT INTO user_info(username, password)
//					VALUES ('".$username."','".$password."')";
					$sql3 ="INSERT INTO user_info(username, password)
VALUES ('adf', '123')";
					
				    echo "注册成功";

				} else {
				    echo "Error: ";
				}
				
				echo " 表不存在!";
				mysqli_close($conn2);
				
			}else{
				$username='adf';
				$password='123';
//				$username=$_POST['user'];
//				$password=$_POST['password'];
				$sql3 = "INSERT INTO user_info (username, password)
				VALUES ('".$username."','".$password."')";
				if (mysqli_query($conn2, $sql3)) {
				    echo "注册成功2";
				} else {
				    echo "Error2: " ;
				}
				mysqli_close($conn2);
				echo '存在';
			}


			
			
			
			
			
		}
		
//		if (mysqli_query($conn, $sql)) {
//		    echo "数据库创建成功";
//		} else {
//		    echo mysqli_error($conn);
//		}
//		mysqli_close($conn);
//		
//		//创建表
//		
//		$conn2=mysqli_connect($servername, $username, $password, $dbname);
//		
//		if (!$conn2) {
//  		die("连接失败: " . mysqli_connect_error());
//		}
//		$sql2 = "CREATE TABLE user_info(
//			username INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//			password VARCHAR(20) NOT NULL
//		)";
//		if (mysqli_query($conn2, $sql2)) {
//		    echo "数据表创建成功";
//		} else {
//		    echo "创建数据表错误: " . mysqli_error($conn);
//		}
//		//插入数据
//		$username=$_POST['user'];
//		$password=$_POST['password'];
//		$sql3 = "INSERT INTO user_info (username, password)
//	VALUES ('".$username."','".$password."')";
//		if (mysqli_query($conn2, $sql3)) {
//		    echo "注册成功";
//		} else {
//		    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//		}
////		echo $username;
//		mysqli_close($conn2);
		
	
	
	
//	}
	


?>