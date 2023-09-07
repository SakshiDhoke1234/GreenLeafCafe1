var email = document.getElementById("email")
var email1 = document.getElementById("email1")
var name1 = document.getElementById("name")
var message = document.getElementById("message")
function subscribe(){
    
    if(email.value == ""){
        alert("Enter your email")
    }
    else{
        alert("done");
    }
    email.value ="";
}

function submit(){
    if(name1.value == "" || email1.value == "" || message.value == ""){

        alert("Enter the value..");
    }
    else{
        alert("submitted succesfully!!");
    }

    email1.value ="";
    name1.value = "";
    message.value = "";
    

}