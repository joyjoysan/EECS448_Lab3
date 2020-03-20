window.addEventListener('DOMContentLoaded', () => {
    let target = document.getElementById("p1");

    document.getElementById("borderButton").addEventListener("click", function(){
        let bColor = document.getElementById("borderColor").value;
        let bWidth = document.getElementById("borderWidth").value;
       
        target.style.borderColor = bColor;
        target.style.borderWidth = bWidth;
    });


    document.getElementById("backgroundButton").addEventListener("click", function(){
        let bgR = document.getElementById("backgroundRed").value;
        let bgB = document.getElementById("backgroundBlue").value;
        let bgG = document.getElementById("backgroundGreen").value;

        if((bgR >= 0 && bgR < 256) &&
        (bgB >= 0 && bgB < 256) &&
        (bgG >= 0 && bgG < 256)){
            target.style.backgroundColor = "rgb(" + bgR + "," + bgG + "," + bgB + ")";
        }
     else{
         document.querySelector("#errorMessage").innerText = "Error: Invalid background rgb input(s).";
     }
    });
});