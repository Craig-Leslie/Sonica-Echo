document.addEventListener('DOMContentLoaded', function() {

    function expandHelp(event){
        
        var current = event.srcElement.id;
        console.log(current);

        var popupFullscreen = document.getElementById("popupFullscreen")
        var popupDiv = document.getElementById("popupDiv")

        if(current == "breathe"){
            popupDiv.innerHTML = "Breathe";
            
            
        }

        popupFullscreen.style.display = "block";
        popupDiv.style.display = "block";

        
    }

    var clickableElements = document.getElementsByClassName("quickFixAnchor")

    for (var i = 0; i < clickableElements.length; i++) {
        clickableElements[i].addEventListener('click', expandHelp)
    }
    

      

});



