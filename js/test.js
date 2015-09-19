window.onload = function() {
	function createScript(url, vallback) {
		var oScript = document.createAttribute('script');
		oScript.type = 'text/javascript';
		oScript.async = true;
		oScript.src = url;
		oScript.onload = function() {
			callback();
		}
		document.body.appendChild(oScript);
	}
	
	createScript('main.js', function() {
		console.log('Append success!');
	})
}

