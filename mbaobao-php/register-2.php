<?php
//设置编码
header("Content-type: text/html; charset=utf-8"); 
//后端允许跨域
header("Access-Control-Allow-Origin: *");

if($_POST['user']){
		
	//获取表单提交的内容放在数据库   放在文件里面
	
	$user=$_POST['user'];
	$password=$_POST['password'];
	
	
		
		//FILE_APPEND 追加
		//$content.PHP_EOL 换行
//		file_put_contents('userInfo.txt',$user.PHP_EOL,FILE_APPEND);
		
		file_put_contents('userInfo.txt','{user:'.$user.',password:'.$password.'},',FILE_APPEND);
		$arr=array(
			'msg'=>true,
			'message'=>'注册成功'			
		);
		
		echo json_encode($arr);		

	
}else{
	$arr=array(
			'msg'=>false,
			'message'=>'注册失败'			
		);
		
	echo json_encode($arr);
}
//$arr=array(
//			'msg'=>true,
//			'message'=>'注册成功'			
//		);
//		
//		echo json_encode($arr);	
?>