

/**
 * @file simple_hacking.js
 * @author Desgard_Duan
 * @email gua@desgard.com
 * @source 来自 MMG 学长的思路，自己又重写了几个地方。
 */

/**
 * @description 重写 OutMessage() 非必需
 * @see line:17
 * @author: MMG
 */


function OutMessage() {
	document.getElementById("message").style.display = "";
	document.getElementById("block").style.display = "";
	run = true;
	cTime = 10;
	line = false;
	TimeClose();
}

function TimeClose() {
	if (run) {
		window.setTimeout("TimeClose()", 1000);
		if (cTime == -1) {
			is_upload = 3;
			random = -1;
			HiddenMessage();
			UpdateUserTime();
		}
		document.getElementById("showtime").innerHTML = cTime;
		cTime--;
	}
}

function updateUserData() {
	var state_id = xmlHttp.responseXML.getElementsByTagName("select_state")[0].firstChild.nodeValue;
	var select_message = xmlHttp.responseXML.getElementsByTagName("select_message")[0].firstChild.nodeValue;
	//HiddenMessage();
	if (state_id == "0") {
		alert(select_message + "，如果连续弹出该对话框说明没有计时，第一重新登录，第二请使用IE或Chrome浏览器，请勿使用360浏览器。");
		window.setTimeout("UpdateUserTime()", 10000);
	} else if (state_id == "2") {
		alert(select_message + "，本次计时已结束，页面将关闭，如需继续观看本视频请重新打开网页");
		window.close();
	} else if (state_id == "3") {
		console.log("本次计时结束，将会开始新的计时");
		window.is_upload = 0; 
		reWriteCONST();
		line = true;
		UpdateUserTime();
	} else {
		sid = select_message;
		is_upload = 1;
		document.getElementById("ranstring").value = "";
		GetPhotoAgain();
		FromUserLogin();
	}
}

var reWriteCONST = function() {
	window.random = 450; 
	console.log("Bingo~");
}
setTimeout(reWriteCONST, 5000);

function StopVideo() {
	ret = true;
	if (ret) {
		is_upload = 3;
		random = -1;
		UpdateUserTime();
	}
}

/**
 * @description: 前台显示，友好相关
 */
alert("冬瓜：成功载入脚本")
document.getElementById("viewTitle").innerHTML = "<div><font color='red'>已将脚本覆盖成功。</font></div>";

var inps = document.getElementsByTagName('input');
for (var i = 0; i < inps.length; i++) {
	if (inps[i].name == 'btn1') {
		inps[i].value = "手动计时按钮";
		break;
	}
}

// document.getElementsByClassName("listCourseRightTitle")[1].innerHTML = "插件功能说明";
// document.getElementsByClassName("listCourseRightContent")[0].innerHTML = "<p>1.点击<font color='red'>手动计时</font>按钮会自动在学时上刷新当前观看时间，且不会使得" +
"计时结束。<p>2.每次弹出验证码窗口的时候，不必填写验证码。等时间结束后自动计时。</p>" +
"<hr /><p><font size='3px'  face='微软雅黑'>如果还有疑问请访问：<a href='http://www.desgard.com'>desgard.com</a>向我进行留言。</font></p><img src='http://www.desgard.com/public/img/Desgard_Duan.jpg'>"