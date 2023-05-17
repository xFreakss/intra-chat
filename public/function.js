window.onload = () => {
  var chat = document.getElementById('chat');
  var login = document.getElementById('username-box');

  function username() {
    if (!window.localStorage.getItem('username')) {
      chat.style.display = 'none';
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
        console.log('rodei')
        window.localStorage.setItem('username', usernameInput.value);

        chat.style.display = "block";
        login.style.display = "none";
      }
    });

}