

//POPUP MOVIE DETAIL

let modal2 = document.getElementById("Modal2");

let btn2 = document.getElementById("modal2-Btn");

let span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


//POPUP register

let modalRegister = document.getElementById("myModal");

let RegisterButton = document.getElementById("registerBtn");
let signInButton = document.getElementById("signinBtn");

let RegisterSpanClose = document.getElementsByClassName("close")[0];

signInButton.onclick = function () {
  modalRegister.style.display = "block";
};
RegisterButton.onclick = function () {
  modalRegister.style.display = "block";
};


RegisterSpanClose.onclick = function () {
  modalRegister.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalRegister) {
    modalRegister.style.display = "none";
  }
};

