/*
*	Entry
*/
chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        
        // Poll to see if the document is ready
        if (document.readyState === 'complete') {
            
            // If so, then stop polling, and add the pull to reload functionality    
            clearInterval(readyStateCheckInterval);
            console.log('Mac Reload is running');
            AddDom();
        }
    }, 10);
});

function AddDom() {
    const elem = document.createElement('div');
    
    const elemStyle = {
        "userSelect": "none",
        "position": "fixed",
        "top": "20px",
        "zIndex": 99999,
        "height": "15px",
        "width": "100%",
        "textAlign": "center"
    }

    // Set element ID and message
    elem.id = "p2r";
    elem.innerText = "Reloading...";
    
    // Assign the styles to our element
    Object.assign(elem.style, elemStyle)

    // Insert our element into the body
    document.body.insertBefore(elem, document.body.firstChild);

    let isReloading = false;
    overscroll((e) => {
        
        // If we're pulling to refresh, and the page isn't already refreshing
        if (e.direction === 'up' && !isReloading) {
            console.log('Reloading...');
            isReloading = true;
            
            // Reload the page
            document.location.reload();
        }
    });
}
