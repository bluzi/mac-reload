/*
*	Entry
*/
chrome.extension.sendMessage({}, function (response) {
    const intervalId = setInterval(() => {
        if (document.readyState === 'complete') {
            clearInterval(intervalId);
            console.log('Mac Reload is running');
            addDOM();
        }
    }, 10);
});

function addDOM() {
    const elem = document.createElement('div');
    elem.id = 'p2r';
    elem.innerText = 'Reloading...';
    elem.style = `
        user-select: none;
        position: fixed;
        top: -20px;
        z-index: 99999;
        height: 15px;
        width: 100%;
        text-align: center;
    `;

    document.body.insertBefore(elem, document.body.firstChild);

    let isReloading = false;
    overscroll(e => {
        if (e.direction === 'up' && !isReloading) {
            console.log('reloading...');
            isReloading = true;
            document.location.reload();
        }
    });
}
