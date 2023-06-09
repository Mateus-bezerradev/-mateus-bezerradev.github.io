document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const menuButton = document.getElementById('menuButton');
  
    menuButton.addEventListener('click', function() {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            menuButton.innerHTML = '<i class="fa fa-bars"></i>';
          
    }
     else {
        menu.style.display = 'none';
        menuButton.innerHTML = '<i class="fa fa-bars"></i>';      
      }
    });
  });
  