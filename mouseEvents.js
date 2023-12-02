document.getElementById('clickBtn').addEventListener('mousedown', function(event) {
    console.log('Mouse Down Event:', event);
  });
  
  document.getElementById('clickBtn').addEventListener('mouseup', function(event) {
    console.log('Mouse Up Event:', event);
  });
  
  document.getElementById('clickBtn').addEventListener('mousemove', function(event) {
    console.log('Mouse Move Event:', event);
  });
  
  document.getElementById('clickBtn').addEventListener('mouseover', function(event) {
    console.log('Mouse Over Event:', event);
  });
  
  document.getElementById('clickBtn').addEventListener('mouseout', function(event) {
    console.log('Mouse Out Event:', event);
  });
  
  document.getElementById('clickBtn').addEventListener('contextmenu', function(event) {
    console.log('Context Menu Event:', event);
  });
  