const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message=document.querySelector(".message");
let click = false;
let score=0;

button.addEventListener("click", function (){
    if(!click){
        click=true;
        button.innerHTML="Check Combo";
        gameArea.innerHTML="";
        maker();
        message.innerHTML="Guess the Combo";
        score=0;
        
    }else{
        let winCondition=0;
        score++;
        message.innerHTML=`Guesses ${score}`;
        let answer=document.querySelectorAll(".numb");
        for(let i=0; i<answer.length; i++){
            if(answer[i].value == answer[i].correct){
                answer[i].style.backgroundColor="green";
                answer[i].style.color="white";
                winCondition++
            }else {
            let color= (answer[i].value < answer[i].correct) ? "blue": "red";
            answer[i].style.backgroundColor=color;
            }if(winCondition==answer.length){
                endGame();
            }
        }
    }
})

function endGame(){
    message.innerHTML=`You won the game with ${score} guesses`;
    click = false;
    button.innerHTML="Restart Game";
}

function maker(){
    for(let x =0; x<4; x++){
        let el=document.createElement("input");
        el.setAttribute("type", "number");
        gameArea.appendChild(el);
        el.order=x;
        el.min=0;
        el.max=9;
        el.size=1;
        el.correct=Math.floor(Math.random()*10);
        el.value=0;
        el.classList.add("numb");
    }
}