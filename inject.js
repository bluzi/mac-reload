/*
*	Entry
*/
chrome.extension.sendMessage({}, (response) => {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === 'complete') {
            clearInterval(readyStateCheckInterval);

            console.log('Mac Reload is running');

            AddDom();
        }
    }, 10);
});

const AddDom = () => {

    const divElement = document.createElement('div');

    divElement.style = 'user-select: none; position: fixed; top: -20px; z-index: 99999; height: 15px; width: 100%; text-align: center;';
    divElement.id = 'p2r';
    divElement.innerText = 'Reloading...';

    document.body.insertBefore(divElement, document.body.firstChild);

    let isReloading = false;
    overscroll(
        e => e.direction === 'up' && !isReloading && (console.log('reloading...'), isReloading = true) && document.location.reload()
    );

}
