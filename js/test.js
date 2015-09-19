window.onload = function() {
	var js = "";
js += 'function OutMessage() {'
	+ 'document.getElementById("message").style.display = "";'
	+ 'document.getElementById("block").style.display = "";'
	+ 'run = true;'
	+ 'cTime = 10;'
	+ 'line = false;'
	+ 'TimeClose();}'


js += 'function TimeClose() {'
	+ 'var x = document.getElementById("message");'
	+ 'var xx = x.childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[2];'
	+ 'xx.innerHTML = "无需填写验证码，时间结束自动填写。么么哒！(づ￣3￣)づ╭❤～";'
	+ 'if (run) {'
		
		+ 'window.setTimeout("TimeClose()", 500);'
		
		
		+ 'if (cTime == -1) {'
			+ 'is_upload = 3;'
			+ 'random = -1;'
			+ 'HiddenMessage();'
			+ 'UpdateUserTime();'
		+ '}'
		+ 'document.getElementById("showtime").innerHTML = cTime;'
		+ 'cTime--;}}'

js += 'function updateUserData() {'
	+ 'var state_id = xmlHttp.responseXML.getElementsByTagName("select_state")[0].firstChild.nodeValue;'
	+ 'var select_message = xmlHttp.responseXML.getElementsByTagName("select_message")[0].firstChild.nodeValue;'
	+ 'if (state_id == "0") {'
		+ 'alert(select_message + "，如果连续弹出该对话框说明没有计时，第一重新登录，第二请使用IE或Chrome浏览器，请勿使用360浏览器。");'
		+ 'window.setTimeout("UpdateUserTime()", 10000);'
	+ '} else if (state_id == "2") {'
		+ 'alert(select_message + "，本次计时已结束，页面将关闭，如需继续观看本视频请重新打开网页");'
		+ 'window.close();'
	+ '} else if (state_id == "3") {'
		+ 'console.log("本次计时结束，将会开始新的计时");'
		+ 'window.is_upload = 0;'
		+ 'reWriteCONST();'
		+ 'line = true;'
		+ 'UpdateUserTime();'
	+ '} else {'
		+ 'sid = select_message;'
		+ 'is_upload = 1;'
		+ 'document.getElementById("ranstring").value = "";'
		+ 'GetPhotoAgain();'
		+ 'FromUserLogin();}}'

js += 'function reWriteCONST() {'
	+ 'window.random = 450;'
	+ 'console.log("Bingo~");}'
	
js += 'setTimeout(reWriteCONST,5000);'
	+ 'console.log("冬瓜：成功载入脚本");'
js += 'function StopVideo() {'
	+ 'ret = true;'
	+ 'console.log("啦啦啦，计时成功咯！(⊙o⊙)");'
	+ 'if (ret) {'
		+ 'is_upload = 3;'
		+ 'random = -1;'
		+ 'UpdateUserTime();'
	+ '}'
+ '}';
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
	})
}



