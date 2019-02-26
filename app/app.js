(function(){



    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('app/cache-service-worker.js').then(() => console.log('added cache service worker'));
    }

})();





