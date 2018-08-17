<?php
	//设置页面内容是html编码格式
	header("Content-Type:text/plain;charset=utf-8");
	//定义一个多维数组，包含员工的信息，每条员工信息为一个数组
	$staff = array(
		array("name"=>"洪七","number"=>"101","sex"=>"男","job"=>"总经理"),
		array("name"=>"郭靖","number"=>"102","sex"=>"男","job"=>"开发工程师"),
		array("name"=>"黄蓉","number"=>"103","sex"=>"女","job"=>"产品经理")
	);
	//判断如果是get请求，则进行搜索；如果是post请求，则进行新建
	//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
	//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
	if($_SERVER["REQUEST_METHOD"]=="GET"){
		search();
	}elseif($_SERVER["REQUEST_METHOD"]=="POST"){
		create();
	}
	
	//通过员工编号搜索员工
	function search(){
		//检查是否有员工编号的参数
		//isset检测变量是否设置  empty判断是否为空
		//超全局变量$_GET 和 $_POST用于收集表单数据
		if(!isset($_GET["number"]) || empty($_GET["number"])){
			echo "参数错误"
			return
		}
	}
	
?>