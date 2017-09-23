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
    const elem = document.createElement('div');
    elem.style = 'user-select: none; position: fixed; top: -20px; z-index: 99999; height: 15px; width: 100%; text-align: center;';
    elem.id = 'p2r';
    elem.innerText = 'Reloading...';

    document.body.insertBefore(elem, document.body.firstChild);

    let isReloading = false;
    overscroll(e => e.direction === 'up' && !isReloading && (console.log('reloading...'), isReloading = true) && document.location.reload());
}
