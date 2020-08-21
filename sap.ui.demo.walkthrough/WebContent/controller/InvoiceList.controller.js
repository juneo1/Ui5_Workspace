sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatObj : formatter, // statusText라는 property를 가진 객체를 return
		onInit: function(){
			var oViewModel = new JSONModel({
				currency : "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		onFilterInvoices : function(oEvent){
			
			// 필터는 배열로 넣어주고 
			var aFilter = [];
			// search필드에서 해당 쿼리를 가져오는 구문 
			var sQuery = oEvent.getParameter("query");
			
			
			/* * Filter *
			 1. new Filter의 첫번 째 인자로 필터를 걸 property를 넣어준다. 여기서는 ProductName을 대상으로 필터를 걸었다.
			 2. 두번 째 인자로는 어떠한 방식으로 필터를 걸것인지에 대해서 인자로 넣어준다. contains는 포함되어 있으면 필터를 걸어준다.필터 내용으로는 EQ, BT, GT 등등이 있다.
			 3. 세 번째는 필터를 걸어줄 내용을 기재한다. */
			if( sQuery ) {
				aFilter.push(new Filter("ShipperName", FilterOperator.Contains, sQuery));
			}
			
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter); // 필터에 배열을 넣어줘서 해당 결과값을 배열로 받는다.
		}
	})
})