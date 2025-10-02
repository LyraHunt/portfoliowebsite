class Drawing {
    name = "";
    desc = "";
    year = "";
    filename = "";

    sizes = []
}

//array of all drawings
var drawings = [];
var currentIndex = 0;

var mobileThreshold = 768;

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2024;
drawings[currentIndex].filename = "abstract-architecture";
drawings[currentIndex].defaultSize = 1800;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "turnip-head-ink-sketch";
drawings[currentIndex].defaultSize = 1823;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "snufkin-watercolor-spring-full";
drawings[currentIndex].defaultSize = 1265;
drawings[currentIndex].sizes = [
    {x: 1, y: 2, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2023;
drawings[currentIndex].filename = "spirit-forest";
drawings[currentIndex].defaultSize = 2263;
drawings[currentIndex].sizes = [
    {x: 2, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [600];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "blue-orchids-colored";
drawings[currentIndex].defaultSize = 1147;
drawings[currentIndex].sizes = [
    {x: 1, y: 2, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2023;
drawings[currentIndex].filename = "laputa-ink-sketch";
drawings[currentIndex].defaultSize = 1666;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "nge-eva-unit-1-ink-sketch";
drawings[currentIndex].defaultSize = 1414;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "nausicaa-ink-sketch-cropped";
drawings[currentIndex].defaultSize = 2088;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2023;
drawings[currentIndex].filename = "abstract-heart";
drawings[currentIndex].defaultSize = 2379;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2024;
drawings[currentIndex].filename = "ufo-doodle";
drawings[currentIndex].defaultSize = 1100;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "bingus-scan-cropped";
drawings[currentIndex].defaultSize = 2070;
drawings[currentIndex].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 3, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [600];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "crona-ink-sketch";
drawings[currentIndex].defaultSize = 1742;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "karkovchanka";
drawings[currentIndex].defaultSize = 2787;
drawings[currentIndex].sizes = [
    {x: 2, y: 1, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [600]

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2024;
drawings[currentIndex].filename = "charcoal-dog-portrait";
drawings[currentIndex].defaultSize = 2892;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "daffodil-cathedral";
drawings[currentIndex].defaultSize = 1633;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 3, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500];

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "cube-tunnel-sharpie";
drawings[currentIndex].defaultSize = 3294;
drawings[currentIndex].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [600]

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "abstract-monument-ink-sketch";
drawings[currentIndex].defaultSize = 1704;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0},
    {x: 2, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [500]

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2021;
drawings[currentIndex].filename = "growth-out-of-darkness";
drawings[currentIndex].defaultSize = 3290;
drawings[currentIndex].sizes = [
    {x: 2, y: 2, minWidth: 0},
    {x: 3, y: 2, minWidth: mobileThreshold}
]
drawings[currentIndex].altFilesizes = [600]



//minis
drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2025;
drawings[currentIndex].filename = "porco-rosso-doodle";
drawings[currentIndex].defaultSize = 1345;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
drawings[currentIndex].altFilesizes = [200]

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2023;
drawings[currentIndex].filename = "lantern-fly-doodle";
drawings[currentIndex].defaultSize = 675;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
drawings[currentIndex].altFilesizes = [200]

drawings.push(new Drawing);
currentIndex = drawings.length - 1;
drawings[currentIndex].year = 2023;
drawings[currentIndex].filename = "biplane-doodle";
drawings[currentIndex].defaultSize = 843;
drawings[currentIndex].sizes = [
    {x: 1, y: 1, minWidth: 0}
]
drawings[currentIndex].altFilesizes = [200]
