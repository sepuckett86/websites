// List of images to cycle through

const cloudList = [
    "./images/pic0.jpg",
    "./images/pic1.jpg",
    "./images/pic2.jpg",
    "./images/pic3.jpg",
    "./images/pic4.jpg"
];

let index = 0;

function changeClouds() {

    index++;
    if (index == cloudList.length) {
      index = 0;
    }
    let image = document.getElementById('cloud');
    image.src = cloudList[index];
}
setInterval(function(){changeClouds()}, 1000);
