/*
*	Entry
*/
chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === 'complete') {
			clearInterval(readyStateCheckInterval);

			console.log('Mac Reload is running');
            
            AddDom();
		}
	}, 10);
});

function AddDom() {
    $('body').prepend(`
        <div 
            id="p2r" 
            style="position: fixed; top: -20px; z-index: 99999; height: 15px; width: 100%; text-align: center;">
                Release to Reload
        </div>
    `);
}
