sap.ui.define([
	"sap/ui/core/mvc/Controller" ,
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History"
], function (Controller, UIComponent, History) { // 불러온 controller를 Controller라는 변수에 넣어서 사용
	"use strict";  //	엄격한 구문 사용
		return Controller.extend ("sap.ui.demo.walkthrough.controller.App", {
		onInit : function() {
		},
		
		onNavBack : function() {
			
			var oHistory = History.getInstance();
			var sPrevious = oHistory.getPreviousHash();
			
			if( sPrevious !== undefined ) {
				window.history.go(-1);
			} else { 
				var oRouter = UIComponent.getRouterFor(this)
				oRouter.navTo("overview");
			}
		}
	});
});

