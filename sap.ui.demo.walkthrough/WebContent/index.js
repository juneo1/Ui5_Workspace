sap.ui.define
//(["sap/ui/core/mvc/XMLView"], function(XMLView) {
	(["sap/ui/core/ComponentContainer"], function(ComponentContainer) {
	"use strict";
	
	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings: {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
	
/*	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"  //index.html과 같은 경로에 있는것을 표시 , 뒷쪽 파일 형식은 생략하고 파일 이름만 (View폴더에 App.view.xml)과 같은 의미, 읽어오며 뷰가 실행, 뷰 네이밍은 가장 첫글자 대문자
	}).then(function (oView) {  // then이라는 함수를 실행한다. 읽어오는게 완전히 끝나고 나서 안에 함수를 인자로 넘겨주는데 함수를 실행시키라는 의미.
		// 뷰를 생성하면 view의 콜백함수를 파라미터로 던져주고 view객체를 받게되는데 그 객체를 content에 placeAt함수를 통해 붙여주라는 의미.
		oView.placeAt("content");
	});
*/	
});