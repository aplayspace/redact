(function(){
alert('redact on');
document.getElementsByTagName('body')[0].style.setProperty('font-family','serif', 'important');


$(document).click(function (){

    var SelRange;
    if (window.getSelection) {
        SelRange= window.getSelection().getRangeAt(0);
    } else if (document.getSelection) {
        SelRange= document.getSelection().getRangeAt(0);
    } else if (document.selection) {
        SelRange= document.selection.createRange();
    }

    if (SelRange!= null && SelRange != '' )
    {

        if (SelRange.pasteHTML)
        {
            SelRange.pasteHTML('<span class="highlightedText">'+SelRange.text+'</span>');
        }
        else
           {
            var newNode = $('<span class="highlightedText" />')[0];
            SelRange.surroundContents(newNode);
           }

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



