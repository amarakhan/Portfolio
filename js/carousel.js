const projectTitles = [
    "FLOAT YOUR BOAT", 
    "GUIDED HIKES", 
    "SHOPPING LIST", 
    "SOUND SQUARES", 
    "SPACE GAME"
];
const projectDescriptions = [
    "Full-stack application using Node.js, Express.js, and MongoDB to store information about boat rentals and events.",
    "Marketing site for hiking trails and outdoor guides.",
    "Shopping list built with HTML, Foundation, and JavaScript.",
    "A sound and animation website that uses the Paper.js and Howler.js libraries. Mouse and touch events add rotating images and prompt sound effects.",
    "A JavaScript game that implements Google’s Firebase for authentication and storing player position."
];
const gitLinks = [
    'https://github.com/amarakhan/PartyBoats',
    'https://github.com/amarakhan/GuidedHikes',
    'https://github.com/amarakhan/SimpleShoppingList',
    'https://github.com/amarakhan/SoundSquares',
    'https://github.com/amarakhan/SpaceGameV2'
];
const siteLinks = [
    'https://serene-bayou-45604.herokuapp.com/',
    'https://amarakhan.github.io/GuidedHikes/',
    'https://amarakhan.github.io/SimpleShoppingList/',
    'https://amarakhan.github.io/SoundSquares/',
    'https://amarakhan.github.io/SpaceGameV2/'
];
const projSources = [
    "images/float-your-boat.png",
    "images/guided-hikes.png",
    "images/shopping-list.png",
    "images/sound-squares.png",
    "images/space-game.png"
];

var projectIndex = 0;

// selecting dom elems
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

function rotateProjectsLeft(){
    switch(projectIndex){
        case 0: //float your boat
            projectIndex = 4;
            break;
        case 1: //guided hikes
            projectIndex -= 1;
            break;
        case 2: //shopping list
            projectIndex -= 1;
            break;
        case 3: //sound squares
            projectIndex -=1 ;
            break;
        case 4: //space game
            projectIndex -=1 ;
            break;
    }
}

function rotateProjectsRight(){
    switch(projectIndex){
        case 0: //float your boat
            projectIndex+=1;
            break;
        case 1: //guided hikes
            projectIndex+=1;
            break;
        case 2: //shopping list
            projectIndex+=1;
            break;
        case 3: //sound squares
            projectIndex+=1;
            break;
        case 4: //space game
            projectIndex=0;
            break;
    }
}

leftArrow.addEventListener("click", function(){
    rotateProjectsLeft();
    document.getElementById("p-img").src = projSources[projectIndex];
    document.querySelector(".p-link").href = siteLinks[projectIndex];
    document.querySelector(".g-link").href = gitLinks[projectIndex];
    document.querySelector(".project-title").textContent = projectTitles[projectIndex];
    document.querySelector(".project-text").textContent = projectDescriptions[projectIndex];
   
});

rightArrow.addEventListener("click", function(){
    rotateProjectsRight();
    document.getElementById("p-img").src = projSources[projectIndex];
    document.querySelector(".p-link").href = siteLinks[projectIndex];
    document.querySelector(".g-link").href = gitLinks[projectIndex];
    document.querySelector(".project-title").textContent = projectTitles[projectIndex];
    document.querySelector(".project-text").textContent = projectDescriptions[projectIndex];
});
