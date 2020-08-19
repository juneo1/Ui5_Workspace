sap.ui.define([
	"sap/ui/core/mvc/Controller" ,
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) { // 불러온 controller를 Controller라는 변수에 넣어서 사용
	"use strict";  //	엄격한 구문 사용
		return Controller.extend ("sap.ui.demo.walkthrough.controller.App", {
		onInit : function() {	
		},

		onLogin : function () {

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var oInfo = this.getView().getModel("account");
			var oModel = this.getView().getModel();
			var oModelData = oModel.getData();
			var sId = oModelData.account.id;
			var sPassword = oModelData.account.password;
			for(var i=0; i < oInfo.oData.length; i++){
				if (sId == oInfo.oData[i].id) {
					if (sPassword == oInfo.oData[i].password){
						MessageToast.show("로그인 되었습니다");
						break;
					} else {
						MessageToast.show("비밀번호가 다릅니다");
						break;
					}
				} 
				else if (sId != oInfo.oData[i].id && i == oInfo.oData.length -1) {
						MessageToast.show ("ID와 PW정보를 다시 확인해 주세요.");
				}
			}
		}
	});
});

