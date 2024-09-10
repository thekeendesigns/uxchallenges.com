const btn = document.querySelector("button"); 
const refreshBtn = document.getElementById("refresh");
const undoBtn = document.getElementById("undo");

var box = document.getElementById("challengeBox");
var title = document.getElementById("title"); 
var subTitle = document.getElementById("subTitle");
var undoArr = []; // empty array to build a memory

function generate() { //activates generate feature
    fetch('js/challenges.json') // calls the json file
    .then(response => response.json())
    .then(json => {
        box.style.visibility = 'visible'; // shows box, but hides it initially
        
        let current = json.challenges[Math.floor(Math.random() * json.challenges.length)]; // calls a random array #

        title.innerHTML = current.title; // displays title
        subTitle.innerHTML = current.subTitle; // displays subtitle

        undoArr.push(current); // add to array memory
        console.log(undoArr);

        if (undoArr.length >= 1) { // disables undo button when there is no more memory left
            undoBtn.style.opacity = '1';
            undoBtn.style.pointerEvents = 'auto';
        }
    });
}

function undo() {
        let lastChallenge = undoArr.at(-2); // acceses the second last array
        undoArr.pop(); // reduces memory
        
        if (undoArr.length == 0) { //disables undo button
            title.innerHTML = "Generate a new challenge"; // displays title
            subTitle.innerHTML = "You've reached the end of all the previous challenges you've generated."; // displays title
            undoBtn.style.opacity = '0.5';
            undoBtn.style.pointerEvents = 'none';
        }
       
        title.innerHTML = lastChallenge.title; // displays title
        subTitle.innerHTML = lastChallenge.subTitle; // displays subtitle
        console.log(undoArr);
}





