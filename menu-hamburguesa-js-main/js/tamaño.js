window.addEventListener('resize', function(event){
    var width = window.innerWidth;
    if (width < 600) {
      document.getElementById('imagen').src = 'po.png';
    } else {
      document.getElementById('imagen').src = 'logo.png';
    }
  });
  