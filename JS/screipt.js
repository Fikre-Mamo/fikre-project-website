document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  
    // Get the "More" dropdown element
    const navbarDropdown = document.querySelector('.navbar-item.has-dropdown .navbar-link');
    const dropdownMenu = navbarDropdown.nextElementSibling;
  
    // Add a click event on the "More" dropdown
    navbarDropdown.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      navbarDropdown.classList.toggle('is-active');
      dropdownMenu.classList.toggle('is-active');
    });
  
    // Handle login button click
    const loginButton = document.getElementById('loginButton');
    const submitButton = document.getElementById('submitButton');
  
    loginButton.addEventListener('click', () => {
      // Show the login form (you can add more logic here if needed)
      document.querySelector('.field').style.display = 'block';
      submitButton.style.display = 'block';
    });
  
    submitButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the input values
      const name = document.getElementById('nameInput').value;
      const username = document.getElementById('usernameInput').value;
  
      // Perform login logic (e.g., send data to the server)
      console.log('Name:', name);
      console.log('Username:', username);
  
      // Hide the login form after submission
      document.querySelector('.field').style.display = 'none';
      submitButton.style.display = 'none';
    });
  });