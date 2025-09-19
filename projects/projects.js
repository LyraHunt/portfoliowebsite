class Creation {
    name = "";
    year = "";
    url = "";
    thumbnailUrl = "";

    typeTags = {}
}

//array of all creations
var creations = [];
var current_index = 0;

//verlet (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "Verlet";
creations[current_index].year = 2022;
creations[current_index].url = InternalLinks["projects-verletenginedesc"];
creations[current_index].thumbnailUrl = "/images/verlettest.png";
creations[current_index].typeTags = {
    mobileFriendly: true
}

//growth out of darkness (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "AlchemiKitty";
creations[current_index].year = 2024;
creations[current_index].url = InternalLinks["projects-alchemikittydesc"];
creations[current_index].thumbnailUrl = "/images/alchemikitty.png";
creations[current_index].typeTags = {
    mobileFriendly: false
}

//capstone (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "Senior Capstone";
creations[current_index].year = 2024;
creations[current_index].url = InternalLinks["projects-capstonegamedesc"];
creations[current_index].thumbnailUrl = "/images/capstone-game-icon-circle-black.png";
creations[current_index].typeTags = {
    mobileFriendly: false
}

//through the grapevine (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "Through The Grapevine";
creations[current_index].year = 2022;
creations[current_index].url = InternalLinks["projects-throughthegrapevinedesc"];
creations[current_index].thumbnailUrl = "/projects/throughthegrapevine/images/Art-Tiles-3-AAC-Finished.png";
creations[current_index].typeTags = {
    mobileFriendly: true
}

//through the grapevine (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "This Website";
creations[current_index].year = 2025;
creations[current_index].url = InternalLinks["projects-thiswebsitedesc"];
creations[current_index].thumbnailUrl = "/images/thiswebsite.png";
creations[current_index].typeTags = {
    mobileFriendly: true
}

//through the grapevine (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "A Windy Day";
creations[current_index].year = 2023;
creations[current_index].url = InternalLinks["projects-awindydaydesc"];
creations[current_index].thumbnailUrl = "/images/awindyday.png";
creations[current_index].typeTags = {
    mobileFriendly: false
}

//pen simulation (creation)
creations.push(new Creation);
current_index = creations.length - 1;
creations[current_index].name = "Pen & Ink Simulation";
creations[current_index].year = 2024;
creations[current_index].url = InternalLinks["projects-penandinksimulationdesc"];
creations[current_index].thumbnailUrl = "/projects/penandinksimulation/penandinksim1.png";
creations[current_index].typeTags = {
    mobileFriendly: true
}

function sortCreations(a, b) {
  //first, sort by year
    if (a.year < b.year){
        return 1;
    }
    if (a.year > b.year){
        return -1;
    }

    //if year is the same, sort by name
    return a.name.localeCompare(b.name);
}

creations.sort(sortCreations);