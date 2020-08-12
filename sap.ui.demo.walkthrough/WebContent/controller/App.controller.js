sap.ui.define([
	"sap/ui/core/mvc/Controller" ,
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) { // 불러온 controller를 Controller라는 변수에 넣어서 사용
	"use strict";  //	엄격한 구문 사용
		return Controller.extend ("sap.ui.demo.walkthrough.controller.App", {
		onInit : function() {
			var oData = {
					recipient : {
						name: "Hugh"
					},
					price : 3000
			};
			
			var oData2 = {
					apple: {
						made : "korea",
						count: 5, 
						price: 3000
					},
					banana: {
						made : "indonesia",
						count:10,
						price: 5000
					}
			};
			
			var oModel = new JSONModel(oData);
			var oModel2 = new JSONModel(oData2);
			this.getView().setModel(oModel);
			this.getView().setModel(oModel2, "fruit");
			
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
			});
			
			// resourcemodel은 bundlename이라는 property에 해당 경로를 지정해준다. 
			this.getView().setModel(i18nModel, "i18n");
			// i18n이라는 이름으로 해당 모델을 view에 세팅해준다.
			
//			var oModel = new JSONModel(oData);
//			this.getView().setModel(oModel);
		},
		
		//property에 값을 주기 위해서 :를 사용해서 값을 주고 함수를 하나 더 만들어준다.
		onShowHello : function () {

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			// 모델에 getProPerty 함수는 경로에 있는 데이터의 값을 retrun해준다. 
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// 위에서 받은 문자열을 helloMsg라는 데이터를 가져오고 placeholder에 넣어준다.
//			var sMsg = "길동" + oBundle.getText("helloMsg1");
			
			MessageToast.show(sMsg);
		},
		
		onTestPress : function() {
			Text.show("onTestPress를 눌렀습니다.");
		}
	});
});

