function myfunc(){
    var x = document.getElementById("passwordcnfm")
    if (x.type === "password") {
        x.type = "text";        
    }else{
        x.type = "password";
    }
}

