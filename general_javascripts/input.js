var InputJS = {
    mouseLIsDown: false,
    mouseRIsDown: false,

    mouseX: 0,
    mouseY: 0,

    mouseDown(val) {
        if (val === 0) {
            this.mouseLIsDown = true;
        }
        else if (val === 2) {
            this.mouseRIsDown = true;
        }
    },

    mouseUp(val) {
        if (val === 0) {
            this.mouseLIsDown = false;
        }
        else if (val === 2) {
            this.mouseRIsDown = false;
        }
    },

    //input map of each input code
    inputMap: {
        w: false, //w key
        s: false, //s key
        a: false, //a key
        d: false, //d key

        UpArrow: false, //up arrow key
        DownArrow: false, //down arrow key
        LeftArrow: false, //left arrow key
        RightArrow: false, //right arrow key

        " ": false //spacebar
    },

    updateInputMap(e) {
        e = e || event; // to deal with IE
        InputJS.inputMap[e.key] = (e.type === 'keydown');

        if (e.type == 'keydown') {
            InputJS.inputEventBus.publish("keyInput", e.key);
        }
    },

    handleInput(e) {
        e = e || event; // to deal with IE
        
        // send subscription events
        if (e.type == 'keydown') {
            this.inputEventBus.publish("keyInput", e.key);
        }
    },

    inputEventBus: new EventBus
}

//direct keyboard input
onkeydown = onkeyup = InputJS.updateInputMap;

//direct mouse input
onmousedown = InputJS.mouseDown;
onmouseup = InputJS.mouseUp;

(function () {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        //event = event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        };

        /*if (bigSide === 'x') {
            mouseX = (event.pageX / screenScale) / scaleFactor - ((canX / 2)/screenScale) - (sideOffset/screenScale);
            mouseY = (event.pageY / screenScale) / scaleFactor - ((canY / 2)/screenScale);
            /*mouseX = (event.pageX * screenScale) / scaleFactor - (canX / 2) - sideOffset;
            mouseY = (event.pageY * screenScale) / scaleFactor - (canY / 2);
        }
        else {
            mouseX = (event.pageX / screenScale) / scaleFactor - ((canX / 2)/screenScale);
            mouseY = (event.pageY / screenScale) / scaleFactor - ((canY / 2)/screenScale) - (sideOffset/screenScale);
            /*mouseX = (event.pageX / screenScale) / scaleFactor - (canX / 2);
            mouseY = ((event.pageY / screenScale) / scaleFactor - (canY / 2)) - sideOffset;
        }*/
    };
})();
