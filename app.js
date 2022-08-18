// toglogchiin eeljiig hadgalah huwisagch

var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huwisagch

var score = [0, 0]

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore = 0;

// Shooni ali talaaraa buusniig hadgalah
//Shoonii ali neg talaaraa buusniig hadgalah huwisagch heregtei 1-6  gesen утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.



//  <div class="player-name" id="score-0" >43</div> 

// globalThis.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML =  dice;

// document.querySelector(".dice").style.display = 'none'; // ynzan buriin

// document.getElementById("score-0").textContent = 0;

document.querySelector(".button").addEventListener("click", function(){
    var  diceNumber = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dice").src = 'images/dice-' + diceNumber + ".png"; 

    // alert("Шоо буулаа:" + diceNumber);
});

// console.log("Шоо: " + diceNumber);    

// function hello(){
//      console.log("Сайн уу");
// }

// function mendchileh(aaa) {
//     aaa(); 
// }

// mendchileh(hello);

// callback process  