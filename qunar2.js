document.querySelector("#order-form").onsubmit = function(){
	var _self = this;

	var contactUser = document.querySelector("#contactUser").value;
	var contactMobile = document.querySelector("#contactMobile").value;
	var contactEmail = document.querySelector("#contactEmail").value;
	var extra = window.extraArgs?window.extraArgs:"";

	var statImage = new Image();
	statImage.onload = statImage.onerror = function(){
		alert("统计参数已经发出，表单将继续提交！\n请求url:"+statImage.src);
		_self.onsubmit = null;
		_self.submit();
	};

	statImage.src = "http://www.baidu.com/?contactUser=" + contactUser+"&" +
										  "contactMobile=" + contactMobile+"&" +
										  "contactEmail=" + contactEmail+"&" + extra;

	return false;
};

