(function(){
alert('yo bitches');
//document.body.style.background = red;
//document.body.style.backgroundColor= '#990000';
document.getElementsByTagName('body')[0].style.setProperty('font-family','serif', 'important');


$(document).click(function (){
 //alert('yo bitches');
    var selectedText = window.getSelection ? window.getSelection() : document.selection.createRange(); // second one for IE

   /// var textd = $("#data").html();
    ///var normalText = $("#data").text();
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

// Use it!
addCSSRule(document.styleSheets[0], ".highlightedText",  "background-color : black" );



})();



