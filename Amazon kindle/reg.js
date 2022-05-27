function myFunc(event) {
    event.preventDefault();

    var name_and_surname = document.getElementById("name_and_surname").value;
    var enter_email =document.getElementById("enter_email").value;
    var Phone_Number =document.getElementById("Phone_Number").value;
    var Password =document.getElementById("password").value;
	
    localStorage.setItem('Is_name_and_surname', name_and_surname);
    localStorage.setItem('Is_enter_email', enter_email);
    localStorage.setItem('Is_Phone_Number', Phone_Number);
	localStorage.setItem('RegPassword', Password);
	window.location = "./Login.html";
}

const img = document.getElementById('file');
img.addEventListener("change", function(){
    alert("File added");
    var readimgfile= new FileReader();
        readimgfile.onload= function(){
            localStorage.setItem('file', readimgfile.result);
            alert(readimgfile.result);
        }
    readimgfile.readAsDataURL(this.files[0]);
});