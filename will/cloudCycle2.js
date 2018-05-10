// List of images to cycle through
const cloudArray = [];
for (let i = 0; i < 96 ; i++) {
  const integerLength = String(i).length;
  const numberOfZeros = 5 - integerLength;
  let stringToInsert = "";
  const zero = "0";
  for (let j = 0; j < numberOfZeros; j++) {
    stringToInsert = stringToInsert.concat(zero);
  }
  stringToInsert = stringToInsert.concat(String(i));
  const url = `./images/3D_Cloud_movie/_movie${stringToInsert}.png`
  cloudArray.push(url);
}
for (k = 0; k < 20 ; k++) {
  cloudArray.push("./images/3D_Cloud_movie/_movie00095.png");
}

let index2 = 0;

function changeClouds2() {
    index2++;
    if (index2 === cloudArray.length) {
      index2 = 0;
    }
    let image2 = document.getElementById('cloud2');
    image2.src = cloudArray[index2];
}
setInterval(function(){changeClouds2()}, 150);
