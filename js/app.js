function scrollFunction() {
    "use strict";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    } else {
    document.getElementById("myBtn").style.display = "none";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    "use strict";
    scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    "use strict";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//getting modal opening buttons
var modalBtns = document.querySelectorAll(".btn");

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");
        
        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest(".modal").style.display = "none";
    };
});

window.onclick = function(e){
    if (e.target.className === "modal"){
        e.target.style.display = "none";
    }
};
