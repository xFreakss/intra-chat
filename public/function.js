window.onload = () => {

  var form = document.getElementById('form');
  var login = document.getElementById('username-box');

  function username() {
    if (!window.localStorage.getItem('username')) {
      form.style.display = 'none';
      login.style.display = "flex";
    }
  }
  username();

  var usernameForm = document.getElementById("username-form");
  var usernameInput = document.getElementById("username-input");

  usernameForm
    .addEventListener('submit', function (e) {
      e.preventDefault();
      if (usernameInput.value) {
        window.localStorage.setItem('username', usernameInput.value);

        form.style.display = "flex";
        login.style.display = "none";
      }
    });

}