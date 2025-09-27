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
drawings[current_index].defaultSize = 1800;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2024;
drawings[current_index].filename = "turnip-head-ink-sketch";
drawings[current_index].defaultSize = 1823;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2022;
drawings[current_index].filename = "snufkin-watercolor-spring-full";
drawings[current_index].defaultSize = 1265;
drawings[current_index].sizes = [
    {x: 1, y: 2, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "spirit-forest";
drawings[current_index].defaultSize = 2263;
drawings[current_index].sizes = [
    {x: 2, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [600];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2025;
drawings[current_index].filename = "blue-orchids-colored";
drawings[current_index].defaultSize = 1147;
drawings[current_index].sizes = [
    {x: 1, y: 2, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "laputa-ink-sketch";
drawings[current_index].defaultSize = 1666;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "nge-eva-unit-1-ink-sketch";
drawings[current_index].defaultSize = 1414;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "nausicaa-ink-sketch-cropped";
drawings[current_index].defaultSize = 2088;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "abstract-heart";
drawings[current_index].defaultSize = 2379;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "bingus-scan-cropped";
drawings[current_index].defaultSize = 2070;
drawings[current_index].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 3, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [600];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "crona-ink-sketch";
drawings[current_index].defaultSize = 1742;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2024;
drawings[current_index].filename = "charcoal-dog-portrait";
drawings[current_index].defaultSize = 2892;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2025;
drawings[current_index].filename = "daffodil-cathedral";
drawings[current_index].defaultSize = 1633;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500];

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "cube-tunnel-sharpie";
drawings[current_index].defaultSize = 3294;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [600]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "karkovchanka";
drawings[current_index].defaultSize = 2787;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [600]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "abstract-monument-ink-sketch";
drawings[current_index].defaultSize = 1704;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [500]

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
drawings[current_index].defaultSize = 3290;
drawings[current_index].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[current_index].altFilesizes = [600]



//minis
drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2025;
drawings[current_index].filename = "porco-rosso-doodle";
drawings[current_index].defaultSize = 1345;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
drawings[current_index].altFilesizes = [200]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "lantern-fly-doodle";
drawings[current_index].defaultSize = 675;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
drawings[current_index].altFilesizes = [200]

drawings.push(new Drawing);
current_index = drawings.length - 1;
drawings[current_index].year = 2023;
drawings[current_index].filename = "biplane-doodle";
drawings[current_index].defaultSize = 843;
drawings[current_index].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
drawings[current_index].altFilesizes = [200]
