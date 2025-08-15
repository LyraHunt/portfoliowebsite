var visitCountDisplay = document.getElementById("visitCount");

function incrementVisitCount() {
    if (localStorage.getItem("thisWebsiteVisitCount") !== null) {
        var visitCount = JSON.parse(localStorage.getItem("thisWebsiteVisitCount"));
        if (visitCount === 1) {
            visitCountDisplay.innerText = "You've visited this page " + localStorage.getItem("thisWebsiteVisitCount") + " time before. What are you looking for?";
        }
        else {
            visitCountDisplay.innerText = "You've visited this page " + localStorage.getItem("thisWebsiteVisitCount") + " times before. What are you looking for?";
        }
        localStorage.setItem("thisWebsiteVisitCount", visitCount + 1);
    }

    else {
        localStorage.setItem("thisWebsiteVisitCount", 1);
        visitCountDisplay.innerText = "You already know what this website is like. Why would you come here?";
    }
}

incrementVisitCount();
