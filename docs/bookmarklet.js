(function() {
    function toggleRedaction(e) {
        var selection = window.getSelection();
        if (!selection.rangeCount) return;
        var range = selection.getRangeAt(0);
        var span = range.commonAncestorContainer;
        if (span.nodeType === Node.TEXT_NODE) {
            span = span.parentNode;
        }
        if (span.tagName === 'SPAN' && span.style.backgroundColor === 'black') {
            var text = span.textContent;
            var parent = span.parentNode;
            parent.replaceChild(document.createTextNode(text), span);
        } else {
            var newSpan = document.createElement('span');
            newSpan.style.backgroundColor = 'black';
            newSpan.style.color = 'black';
            range.surroundContents(newSpan);
        }
        e.preventDefault();
    }
    
    function addScreenshotButton() {
        var button = document.createElement('button');
        button.innerText = 'Take Screenshot';
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '10px';
        button.style.zIndex = '9999';
        button.style.padding = '10px';
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.onclick = takeScreenshot;
        document.body.appendChild(button);
    }

    function loadHtml2Canvas(callback) {
        var script = document.createElement('script');
        script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
        script.onload = callback;
        document.body.appendChild(script);
    }

    function takeScreenshot() {
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;

        html2canvas(document.body, {
            width: viewportWidth,
            height: viewportHeight,
            x: window.pageXOffset,
            y: window.pageYOffset,
            scrollX: -window.pageXOffset,
            scrollY: -window.pageYOffset
        }).then(function(canvas) {
            var link = document.createElement('a');
            link.download = 'redacted-screenshot.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }
    
    document.addEventListener('mouseup', toggleRedaction);
    loadHtml2Canvas(addScreenshotButton);
    alert('Redact bookmarklet activated. Select text to redact or un-redact it. A screenshot button has been added to the bottom right corner.');
})();