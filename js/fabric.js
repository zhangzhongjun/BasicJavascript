<script id="main">
		(function (){
			 
		  var canvas = this.__canvas = new fabric.canvas('c', { selection: false }),
		  	  mouseX ,mouseY; //鼠标位置
		  	  canvas.isDrawingMode = false;
		  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
		  //fabric.Object.prototype.originX = 1920;
		  //fabric.Object.prototype.originY = 100;
		  
		  
		  var res_no = {};
		  var nodeArr =  [
				 //第一层
				 {
			 
					res_no : 1001,      //资源号
					res_type:'S',       //资源类型
					parent_element:null,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数
						
					parentId:null ,
					selfId :1 
				},
				//第二层
				{
	 
					res_no : 1002,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数
						
					parentId:1,
					selfId :2,
					
				},
				//第二层
				 {
	 
					res_no : 1003,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:1,
					selfId :3 
				},
				//第三层
				 {
 
					res_no : 1004,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:2,
					selfId :4
				},
				//第三层
				 {
 
					res_no : 1005,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:2,
					selfId :5
				} ,
				
				//第三层
				{
 
					res_no : 1006,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:3,
					selfId :6
				} ,
				//第三层
				{
 
					res_no : 1007,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:3,
					selfId :7
				} ,
				//第四层
				{
 
					res_no : 1008,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:4,
					selfId :8
				} ,
				{
 
					res_no : 1009,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:4,
					selfId :9
				} ,
				{
 
					res_no : 1010,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:6,
					selfId :10
				} ,
				
				{
 
					res_no : 1011,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:7,
					selfId :11
				} ,
				
				//第五层
				{
 
					res_no : 1012,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:9,
					selfId :12
				} ,
				{
					res_no : 1013,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:9,
					selfId :13
				} ,
				
				{
					res_no : 1014,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:11,
					selfId :14
				} ,				
				{
 
					res_no : 1015,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:11,
					selfId :15
				} ,
				
				{
 
					res_no : 1016,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:14,
					selfId :16
				} ,
				{
 
					res_no : 1017,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:14,
					selfId :17
				} ,
				
				
				{
 
					res_no : 1018,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:15,
					selfId :18
				} ,
				{
 
					res_no : 1019,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:15,
					selfId :19
				} ,
				
				{
 
					res_no : 1020,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:16,
					selfId :20
				} ,
				{
 
					res_no : 1021,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:16,
					selfId :21
				} ,
				
				
				{
 
					res_no : 1022,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:17,
					selfId :22
				} ,
				{
 
					res_no : 1023,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:17,
					selfId :23
				} ,
				
				
				
				{
 
					res_no : 1024,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:18,
					selfId :24
				} ,
				{
 
					res_no : 1025,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:18,
					selfId :25
				} ,
				
				{
 
					res_no : 1026,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:19,
					selfId :26
				} ,
				{
 
					res_no : 1027,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:19,
					selfId :27
				} ,
				
				
				{
 
					res_no : 1028,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:7,
					selfId :28
				} ,
				{
 
					res_no : 1029,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:28,
					selfId :29
				} ,
				
				{
 
					res_no : 1030,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:28,
					selfId :30
				} ,
				
				{
 
					res_no : 1031,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:29,
					selfId :31
				} ,
				
				{
 
					res_no : 1032,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:30,
					selfId :33
				} ,
				{
 
					res_no : 1033,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:30,
					selfId :34
				} ,
				
				{
 
					res_no : 1034,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:29,
					selfId :32
				} ,
				{
 
					res_no : 1035,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:31,
					selfId :35
				} ,
				
				{
 
					res_no : 1036,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:31,
					selfId :36
				} ,
				
				{
 
					res_no : 1037,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:20,
					selfId :37
				} ,
				
				{
 
					res_no : 1038,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:20,
					selfId :38
				} , 
				
				
				{
 
					res_no : 1039,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:21,
					selfId :39
				} ,
				
				{
 
					res_no : 1040,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:21,
					selfId :40
				} , 
				
				{
 
					res_no : 1041,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:22,
					selfId :41
				} ,
				
				{
 
					res_no : 1042,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:22,
					selfId :42
				} ,
				
				
				{
 
					res_no : 1043,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:27,
					selfId :43
				} ,
				
				{
 
					res_no : 1044,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:27,
					selfId :44
				} ,
				
				{
 
					res_no : 1045,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:35,
					selfId :45
				} ,
				
				{
 
					res_no : 1046,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:6,
					selfId :46
				} ,
				
				
				{
 
					res_no : 1047,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:10,
					selfId :47
				} ,
				
				{
 
					res_no : 1048,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:10,
					selfId :48
				} ,
				{
 
					res_no : 1049,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:47,
					selfId :49
				} ,
				
				
				{
 
					res_no : 1050,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:49,
					selfId :50
				} ,
				
				{
 
					res_no : 1051,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:49,
					selfId :51
				} ,
				
				
				{
 
					res_no : 1052,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:50,
					selfId :52
				} ,
				
				
				{
 
					res_no : 1053,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:46,
					selfId :53
				} ,
				
				{
 
					res_no : 1054,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:46,
					selfId :54
				} ,
				
				{
 
					res_no : 1055,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:54,
					selfId :55
				} ,
				
				{
 
					res_no : 1056,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:54,
					selfId :56
				} ,
				
				
				{
 
					res_no : 1057,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:56,
					selfId :57
				} ,
				
				{
 
					res_no : 1058,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:56,
					selfId :58
				} ,
				
				{
 
					res_no : 1059,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:58,
					selfId :59
				} ,
				
				{
 
					res_no : 1060,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:58,
					selfId :60
				} ,
				
				
				{
 
					res_no : 1061,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:34,
					selfId :61
				} ,
				
				{
 
					res_no : 1062,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:34,
					selfId :62
				} ,
				
				{
 
					res_no : 1063,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:62,
					selfId :63
				} ,
				
				{
 
					res_no : 1064,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:62,
					selfId :64
				} ,
				
				
				{
 
					res_no : 1065,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:23,
					selfId :65
				} ,
				
				{
 
					res_no : 1066,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:23,
					selfId :66
				} ,
				
				{
 
					res_no : 1067,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:24,
					selfId :67
				} ,
				
				{
 
					res_no : 1068,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:24,
					selfId :68
				} ,
				
				{
 
					res_no : 1069,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:8,
					selfId :69
				} ,
				
				{
 
					res_no : 1070,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:69,
					selfId :70
				} ,
				
				{
 
					res_no : 1071,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:70,
					selfId :71
				} ,
				
				
				{
 
					res_no : 1072,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:71,
					selfId :72
				} ,
				
				{
 
					res_no : 1073,    //资源号
					res_type:'S',       //资源类型
					parent_element:res_no,//父元素
					left_p:0,           //左边积分数
					rigth_p:0,          //右边积分数
					left_s:0,           //左边点个数
					right_s:0,          //右边点个数
					child_s:0,          //子节点个数
					bmlm_base:0,        //再增值产考基数
					level:1,            //展现的层数	
					parentId:71,
					selfId :73
				} ,
				
				

			]  ; 
		  
		  
		  //设置鼠标位置
		  function mousePosition(ev){ 
				if(ev.pageX || ev.pageY){ 
					return {x:ev.pageX, y:ev.pageY}; 
				} 
				return { 
					x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
					y:ev.clientY + document.body.scrollTop - document.body.clientTop 
				}; 
		  } 
		  document.onmousemove = function(ev){
		  		var mousePos = mousePosition(ev); 
					mouseX = mousePos.x; 
					mouseY = mousePos.y;
					//console.log(mouseX +' | '+mouseY); 
		  }; 
		   
		  
		  var createNode = function(nodeObj){
			    //console.log(nodeObj.index)
				var node = new fabric.Circle({
					  left: nodeObj.x ,
					  top:  nodeObj.y ,
					  strokeWidth: 0 ,
					  radius: 10 ,
					  fill: '#666' ,
					  stroke: '#666'
				}) ; 
				node.hasControls = node.hasBorders = false;
				node.lockMovementY = node.lockMovementX = true;
				node.hoverCursor = "pointer";
				//节点信息
				node.res_no = nodeObj.res_no;          //资源号
				node.res_type=nodeObj.res_type;        //资源类型
				node.parent_element=nodeObj.parent_element;//父元素
				node.left_p=nodeObj.left_p ;           //左边积分数
				node.rigth_p=nodeObj.rigth_p ;          //右边积分数
				node.left_s=nodeObj.left_s ;           //左边点个数
				node.right_s=nodeObj.right_s ;          //右边点个数
				node.child_s=nodeObj.child_s ;          //子节点个数
				node.bmlm_base=nodeObj.bmlm_base ;        //再增值产考基数
				node.level=nodeObj.level ;            //展现的层数	
				node.parentId=nodeObj.parentId ;
				node.selfId =nodeObj.selfId ;
				node.leftId =nodeObj.leftId ;
				node.rightId =nodeObj.rightId ;
				node.on('mouseover',function(){
					//判断弹出框是否超过浏览器最底端
					var posX =this.left ,posY=this.top  ;
					//console.log(   mouseY +'  -  '+ this.top);
				 	(document.body.clientWidth  - mouseX  < 228) && (posX = mouseX  -300) ; 	
					(document.body.clientHeight - mouseY  < 320) && (posY = this.top  -(300-document.body.clientHeight + mouseY)) ;
					
					
					var x = posX ,
						y = posY ,
						div = document.getElementById('pop'),
						p1  = document.getElementById('p1'),
						p2  = document.getElementById('p2'),
						p3  = document.getElementById('p3'),
						p4  = document.getElementById('p4'),
						p5  = document.getElementById('p5'),
						p6  = document.getElementById('p6'),
						p7  = document.getElementById('p7'); 
					div.style.display = "block";
					div.style.top = y+'px' ;
					div.style.left= (x+20)+'px' ;
					p1.innerHTML = this.res_no ;	
					p2.innerHTML = this.res_type;	
					p3.innerHTML = '';	
					p4.innerHTML = this.left_p;	
					p5.innerHTML = this.rigth_p;	
					p6.innerHTML = this.left_s;	
					p7.innerHTML = this.right_s;	
					p8.innerHTML = this.child_s;	
					p9.innerHTML = this.bmlm_base;	
					p10.innerHTML = this.level;	
				
				});
				/*
				node.on('mouseout',function(){
					var div = document.getElementById('pop');
						div.style.display = "none";
				});
				*/
				node.on('object:dblclick',function(){
					nodeArr.forEach(function(nodeObj){
						nodeObj.leftId = null;
						nodeObj.rightId = null;
						nodeObj.currLevel= null;
					});
					
					
					//nodeArr[i].leftId = nodeArr[i].rightId = null ;
					for(var i=0 ;i<nodeArr.length ;i++){
						
						if (nodeArr[i].selfId == this.selfId ){	 
							//debugger
							canvas.clear();	
							
							nodeArr[i].x = 1720;
							nodeArr[i].y = 50  ;
							nodeArr[i].currLevel = 1;			 
							createNode(nodeArr[i]);
							drawNode(nodeArr[i]);
							break;
						}
					}
					//drawNode();
					
				});
				
				
					 
				//return node;	
				//console.log(node.selfId)
				var text = new fabric.Text(""+node.selfId, { 
					left: nodeObj.x, 
					top: nodeObj.y + 2 ,
					fill: '#fff' ,
					fontSize:10  
			 
				});
				text.hasControls = text.hasBorders = false;
				text.lockMovementY = text.lockMovementX = true;
				text.hoverCursor = "pointer"; 
				canvas.add( node  );
					  
		  };
		  
		  
		  function windowTocanvas(canvas, x, y) {
				var bbox = canvas.getBoundingClientRect();
				return {
				  x: x - bbox.left * (canvas.width / bbox.width), 
				  y: y - bbox.top * (canvas.height / bbox.height)
				}; 
		  }
		  
		  
	 	  var posOffset = [
		  		//[640,150],
				//[320,120],
				//[160,100],
				//[80 ,80 ],
				//[40 ,50 ]
				[0,0],
				[832,160],
				[416,120],
				[208 ,100 ],
				[104 ,90 ] ,
				[52 ,80 ] ,
				[26 ,70] ,
				[13 ,50] 
		  ] ;
		  
		  function drawNode(node){
			   
			  	var selfFn = arguments.callee; 
			    if ( node ) { 
				    
					var nodeLeft = null ,nodeRight = null ;
					//取当前对象的左，右子对象
					for(var i = 0 ;  i< nodeArr.length ;i++ ){	
					    				
						if 	( nodeArr[i].parentId  == node.selfId &&  node.leftId ==null ){
							//设置此节点对应的左子对象Id
							node.leftId = nodeArr[i].selfId;
							//设置节点当前层数
							nodeArr[i].currLevel = node.currLevel+ 1 ;
							//设置节点坐标
							nodeArr[i].x = node.x -  posOffset[node.currLevel][0] ;
							nodeArr[i].y = node.y +  posOffset[node.currLevel][1] ;
							
							nodeLeft = nodeArr[i] ;
							//console.log('left:'+i);
						 
							//画节点间连线
							var line = drawLine([node.x,node.y,nodeLeft.x,nodeLeft.y]);
							canvas.add(line);
							//创建节点
							createNode(nodeLeft)
							 
							
						} else if (nodeArr[i].parentId  == node.selfId &&  node.rightId==null ){
							//设置此节点对应的右子对象Id
							node.rightId = nodeArr[i].selfId;
							//设置节点当前层数
							nodeArr[i].currLevel = node.currLevel+ 1;
							//设置节点坐标
							nodeArr[i].x = node.x +  posOffset[node.currLevel][0]  ;
							nodeArr[i].y = node.y +  posOffset[node.currLevel][1] ;
							 
							nodeRight = nodeArr[i] ;
							//console.log('right:'+i);
						 
							//画节点间连线
							var line = drawLine([node.x,node.y,nodeRight.x,nodeRight.y]);
							canvas.add(line);
							//创建节点
							createNode(nodeRight)
						 
						}
					}
					//判断当前对象是否有左，右子对象
					if (nodeLeft ) {
						drawNode(nodeLeft)
					};
					
					if (nodeRight) {
						drawNode(nodeRight)
					};	
				
				} else {
					//第一层					 
					for(var i = 0 ; i< nodeArr.length ;i++){						
						if 	( nodeArr[i].parentId == null ){
							//console.log('parentId:'+nodeArr[i].parentId)
							//从原数据对象删除第一层对象
							//var newNode = nodeArr.slice(i,i+1);
							nodeArr[i].x = 1720;
							nodeArr[i].y = 50;
							nodeArr[i].currLevel = 1;
							//创建节点
							createNode(nodeArr[i]);
							selfFn(	nodeArr[i]) ;
							break;
							 
						}
					}
				} 
		  }
		  
		  function drawLine(coords){
			  //console.log(coords)
			  //画节点之间的连线
			  var line = new fabric.Line(coords, {
				  fill: 'red',
				  stroke: 'red',
				  strokeWidth: 3,
				  selectable: false,
				  globalCompositeOperation:'destination-over'
			  });			  
			  return line;
		  }
		  
		  canvas.on('mouse:down',function(){
			  var div = document.getElementById('pop') ;
			  	  div.style.display = 'none';
			  
		  });
	 
		  //绘制所有的节点	
		  drawNode();

		})() ;
	</script>