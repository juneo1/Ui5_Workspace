sap.ui.define([
	"sap/ui/core/mvc/Controller" ,
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) { // 불러온 controller를 Controller라는 변수에 넣어서 사용
	"use strict";  //	엄격한 구문 사용
		return Controller.extend ("sap.ui.demo.walkthrough.controller.HelloPanel", {
		onInit : function() {
		},
		
		//property에 값을 주기 위해서 :를 사용해서 값을 주고 함수를 하나 더 만들어준다.
		onShowHello : function () {

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			// 모델에 getProPerty 함수는 경로에 있는 데이터의 값을 retrun해준다. 
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// 위에서 받은 문자열을 helloMsg라는 데이터를 가져오고 placeholder에 넣어준다.
			MessageToast.show(sMsg);
		},
		
		onTestPress : function() {
			Text.show("onTestPress를 눌렀습니다.");
		},
		
		onOpenDialog : function() {
			// fragment에서 dialog를 쓸 때 UI5는 id중복을 허락하지 않기 때문에 View의 id를 붙여서 호출해서 중복이 일어나지 않게 호출한다.
			var oView = this.getView();
			
			// view에서 helloDiaglog라는 id를 찾는 메소드
			if(!this.byId("helloDialog")) { // 안만들어졌기에 객체가 없어서 false, !이 붙어서 true가 되면 구문 실행
				// 구문이 실행되면 Fragment객체를 가져와서 Load함수를 실행, 함수의 기능은 파일을 읽어온다. HelloDialog.xml을 읽어오는 것.
				// if구문을 사용해서 하지 않으면 처음에는 diglog가 아예 없어서 load되지만, 다시 실행하면 똑같은 id의 dialog가 이미 생성되서(숨어있어서 안보임) duplicate id 오류가 떨어진다.
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.walkthrough.view.HelloDialog",
					controller: this // 닫는 이벤트가 필요하기 때문에 Fragment인데 controller를 지정해준 것.
				}).then(function(oDialog) { // load함수가 끝나면 then함수 실행
					oView.addDependent(oDialog);//dialog를 해당 뷰에다가 넘겨서 dependent해준다는 구문.
						oDialog.open();
				});
			} else {
				this.byId("helloDialog").open(); // id로 찾아서 open해주면 화면에 보여주게 됨
			}
		},
		
		onCloseDialog : function() {
			this.byId("helloDialog").close();
		}
	});
});

