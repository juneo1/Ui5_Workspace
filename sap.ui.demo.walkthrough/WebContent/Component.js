sap.ui.define([
	"sap/ui/core/UIComponent" ,
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";
	
	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
		metadata : {
			manifest: "json"
		},
		init : function() {
			UIComponent.prototype.init.apply(this, arguments);
			
			var oData = {
					recipient : {
						name: "Hugh"
					}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			// 두번째 Model 이름은 생략가능(단, 하나의 Model 가능)
			// setModel(첫번째(Model), 두번째(Model이름))
			
			
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
			});
			
			this.setModel(i18nModel, "i18n");
			
			var that = this; 
			/* this를 ajax안에서 사용하면, Uicomponent대신 자리위치에 따라서 다른것을 가르키기 때문에 현재this를 변수에 넣고 사용한다. */
			
			$.ajax({
				url: "./json/Invoices.json",
				type: "get",
				success: function(oResult){
					var oInvoiceModel = new JSONModel(oResult);
					that.setModel(oInvoiceModel, "invoice");
				}
			});
			
			this.getRouter().initialize();
			// 라우터라는 객체를 initialize하는 구문
		}
	})
})