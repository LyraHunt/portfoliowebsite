// helper function to add divs with a specific class
function addDivWithClass(targetElement, className) {
    var newElement = document.createElement("div");
    newElement.classList.add(className);

    targetElement.appendChild(newElement);
    return newElement;
}



// ink UI stuff
function applyInkBordersProjectTitle() {
    let elementsWithClass = document.getElementsByClassName("ink-border-project-title");
    if (elementsWithClass.length > 0) {
        for (let j = 0; j < elementsWithClass.length; j++) {
            // background
            addDivWithClass(elementsWithClass[j], "ink-border-solid-background");
            addDivWithClass(elementsWithClass[j], "ink-border-hatch-background");
            addDivWithClass(elementsWithClass[j], "ink-border-shadow-background");

            // borders on sides
            addDivWithClass(elementsWithClass[j], "ink-border-thin-left");
            addDivWithClass(elementsWithClass[j], "ink-border-thin-right");

            // top border
            var topBorder = document.createElement("div");
            topBorder.classList.add("ink-border-project-title-top-back");

            addDivWithClass(topBorder, "ink-border-project-title-top-center");
            addDivWithClass(topBorder, "ink-border-project-title-top-edge");
            addDivWithClass(topBorder, "ink-border-project-title-top-edge-flip");

            elementsWithClass[j].appendChild(topBorder);

            // bottom border
            var bottomBorder = document.createElement("div");
            bottomBorder.classList.add("ink-border-project-title-bottom-back");

            addDivWithClass(bottomBorder, "ink-border-project-title-bottom-edge");
            addDivWithClass(bottomBorder, "ink-border-project-title-bottom-edge-flip");

            elementsWithClass[j].appendChild(bottomBorder);
        }
    }
}

function applyInkBordersSimple() {
    let elementsWithClass = document.getElementsByClassName("ink-border-simple");
    if (elementsWithClass.length > 0) {
        for (let j = 0; j < elementsWithClass.length; j++) {
            // background
            //addDivWithClass(elementsWithClass[j], "ink-border-solid-background").style.backgroundColor = "var(--background-1)";
            addDivWithClass(elementsWithClass[j], "ink-border-hatch-background").style.filter = "var(--dark-mode-invert-small)";
            addDivWithClass(elementsWithClass[j], "ink-border-shadow-background").style.color = "var(--body-background)";

            // borders on sides
            addDivWithClass(elementsWithClass[j], "ink-border-thin-top");
            addDivWithClass(elementsWithClass[j], "ink-border-thin-bottom");
            addDivWithClass(elementsWithClass[j], "ink-border-thin-left");
            addDivWithClass(elementsWithClass[j], "ink-border-thin-right");
        }
    }
}

function applyInkBordersHeader() {
    let elementsWithClass = document.getElementsByClassName("ink-border-header");
    if (elementsWithClass.length > 0) {
        for (let j = 0; j < elementsWithClass.length; j++) {
            // background
            addDivWithClass(elementsWithClass[j], "ink-border-solid-background");
            //addDivWithClass(elementsWithClass[j], "ink-border-hatch-background");
            //addDivWithClass(elementsWithClass[j], "ink-border-shadow-background");

            // bottom border
            addDivWithClass(elementsWithClass[j], "ink-border-thin-bottom");
            //addDivWithClass(elementsWithClass[j], "ink-border-hatch-bottom")
            //addDivWithClass(addDivWithClass(elementsWithClass[j], "ink-border-hatch-bottom"), "ink-border-project-title-top-center");
        }
    }
}

function applyInkBorders() {
    applyInkBordersProjectTitle();
    applyInkBordersSimple();
    applyInkBordersHeader();
}

applyInkBorders();