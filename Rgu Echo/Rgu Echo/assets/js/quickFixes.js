function closePopupFunc(){
    console.log("close");
    popupFullscreen.style.display = "hidden";
    popupDiv.style.display = "hidden";  
}

document.addEventListener('DOMContentLoaded', function() {



    function expandHelp(event){
        
        var current = event.srcElement.id;
        console.log(current);

        var popupFullscreen = document.getElementById("popupFullscreen")
        var popupDiv = document.getElementById("popupDiv")

        if(current == "breathe"){
            popupDiv.innerHTML = `<div id="popupHeader">
                <h1 id="popupTitle">Breathe</h1>
                <h1 id="closePopup" onclick="closePopupFunc()">X</h1>
            </div>
            <div id="breatheContent">
                <div id="breatheSec1">
                    <h3>Guide to deep breathing</h3>
                    <p>                                    
                        ‘When learning how to breathe, begin by closing your eyes for a few minutes. Practice moving your breath. Keep your back straight. Begin with a deep, audible sigh, then quietly inhale and see how slow, deep, quiet and regular you can make your breathing and still have it feel perfectly comfortable. You should feel that you are getting enough air with no sense of not getting enough air. Do this for at least eight breaths, then open your eyes and breathe normally. This is a simple exercise but an effective one, and you should do it whenever you can.<br><br>
                        Next, pay attention to your exhalation. If you watch people breathe, you will see that most of them use effort to inhale but none to exhale. Exhalation is usually passive and takes less time than inhalation. When you breathe this way, you do not move nearly as much air in and out of your lungs as you can. The more air you move, the healthier you will be, because the functioning of all systems of the body depends on delivery of oxygen and removal of carbon dioxide. To get more air into your lungs, concentrate on getting more air out of them by attending to exhalation.<br><br>
                        At the end of a normal breath try squeezing more air out. You will be using your intercostal muscles to do this, and you will feel the effort as they compress the rib cage. Try to make your exhalation as long or even slightly longer than inhalation. Whenever you think of it, practice this technique of extending exhalation and developing your intercostal muscles.’ From <a href="https://www.drweil.com/health-wellness/body-mind-spirit/stress-anxiety/breathing-basics">Dr Weil's Breathing Exercises</a><br>
                    </p>
                </div>

                <div id="breatheSec2">
                    <img id="breathingGif" src="../Rgu Echo/assets/images/breathingGif.gif" alt="Breathing Guide Gif">
                </div>

            </div>`
        }

        else if(current == "hydrate"){
            popupDiv.innerHTML = `<div id="popupHeader">
            <h1 id="popupTitle">Hydrate</h1>
            <h1 id="closePopup" onclick="closePopupFunc()">X</h1>
        </div>
        <div id="breatheContent">
            <div id="breatheSec1">
                <h3>Guide to deep breathing</h3>
                <p>                                    
                    ‘When learning how to breathe, begin by closing your eyes for a few minutes. Practice moving your breath. Keep your back straight. Begin with a deep, audible sigh, then quietly inhale and see how slow, deep, quiet and regular you can make your breathing and still have it feel perfectly comfortable. You should feel that you are getting enough air with no sense of not getting enough air. Do this for at least eight breaths, then open your eyes and breathe normally. This is a simple exercise but an effective one, and you should do it whenever you can.<br><br>
                    Next, pay attention to your exhalation. If you watch people breathe, you will see that most of them use effort to inhale but none to exhale. Exhalation is usually passive and takes less time than inhalation. When you breathe this way, you do not move nearly as much air in and out of your lungs as you can. The more air you move, the healthier you will be, because the functioning of all systems of the body depends on delivery of oxygen and removal of carbon dioxide. To get more air into your lungs, concentrate on getting more air out of them by attending to exhalation.<br><br>
                    At the end of a normal breath try squeezing more air out. You will be using your intercostal muscles to do this, and you will feel the effort as they compress the rib cage. Try to make your exhalation as long or even slightly longer than inhalation. Whenever you think of it, practice this technique of extending exhalation and developing your intercostal muscles.’ From <a href="https://www.drweil.com/health-wellness/body-mind-spirit/stress-anxiety/breathing-basics">Dr Weil's Breathing Exercises</a><br>
                </p>
            </div>

            <div id="breatheSec2">
                <img id="breathingGif" src="../Rgu Echo/assets/images/breathingGif.gif" alt="Breathing Guide Gif">
            </div>

        </div>`
    }   
        

        function closePopupFunc(){
            console.log("close");
            popupFullscreen.style.display = "none";
            popupDiv.style.display = "none";  
        }

        var closePopupButton = document.getElementById("closePopup");
        closePopupButton.addEventListener('click', closePopupFunc)
        popupFullscreen.style.display = "block";
        popupDiv.style.display = "block";
    }
    var clickableElements = document.getElementsByClassName("quickFixAnchor");

    for (var i = 0; i < clickableElements.length; i++) {
        clickableElements[i].addEventListener('click', expandHelp);
    }
    

      

});



