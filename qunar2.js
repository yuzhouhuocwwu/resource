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

	var xhr = new XMLHttpRequest();

	var query = "http://lvyou.baidu.com/user/app/book?"+
										  "name=" + name+"&" +
										  "price=" + escape(perprice)+"&" +
										  "uname=" + escape(contactUser)+"&" +
										  "phone=" + escape(contactMobile)+"&" +
										  "mail=" + contactEmail+"&" +
										  "user_id=" + escape(idNumber)+"&" +
										  "time=" + escape(date)+"&" +
										  "ota_name=去哪儿" +"&" +
										  extra;

	xhr.onerror = xhr.onload = function(){

		_self.onsubmit = null;
		_self.submit();
	};

	xhr.open("POST",query,true);
	xhr.send();

	return false;
};
