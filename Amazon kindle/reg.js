function myFunc(event) {
    event.preventDefault();

    var name_and_surname = document.getElementById("name_and_surname").value;
    var enter_email =document.getElementById("enter_email").value;
    var Phone_Number =document.getElementById("Phone_Number").value;

    localStorage.setItem('Is_name_and_surname', name_and_surname);
    localStorage.setItem('Is_enter_email', enter_email);
    localStorage.setItem('Is_Phone_Number', Phone_Number);
}