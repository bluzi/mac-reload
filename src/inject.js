import 'overscrolljs';

const addLoadingElement = () => {
  const elem = document.createElement('div');

  elem.style = `
    user-select: none;
    position: fixed;
    top: -20px;
    z-index: 99999;
    height: 15px;
    width: 100%;
    height: 50px;
    text-align: center;`;

  elem.id = 'p2r';
  elem.innerText = 'Reloading...';

  document.body.insertBefore(elem, document.body.firstChild);

  let isReloading = false;

  overscroll((e) => {
    if (e.direction === 'up' && !isReloading) {
     console.log('reloading...');
     isReloading = true;
     document.location.reload();
   }
  });
};

const handleMessage = (response) => {
  const intervalId = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(intervalId);

      console.log('Mac Reload is running');

      addLoadingElement();
    }
  }, 10);
};

/*
* Entry
*/
chrome.extension.sendMessage({}, handleMessage);