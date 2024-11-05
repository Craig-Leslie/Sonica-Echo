document.addEventListener('DOMContentLoaded', function() {

    function scroll(){
        console.log("test");
        document.getElementById("footerMain").classList.add("borderChange")

        document.getElementById("footerMain").scrollIntoView({behavior:"smooth"})

        setTimeout(function() {document.getElementById("footerMain").classList.remove("borderChange")}, 3000)
        
        
    }

    document.getElementById('clickable').addEventListener('click', scroll)

});




