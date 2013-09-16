document.querySelector("#order-form").onsubmit = function(){
	var _self = this;

	var contactUser = document.querySelector("#contactUser").value;
	var contactMobile = document.querySelector("#contactMobile").value;
	var contactEmail = document.querySelector("#contactEmail").value;
	var perprice = document.querySelector("#perprice").value;
	var number = document.querySelector("#number").value;
	var date = document.querySelector("#date")?document.querySelector("#date").value:document.querySelector(".item_tab_des span").innerHTML;
	var name = document.querySelector(".main_info").innerText;
	var idNumber = document.querySelector("#traveler_info_id_0")?document.querySelector("#traveler_info_id_0").value:"";

	var source = "qunar";
	var extra = window.extraArgs?window.extraArgs:"";

	var xhr = new Image();

	var query = "http://dbl-lvyou-test04.vm.baidu.com:8080?"+
										  "name=" + escape(name)+"&" +
										  "price=" + escape(perprice)+"&" +
										  "uname=" + escape(contactUser)+"&" +
										  "phone=" + escape(contactMobile)+"&" +
										  "mail=" + escape(contactEmail)+"&" +
										  "user_id=" + escape(idNumber)+"&" +
										  "time=" + escape(date)+"&" +
										  "time=去哪儿" +
										  extra;

	xhr.onerror = xhr.onload = function(){
		alert("统计参数已经发出，表单将继续提交！\n请求url:"+query);

		_self.onsubmit = null;
		_self.submit();
	};

	// xhr.open("GET",query,true);
	// xhr.send();
	xhr.src = query;

	return false;
};
