
(function(){
alert('redact on');
document.getElementsByTagName('body')[0].style.setProperty('font-family','serif', 'important');

    // create a new script element in the DOM
    var jQscript=document.createElement('script');
    // use the latest version of the jQuery core library
    jQscript.src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    // append the new script element to the DOM
    document.documentElement.appendChild(jQscript);


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



