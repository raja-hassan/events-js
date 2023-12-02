window.addEventListener('unload', function(event) {
    console.log('Unload Event:', event);
  });
  
  window.addEventListener('beforeunload', function(event) {
    console.log('BeforeUnload Event:', event);
  });
  
  window.addEventListener('online', function(event) {
    console.log('Online Event:', event);
  });
  
  window.addEventListener('offline', function(event) {
    console.log('Offline Event:', event);
  });
  