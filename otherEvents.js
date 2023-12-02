window.addEventListener('load', function(event) {
    console.log('Load Event:', event);
  });
  
  document.getElementById('clickBtn').addEventListener('error', function(event) {
    console.log('Error Event:', event);
  });
  