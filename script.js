var elMsg = document.getElementById('feedback');  //declare variables
var elOne = document.getElementById('box1');


function feedBackOn1() {  //fill the feedback div with these words
    elMsg.innerHTML = "We must never forget the explorer’s spirit."
}

elOne.addEventListener('mouseover', feedBackOn1, false);  //when user hovers on the div


var elTwo = document.getElementById('box2');
elTwo.addEventListener('mouseover', feedBackOn2, false);

function feedBackOn2() {
    elMsg.innerHTML = "Life is just a bowl of cherries!"
}


var elThree = document.getElementById('box3');
elThree.addEventListener('mouseover', feedBackOn3, false);

function feedBackOn3() {
    elMsg.innerHTML = "Exploring new places is a great way to relax and clear your mind.";
}



