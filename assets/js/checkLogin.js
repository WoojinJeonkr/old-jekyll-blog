// Check whether the owner of the blog has accessed this page
function checkLogin() {
  fetch('https://api.github.com/user')
      .then(response => response.json())
      .then(user => {
          if (user.login === 'WoojinJeonkr') {
              // If the user is logged in and the username matches, show the page
              document.body.style.display = 'block';
          } else {
              // If the user is not logged in or the username does not match, redirect to login
              window.location.href = 'https://woojinjeonkr.github.io/';
          }
      })
      .catch(() => {
        alert('An error occurred while checking login. Please try again later.');
    });
}

// Run the check when the page loads
window.onload = checkLogin;