'use strict';

function guessAge(){
    const name=document.getElementById('nameInput').value.trim();

    if(!name){
        alert("Enter your name");
        return;
    }

    //Guess age between 1, 80
    const age=Math.floor(Math.random() * 70) + 0;

    //Choes a accidentely reaction
    const reaction=[
        "Your age is",
        "My guess about your age is",
        "Your age",
        "I think you are",
        "You are",
    ];

    const randomReaction=reaction[Math.floor(Math.random() * reaction.length)];

    //Result
    const resultElement=document.getElementById('result');
    resultElement.innerHTML=`${randomReaction} <span style="color:
    #2c3e50;"> ${age} </span>
    <small style="color:#06a015;"></small>
    `;

    //Hidden guessBtn & show againBtn
    document.querySelector('button[onclick="guessAge()"]').classList.add('hidden');
    document.getElementById('againBtn').classList.remove('hidden');
}

function resetForm(){

        //Remove input & result
        document.getElementById('nameInput').value='';
        document.getElementById('result').innerHTML='';

        //Show guessBtn & hidden againBtn
        document.querySelector('button[onclick="guessAge()"]').classList.remove('hidden');
        document.getElementById('againBtn').classList.add('hidden');
}






