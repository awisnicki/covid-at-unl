/* Service Worker */
/* Taken from https://pwa-workshop.js.org/2-service-worker/#registering-the-service-worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(serviceWorker => {
      console.log("Service Worker registered: ", serviceWorker);
    })
    .catch(error => {
      console.error("Error registering the Service Worker: ", error);
    });
}

AddRelNoopener();

function AddRelNoopener(){
  var links = document.querySelectorAll("a");
  for(var i = 0; i < links.length; i++){
    links[i].setAttribute("rel","noopener");
  }
}	