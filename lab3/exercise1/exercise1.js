//Author: Victorina Joy Santos
//Date: 3/6/20
//Filename: exercise1.js

function validate(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let isValid = true;

    //If input box(es) are empty, then error.
    if(input1 == "" || input2 == ""){
        document.getElementById("message").innerHTML = "Both input boxes must not be blank.";
        isValid = false;
    }
    //Password must at least be 8 characters long
    else if(input1.length < 8 || input2.length < 8){
        document.getElementById("message").innerHTML = "Password must at least be 8 characters long.";
        isValid = false;
    }
    else if(input1.length == input2.length){
        for(let i = 0; i < input1.length; i++)
        {
            //Password should not contain spaces.
            if(input1.charAt(i) == " "){
                document.getElementById("message").innerHTML = "Password should not contain spaces.";
                isValid = false;
                break;
            }
            if(input1.charAt(i) != input2.charAt(i)){
                document.getElementById("message").innerHTML = "Password does not match.";
                isValid = false;
                break;
            }
        }
    }
    //If length are different, then inputs are different
    else if(input1.length != input2.length){
        document.getElementById("message").innerHTML = "Password does not match.";
        isValid = false;
    }
    if(isValid == true){
        document.getElementById("message").innerHTML = "No errors, password validated.";
    }

}
