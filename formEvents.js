document.getElementById('inputText').addEventListener('input', function(event) {
    console.log('Input Event:', event);
  });
  
  document.getElementById('inputText').addEventListener('change', function(event) {
    console.log('Change Event:', event);
  });
  
  document.getElementById('inputText').addEventListener('focus', function(event) {
    console.log('Focus Event:', event);
  });
  
  document.getElementById('inputText').addEventListener('blur', function(event) {
    console.log('Blur Event:', event);
  });
  