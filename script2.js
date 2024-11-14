
//Dropdown Menu
function myFunction(dropdownNumber) {
    var dropdown = document.getElementById("myDropdown" + dropdownNumber);
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i] !== dropdown) {
            dropdowns[i].classList.remove("show");
        }
    }

    dropdown.classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove("show");
        }
    }
};


//POPUP MOVIE DETAIL

let modal2 = document.getElementById("Modal2");

let btn2 = document.getElementById("modal2-Btn");

let span2 = document.getElementsByClassName("close2")[0];


btn2.onclick = function () {
  
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}