let text = document.getElementById("text");

function border(){
    let borderRedVal = document.getElementById("borderRed").value;
    let borderBlueVal = document.getElementById("borderBlue").value;
    let borderGreenVal = document.getElementById("borderGreen").value;
    let borderWidthVal = document.getElementById("borderWidth").value;

    console.log("test1");

    if((borderRedVal >= 0 && borderRedVal < 256) &&
       (borderBlueVal >= 0 && borderBlueVal < 256) &&
       (borderGreenVal >= 0 && borderGreenVal < 256) &&
       (borderWidthVal >= 0 && borderWidthVal < 101)){
    
        document.querySelector("#errorMessage").innerText = "YEET";
    }
    else{
        document.querySelector("#errorMessage").innerText = "Error: Invalid border input(s).";
    }
}

function background(){
    let bgRedVal = document.getElementById("backgroundRed").value;
    let bgBlueVal = document.getElementById("backgroundBlue").value;
    let bgGreenVal = document.getElementById("backgroundGreen").value;
}