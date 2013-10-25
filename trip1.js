document.querySelector("#Text2").onblur = function(){
	var _self = this;

	var contactUser = document.querySelector("#Text1").value;
	var contactMobile = document.querySelector("#Text2").value;
	var contactEmail = "";//没有
	var perprice = document.querySelector("#totalprice").innerText.replace("￥","");
	var number = document.querySelector("span.list_num").innerText;
	var date = document.querySelector("span.date.list_date").innerText.split(" ")[0];
	var name = document.querySelector("strong.tit").innerText;
	var idNumber = "";//没有

	var source = "qunar";
	var extra = window.extraArgs?window.extraArgs:"";

	var xhr = new Image();

	var query = "http://dbl-lvyou-test04.vm.baidu.com:8080/user/app/book?"+
										  "name=" + (name)+"&" +
										  "price=" + (perprice)+"&" +
										  "uname=" + (contactUser)+"&" +
										  "phone=" + (contactMobile)+"&" +
										  "mail=" + (contactEmail)+"&" +
										  "user_id=" + (idNumber)+"&" +
										  "time=" + (date)+"&" +
										  "ota_name=携程" +"&" +
										  extra;

	xhr.onerror = xhr.onload = function(){
		alert("统计参数已经发出，表单将继续提交！\n请求url:"+query);
	};

	// xhr.open("GET",query,true);
	// xhr.send();
	xhr.src = query;

	return false;
};
