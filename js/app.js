if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/checkers-pwa/sw.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))
}

include('js/ui.js');

function include(file) {
  const script = document.createElement('script');
  script.src  = file;
  script.type = 'module';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}