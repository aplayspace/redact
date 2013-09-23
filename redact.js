(function(){
alert('redact on');
document.getElementsByTagName('body')[0].style.setProperty('font-family','serif', 'important');


$(document).click(function (){

 var selectedText = window.getSelection ? window.getSelection() : document.selection.createRange(); // second one for IE

if (selectedText.getRangeAt) {
        var range = selectedText.getRangeAt(0);
        var newNode = document.createElement("span");
        newNode.setAttribute('class', 'highlightedText');
        range.surroundContents(newNode);
    } else {
        selectedText.pasteHTML('<span class="highlightedText">' + selectedText.htmlText + '</span>');

    }
    $('.highlightedText').replaceWith(swapText);
});


function addCSSRule(sheet, selector, rules, index) {
	if(sheet.insertRule) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else {
		sheet.addRule(selector, rules, index);
	}
}


addCSSRule(document.styleSheets[0], ".highlightedText",  "background-color : black", 0 );




})();



