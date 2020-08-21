sap.ui.define([], function() {
	"use strict";

	return {
		statusText : function(sStatus) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
			case "A":
				return oBundle.getText("invoiceStatusA") + " commonA";
				// 값이 A 인경우에 invoiceStatusA의 문자열로 return
			case "B":
				return oBundle.getText("invoiceStatusB") + " commonB";
			case "C":
				return oBundle.getText("invoiceStatusC") + " commonC";
			default:
				return sStatus;
			}
		},
		
		changeDateText : function(sDate) {
			return sDate.substring(0,10);
		}
	}
});