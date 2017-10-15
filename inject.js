/*
*	Entry
*/

function AddDom() {
    const elem = document.createElement('div');
    elem.style = 'user-select: none; position: fixed; top: -20px; z-index: 99999; height: 15px; width: 100%; text-align: center;';
    elem.id = 'p2r';
    elem.innerText = 'Reloading...';

    document.body.insertBefore(elem, document.body.firstChild);

    overscroll(e =>
        e.direction === 'up' &&
        document.location.reload()
    );
}

chrome.extension.sendMessage({}, () => {
    const readyStateCheckInterval = setInterval(() => {
        if (document.readyState !== 'complete') return;

        clearInterval(readyStateCheckInterval);

        console.log('Mac Reload is running');

        AddDom();
    }, 10);
});
