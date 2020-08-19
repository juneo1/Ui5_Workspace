sap.ui.define([
	"sap/ui/core/mvc/Controller" ,
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, MessageToast, JSONModel, MessageBox) { // 불러온 controller를 Controller라는 변수에 넣어서 사용
	"use strict";  //	엄격한 구문 사용
		return Controller.extend ("sap.ui.demo.walkthrough.controller.App", {
		onInit : function() {	
		},

		onLogin : function () {

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			
			// Account JSON 파일을 가져오기 위해 해당 모델을 가져오는 구문
			var oInfo = this.getView().getModel("account");
			
			// 모델에서 선언한 account를 가져오기 위한 모델 구문
			var oModel = this.getView().getModel();
			var oModelData = oModel.getData();
			
			// 편의상 바인딩해서 받을 변수를 선언
			var sId = oModelData.account.id;
			var sPassword = oModelData.account.password;
			
			// JSON 파일의 length만큼 for문을 돌면서 실행
			for(var i=0; i < oInfo.oData.length; i++){
				
				// 입력받은 id와 데이터의 id가 일치할 경우 
				if (sId === oInfo.oData[i].id) {
					
					// 비밀번호가 일치 할 경우 & 일치하지 않을 경우
					if (sPassword === oInfo.oData[i].password){
						MessageToast.show("로그인 되었습니다");
						break;
					} else {
//						MessageToast.show("비밀번호가 다릅니다");
						MessageBox.error("비밀번호가 다릅니다");
						break;
					}
				} 
				// 마지막까지 돌아도 해당하는 id가 없는 경우 출력되는 메세지
				else if ((sId !== oInfo.oData[i].id) && (i === oInfo.oData.length -1)) {
						MessageBox.error ("ID와 PW정보를 다시 확인해 주세요.");

				}
			}
		}
	});
});

