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
            <div class="fixContent">
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
        <div class="fixContent">
            <div id="hydrateSec1">
                <p>    
                    The link between dehydration and stress is cyclical: When you're dehydrated your body doesn't function as well as it should, which can lead to stress. When you're under stress, your heart rate may rise, and your breathing may grow heavier, leading to a quicker loss of fluid within the body, which leads to dehydration.
                    Within the academic sector, there appears to be a link between hydration and learning, and succeeding, here's some research:
                    <ul>
                        <li><a href="https://eric.ed.gov/?id=EJ1013601">“Students who brought water to the exam achieved better grades than students who did not"</a></li> 
                        <li><a href="http://www.waterschools.eu/effects-of-drinking-water-on-learning">The effects of drinking water on learning - Water Schools</a></li> 
                        <li><a href="https://www-cambridge-org.ezproxy.rgu.ac.uk/core/journals/british-journal-of-nutrition/article/effects-of-hydration-status-on-cognitive-performance-and-mood/1210B6BE585E03C71A299C52B51B22F7">"Hydration state affects cognitive ability and mood”</a></li>      
                        <li><a href="https://solaramentalhealth.com/can-drinking-enough-water-help-my-depression-and-anxiety/">Water, Depression & Anxiety</a></li>                          
                        <li><a href="https://www.realsimple.com/health/mind-mood/stress/hydration-for-stress">Not Drinking Enough Water Is One of the Worst Things You Can Do When Stressed—Here's Why</a></li>
                </p>
            </div>

            <div id="hydrateSec2">
                 <iframe id="hydrateVideo" width="560" height="315" src="https://www.youtube.com/embed/QkmVhWboClY?si=9979d5dGc44YB78_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></iframe>   
            </div>
        </div>`
        }   

        else if(current == "move"){
            popupDiv.innerHTML = `<div id="popupHeader">
            <h1 id="popupTitle">Move</h1>
            <h1 id="closePopup" onclick="closePopupFunc()">X</h1>
        </div>
        <div class="fixContent">
            <div id="hydrateSec1">
                <p>    
                    A lot of the time a walk is very effective to alleviate stress and pressure, and take your mind off things, even if it's just for a few minutes. 
                    Have a look at the following research on walking and mental health, and some walking routes around campus you can try out:
                    <ul>
                        <li><a href="https://executiveeducation.wharton.upenn.edu/thought-leadership/wharton-at-work/2018/09/decision-making-and-problem-solving-by-walking/">Walking can help with decision making and problem solving</a></li> 
                        <li><a href="https://www.ted.com/talks/marily_oppezzo_want_to_be_more_creative_go_for_a_walk">Want to be more creative? Go for a walk</a></li> 
                        <li><a href="https://doi.org/10.1176/appi.ajp.2017.16111223">Exercise and the Prevention of Depression: Results of the HUNT Cohort Study</a></li>      
                        <li><a href="https://pubmed.ncbi.nlm.nih.gov/27514246/">Training fast or slow? Exercise for depression: A randomized controlled trial</a></li>                          
                </p>
            </div>

            <div id="hydrateSec2">

            </div>
        </div>`
        }   

        else if(current == "rest"){
            popupDiv.innerHTML = `<div id="popupHeader">
            <h1 id="popupTitle">Rest</h1>
            <h1 id="closePopup" onclick="closePopupFunc()">X</h1>
        </div>
        <div class="fixContent">
            <div id="restSec1">
                <p>    
                    A good sleep can make the difference between a good day and a bad day. It's easier said than done, but here's some resources to help you get a better sleep, and highlight the importance of good rest: 
                    <ul>
                        <li><a href="https://learningcenter.unc.edu/tips-and-tools/sleeping-to-succeed/">"Sleep promotes cognition and memory, facilitates learning, recharges our mental and physical batteries, and generally helps us make the most out of our days"</a></li> 
                        <li><a href="https://engineering.mit.edu/engage/ask-an-engineer/is-sleep-necessary/">How does sleep matter?</a></li> 
                        <li><a href="https://www.researchgate.net/publication/316420767_Sleep_deprivation_in_Final_year_Engineering_students">Sleep Deprivation in Final Year Engineering Students</a></li>      
                        <li><a href="https://ijrti.org/papers/IJRTI2102009.pdf>Effect of Sleep Deprivation on Anxiety and Quality Of Life of Engineering and Medical Students: A Comparative Study</a></li>          
                        <li><a href="https://oa.upm.es/65069/1/INVE_MEM_2019_324223.pdf">Need for Sleep: the Impact of a Night of Sleep Deprivation on Novice Developers’ Performance</a></li>                
                </p>
            </div>

            <div id="restSec2">
                <iframe id="restVideo" width="560" height="315" src="https://www.youtube.com/embed/gedoSfZvBgE?si=jvST7nOSdyDszNWS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
            </div>
        </div>`
        }   
        

        function closePopupFunc(){
            popupFullscreen.style.display = "none";
            popupDiv.style.display = "none";  
        }

        document.addEventListener('click', closePopupFuncCheck);
        var closePopupButton = document.getElementById("closePopup");
        closePopupButton.addEventListener('click', closePopupFunc);
        popupFullscreen.style.display = "block";
        popupDiv.style.display = "block";
    }
    var clickableElements = document.getElementsByClassName("quickFixAnchor");

    for (var i = 0; i < clickableElements.length; i++) {
        clickableElements[i].addEventListener('click', expandHelp);
    }


    

      

});



