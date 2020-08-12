sap.ui.controller("button.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf button.App
*/
	onInit: function() {
		// 1번. Javascript 객체 생성
/*		var oData = {
				iSaveKey : 1,
				buttonEnabled : true
		};
		var oModel = new sap.ui.model.json.JSONModel(oData);
		this.getView().setModel(oModel);
*/		
		var oButton = {
				firstBtn: "Default",
				lastBtn: "Default",
				btnType: "Default"
		};
		
		var oModel = new sap.ui.model.json.JSONModel(oButton);
		this.getView().setModel(oModel);
		
	},
	
	changeSaveKey : function () {
		// 2번. JSON Model 생성(1번 Javascript 객체 사용), default model이 리턴된다
		var oModel = this.getView().getModel();
		
		// 3번 ViewModel을 Binding, 첫번째 인자로 경로를 문자열을 입력
		var iSaveKey = parseInt(oModel.getProperty("/saveKey"));
		
		switch(iSaveKey) {
			case 1:
			case 6:
			case 7:
				oModel.setProperty("/buttonEnabled", true);
				break;
			case 2:
			case 3:
			case 4:
			case 5:
				oModel.setProperty("/buttonEnabled", false);
				break;
		}
	},
	
	onPressFirstBtn : function() {
		var oModel = this.getView().getModel();
		oModel.setProperty("/firstBtn", "Accept");
	},
	
	onPressLastBtn : function() {
		var oModel = this.getView().getModel();
		oModel.setProperty("/lastBtn", "Accept");
	},
	
	onPressAllBtn : function() {
		var oModel = this.getView().getModel();
		this.firstBtn();
		this.lastBtn();
		oModel.setProperty("/btnType", "Accept");
	},
	
	onPressClearBtn : function() {
		var oModel = this.getView().getModel();
		oModel.setProperty("/firstBtn", "Default");
		oModel.setProperty("/lastBtn", "Default");
		oModel.setProperty("/btnType", "Default");
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf button.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf button.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf button.App
*/
//	onExit: function() {
//
//	}

});