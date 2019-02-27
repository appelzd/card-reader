(function(){    

document.getElementById('fileUpload').addEventListener("change", e => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target['files'][0]);
})

    //https://codelabs.developers.google.com/codelabs/your-first-pwapp/index.html?index=..%2F..index#5
    // if('serviceWorker' in navigator){
    //     navigator.serviceWorker.register('cache-service-worker.js').then(() => console.log('added cache service worker'));
    // }

})();





