
function toggleText(id) {
    var span = document.getElementById(id);
    if (span.style.display == "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            const yOffset = -70; 
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});


document.addEventListener('DOMContentLoaded', function (event) {
    const dataText = ["Clotilde Fauchille, à la recherche d'un poste de développeur fullstack/frontend."];

    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 85);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i]?.length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});


function incrementViewCount() {
    if (localStorage.getItem("viewCount") === null) {
        localStorage.setItem("viewCount", "1");
    } else {
        var currentCount = parseInt(localStorage.getItem("viewCount"));
        localStorage.setItem("viewCount", (currentCount + 1).toString());
    }
}

function displayViewCount() {
    var viewCountElement = document.getElementById("viewCount");
    var viewCount = localStorage.getItem("viewCount") || "0";
    viewCountElement.textContent = viewCount;
}

incrementViewCount();

displayViewCount();
