class Drawing {
    name = "";
    desc = "";
    year = "";
    filename = "";

    sizes = []
}

//array of all drawings
var drawings = [];
var current_index = 0;

var mobileThreshold = 768;

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2024;
drawings[current_index].filename = "abstract-architecture";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2024;
drawings[current_index].filename = "turnip-head-ink-sketch";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2022;
drawings[current_index].filename = "snufkin-watercolor-spring-full";
drawings[current_index].sizes = [
    {x: 1, y: 2, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "spirit-forest";
drawings[current_index].sizes = [
    {x: 2, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2025;
drawings[current_index].filename = "blue-orchids-colored";
drawings[current_index].sizes = [
    {x: 1, y: 2, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "laputa-ink-sketch";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "nge-eva-unit-1-ink-sketch";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "nausicaa-ink-sketch-cropped";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "abstract-heart";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "bingus-scan-cropped";
drawings[current_index].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 3, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "crona-ink-sketch";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2024;
drawings[current_index].filename = "charcoal-dog-portrait";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "cube-tunnel-sharpie";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "karkovchanka";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "abstract-monument-ink-sketch";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]

/*drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2025;
drawings[current_index].filename = "repeating-eight-fold-final-wheel-small";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]*/

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2021;
drawings[current_index].filename = "growth-out-of-darkness";
drawings[current_index].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]



//minis
drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2025;
drawings[current_index].filename = "porco-rosso-doodle";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "lantern-fly-doodle";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0}
]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "biplane-doodle";
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
