sap.ui.controller("sapui5.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5.App
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel({
			firstName: "Harry",
			lastName : "Hawk",
			enabled: true
		});
		
		this.getView().setModel(oModel); // this: controller
//		oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay); // one-way bindingMode
	}, 
	
	// Binding에 따른 값의 변화를 보기 위한 함수 .
	firstChange: function() {
		var oModel = this.getView().getModel();
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5.App
*/
//	onExit: function() {
//
//	}

});