// ink UI stuff
function applyFancyBordersProjectTitle() {
    let elementsWithClass = document.getElementsByClassName("ink-border-project-title");
    if (elementsWithClass.length > 0) {
        for (let j = 0; j < elementsWithClass.length; j++) {
            // solid background
            var solidBackground = document.createElement("div");
            solidBackground.classList.add("ink-border-solid-background");

            elementsWithClass[j].appendChild(solidBackground);

            // hatch background
            var hatchBackground = document.createElement("div");
            hatchBackground.classList.add("ink-border-hatch-background");

            elementsWithClass[j].appendChild(hatchBackground);

            // shadow background
            var shadowBackground = document.createElement("div");
            shadowBackground.classList.add("ink-border-shadow-background");

            elementsWithClass[j].appendChild(shadowBackground);

            // left border
            var leftBorder = document.createElement("div");
            leftBorder.classList.add("ink-border-thin-left");

            elementsWithClass[j].appendChild(leftBorder);

            // right border
            var rightBorder = document.createElement("div");
            rightBorder.classList.add("ink-border-thin-right");

            elementsWithClass[j].appendChild(rightBorder);

            // top border
            var topBorder = document.createElement("div");
            topBorder.classList.add("ink-border-project-title-top-back");

            var topBorderCenter = document.createElement("div");
            topBorderCenter.classList.add("ink-border-project-title-top-center");
            topBorder.appendChild(topBorderCenter);

            var topBorderEdgeLeft = document.createElement("div");
            topBorderEdgeLeft.classList.add("ink-border-project-title-top-edge");
            topBorder.appendChild(topBorderEdgeLeft);

            var topBorderEdgeRight = document.createElement("div");
            topBorderEdgeRight.classList.add("ink-border-project-title-top-edge-flip");
            topBorder.appendChild(topBorderEdgeRight);

            elementsWithClass[j].appendChild(topBorder);

            // bottom border
            var bottomBorder = document.createElement("div");
            bottomBorder.classList.add("ink-border-project-title-bottom-back");

            var bottomBorderEdgeLeft = document.createElement("div");
            bottomBorderEdgeLeft.classList.add("ink-border-project-title-bottom-edge");
            bottomBorder.appendChild(bottomBorderEdgeLeft);

            var bottomBorderEdgeRight = document.createElement("div");
            bottomBorderEdgeRight.classList.add("ink-border-project-title-bottom-edge-flip");
            bottomBorder.appendChild(bottomBorderEdgeRight);

            elementsWithClass[j].appendChild(bottomBorder);
        }
    }
}

function applyFancyBorders() {
    applyFancyBordersProjectTitle();
}

applyFancyBorders();