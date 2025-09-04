var visitCountDisplay = document.getElementById("visitCount");

function updateVisitCountDisplay() {
    if (localStorage.getItem("thisWebsiteVisitCount") !== null) {
        var visitCount = JSON.parse(localStorage.getItem("thisWebsiteVisitCount"));
        if (visitCount === 1) {
            visitCountDisplay.innerText = "You've clicked this link " + localStorage.getItem("thisWebsiteVisitCount") + " time before. What are you looking for?";
        }
        else {
            visitCountDisplay.innerText = "You've clicked this link " + localStorage.getItem("thisWebsiteVisitCount") + " times before. What are you looking for?";
        }
    }

    else {
        visitCountDisplay.innerText = "You already know what this website is like. Why would you click this link?";
    }
}

function incrementVisitCount() {
    if (localStorage.getItem("thisWebsiteVisitCount") !== null) {
        var visitCount = JSON.parse(localStorage.getItem("thisWebsiteVisitCount"));
        localStorage.setItem("thisWebsiteVisitCount", visitCount + 1);
    }

    else {
        localStorage.setItem("thisWebsiteVisitCount", 1);
    }
}

updateVisitCountDisplay();

function runInBrowser() {
    incrementVisitCount();
    window.location.href = "/";
}
