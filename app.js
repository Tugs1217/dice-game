// toglogchiin eeljiig hadgalah huwisagch


// Shooni ali talaaraa buusniig hadgalah
//Shoonii ali neg talaaraa buusniig hadgalah huwisagch heregtei 1-6  gesen утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.



//  <div class="player-name" id="score-0" >43</div> 

// globalThis.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML =  dice;

// document.querySelector(".dice").style.display = 'none'; // ynzan buriin

// document.getElementById("score-0").textContent = 0;
// Шоог шидсэн function

var activePlayer = 0;
// Toglogchdiin tsugluulsan onoog hadgalah huwisagch
var score = [0, 0]
// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore = 0;


document.querySelector(".button").addEventListener("click", function(){
    var  diceNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").src = 'images/dice-' + diceNumber + '.png';

    if(diceNumber !== 1){ 
        roundScore = roundScore + diceNumber;
        document.getElementById("current-"+ activePlayer).textContent = roundScore;  
        a = roundScore;
    } else { 
        b = a;
        // console.log(a); 
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
        document.getElementById("current-"+ activePlayer).textContent = 0; 
        // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);  
        if(activePlayer === 0) { 
            score[0] = score[0] + a;
            console.log(score[0]);
            document.getElementById("score-0").textContent = score[0];
            activePlayer = 1;
            roundScore = 0;
        } else {
            score[1] = score[1] + a;
            console.log(score[1]);
            document.getElementById("score-1").textContent = score[1]; 
            activePlayer = 0;
            roundScore = 0;
    }}
});

    document.querySelector(".Button2").addEventListener("click", function(){
    
        if(activePlayer === 0) { 
            score[0] = score[0] + a;
            console.log(score[0]);
            document.getElementById("score-0").textContent = score[0];
            document.getElementById("current-"+ activePlayer).textContent = 0; 
            activePlayer = 1;
        } else {
            score[1] = score[1] + a;
            console.log(score[1]);
            document.getElementById("score-1").textContent = score[1]; 
            document.getElementById("current-"+ activePlayer).textContent = 0; 
            activePlayer = 0;
            
        }
    });





// shiljuulne
// document.getElementById(score-0).textContent = 
// if( activePlayer === 0) { 
//     roundScore = roundScore + diceNumber;
//     document.getElementById("score-0").textContent = roundScore;}
// else { document.getElementById("score-1").textContent = roundScore; }

// if( activePlayer === 0) { 
//     roundScore = roundScore + diceNumber;
//     document.getElementById("score-0").textContent = roundScore;}
// else { document.getElementById("score-1").textContent = roundScore; } 
// console.log("Шоо: " + diceNumber);    

// function hello(){
//      console.log("Сайн уу");
// }

// function mendchileh(aaa) {
//     aaa(); 
// }

// mendchileh(hello);

// callback process  