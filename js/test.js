/*
 * description: 嵌入js，重写原函数
 */
var setTime = "1200";

var js = "";
js += 'function OutMessage() {' + 'document.getElementById("message").style.display = "";' + 'document.getElementById("block").style.display = "";' + 'run = true;' + 'cTime = 10;' + 'line = false;' + 'TimeClose();}'


js += 'function TimeClose() {' + 'var x = document.getElementById("message");' + 'var xx = x.childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[2];' + 'xx.innerHTML = "无需填写验证码，时间结束自动填写。么么哒！(づ￣3￣)づ╭❤～";' + 'if (run) {'

+ 'window.setTimeout("TimeClose()", 500);'


+ 'if (cTime == -1) {' + 'is_upload = 3;' + 'random = -1;' + 'HiddenMessage();' + 'UpdateUserTime();' + '}' + 'document.getElementById("showtime").innerHTML = cTime;' + 'cTime--;}}'

js += 'function updateUserData() {' + 'var state_id = xmlHttp.responseXML.getElementsByTagName("select_state")[0].firstChild.nodeValue;' + 'var select_message = xmlHttp.responseXML.getElementsByTagName("select_message")[0].firstChild.nodeValue;' + 'if (state_id == "0") {' + 'alert(select_message + "，如果连续弹出该对话框说明没有计时，第一重新登录，第二请使用IE或Chrome浏览器，请勿使用360浏览器。");' + 'window.setTimeout("UpdateUserTime()", 10000);' + '} else if (state_id == "2") {' + 'alert(select_message + "，本次计时已结束，页面将关闭，如需继续观看本视频请重新打开网页");' + 'window.close();' + '} else if (state_id == "3") {' + 'console.log("本次计时结束，将会开始新的计时");' + 'window.is_upload = 0;' + 'reWriteCONST();' + 'line = true;' + 'UpdateUserTime();' + '} else {' + 'sid = select_message;' + 'is_upload = 1;' + 'document.getElementById("ranstring").value = "";' + 'GetPhotoAgain();' + 'FromUserLogin();}}'

js += 'function reWriteCONST() {' + 'window.random = ' + setTime + ';' + 'console.log("Bingo~");}'

js += 'setTimeout(reWriteCONST,5000);' + 'console.log("冬瓜：成功载入脚本");'
js += 'function StopVideo() {' + 'ret = true;' + 'console.log("啦啦啦，计时成功咯！(⊙o⊙)");' + 'if (ret) {' + 'is_upload = 3;' + 'random = -1;' + 'UpdateUserTime();' + '}' + '}';
js += 'function updateTTime() {';
js += 'var inps = document.getElementsByTagName("input");' + 'if (inps != null) {' + 'for (var i = 0; i < inps.length; i++) {' + 'if (inps[i].name == "btn1") {' + 'inps[i].value = "还有"+random.toString()+"秒就弹窗了。";' + 'break;' + '}' + '}' + '}}';

js += 'setInterval(updateTTime,1000);'
/*
 * description: 界面修改，友好引导用户
 */

var x = document.getElementById('viewTitle');
console.log(x);
if (x != null) {
	x.innerHTML = '冬瓜的强入~\(≧▽≦)/~！';
}

/*function updateTime() {
	var inps = document.getElementsByTagName('input');
	if (inps != null) {
		for (var i = 0; i < inps.length; i++) {
			if (inps[i].name == 'btn1') {
				inps[i].value = random.toString();
				break;
			}
		}
	}
}*/

x = document.getElementsByClassName("listCourseRightTitle");
if (x != null) {
	x[1].innerText = "插件功能说明";
	x[0].innerText = "距下次弹窗的时间"
}

x = document.getElementsByClassName("listCourseRightContent");
if (x != null) {
	x[0].innerHTML = "<p>1.点击<font color='red'>手动计时</font>按钮会自动在学时上刷新当前观看时间，且不会使得" +
		"计时结束。<p>2.每次弹出验证码窗口的时候，不必填写验证码。等时间结束后自动计时。</p>" +
		"<hr /><p><font size='3px'  face='微软雅黑'>如果还有疑问请访问：<a href='http://www.desgard.com'>desgard.com</a>向我进行留言。</font></p><img src='http://www.desgard.com/public/img/Desgard_Duan.jpg'>";
}


function createScript(js, vallback) {
	var oScript = document.createElement('script');
	oScript.type = 'text/javascript';
	oScript.innerHTML = js;

	function sleep(sleepTime) {
		for (var i = Date.now(); Date.now() - i <= sleepTime;) {}
	}

	if (document.body != null) {
		document.body.appendChild(oScript);
	}
	oScript.onload = function() {
		callback();
	}
}

createScript(js, function() {
	console.log('Append success!');
});